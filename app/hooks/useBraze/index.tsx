import { useState } from 'react';
import Braze from 'react-native-appboy-sdk';

const useBraze = () => {
  const [uniqueInstallId, setUniqueInstallId] = useState('');

  const initBraze = () => {
    // Log Unique indenifier for install.
    // For Braze documentation
    // https://www.braze.com/docs/developer_guide/platform_integration_guides/react_native/react_sdk_setup#test-your-basic-integration
    Braze.getInstallTrackingId((error, installId) => {
      if (!error) {
        Braze.changeUser(`${installId}`);
        setUniqueInstallId(installId.toString());
      }
    });
  };

  const updateBrazeUser = (email: string) => {
    // TODO: Add more fields based on the user
    // when we have it coming from user profile in the future
    Braze.setEmail(email);
  };

  const logBrazeCustomEvent = (
    eventName: string,
    eventProperties?: Record<string, string>
  ) => {
    Braze.logCustomEvent(eventName, eventProperties);
  };

  return {
    initBraze,
    updateBrazeUser,
    logBrazeCustomEvent,
    uniqueInstallId,
  };
};

export default useBraze;
