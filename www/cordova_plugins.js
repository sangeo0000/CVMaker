cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-pdf-generator.pdf",
        "file": "plugins/cordova-pdf-generator/www/pdf.js",
        "pluginId": "cordova-pdf-generator",
        "clobbers": [
            "cordova.plugins.pdf",
            "pugin.pdf",
            "pdf"
        ]
    },
    {
        "id": "cordova-plugin-printer.Printer",
        "file": "plugins/cordova-plugin-printer/www/printer.js",
        "pluginId": "cordova-plugin-printer",
        "clobbers": [
            "plugin.printer",
            "cordova.plugins.printer"
        ]
    },
    {
        "id": "cordova.custom.plugins.exitapp.exitApp",
        "file": "plugins/cordova.custom.plugins.exitapp/www/ExitApp.js",
        "pluginId": "cordova.custom.plugins.exitapp",
        "merges": [
            "navigator.app"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-pdf-generator": "1.5.4",
    "cordova-plugin-printer": "0.7.3",
    "cordova-plugin-whitelist": "1.3.2",
    "cordova.custom.plugins.exitapp": "1.0.0"
};
// BOTTOM OF METADATA
});