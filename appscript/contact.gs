function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var data;
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (parseError) {
        data = e.parameter;
      }
    } else {
      data = e.parameter;
    }
    
    var parentFolderId = "1idwBJeEc3UL6WnYmnTARpYAlFzEhsPDF";
    var pageName = data.pageName || "Contact Submissions";
    
    var parentFolder = DriveApp.getFolderById(parentFolderId);
    
    // 1. Get or Create Page Folder
    var folders = parentFolder.getFoldersByName(pageName);
    var folder;
    if (folders.hasNext()) {
      folder = folders.next();
    } else {
      folder = parentFolder.createFolder(pageName);
    }
    
    // 2. Get or Create Spreadsheet inside that folder
    var fileName = "Submissions_" + pageName;
    var files = folder.getFilesByName(fileName);
    var ss;
    
    if (files.hasNext()) {
      ss = SpreadsheetApp.open(files.next());
    } else {
      ss = SpreadsheetApp.create(fileName);
      var ssFile = DriveApp.getFileById(ss.getId());
      ssFile.moveTo(folder);
      
      // Setup headers
      var sheet = ss.getSheets()[0];
      sheet.appendRow(["Timestamp", "Full Name", "Email", "Phone", "Company Name", "Details"]);
      sheet.getRange(1, 1, 1, 6).setFontWeight("bold").setBackground("#ED184F").setFontColor("white");
      sheet.setFrozenRows(1);
    }
    
    var sheet = ss.getSheets()[0];
    sheet.appendRow([
      new Date(),
      data.fullName,
      data.email,
      data.phone,
      data.companyName,
      data.details
    ]);

    return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ "result": "error", "error": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
