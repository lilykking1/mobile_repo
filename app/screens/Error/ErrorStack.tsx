import React, { ErrorInfo, FC } from 'react';
import { Text, TextStyle, View, ViewStyle, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { palette } from '@app/theme';
import { translate } from '@app/i18n';
import { noop } from 'lodash';

const CONTAINER: ViewStyle = {
  alignItems: 'center',
  flex: 1,
  padding: 16,
  paddingVertical: 50,
  backgroundColor: palette.white,
};

const ERROR_DETAILS_CONTAINER: ViewStyle = {
  width: '100%',
  maxHeight: '60%',
  backgroundColor: palette.greyAmethyst,
  marginVertical: 15,
  paddingHorizontal: 10,
  paddingBottom: 15,
  borderRadius: 6,
};

const BTN_RESET: ViewStyle = {
  paddingHorizontal: 40,
  backgroundColor: palette.purplePersian,
};

const TITLE_ERROR: TextStyle = {
  color: palette.redValencia,
  fontWeight: 'bold',
  paddingVertical: 15,
};

const FRIENDLY_SUBTITLE: TextStyle = {
  color: palette.black,
  fontWeight: 'normal',
  paddingVertical: 15,
};

const CONTENT_ERROR: TextStyle = {
  color: palette.redValencia,
  fontWeight: 'bold',
  paddingVertical: 15,
};

// Uncomment this and the Text component in the Error if
// you want to see a backtrace in your error reporting screen.
const CONTENT_BACKTRACE: TextStyle = {
  color: palette.greyAmethyst,
};

export interface ErrorProps {
  error: Error;
  errorInfo: ErrorInfo;
  onReset(): void;
}

const ErrorStack: FC<ErrorProps> = ({ error, errorInfo, onReset = noop }) => (
  <View style={CONTAINER}>
    <Text style={TITLE_ERROR}>{translate('errorScreen.title')}</Text>
    <Text style={FRIENDLY_SUBTITLE}>
      {translate('errorScreen.friendlySubtitle')}
    </Text>
    <View style={ERROR_DETAILS_CONTAINER}>
      <ScrollView>
        <Text selectable style={CONTENT_ERROR}>
          {error}
        </Text>
        <Text selectable style={CONTENT_BACKTRACE}>
          {errorInfo.componentStack}
        </Text>
      </ScrollView>
    </View>
    <TouchableOpacity style={BTN_RESET} onPress={onReset}>
      <Text>{translate('errorScreen.reset')}</Text>
    </TouchableOpacity>
  </View>
);

export default ErrorStack;
