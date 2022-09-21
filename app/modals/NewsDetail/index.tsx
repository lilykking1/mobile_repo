import React, { FC, useCallback } from 'react';
import { View } from 'react-native';
import { SafeArea, StickyHeader } from '@app/components';
import WebView from 'react-native-webview';

import { RootRoutes, Routes } from '@app/navigation/types';
import { useNavigation, NavigationProp } from '@react-navigation/core';
import { useSharedValue } from 'react-native-reanimated';
import styles from './styles';

export interface NewsDetailProps {
  route: {
    params: RootRoutes['NewsDetail'];
  };
}
const NewsDetail: FC<NewsDetailProps> = ({ route }) => {
  const navigation = useNavigation<NavigationProp<Routes>>();
  const { url } = route.params;
  const scroll = useSharedValue(0);

  const handleBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <SafeArea edges={['top']}>
        <StickyHeader handleBackPress={handleBackPress} scroll={scroll} />
        <WebView
          source={{
            uri: url,
          }}
          style={styles.containerWebview}
        />
      </SafeArea>
    </View>
  );
};

export default NewsDetail;
