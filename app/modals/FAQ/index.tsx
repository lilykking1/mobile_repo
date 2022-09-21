import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useCallback,
  useRef,
  useState,
} from 'react';
import { BottomSheetModal as GorhomBottomSheetModal } from '@gorhom/bottom-sheet';
import { Typography } from '@app/components';
import BottomSheetModal, {
  BottomSheetModalProps,
} from '@app/components/BottomSheetModal';
import { ScrollView, View } from 'react-native';
import { translate } from '@app/i18n';
import Header from './fragments/Header';
import styles from './styles';
import { FAQData } from './FAQData';

export interface FAQModalProps extends BottomSheetModalProps {
  anchorValue: number;
}

const FAQModal: ForwardRefRenderFunction<
  GorhomBottomSheetModal,
  FAQModalProps
> = ({ anchorValue }, refs) => {
  const dataSource = FAQData;
  const scrollToIndex = anchorValue;
  const [dataSourceCords, setDataSourceCords] = useState([]);
  const scrollRef = useRef<ScrollView>();

  const scrollHandler = useCallback(() => {
    if (dataSourceCords.length > scrollToIndex) {
      scrollRef?.current?.scrollTo({
        x: 0,
        y: dataSourceCords[scrollToIndex - 1],
        animated: true,
      });
    }
    return null;
  }, [dataSourceCords, scrollToIndex]);

  const ItemView = (item, key) => (
    <View
      key={key}
      onLayout={(event) => {
        const { layout } = event.nativeEvent;
        dataSourceCords[key] = layout.y;
        setDataSourceCords(dataSourceCords);
        scrollHandler();
      }}
    >
      <Typography strong size="h5" style={styles.titleSpace}>
        {item.title}
      </Typography>
      <View style={styles.rowView}>
        <Typography
          strong
          style={
            item.subTitle.isSubTitle
              ? [styles.strongBulletText, styles.textLineHeight]
              : styles.textLineHeight
          }
        >
          {translate('screens.prequalification.bullet')}
        </Typography>
        <Typography
          size="buttons"
          style={
            item.subTitle.isSubTitle
              ? [styles.strongBulletText, styles.textLineHeight]
              : styles.textLineHeight
          }
        >
          {item.subTitle.text}
        </Typography>
      </View>
      <View style={styles.rowView}>
        <Typography
          style={
            !item.subTitle.isSubTitle
              ? [styles.strongBulletText, styles.textLineHeight]
              : styles.textLineHeight
          }
        >
          {translate('screens.prequalification.bullet')}
        </Typography>
        <Typography
          size="buttons"
          style={
            item.body1.isSubTitle
              ? [styles.strongBulletText, styles.textLineHeight]
              : styles.textLineHeight
          }
        >
          {item.body1.text}
        </Typography>
      </View>

      {item.body2 === undefined ? null : (
        <View style={styles.rowView}>
          <Typography
            style={
              item.body2.isSubTitle
                ? [styles.strongBulletText, styles.textLineHeight]
                : styles.textLineHeight
            }
          >
            {translate('screens.prequalification.bullet')}
          </Typography>
          <Typography
            size="buttons"
            style={
              item.body2.isSubTitle
                ? [styles.strongBulletText, styles.textLineHeight]
                : styles.textLineHeight
            }
          >
            {item.body2.text}
          </Typography>
        </View>
      )}

      {item.body3 === undefined ? null : (
        <View style={styles.rowView}>
          <Typography
            style={
              !item.subTitle.isSubTitle
                ? [styles.strongBulletText, styles.textLineHeight]
                : styles.textLineHeight
            }
          >
            {translate('screens.prequalification.bullet')}
          </Typography>
          <Typography
            size="buttons"
            style={
              item.body3.isSubTitle
                ? [styles.strongBulletText, styles.textLineHeight]
                : styles.textLineHeight
            }
          >
            {item.body3.text}
          </Typography>
        </View>
      )}
      {item.body4 === undefined ? null : (
        <View style={styles.rowView}>
          <Typography
            style={
              !item.subTitle.isSubTitle
                ? [styles.strongBulletText, styles.textLineHeight]
                : styles.textLineHeight
            }
          >
            {translate('screens.prequalification.bullet')}
          </Typography>
          <Typography
            size="buttons"
            style={
              item.body4.isSubTitle
                ? [styles.strongBulletText, styles.textLineHeight]
                : styles.textLineHeight
            }
          >
            {item.body4.text}
          </Typography>
        </View>
      )}
      {item.body5 === undefined ? null : (
        <View style={styles.rowView}>
          <Typography
            style={
              !item.subTitle.isSubTitle
                ? [styles.strongBulletText, styles.textLineHeight]
                : styles.textLineHeight
            }
          >
            {translate('screens.prequalification.bullet')}
          </Typography>
          <Typography
            size="buttons"
            style={
              item.body5.isSubTitle
                ? [styles.strongBulletText, styles.textLineHeight]
                : styles.textLineHeight
            }
          >
            {item.body5.text}
          </Typography>
        </View>
      )}
      {item.body6 === undefined ? null : (
        <View style={styles.rowView}>
          <Typography
            style={
              item.subTitle.isSubTitle
                ? [styles.strongBulletText, styles.textLineHeight]
                : styles.textLineHeight
            }
          >
            {translate('screens.prequalification.bullet')}
          </Typography>
          <Typography
            size="buttons"
            style={
              item.body6.isSubTitle
                ? [styles.strongBulletText, styles.textLineHeight]
                : styles.textLineHeight
            }
          >
            {item.body6.text}
          </Typography>
        </View>
      )}
      {item.body7 === undefined ? null : (
        <View style={styles.rowView}>
          <Typography
            style={
              !item.subTitle.isSubTitle
                ? [styles.strongBulletText, styles.textLineHeight]
                : styles.textLineHeight
            }
          >
            {translate('screens.prequalification.bullet')}
          </Typography>
          <Typography
            size="buttons"
            style={
              item.body7.isSubTitle
                ? [styles.strongBulletText, styles.textLineHeight]
                : styles.textLineHeight
            }
          >
            {item.body7.text}
          </Typography>
        </View>
      )}
      {item.body8 === undefined ? null : (
        <View style={styles.rowView}>
          <Typography
            style={
              !item.subTitle.isSubTitle
                ? [styles.strongBulletText, styles.textLineHeight]
                : styles.textLineHeight
            }
          >
            {translate('screens.prequalification.bullet')}
          </Typography>
          <Typography
            size="buttons"
            style={
              item.body8.isSubTitle
                ? [styles.strongBulletText, styles.textLineHeight]
                : styles.textLineHeight
            }
          >
            {item.body8.text}
          </Typography>
        </View>
      )}
      {item.body9 === undefined ? null : (
        <View style={styles.rowView}>
          <Typography
            style={
              !item.subTitle.isSubTitle
                ? [styles.strongBulletText, styles.textLineHeight]
                : styles.textLineHeight
            }
          >
            {translate('screens.prequalification.bullet')}
          </Typography>
          <Typography
            size="buttons"
            style={
              item.body9.isSubTitle
                ? [styles.strongBulletText, styles.textLineHeight]
                : styles.textLineHeight
            }
          >
            {item.body9.text}
          </Typography>
        </View>
      )}
      {item.body10 === undefined ? null : (
        <View style={styles.rowView}>
          <Typography
            style={
              !item.subTitle.isSubTitle
                ? [styles.strongBulletText, styles.textLineHeight]
                : styles.textLineHeight
            }
          >
            {translate('screens.prequalification.bullet')}
          </Typography>
          <Typography
            size="buttons"
            style={
              item.body10.isSubTitle
                ? [styles.strongBulletText, styles.textLineHeight]
                : styles.textLineHeight
            }
          >
            {item.body10.text}
          </Typography>
        </View>
      )}
      {item.body11 === undefined ? null : (
        <View style={styles.rowView}>
          <Typography
            style={
              !item.subTitle.isSubTitle
                ? [styles.strongBulletText, styles.textLineHeight]
                : styles.textLineHeight
            }
          >
            {translate('screens.prequalification.bullet')}
          </Typography>
          <Typography
            size="buttons"
            style={
              item.body11.isSubTitle
                ? [styles.strongBulletText, styles.textLineHeight]
                : styles.textLineHeight
            }
          >
            {item.body11.text}
          </Typography>
        </View>
      )}
      {item.body12 === undefined ? null : (
        <View style={styles.rowView}>
          <Typography
            style={
              !item.subTitle.isSubTitle
                ? [styles.strongBulletText, styles.textLineHeight]
                : styles.textLineHeight
            }
          >
            {translate('screens.prequalification.bullet')}
          </Typography>
          <Typography
            size="buttons"
            style={
              item.body12.isSubTitle
                ? [styles.strongBulletText, styles.textLineHeight]
                : styles.textLineHeight
            }
          >
            {item.body12.text}
          </Typography>
        </View>
      )}
      {item.body13 === undefined ? null : (
        <View style={styles.rowView}>
          <Typography
            style={
              !item.subTitle.isSubTitle
                ? [styles.strongBulletText, styles.textLineHeight]
                : styles.textLineHeight
            }
          >
            {translate('screens.prequalification.bullet')}
          </Typography>
          <Typography
            size="buttons"
            style={
              item.body13.isSubTitle
                ? [styles.strongBulletText, styles.textLineHeight]
                : styles.textLineHeight
            }
          >
            {item.body13.text}
          </Typography>
        </View>
      )}
      {item.body14 === undefined ? null : (
        <View style={styles.rowView}>
          <Typography
            style={
              !item.subTitle.isSubTitle
                ? [styles.strongBulletText, styles.textLineHeight]
                : styles.textLineHeight
            }
          >
            {translate('screens.prequalification.bullet')}
          </Typography>
          <Typography
            size="buttons"
            style={
              item.body14.isSubTitle
                ? [styles.strongBulletText, styles.textLineHeight]
                : styles.textLineHeight
            }
          >
            {item.body14.text}
          </Typography>
        </View>
      )}
    </View>
  );

  const List = (
    <>
      <View style={styles.faqContent}>
        <Header />
        <ScrollView ref={scrollRef}>{dataSource.map(ItemView)}</ScrollView>
      </View>
    </>
  );

  return (
    <BottomSheetModal
      contentStyle={styles.content}
      ref={refs}
      headerComponent={List}
    />
  );
};
export default forwardRef(FAQModal);
