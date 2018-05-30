cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-pdf-generator/www/pdf.js",
        "id": "cordova-pdf-generator.pdf",
        "pluginId": "cordova-pdf-generator",
        "clobbers": [
            "cordova.plugins.pdf",
            "pugin.pdf",
            "pdf"
        ]
    },
    {
        "file": "plugins/cordova-plugin-printer/www/printer.js",
        "id": "cordova-plugin-printer.Printer",
        "pluginId": "cordova-plugin-printer",
        "clobbers": [
            "plugin.printer",
            "cordova.plugins.printer"
        ]
    },
    {
        "file": "plugins/cordova.custom.plugins.exitapp/www/ExitApp.js",
        "id": "cordova.custom.plugins.exitapp.exitApp",
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
    "cordova-plugin-whitelist": "1.3.2",
    "cordova-plugin-printer": "0.7.3",
    "cordova.custom.plugins.exitapp": "1.0.0"
}
// BOTTOM OF METADATA
});