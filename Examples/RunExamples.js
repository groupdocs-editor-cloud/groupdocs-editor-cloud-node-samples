"use strict";
global.editor_cloud = require("groupdocs-editor-cloud");
global.fs = require("fs");
global.serializer_1 = require("groupdocs-editor-cloud/lib/serializer");

//// ***********************************************************
////          GroupDocs.Editor Cloud API Examples
//// ***********************************************************

//TODO: Get your AppSID and AppKey at https://dashboard.groupdocs.cloud (free registration is required).

global.appSid = "961234b6-aa74-40c2-a0c0-9d6e2ff92eab";
global.appKey = "a1b6c8aa82e0cc3fc642b4bc0e1d38b2";
global.myStorage = "First Storage";

// construct EditApi
global.editApi = editor_cloud.EditApi.fromKeys(appSid, appKey);

// construct InfoApi
global.infoApi = editor_cloud.InfoApi.fromKeys(appSid, appKey);

// construct FileApi
global.fileApi = editor_cloud.FileApi.fromKeys(appSid, appKey);

// construct StorageApi
global.storageApi = editor_cloud.StorageApi.fromKeys(appSid, appKey);

async function examples() {

    // Uploading sample test files to storage
    await require('./Utils').UploadTestFiles();

    // Get All Supported Formats
    await require('./GetSupportedFormats').Run();

    // Get Document Info
    await require('./GetDocumentInfo').Run();
}

examples();
