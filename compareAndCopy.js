// Code.gs

function compareAndCopy() {
  // Get the Script Properties
  var scriptProperties = PropertiesService.getScriptProperties();

  // Get the spreadsheet ID and sheet names from the Script Properties
  var spreadsheetId = scriptProperties.getProperty("SPREADSHEET_ID");
  var sheet1Name = scriptProperties.getProperty("SHEET1_NAME");
  var sheet2Name = scriptProperties.getProperty("SHEET2_NAME");

  // Get the active Spreadsheet
  var ss = SpreadsheetApp.openById(spreadsheetId);

  // Get the sheets using the stored sheet names
  var sheet1 = ss.getSheetByName(sheet1Name);
  var sheet2 = ss.getSheetByName(sheet2Name);

  // Get data from both sheets
  var sheet1Data = sheet1.getRange("A2:F" + sheet1.getLastRow()).getValues();
  var sheet2Data = sheet2.getRange("A2:B" + sheet2.getLastRow()).getValues();

  // Create a list of IDs in sheet1
  var sheet1Ids = sheet1Data.map(function (row) {
    return row[0];
  });

  // Iterate through the sheet2 data
  for (var i = 0; i < sheet2Data.length; i++) {
    var sheet2Id = sheet2Data[i][0];
    // Check if the ID from sheet2 is missing in sheet1
    if (sheet1Ids.indexOf(sheet2Id) === -1 && sheet2Id !== "") {
      // Copy columns A and B from sheet2 to sheet1 only if row is not empty
      sheet1.appendRow([sheet2Data[i][0], sheet2Data[i][1]]);
    }
  }

  // Get the range of data in sheet1 (excluding headers)
  var sheet1DataRange = sheet1.getRange(2, 1, sheet1.getLastRow() - 1, 6);

  // Sort by column B in ascending order while keeping columns A, D, and F with columns A and B
  sheet1DataRange.sort([
    { column: 2, ascending: true },
    { column: 1, ascending: true },
  ]);
}
