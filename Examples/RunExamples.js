"use strict";
global.editor_cloud = require("groupdocs-editor-cloud");
global.fs = require("fs");
global.serializer_1 = require("groupdocs-editor-cloud/lib/serializer");

//// ***********************************************************
////          GroupDocs.Editor Cloud API Examples
//// ***********************************************************

//TODO: Get your ClientId and ClientSecret at https://dashboard.groupdocs.cloud (free registration is required).

global.clientId = "XXXX-XXXX-XXXX-XXXX";
global.clientSecret = "XXXXXXXXXXXXXXXX";
global.myStorage = "First Storage";

const config = new editor_cloud.Configuration(clientId, clientSecret);
config.apiBaseUrl = "https://api.groupdocs.cloud";

// construct EditApi
global.editApi = editor_cloud.EditApi.fromConfig(config);

// construct InfoApi
global.infoApi = editor_cloud.InfoApi.fromConfig(config);

// construct FileApi
global.fileApi = editor_cloud.FileApi.fromConfig(config);

// construct StorageApi
global.storageApi = editor_cloud.StorageApi.fromConfig(config);

async function examples() {

    // Uploading sample test files to storage
    await require('./Utils').UploadTestFiles();

    // Get All Supported Formats
    await require('./GetSupportedFormats').Run();

    // Get Document Info
    await require('./GetDocumentInfo').Run();

    //  Edit word processing document
    await require('./EditOperations/EditWordProcessingDocument').Run();

    //  Edit word processing document
    await require('./EditOperations/EditSpreadsheetDocument').Run();    

    //  Edit presentation document    
    await require('./EditOperations/EditPresentationDocument').Run();     

    //  Edit DSV (Delimiter-separated values) document
    await require('./EditOperations/EditDsvDocument').Run();      

    //  Edit DSV (Delimiter-separated values) document
    await require('./EditOperations/EditTextDocument').Run();       
}

examples();
