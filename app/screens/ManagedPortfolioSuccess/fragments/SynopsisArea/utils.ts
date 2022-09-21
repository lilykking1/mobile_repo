import { getSynopsisDescription } from '@app/mocks/ManagedPortfolio';

// TODO : Call api when we have backend
export const getSynopsis = (riskNumber: number): Promise<string> =>
  new Promise((resolve) => resolve(getSynopsisDescription(riskNumber)));
