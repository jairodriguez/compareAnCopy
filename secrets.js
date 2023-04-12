// secrets.gs

function setSpreadsheetId() {
  var scriptProperties = PropertiesService.getScriptProperties();
  scriptProperties.setProperty(
    "SPREADSHEET_ID",
    "1l18pESiNjH-LKOC99L7gQI39zcqQiHkMdsRK8aupe6I"
  );
}

function setSheetNames() {
  var scriptProperties = PropertiesService.getScriptProperties();
  scriptProperties.setProperty("SHEET1_NAME", "minimos");
  scriptProperties.setProperty("SHEET2_NAME", "inventario");
}
