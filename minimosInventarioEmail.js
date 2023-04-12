function checkInventoryAndSendEmail() {
  var sheetId = "1l18pESiNjH-LKOC99L7gQI39zcqQiHkMdsRK8aupe6I";
  var ss = SpreadsheetApp.openById(sheetId);

  var inventorySheet = ss.getSheetByName("inventario");
  var minThresholdSheet = ss.getSheetByName("minimos");
  var lastRow = minThresholdSheet.getLastRow();

  var emailSubject = "Low Stock Alert";
  var emailBody = "<p>The following materials need to be reordered:</p>";
  var emailTable =
    '<table border="1" cellpadding="5" cellspacing="0">' +
    "<tr><th>Material ID</th><th>Material Name</th><th>Unit of Measure</th><th>Current Stock</th><th>Minimum Threshold</th></tr>";
  var shouldSendEmail = false;

  for (var i = 2; i <= lastRow; i++) {
    var materialId = minThresholdSheet.getRange(i, 1).getValue();
    var materialName = minThresholdSheet.getRange(i, 2).getValue();
    var unitOfMeasure = minThresholdSheet.getRange(i, 3).getValue();
    var minThreshold = minThresholdSheet.getRange(i, 4).getValue();
    var stock = minThresholdSheet.getRange(i, 5).getValue();

    if (stock < minThreshold) {
      shouldSendEmail = true;
      emailTable +=
        "<tr><td>" +
        materialId +
        "</td><td>" +
        materialName +
        "</td><td>" +
        unitOfMeasure +
        "</td><td>" +
        stock +
        "</td><td>" +
        minThreshold +
        "</td></tr>";

      // Update the date when the notification was sent
      minThresholdSheet.getRange(i, 6).setValue(new Date());
    }
  }

  emailTable += "</table>";

  if (shouldSendEmail) {
    var emailAddress = "changizin@gmail.com"; // Replace with your email address
    var emailHtmlBody = emailBody + emailTable;
    MailApp.sendEmail({
      to: emailAddress,
      subject: emailSubject,
      htmlBody: emailHtmlBody,
    });
  }
}
