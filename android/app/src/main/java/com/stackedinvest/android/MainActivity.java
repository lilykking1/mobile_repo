package com.stackedinvest.android;

import android.os.Bundle;
import android.content.Intent;

import com.facebook.react.ReactActivity;

import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.facebook.react.views.text.ReactFontManager;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

import org.devio.rn.splashscreen.SplashScreen;

public class MainActivity extends ReactActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    if (savedInstanceState != null) {
      savedInstanceState.remove("android:support:fragments");
      savedInstanceState.remove("android:fragments");
    }

    super.onCreate(savedInstanceState);
    SplashScreen.show(this);

    // Load fonts from res
    // Ref: https://github.com/facebook/react-native/issues/15170
    ReactFontManager.getInstance().addCustomFont(this, "VisueltPro-Thin", R.font.visuelt_pro_thin);
    ReactFontManager.getInstance().addCustomFont(this, "VisueltPro-ThinItalic", R.font.visuelt_pro_thin_italic);

    ReactFontManager.getInstance().addCustomFont(this, "VisueltPro-ExtraLight", R.font.visuelt_pro_extra_light);
    ReactFontManager.getInstance().addCustomFont(this, "VisueltPro-ExtraLightItalic", R.font.visuelt_pro_extra_light_italic);

    ReactFontManager.getInstance().addCustomFont(this, "VisueltPro-Light", R.font.visuelt_pro_light);
    ReactFontManager.getInstance().addCustomFont(this, "VisueltPro-LightItalic", R.font.visuelt_pro_light_italic);

    ReactFontManager.getInstance().addCustomFont(this, "VisueltPro-Regular", R.font.visuelt_pro_regular);
    ReactFontManager.getInstance().addCustomFont(this, "VisueltPro-Italic", R.font.visuelt_pro_italic);

    ReactFontManager.getInstance().addCustomFont(this, "VisueltPro-Medium", R.font.visuelt_pro_medium);
    ReactFontManager.getInstance().addCustomFont(this, "VisueltPro-MediumItalic", R.font.visuelt_pro_medium_italic);

    ReactFontManager.getInstance().addCustomFont(this, "VisueltPro-Bold", R.font.visuelt_pro_bold);
    ReactFontManager.getInstance().addCustomFont(this, "VisueltPro-BoldItalic", R.font.visuelt_pro_bold_italic);

    ReactFontManager.getInstance().addCustomFont(this, "VisueltPro-Black", R.font.visuelt_pro_black);
    ReactFontManager.getInstance().addCustomFont(this, "VisueltPro-BlackItalic", R.font.visuelt_pro_black_italic);
  }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "StackedInvest";
  }

  /**
   * Required for proper react-native-gesture-handler touch handling
   * https://docs.swmansion.com/react-native-gesture-handler/docs/#updating-mainactivityjava
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected ReactRootView createRootView() {
       return new RNGestureHandlerEnabledRootView(MainActivity.this);
      }
    };
  }

  @Override
  public void onNewIntent(Intent intent) {
    super.onNewIntent(intent);
    setIntent(intent);
  }
}
