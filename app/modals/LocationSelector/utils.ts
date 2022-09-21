import { translate } from '@app/i18n';
import { countries, states } from './mock';

export const getLocationList = (
  locationType: string,
  countrySelected: string
) => {
  if (locationType === 'country') {
    return {
      list: countries,
      title: translate('modals.locationSelector.country'),
    };
  }

  return {
    list: states[countrySelected],
    title: translate('modals.locationSelector.state'),
  };
};
