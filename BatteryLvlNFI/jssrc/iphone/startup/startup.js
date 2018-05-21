//startup.js file
kony.print = function() {
    return;
};
var globalhttpheaders = {};
var appConfig = {
    appId: "BatteryLvlNFI",
    appName: "Battery NFI Demo",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "192.168.0.2",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: false,
    middlewareContext: "BatteryLvlNFI",
    isMFApp: false,
    eventTypes: ["FormEntry", "Error", "Crash"],
    url: "https://konysecloud.konycloud.com/BatteryLvlNFI/MWServlet",
    secureurl: "https://konysecloud.konycloud.com/BatteryLvlNFI/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    kony.application.setCheckBoxSelectionImageAlignment(constants.CHECKBOX_SELECTION_IMAGE_ALIGNMENT_RIGHT);
    kony.application.setDefaultTextboxPadding(false);
    kony.application.setRespectImageSizeForImageWidgetAlignment(true);
    initializeMVCTemplates();
    initializeUserWidgets();
    frmBatteryStatusGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 7200
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmBatteryStatus.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "eventTypes": appConfig.eventTypes,
    }
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}

function onSuccess(oldlocalname, newlocalename, info) {
    loadResources();
};

function onFailure(errorcode, errormsg, info) {
    loadResources();
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
kony.i18n.setDefaultLocaleAsync("null", onSuccess, onFailure, null);