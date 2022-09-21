import React, { FC, useCallback, useContext } from 'react';
import { View } from 'react-native';
import { Divider, TextButton, Typography } from '@app/components';

import { translate } from '@app/i18n';
import { RootContext } from '@app/state';
import { observer } from 'mobx-react';
import styles from './styles';

interface ActionsProps {
  onPressChangePassword: () => void;
  onPressCloseAccount: () => void;
}

const Actions: FC<ActionsProps> = ({
  onPressChangePassword,
  onPressCloseAccount,
}) => {
  const {
    authStore: { signOutUser, accountBalance },
    riskalyzeStore: { setLastVisitedUrl },
  } = useContext(RootContext);

  const handleLogout = useCallback(() => {
    const logout = async () => {
      await signOutUser();
    };
    logout();
    setLastVisitedUrl(null);
  }, [setLastVisitedUrl, signOutUser]);

  const handleCloseAccount = () => {
    onPressCloseAccount();
    handleLogout();
  };

  return (
    <View style={styles.actionsContainer}>
      {/* TODO: Replace when account balance gets implemented */}
      <TextButton
        disabled={accountBalance !== 0}
        onPress={handleCloseAccount}
        label={translate('screens.profile.action.closeAccount.title')}
      />
      <Typography size="body2" style={styles.discloser}>
        {translate('screens.profile.action.closeAccount.discloser')}
      </Typography>
      <Divider />
      <TextButton
        onPress={onPressChangePassword}
        label={translate('screens.profile.action.changePassword')}
      />
      <TextButton
        style={styles.logoutButton}
        testID="Profile.LogOut"
        onPress={handleLogout}
        label={translate('screens.profile.action.logout')}
      />
    </View>
  );
};

export default observer(Actions);
