import React, { FC, useCallback, useContext, useMemo, useState } from 'react';
import { View } from 'react-native';
import { observer } from 'mobx-react';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { RootContext } from '@app/state';
import {
  ListNavigationItem,
  SafeArea,
  StickyHeader,
  Toggle,
  Typography,
} from '@app/components';
import { SettingsRoutes } from '@app/navigation/types';
import { translate } from '@app/i18n';
import { ScrollView } from 'react-native-gesture-handler';
import useStickyHandler from '@app/hooks/useStickyHandler';

import { palette } from '@app/theme';
import styles from './styles';

const Settings: FC = () => {
  const navigation = useNavigation<NavigationProp<SettingsRoutes>>();
  const { scroll } = useStickyHandler(undefined);
  // use the root context managed by mobx
  const {
    settingsStore: {
      theme,
      selectTheme,
      setHasPushNotifications,
      hasPushNotifications,
    },
  } = useContext(RootContext);

  const [isDarkMode, setIsDarkMode] = useState<boolean>(theme === 'dark');

  const handleProfilePress = useCallback(() => {
    navigation.navigate('Profile');
  }, [navigation]);

  const handleAboutPress = useCallback(() => {
    navigation.navigate('About');
  }, [navigation]);

  const handleTermsAndConditionsPress = useCallback(() => {
    navigation.navigate('TermsAndConditions');
  }, [navigation]);

  const handleDebugPress = useCallback(() => {
    navigation.navigate('Debug');
  }, [navigation]);

  const handleFeedbackPress = useCallback(() => {
    navigation.navigate('Feedback');
  }, [navigation]);

  const handleToggleDarkModePress = useCallback(() => {
    selectTheme(theme === 'light' ? 'dark' : 'light');
    setIsDarkMode(!isDarkMode);
  }, [isDarkMode, selectTheme, theme]);

  const handleTogglePush = useCallback(() => {
    setHasPushNotifications(!hasPushNotifications);
  }, [hasPushNotifications, setHasPushNotifications]);

  const collapsedTitle = (
    <Typography strong size="h6">
      {translate('settings.title')}
    </Typography>
  );

  const title = (
    <Typography strong size="h2">
      {translate('settings.title')}
    </Typography>
  );

  const pushNotificationIcon = useMemo(
    () => <Toggle checked={hasPushNotifications} onChange={handleTogglePush} />,
    [handleTogglePush, hasPushNotifications]
  );

  const darkModeIcon = useMemo(
    () => <Toggle checked={isDarkMode} onChange={handleToggleDarkModePress} />,
    [handleToggleDarkModePress, isDarkMode]
  );

  return (
    <SafeArea altLight={palette.white} edges={['top']} style={styles.container}>
      <StickyHeader
        scroll={scroll}
        CollapsedTitle={collapsedTitle}
        BottomTitle={title}
        altLight={palette.white}
      />
      <View style={styles.content}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
        >
          <View>
            <ListNavigationItem
              testID="Settings.Profile"
              title={translate('settings.action.profile.label')}
              subTitle={translate('settings.action.profile.text')}
              onPress={handleProfilePress}
            />
            <ListNavigationItem
              testID="Settings.About"
              title={translate('settings.action.about')}
              onPress={handleAboutPress}
            />
            <ListNavigationItem
              testID="Settings.TermsAndConditions"
              title={translate('settings.action.termsAndConditions')}
              onPress={handleTermsAndConditionsPress}
            />
            <ListNavigationItem
              testID="Settings.Feedback"
              title={translate('settings.action.feedback.title')}
              onPress={handleFeedbackPress}
            />
            <ListNavigationItem
              testID="Settings.Debug"
              title="Debug"
              onPress={handleDebugPress}
            />
            <ListNavigationItem
              testID="Settings.PushNotifications"
              title={translate('settings.action.pushNotifications')}
              button={pushNotificationIcon}
            />
            <ListNavigationItem
              testID="Settings.DarkMode"
              title={translate('settings.action.darkMode')}
              button={darkModeIcon}
              divider={false}
            />
          </View>
        </ScrollView>
      </View>
    </SafeArea>
  );
};

export default observer(Settings);
