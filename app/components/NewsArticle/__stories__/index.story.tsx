import React from 'react';
import { Alert, View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import { withKnobs } from '@storybook/addon-knobs';
import { getCoinNews } from '@app/mocks/CoinNews';
import styles from './styles';
import NewsArticle from '../index';

declare let module;

storiesOf('List.News', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('Default', () => {
    const onSelect = () => {
      Alert.alert('You selected this article!');
    };

    const articles = getCoinNews(1);

    return (
      <View style={styles.container}>
        <NewsArticle article={articles[0]} onSelect={onSelect} />
      </View>
    );
  });
