import React, { FC, useContext, useCallback } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import { observer } from 'mobx-react';

import { RootContext } from '@app/state';
import { Button } from '@app/components';

import styles from './styles';

export interface UseCaseProps {
  title: string;
  subtitle: string;
  wide?: boolean;
  flatList?: boolean;
}

const UseCase: FC<UseCaseProps> = ({ title, subtitle, wide, flatList, children }) => {
  const {
    settingsStore: { theme, selectTheme },
  } = useContext(RootContext);

  const handleToggleThemePress = useCallback(
    () => selectTheme(theme === 'light' ? 'dark' : 'light'),
    [selectTheme, theme]
  );

  let content = <View style={styles.contentView}>{children}</View>;

  if (!wide) {
    content = (
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.contentScroll}
        keyboardShouldPersistTaps="handled"
      >
        {children}
      </ScrollView>
    );
  }

  if (flatList) {
    content = (
      <FlatList
        style={styles.scroll}
        contentContainerStyle={styles.contentContainer}
        ListFooterComponent={children as React.ReactElement}
        keyboardShouldPersistTaps="handled"
        renderItem={null}
        data={[]}
      />
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          {title}
          {subtitle && <Text style={styles.subtitle}>{` - ${subtitle}`}</Text>}
        </Text>
        <Button
          variant="green"
          label={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Theme`}
          onPress={handleToggleThemePress}
        />
      </View>
      {content}
    </View>
  );
};

export default observer(UseCase);
