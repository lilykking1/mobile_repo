import React, { FC } from 'react';
import { storiesOf } from '@storybook/react-native';
import { withWideView } from '@story/decorators';
import { boolean, withKnobs } from '@storybook/addon-knobs';

import { StickyHeader, Typography } from '@app/components';
import useStickyHandler from '@app/hooks/useStickyHandler';
import Background from '@app/components/Background';

import ContainerWithScrollableHeader from '../index';
import {
  Left,
  ListComponent,
  NewsComponent,
  Right,
  valueDisplayed,
} from './fixtures';
import styles from './styles';

declare let module;

interface ContainerProps {
  useFlatList: boolean;
}

const Container: FC<ContainerProps> = ({ useFlatList }) => {
  const { scroll, handleScrollWithScrollView } = useStickyHandler(undefined);

  const stickyHeader = (
    <StickyHeader
      scroll={scroll}
      CollapsedTitle={valueDisplayed}
      Right={Right}
      Left={Left}
      secondaryBackground
    />
  );

  const message = useFlatList ? 'FlatList Rendering' : '.map Rendering';

  const header = (
    <Background secondary style={styles.header}>
      <Typography strong size="h2">
        {message}
      </Typography>
    </Background>
  );

  const content = useFlatList ? ListComponent : NewsComponent;

  return (
    <ContainerWithScrollableHeader
      stickyHeader={stickyHeader}
      regularHeader={header}
      content={content}
      onScroll={handleScrollWithScrollView}
      useFlatList={useFlatList}
    />
  );
};

storiesOf('Organisms.ContainerWithScrollableHeader', module)
  .addDecorator(withKnobs)
  .addDecorator(withWideView)
  .add('Default', () => {
    const useFlatList = boolean('Use FlatList', false);

    return <Container useFlatList={useFlatList} />;
  });
