import React, { FC } from 'react';
import { Image, TouchableOpacity, View, ViewProps } from 'react-native';
import { NewsIcon } from '@app/assets/images';
import { Typography, Divider } from '@app/components';
import { noop } from 'lodash';

import { Article } from '@app/models/Article';
import styles from './styles';

export interface NewsArticleProps extends ViewProps {
  article: Article;
  onSelect?: (article: Article) => void;
  isLastItem?: boolean;
}

const NewsArticle: FC<NewsArticleProps> = ({
  article,
  onSelect = noop,
  isLastItem,
  ...rest
}) => {
  const icon = article?.icon ? { uri: article?.icon } : NewsIcon;
  return (
    <TouchableOpacity onPress={onSelect} {...rest}>
      <View key={article.description} style={styles.article}>
        <Image source={icon} accessibilityIgnoresInvertColors />
        <View style={styles.description}>
          <View>
            <Typography size="buttons">{article.description}</Typography>
          </View>
          <View style={styles.articleBorder}>
            <Typography size="buttons" variant="grey.600">
              {article.time}
            </Typography>
          </View>
          {!isLastItem && <Divider />}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NewsArticle;
