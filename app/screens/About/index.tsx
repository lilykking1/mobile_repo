import React, { FC, useCallback } from 'react';
import {
  Background,
  SafeArea,
  StickyHeader,
  Typography,
} from '@app/components';
import { translate } from '@app/i18n';
import useStickyHandler from '@app/hooks/useStickyHandler';
import { WebView } from 'react-native-webview';
import { Routes } from '@app/navigation/types';
import { useNavigation, NavigationProp } from '@react-navigation/core';
import styles from './styles';
import { aboutHtml } from './about';

const About: FC = () => {
  const title = translate('settings.action.about');
  const { scroll } = useStickyHandler(undefined);
  const navigation = useNavigation<NavigationProp<Routes>>();
  const handleBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const collapsedTitle = (
    <Typography strong size="h6">
      {title}
    </Typography>
  );

  return (
    <Background style={styles.container}>
      <SafeArea edges={['top']}>
        <StickyHeader
          scroll={scroll}
          CollapsedTitle={collapsedTitle}
          BottomTitle={title}
          handleBackPress={handleBackPress}
        />
        {/* TODO: Update About before release */}
        <WebView source={{ html: aboutHtml }} />
      </SafeArea>
    </Background>
  );
};

export default About;
