import React from 'react';
import { Alert, View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { withView } from '@story/decorators';
import { withKnobs } from '@storybook/addon-knobs';
import { Article } from '@app/components/NewsArticle/types';
import NewsArticle from '@app/components/NewsArticle';
import News from '../index';
import styles from './styles';
import { newsArticles } from './fixtures';

declare let module;

storiesOf('Organisms.News', module)
  .addDecorator(withKnobs)
  .addDecorator(withView)
  .add('Default', () => {
    const articles = newsArticles.map((article: Article) => (
      <NewsArticle
        article={article}
        onSelect={() => Alert.alert(`You selected ${article.description}`)}
      />
    ));

    const onHeaderSelect = () => Alert.alert('You selected the new header!');

    return (
      <View style={styles.container}>
        <News articles={articles} onHeaderSelect={onHeaderSelect} />
      </View>
    );
  });
