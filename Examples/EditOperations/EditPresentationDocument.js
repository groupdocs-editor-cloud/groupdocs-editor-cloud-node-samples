"use strict";
class EditPresentationDocument {
	static async Run() {
		
		// The document already uploaded into the storage.
		// Load it into editable state		
		let fileInfo = new editor_cloud.FileInfo();
		fileInfo.filePath = "Presentation/with-notes.pptx";		
		let loadOptions = new editor_cloud.PresentationLoadOptions();
		loadOptions.fileInfo = fileInfo;
		loadOptions.outputPath = "output";
		let loadResult = await editApi.load(new editor_cloud.LoadRequest(loadOptions));
		
		// Download html document
		let buf = await fileApi.downloadFile(new editor_cloud.DownloadFileRequest(loadResult.htmlPath));
		let htmlString = buf.toString("utf-8");

		// Edit something...
		htmlString = htmlString.replace("Slide sub-heading", "Hello world!");

		// Upload html back to storage
		await fileApi.uploadFile(new editor_cloud.UploadFileRequest(loadResult.htmlPath, new Buffer(htmlString, "utf-8")));

		// Save html back to docx
		let saveOptions = new editor_cloud.PresentationSaveOptions();
		saveOptions.fileInfo = fileInfo;
		saveOptions.outputPath = "output/edited.pptx";
		saveOptions.htmlPath = loadResult.htmlPath;
		saveOptions.resourcesPath = loadResult.resourcesPath;
		let saveResult = await editApi.save(new editor_cloud.SaveRequest(saveOptions));

		// Done.
		console.log("Document edited: " + saveResult.path);
	}
}
module.exports = EditPresentationDocument;