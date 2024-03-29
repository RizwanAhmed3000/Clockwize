package com.clockwize

import android.os.Bundle
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler
import org.devio.rn.splashscreen.SplashScreen // Import SplashScreen from the correct package

class MainActivity : ReactActivity() {

    override fun getMainComponentName(): String = "clockwize"

    override fun createReactActivityDelegate(): ReactActivityDelegate =
        object : ReactActivityDelegate(this, mainComponentName), DefaultHardwareBackBtnHandler {
            override fun invokeDefaultOnBackPressed() {
                onBackPressed()
            }

            override fun onCreate(savedInstanceState: Bundle?) {
                super.onCreate(savedInstanceState)
                SplashScreen.show(this@MainActivity) // Show the splash screen when the activity is created
            }

            override fun onResume() {
                super.onResume()
                SplashScreen.hide(this@MainActivity) // Hide the splash screen when the activity is resumed
            }
        }
}
