import React, { FC, useCallback, useMemo, useRef, useState } from 'react';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

import { Alert } from '@app/models';
import { Modal } from '@app/modals';
import { translate } from '@app/i18n';
import { ContainerWithScrollableHeader, SafeArea } from '@app/components';
import useStickyHandler from '@app/hooks/useStickyHandler';
import {
  getPeriodShortLabel,
  PeriodFilterShortLabels,
} from '@app/utils/periodIntervalSelection';

import { logAmplitudeEvent } from '@app/utils/amplitude';
import { AmplitudeDashboardEvents } from '@app/utils/amplitude/constants/dashboard/events';
import { AmplitudeDashboardProps } from '@app/utils/amplitude/constants/dashboard/properties';
import { FixedHeader, Header, Content } from '../../fragments';
import { portfolioData } from '../../mock';
import { BITCOIN_SUFFIX, DOLLAR_CHAR } from '../../constants';

import styles from './styles';

interface DashboardPopulatedProps {
  alerts?: Alert[];
  newPortfolioToReview?: {
    initialInvestment: number;
    defaultRisk: number;
    newRisk: number;
  };
  newRealocatedPortfolio?: {
    defaultRisk: number;
    newRisk: number;
  };
}

const DashboardPopulated: FC<DashboardPopulatedProps> = ({
  alerts,
  newPortfolioToReview,
  newRealocatedPortfolio,
}) => {
  const periodBottomSheetFilterRef = useRef<BottomSheetModal>(null);

  const [isValuesSecret, setIsValueSecret] = useState(false);
  const [isValuesInBitcoin, setIsValuesInBitcoin] = useState<boolean>(false);

  const [period, setPeriod] = useState<string>(
    translate('modals.Interval.24hours')
  );
  const [periodLabel, setPeriodLabel] = useState<string>(
    PeriodFilterShortLabels.ONE_DAY
  );

  const handleToggleValuesSecret = useCallback(() => {
    const data = {};
    data[`${AmplitudeDashboardProps.BUTTON_STATE}`] = isValuesSecret
      ? AmplitudeDashboardProps.HIDE
      : AmplitudeDashboardProps.UNHIDE;
    logAmplitudeEvent(AmplitudeDashboardEvents.HIDE_OR_UNHIDE, data);
    setIsValueSecret((currentValue) => !currentValue);
  }, [isValuesSecret]);

  const handleToggleCurrency = useCallback(() => {
    setIsValuesInBitcoin((currentValue) => !currentValue);
  }, []);

  const handleClosePeriodFilter = useCallback(
    () => periodBottomSheetFilterRef.current?.close(),
    []
  );

  const handleSelectPeriod = useCallback(
    (selectedPeriod) => {
      const periodShortLabel = getPeriodShortLabel(selectedPeriod);
      setPeriodLabel(periodShortLabel);
      setPeriod(selectedPeriod);

      handleClosePeriodFilter();
    },
    [handleClosePeriodFilter]
  );

  const handleOpenPeriodFilter = useCallback(
    () => periodBottomSheetFilterRef.current?.present(),
    []
  );

  const valuesPrefixAndSuffix = useMemo(() => {
    if (isValuesInBitcoin) {
      return {
        prefix: undefined,
        suffix: BITCOIN_SUFFIX,
      };
    }

    return {
      prefix: DOLLAR_CHAR,
      suffix: undefined,
    };
  }, [isValuesInBitcoin]);

  const { scroll, handleScrollWithScrollView } = useStickyHandler(undefined);

  const stickyHeader = (
    <FixedHeader
      scrollYValue={scroll}
      isValuesSecret={isValuesSecret}
      isValuesInBitcoin={isValuesInBitcoin}
      prefixValues={valuesPrefixAndSuffix.prefix}
      suffixValues={valuesPrefixAndSuffix.suffix}
      alerts={alerts}
      portfolioValue={portfolioData.totalInvested}
      onPressSecretAction={handleToggleValuesSecret}
      onPressToggleCurrency={handleToggleCurrency}
    />
  );

  const header = (
    <Header
      handleOpenPeriodFilter={handleOpenPeriodFilter}
      isValuesInBitcoin={isValuesInBitcoin}
      isValuesSecret={isValuesSecret}
      periodLabel={periodLabel}
      prefixValue={valuesPrefixAndSuffix.prefix}
      suffixValue={valuesPrefixAndSuffix.suffix}
    />
  );

  const content = (
    <Content
      isValuesInBitcoin={isValuesInBitcoin}
      isValuesSecret={isValuesSecret}
      prefixValue={valuesPrefixAndSuffix.prefix}
      suffixValue={valuesPrefixAndSuffix.suffix}
      newPortfolioToReview={newPortfolioToReview}
      newRealocatedPortfolio={newRealocatedPortfolio}
    />
  );

  return (
    <>
      <SafeArea secondary edges={['top']} style={styles.container}>
        <ContainerWithScrollableHeader
          stickyHeader={stickyHeader}
          regularHeader={header}
          content={content}
          onScroll={handleScrollWithScrollView}
        />
      </SafeArea>

      <Modal.PeriodFilter
        ref={periodBottomSheetFilterRef}
        selected={period}
        onSelect={handleSelectPeriod}
      />
    </>
  );
};

export default DashboardPopulated;
