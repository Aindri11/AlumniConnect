import pandas as pd

# Load Excel file
excel_file = r"C:\Users\HP\OneDrive\Desktop\CSIT Alumni Club Records.xlsx"
sheet_names = ['CI', 'CT', 'CO']  # List of sheet names

# List to store JSON data from each sheet
all_json_data = []

# Iterate over each sheet
for sheet_name in sheet_names:
    # Read Excel file into a DataFrame
    df = pd.read_excel(excel_file, sheet_name=sheet_name, engine='openpyxl')
    
    # Convert DataFrame to JSON
    json_data = df.to_json(orient='records')
    
    # Append JSON data to the list
    all_json_data.append(json_data)

# Combine JSON data from all sheets into a single JSON array
combined_json = '[' + ','.join(all_json_data) + ']'

# Save combined JSON data to a file
with open('output.json', 'w') as f:
    f.write(combined_json)

print('Excel data from all sheets successfully converted to JSON.')