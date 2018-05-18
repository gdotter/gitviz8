function getDeviceInfo()
{
  //#ifdef android
  getBatteryStatusForAndroid();
  //#else
  getBatteryStatusForIphone();
  //#endif
}

/**
*    Battery status for Android
*/
function getBatteryStatusForAndroid()
{
  var BatteryStatus = {};

  var KonyMain = java.import("com.konylabs.android.KonyMain");
  var Intent = java.import("android.content.Intent");
  var IntentFilter = java.import("android.content.IntentFilter");    
  var BatteryManager = java.import("android.os.BatteryManager");  

  var context = KonyMain.getActivityContext();
  var ifilter = new IntentFilter(Intent.ACTION_BATTERY_CHANGED);
  var batteryStatusIntent = context.registerReceiver(null, ifilter);
  var BatteryLevel = batteryStatusIntent.getIntExtra(BatteryManager.EXTRA_LEVEL, 0);

  BatteryStatus.BatteryLevel = BatteryLevel;

  var status = batteryStatusIntent.getIntExtra(BatteryManager.EXTRA_STATUS, -1);

  var isCharging = status == BatteryManager.BATTERY_STATUS_CHARGING ||
      status == BatteryManager.BATTERY_STATUS_FULL;

  BatteryStatus.isCharging = isCharging;
  setValues(BatteryStatus);
}

/**
*    Battery status for iPhone
*/
function getBatteryStatusForIphone()
{ 
  var BatteryStatus = {};

  var UIDevice = objc.import("UIDevice");

  var currentDevice = UIDevice.currentDevice();
  currentDevice.batteryMonitoringEnabled = true;

  var batteryLevel = currentDevice.batteryLevel;

  // BatteryStatus.BateryLevel=BateryLevel;
  var state = currentDevice.batteryState;
  batteryLevel = (batteryLevel * 100).toFixed(1);
  batteryLevel = Math.round(batteryLevel);
  BatteryStatus.BatteryLevel = batteryLevel;
  
  if (state==1) 
  {
    BatteryStatus.isCharging = false;
  }
  else
  {
    BatteryStatus.isCharging = true;
  }

  setValues(BatteryStatus);
}

/**
 * @function
 *
 */
function setValues(BatteryStatus)
{
  var batteryLevel = BatteryStatus.BatteryLevel.toFixed();
  
  if(batteryLevel <= 10)
  {
    frmBatteryStatus.lblStatus.text = "Low Battery";
    frmBatteryStatus.flxBatteryInner.skin = "sknflxFB3B2F";
    frmBatteryStatus.flxBatteryInner.width = batteryLevel + "%";
  }
  else
  {
    frmBatteryStatus.lblStatus.text = batteryLevel + "% Charged";
    frmBatteryStatus.flxBatteryInner.skin = "sknflx01ff01";
    frmBatteryStatus.flxBatteryInner.width = batteryLevel + "%";
  }
  
  frmBatteryStatus.flxBatteryInner.forceLayout();
  
  if(BatteryStatus.isCharging)
  {
    frmBatteryStatus.imgCharger.isVisible = true;
  }
  else
  {
     frmBatteryStatus.imgCharger.isVisible = false;
  }
}