# Script Description

This Google Apps Script is designed to compare two sheets from the same Google Spreadsheet and copy missing data from one sheet to the other. The script is set up to run from the script editor and pulls the spreadsheet ID and sheet names from the script properties.

## How to Use

1. Make a copy of the Google Spreadsheet you want to use the script on.
2. Open the script editor by going to **Tools > Script editor** in the menu bar.
3. Copy the script code and paste it into the script editor.
4. Update the script properties with the appropriate values for your Google Spreadsheet:
  * `SPREADSHEET_ID`: The ID of your Google Spreadsheet.
  * `SHEET1_NAME`: The name of the sheet you want to copy data to.
  * `SHEET2_NAME`: The name of the sheet you want to copy data from.
5. Save the script properties and run the script from the script editor.

## Notes

* The script compares the first column of each sheet and copies the corresponding row from Sheet 2 to Sheet 1 if the value is missing in Sheet 1.
* The script sorts Sheet 1 by the second column in ascending order after copying the missing data.

## License

This script is licensed under the [MIT License](https://opensource.org/licenses/MIT).
