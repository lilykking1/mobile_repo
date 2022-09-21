import React, {
  Dispatch,
  FC,
  memo,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Keyboard, View } from 'react-native';
import { noop } from 'lodash';

import {
  Background,
  Icon,
  IconButton,
  TextInput,
  ToggleLabeled,
  Typography,
} from '@app/components';
import { translate } from '@app/i18n';
import { palette } from '@app/theme';

import {
  AmplitudeMarketWatchEvents,
  logAmplitudeEvent,
} from '@app/utils/amplitude';
import styles from './styles';

interface HeaderProps {
  usAllowedCallback: Dispatch<SetStateAction<boolean>>;
  usAllowed: boolean;
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
}

const Header: FC<HeaderProps> = ({
  usAllowedCallback = noop,
  usAllowed,
  setSearchText = noop,
  searchText,
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const onToggleChange = useCallback(() => usAllowedCallback(!usAllowed), [
    usAllowedCallback,
    usAllowed,
  ]);

  const { top } = useSafeAreaInsets();

  const onSearchButtonPress = useCallback(() => {
    if (isSearchOpen) {
      setSearchText('');
    }
    setIsSearchOpen(!isSearchOpen);
  }, [setSearchText, isSearchOpen]);

  const headerStyles = useMemo(() => [styles.header, { paddingTop: top }], [
    top,
  ]);

  const searchButtonIcon = useMemo(() => {
    if (isSearchOpen) {
      return <Icon.Close height={16} width={16} tint={palette.grey[600]} />;
    }
    return <Icon.Magnifier height={16} width={16} tint={palette.grey[600]} />;
  }, [isSearchOpen]);

  const handleSearchSubmit = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  const handleOnBlur = useCallback(() => {
    const eventProperties = {
      search: searchText,
    };
    logAmplitudeEvent(AmplitudeMarketWatchEvents.SEARCH_COIN, eventProperties);
  }, [searchText]);

  return (
    <Background style={headerStyles} secondary>
      <View style={styles.headerContent}>
        <Typography strong size="h3">
          {translate('marketWatch.marketWatch')}
        </Typography>
        <View style={styles.actions}>
          <ToggleLabeled
            onChange={onToggleChange}
            textOne={translate('marketWatch.usAvailable')}
            textTwo={translate('marketWatch.forAll')}
            checked={!usAllowed}
          />
          <View style={styles.spacer} />
          <IconButton
            startIcon={searchButtonIcon}
            onPress={onSearchButtonPress}
          />
        </View>
      </View>
      {isSearchOpen && (
        <View style={styles.searchInputContainer}>
          <TextInput
            value={searchText}
            autoCapitalize="none"
            autoFocus
            outline
            icon={
              <Icon.Magnifier height={16} width={16} tint={palette.grey[600]} />
            }
            returnKeyType="search"
            blurOnSubmit
            onSubmitEditing={handleSearchSubmit}
            onBlur={handleOnBlur}
            onChangeText={setSearchText}
          />
        </View>
      )}
    </Background>
  );
};

export default memo(Header);
