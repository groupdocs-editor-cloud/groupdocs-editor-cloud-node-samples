"use strict";
class GetSupportedFormats {
	static async Run() {
		let response = await infoApi.getSupportedFileFormats();
		console.log("Supported file-formats:");
		response.formats.forEach(function (format) {
			console.log(format.fileFormat + "(" + format.extension + ")");
		});
	}
}
module.exports = GetSupportedFormats;