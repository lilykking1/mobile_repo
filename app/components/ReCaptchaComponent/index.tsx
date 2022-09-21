import * as React from 'react';
import { FC } from 'react';
import { View } from 'react-native';
import { WebView, WebViewMessageEvent } from 'react-native-webview';
import styles from './styles';
import { recaptchaURL } from './constants';

interface ReCaptchaComponentProps {
  onTokenReceived: (token: string) => void;
  captchaDomain: string;
  siteKey: string;
}

const ReCaptchaComponent: FC<ReCaptchaComponentProps> = ({
  onTokenReceived,
  captchaDomain,
  siteKey,
}) => {
  const onRecaptchaReady = `window.grecaptcha.execute('${siteKey}', {action: 'form'})
  .then(
    function(args) {
      window.ReactNativeWebView.postMessage(args);
    }
  )`;

  const getInvisibleRecaptchaContent = `<!DOCTYPE html>
      <html>
        <head>
          <script src="${recaptchaURL}${siteKey}"></script>
          <script>window.grecaptcha.ready(() => { ${onRecaptchaReady} }); </script>
        </head>
      </html>`;

  const injectedJavaScriptCode = `(${String(() => {
    const originalPostMessage = window.postMessage;
    const patchedPostMessage = (message, targetOrigin, transfer) => {
      originalPostMessage(message, targetOrigin, transfer);
    };
    patchedPostMessage.toString = () =>
      String(Object.hasOwnProperty).replace('hasOwnProperty', 'postMessage');
    window.postMessage = patchedPostMessage;
  })})();`;

  return (
    <View style={styles.container}>
      <WebView
        androidLayerType="software"
        javaScriptEnabled
        originWhitelist={['*']}
        automaticallyAdjustContentInsets
        mixedContentMode="always"
        injectedJavaScript={injectedJavaScriptCode}
        source={{
          html: getInvisibleRecaptchaContent,
          baseUrl: captchaDomain,
        }}
        onMessage={(e: WebViewMessageEvent) =>
          onTokenReceived(e.nativeEvent.data)}
      />
    </View>
  );
};

export default ReCaptchaComponent;
