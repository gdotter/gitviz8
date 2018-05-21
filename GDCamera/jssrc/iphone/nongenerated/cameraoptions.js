/*
 ****************************************************************
 *	Name    : onCapture
 *	Author  : Kony
 *	Purpose : To capture an image and assign the captured image to image widget.
 *****************************************************************
 */
function onCapture(cameraObject) {
    var rawbytes = cameraObject.rawBytes;
    frmCameraBasic.imgRaw.rawBytes = rawbytes;
    var base64 = kony.convertToBase64(rawbytes);
    frmCameraBasic.imgBase64.base64 = base64;
}
/*
 ****************************************************************
 *	Name    : onCaptureFrmOverLay
 *	Author  : Kony
 *	Purpose : To capture an image by overlaying a form on top of the camera and assign the captured image to image widget.
 *****************************************************************
 */
function onCaptureWithOverLay(cameraObject) {
    kony.application.showLoadingScreen("loadingscreen", "Loading...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, null);
    frmCameraOverlay.imgImageWithOverlay.rawBytes = cameraObject.rawBytes;
    frmCameraOverlay.show();
    kony.application.dismissLoadingScreen();
}
/*
 ****************************************************************
 *	Name    : onCapturePublicMode
 *	Author  : Kony
 *	Purpose : To capture an image in 'PUBLIC' access mode and assign the captured image to image widget.
 *****************************************************************
 */
function onCapturePublicMode(cameraObject) {
    kony.application.showLoadingScreen("loadingscreen", "Loading...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, null);
    frmCameraAccessMode.imgPublic.rawBytes = cameraObject.rawBytes;
    frmCameraAccessMode.lblDesc.text = "Image on left is the captured image in Public mode. You can see the image in the gallery of the device. To observe this, hide the application, open the camera and go to the image gallery.";
    kony.application.dismissLoadingScreen();
}
/*
 ****************************************************************
 *	Name    : onCapturePrivateMode
 *	Author  : Kony
 *	Purpose : To capture an image in 'PRIVATE' access mode and assign the captured image to image widget.
 *****************************************************************
 */
function onCapturePrivateMode(cameraObject) {
    kony.application.showLoadingScreen("loadingscreen", "Loading...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, null);
    kony.print(JSON.stringify(cameraObject));
    frmCameraAccessMode.imgPrivate.rawBytes = cameraObject.rawBytes;
    frmCameraAccessMode.lblDesc.text = "Center image is the captured image in private mode. You can not see the image in the gallery of the device. To observe this, hide the application, open the camera and go to the image gallery.";
    frmCameraAccessMode.show();
    kony.application.dismissLoadingScreen();
}
/*
 ****************************************************************
 *	Name    : onCaptureInMemoryMode
 *	Author  : Kony
 *	Purpose : To capture an image in 'INMEMORY' access mode and assign the captured image to image widget.
 *****************************************************************
 */
function onCaptureInMemoryMode(cameraObject) {
    kony.application.showLoadingScreen("loadingscreen", "Loading...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, null);
    frmCameraAccessMode.imgInMemory.rawBytes = cameraObject.rawBytes;
    frmCameraAccessMode.lblDesc.text = "Image on right is the captured image in In-Memory mode. You can not see the image in the gallery of the device. To observe this, hide the application, open the camera and go to the image gallery.";
    frmCameraAccessMode.show();
    kony.application.dismissLoadingScreen();
}
/*
 ****************************************************************
 *	Name    : onCapturePortOrientaion
 *	Author  : Kony
 *	Purpose : To capture an image in 'PORTRAIT' orientation mode and assign the captured image to image widget.
 *****************************************************************
 */
function onCapturePortOrientaion(cameraObject) {
    kony.application.showLoadingScreen("loadingscreen", "Loading...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, null);
    frmCameraOrientation.imgPortrait.rawBytes = cameraObject.rawBytes;
    frmCameraOrientation.lblDesc.text = "Camera orientation mode is in Portrait mode.";
    kony.application.dismissLoadingScreen();
}
/*
 ****************************************************************
 *	Name    : onCaptureLandOrientaion
 *	Author  : Kony
 *	Purpose : To capture an image in 'LANDSCAPE' orientation mode and assign the captured image to image widget.
 *****************************************************************
 */
function onCaptureLandOrientaion(cameraObject) {
    kony.application.showLoadingScreen("loadingscreen", "Loading...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, null);
    frmCameraOrientation.imgLandscape.rawBytes = cameraObject.rawBytes;
    frmCameraOrientation.lblDesc.text = "Camera orientation mode is in Landscape mode.";
    kony.application.dismissLoadingScreen();
}