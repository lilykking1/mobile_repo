import { RootContext } from '@app/state';
import { isUndefined } from 'lodash';
import { useContext, useState } from 'react';

const useKycModal = () => {
  const [isKycModalVisible, setIsKycModalVisible] = useState(false);
  const {
    cognitoStore: { isKycRequired, setIsKycRequired: setKycRequired },
    settingsStore: { setHasPushNotifications },
  } = useContext(RootContext);

  const setIsKycRequired = (isRequired: boolean) => {
    // TODO: Remove this when we wire in the backend.
    setKycRequired(isRequired);
    setHasPushNotifications(isRequired);
  };

  const handleDisplayKycModal = (callback?) => {
    if (isKycRequired) {
      setIsKycModalVisible(true);
      return;
    }
    if (!isUndefined(callback)) {
      setIsKycModalVisible(false);
      callback();
    }
  };

  const handleDismissKycModal = (callback?) => {
    setIsKycModalVisible(false);
    if (!isUndefined(callback)) {
      callback();
    }
  };

  return {
    handleDisplayKycModal,
    handleDismissKycModal,
    isKycRequired,
    setIsKycRequired,
    isKycModalVisible,
    setIsKycModalVisible,
  };
};

export default useKycModal;
