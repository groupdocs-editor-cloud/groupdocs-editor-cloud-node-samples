"use strict";
class EditSpreadsheetDocument {
	static async Run() {
		
		// The document already uploaded into the storage.
		// Load it into editable state		
		let fileInfo = new editor_cloud.FileInfo();
		fileInfo.filePath = "Spreadsheet/four-sheets.xlsx";
		let loadOptions = new editor_cloud.SpreadsheetLoadOptions();
		loadOptions.fileInfo = fileInfo;
		loadOptions.outputPath = "output";
		loadOptions.worksheetIndex = 0;
		let loadResult = await editApi.load(new editor_cloud.LoadRequest(loadOptions));
		
		// Download html document
		let buf = await fileApi.downloadFile(new editor_cloud.DownloadFileRequest(loadResult.htmlPath));
		let htmlString = buf.toString("utf-8");

		// Edit something...
		htmlString = htmlString.replace("This is sample sheet", "This is sample sheep");

		// Upload html back to storage
		await fileApi.uploadFile(new editor_cloud.UploadFileRequest(loadResult.htmlPath, new Buffer(htmlString, "utf-8")));

		// Save html back to docx
		let saveOptions = new editor_cloud.SpreadsheetSaveOptions();
		saveOptions.fileInfo = fileInfo;
		saveOptions.outputPath = "output/edited.xlsx";
		saveOptions.htmlPath = loadResult.htmlPath;
		saveOptions.resourcesPath = loadResult.resourcesPath;
		let saveResult = await editApi.save(new editor_cloud.SaveRequest(saveOptions));

		// Done.
		console.log("Document edited: " + saveResult.path);
	}
}
module.exports = EditSpreadsheetDocument;