import React, { FC, useContext, useMemo } from 'react';
import { View, ViewProps } from 'react-native';
import { observer } from 'mobx-react';
import { translate } from '@app/i18n';
import { getPotentialGainAvg, getPotentialLossAvg } from '@app/mocks/Riskalyze';
import { RootContext } from '@app/state';

import { baseStyles } from './styles';
import Typography from '../Typography';
import { RISK_GROUPS as riskGroups, RiskGroupTableColumns } from './constants';
import { RiskGroup } from './types';
import {
  getCustomItemColumnStyle,
  getCustomItemContainerStyle,
  getBackgroundStyle,
} from './utils';

interface RiskGroupTableProps extends ViewProps {
  title: string;
  userRiskGroupNumber?: number;
}

const RiskGroupTable: FC<RiskGroupTableProps> = ({
  title,
  userRiskGroupNumber,
  style,
}) => {
  const {
    settingsStore: { theme },
  } = useContext(RootContext);

  const renderTitle = (
    <Typography size="h6" strong style={baseStyles.title}>
      {title}
    </Typography>
  );

  const renderTableHeader = (
    <View style={baseStyles.tableHeaderContainer}>
      <Typography
        strong
        size="body2"
        variant="grey.600"
        style={baseStyles.tableHeaderItem}
      >
        {translate('components.riskGroupTable.riskGroups')}
      </Typography>
      <Typography
        strong
        size="body2"
        variant="grey.600"
        style={baseStyles.tableHeaderItem}
      >
        {translate('components.riskGroupTable.riskNumber')}
      </Typography>
      <Typography
        strong
        size="body2"
        variant="grey.600"
        style={baseStyles.tableHeaderItem}
      >
        {translate('components.riskGroupTable.potentialLossAvg')}
      </Typography>
      <Typography
        strong
        size="body2"
        variant="grey.600"
        style={baseStyles.tableHeaderItem}
      >
        {translate('components.riskGroupTable.potentialGainAvg')}
      </Typography>
    </View>
  );

  const renderTableItem = (riskGroup: RiskGroup) => {
    const itemIsSelected = riskGroup.index === userRiskGroupNumber;
    const potentialGainAvg = getPotentialGainAvg(riskGroup.index);
    const potentialLossAvg = getPotentialLossAvg(riskGroup.index);
    const riskGroupsColumnStyle = getCustomItemColumnStyle(
      RiskGroupTableColumns.GROUPS,
      itemIsSelected,
      theme
    );

    const riskNumberColumnStyle = getCustomItemColumnStyle(
      RiskGroupTableColumns.NUMBER,
      itemIsSelected,
      theme
    );

    const potentialGainAvgColumnStyle = getCustomItemColumnStyle(
      RiskGroupTableColumns.POTENTIAL_GAIN_AVG,
      itemIsSelected,
      theme
    );

    const potentialLossAvgColumnStyle = getCustomItemColumnStyle(
      RiskGroupTableColumns.POTENTIAL_LOSS_AVG,
      itemIsSelected,
      theme
    );

    const itemContainerStyle = getCustomItemContainerStyle(
      itemIsSelected,
      theme
    );

    return (
      <View style={itemContainerStyle} key={riskGroup.index.toString()}>
        <View style={baseStyles.tableColumnItem}>
          <Typography style={riskGroupsColumnStyle}>
            {riskGroup.index}
          </Typography>
        </View>
        <View style={baseStyles.tableColumnItem}>
          <Typography style={riskNumberColumnStyle}>
            {riskGroup.range}
          </Typography>
        </View>
        <View style={baseStyles.tableColumnItem}>
          <Typography style={potentialLossAvgColumnStyle}>
            {`${potentialLossAvg}%`}
          </Typography>
        </View>
        <View style={baseStyles.tableColumnItem}>
          <Typography style={potentialGainAvgColumnStyle}>
            {`${potentialGainAvg}%`}
          </Typography>
        </View>
      </View>
    );
  };

  const mappedTableItems = riskGroups.map((riskGroup) =>
    renderTableItem(riskGroup)
  );

  const tableStyles = useMemo(
    () => [baseStyles.tableContainer, getBackgroundStyle(theme), style],
    [theme, style]
  );

  return (
    <View style={tableStyles}>
      {renderTitle}
      {renderTableHeader}
      {mappedTableItems}
    </View>
  );
};

export default observer(RiskGroupTable);
