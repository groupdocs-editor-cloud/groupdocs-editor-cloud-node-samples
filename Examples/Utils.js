"use strict";

class Utils {
	
	static async UploadTestFile(filePath)
	{
		let resourcesFolder = './Resources/';
		let existResponse = await storageApi.objectExists(new editor_cloud.ObjectExistsRequest(filePath, myStorage));
			
		if (existResponse.exists === false) {
			var file = fs.readFileSync(resourcesFolder + filePath);
			var uploadRequest = new editor_cloud.UploadFileRequest(filePath, file);
			await fileApi.uploadFile(uploadRequest);
			console.log("Uploaded: " + filePath);
		}			
	}

	static async UploadTestFiles()
	{
		await this.UploadTestFile("WordProcessing/password-protected.docx");
		await this.UploadTestFile("Spreadsheet/four-sheets.xlsx");
		await this.UploadTestFile("Spreadsheet/sample.tsv");
		await this.UploadTestFile("Text/document.txt");
		await this.UploadTestFile("Presentation/with-notes.pptx");
	}	
}

module.exports = Utils;
