import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useMemo,
  ReactNode,
  useState,
  useEffect,
  useCallback,
  useContext,
} from 'react';
import { ViewStyle, Dimensions, View, Pressable } from 'react-native';
import {
  BottomSheetModal as GorhomBottomSheetModal,
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import { useAnimatedStyle } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';
import { BlurView } from '@react-native-community/blur';
import { observer } from 'mobx-react';

import { RootContext } from '@app/state';

import { useProxyRef } from '@app/utils/hooks';

import styles from './styles';
import {
  getBlurConfig,
  getModalHeight,
  getModalTheme,
  getModalIndicator,
  getBlurVariant,
} from './utils';

export interface BottomSheetModalProps {
  headerComponent?: ReactNode;
  children?: ReactNode;
  contentStyle?: ViewStyle;
  snapToContent?: boolean;
  isActionMandatory?: boolean;
  hasAnchorText?: boolean;
  scrollViewRefs?: any;
  onDismiss?: () => void;
  onLayout?: any;
}

const { height } = Dimensions.get('window');

const BottomSheetModal: ForwardRefRenderFunction<
  GorhomBottomSheetModal,
  BottomSheetModalProps
> = (
  {
    headerComponent,
    children,
    contentStyle,
    snapToContent = false,
    isActionMandatory = false,
    onDismiss,
    hasAnchorText,
    scrollViewRefs,
    ...rest
  },
  ref
) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);
  const [blur, setBlur] = useState<boolean>(false);
  // Proxy the ref defined in the parent, allowing to
  // still use the same ref for manipulating events
  const sheetRef = useProxyRef<GorhomBottomSheetModal>(ref);

  useEffect(() => {
    // create copy of original
    const present = sheetRef.current.present.bind({});

    // include setBlur
    sheetRef.current.present = function includeBlur() {
      setBlur(true);
      present();
    };

    // [empty] so only apply on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // use content to create dynamic snap points
  const contentSnapPoint = useMemo(() => ['CONTENT_HEIGHT'], []);

  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(contentSnapPoint);

  const customContentStyle = useMemo(() => [styles.content, contentStyle], [
    contentStyle,
  ]);

  const sheetAnimatedStyles = useAnimatedStyle(() =>
    getModalHeight(
      height,
      snapToContent,
      animatedContentHeight.value,
      animatedHandleHeight.value
    )
  );

  const sheetModalContainerStyle = useMemo(
    () => [styles.container, getModalTheme(theme)],
    [theme]
  );

  const sheetModalIndicator = useMemo(
    () => [styles.handleIndicator, getModalIndicator(theme)],
    [theme]
  );

  const modalTransparencyReduce = useMemo(() => getBlurConfig(theme), [theme]);

  const blurType = useMemo(() => getBlurVariant(theme), [theme]);

  const handleDismissBlur = useCallback(() => {
    if (onDismiss) {
      onDismiss();
    }
    setBlur(false);
  }, [onDismiss]);

  const closeModal = useCallback(() => {
    if (!isActionMandatory) {
      sheetRef.current.dismiss();
    }
  }, [isActionMandatory, sheetRef]);

  const blurFragment = useMemo(
    () =>
      blur && (
        <Pressable style={styles.blur} onPress={closeModal}>
          <BlurView
            style={styles.container}
            blurType={blurType}
            blurAmount={20}
            reducedTransparencyFallbackColor={modalTransparencyReduce}
          />
        </Pressable>
      ),
    [blur, blurType, modalTransparencyReduce, closeModal]
  );

  const handleIndicatorStyle = useMemo(
    () =>
      isActionMandatory
        ? [styles.spaceBottom]
        : [styles.spaceBottom, sheetModalIndicator],
    [isActionMandatory, sheetModalIndicator]
  );

  const contentSelector = useCallback(() => {
    if (children) {
      return (
        <ScrollView showsVerticalScrollIndicator style={customContentStyle}>
          {children}
        </ScrollView>
      );
    }
    if (children && hasAnchorText) {
      return (
        <ScrollView
          showsVerticalScrollIndicator
          style={customContentStyle}
          ref={scrollViewRefs}
        >
          {children}
        </ScrollView>
      );
    }
    return null;
  }, [children, customContentStyle, hasAnchorText, scrollViewRefs]);

  return (
    <>
      <GorhomBottomSheetModal
        snapPoints={animatedSnapPoints}
        handleHeight={animatedHandleHeight}
        contentHeight={animatedContentHeight}
        enablePanDownToClose={!isActionMandatory}
        keyboardBlurBehavior="restore"
        index={0}
        ref={sheetRef}
        style={styles.container}
        handleComponent={null}
        onDismiss={handleDismissBlur}
        {...rest}
      >
        <BottomSheetView
          onLayout={handleContentLayout}
          style={sheetAnimatedStyles}
        >
          <View style={sheetModalContainerStyle}>
            {/* should be modal prop handleIndicatorStyle={styles.handleIndicator} but
            dynamic content heights dont work with handle component & getModalHeight util,
            backlog: https://stackedinvest.atlassian.net/browse/APP-66 */}
            <View style={handleIndicatorStyle} />
            {headerComponent}
            {contentSelector()}
          </View>
        </BottomSheetView>
      </GorhomBottomSheetModal>
      {/* apply blur behind modal */}
      {blurFragment}
    </>
  );
};

export default observer(forwardRef(BottomSheetModal));
