import {
  invalidLocations,
  invalidIps,
} from '../modals/NotAvailableLocation/mock';

export const isIpValid = (ip: string) => {
  const invalidLocation = invalidIps.find((deviceIp) => deviceIp.ip === ip);

  return invalidLocation;
};

export const isCountryOrStateValid = (country: string, state?: string) => {
  const invalidLocation = invalidLocations.find(
    (location) => location === country || location === state
  );

  return invalidLocation;
};
