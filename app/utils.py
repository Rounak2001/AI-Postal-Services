import re
import requests
from rapidfuzz import process
import spacy

# Load spaCy model
nlp = spacy.load("en_core_web_sm")

# Normalize receiver address
def normalize_address(address):
    doc = nlp(address)
    tokens = [token.text for token in doc if not token.is_stop and not token.is_punct]
    return " ".join(tokens).strip()

# Extract pin code using regex
def extract_pincode(address):
    match = re.search(r'\b\d{6}\b', address)
    return match.group() if match else None

# Call Postal API for pincode validation
def get_postal_data(pincode):
    url = f"https://api.postalpincode.in/pincode/{pincode}"
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        if data[0]["Status"] == "Success":
            return data[0]["PostOffice"]

# Validate address using Postal API response

def validate_address_from_postal_api(normalized_address, pincode):
    """
    Validate the receiver's address using the Postal API response.

    Args:
        normalized_address (str): The cleaned receiver address (without pin code).
        pincode (str): The extracted pin code.

    Returns:
        dict: Validation result with state, district, office name, and is_valid status.
    """
    # Fetch postal data from the API
    postal_data = get_postal_data(pincode)  # This calls your Postal API logic
    if not postal_data:
        return {"is_valid": False, "error": "Invalid pincode or no data found."}
    
    normalized_address = normalized_address.lower()

    # Extract state and district from postal data
    api_state = postal_data[0].get("State", "").lower()
    api_district = postal_data[0].get("District", "").lower()

    # Match state using the full normalized address
    state_match_result = process.extractOne(api_state, [normalized_address], score_cutoff=80)
    if not state_match_result:
        return {"is_valid": False, "error": "State does not match."}
    state_match, state_score, _ = state_match_result
    normalized_address = normalized_address.replace(api_state, "").strip()

    # Match district using the full normalized address
    district_match_result = process.extractOne(api_district, [normalized_address], score_cutoff=80)
    if not district_match_result:
        return {"is_valid": False, "error": "District does not match."}
    district_match, district_score, _ = district_match_result
    normalized_address = normalized_address.replace(api_district, "").strip()

    # Match office name using the full normalized address
    office_names = [office["Name"].lower() for office in postal_data]
    office_match_result = process.extractOne(normalized_address, office_names, score_cutoff=80)
    if not office_match_result:
        return {"is_valid": False, "error": "Office name does not match."}
    office_match, office_score, _ = office_match_result

    # Return validation results
    return {
        "is_valid": True,
        "receiver_state": api_state.title(),
        "receiver_district": api_district.title(),
        "receiver_location": office_match.title()  # Access the first element of the tuple
    }
