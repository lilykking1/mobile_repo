export const invalidLocations = ['France', 'New York', 'Argentina', 'Texas'];
export const invalidIps = [
  { ip: '15.206.252.0', location: 'Texas' },
  { ip: '66.164.120.0', location: 'Texas' },
  { ip: '15.252.124.0', location: 'Texas' },
  { ip: '31.13.94.0', location: 'France' },
  { ip: '24.232.135.0', location: 'France' },
  { ip: '2.4.38.255', location: 'Argentina' },
  { ip: '62.34.32.0', location: 'Argentina' },
  { ip: '24.169.74.0', location: 'New York' },
  { ip: '12.152.235.255', location: 'New York' },
];

const validIp = '66.4.209.0';
const invalidIp = '15.206.252.0';

export const mockedIps = { validIp, invalidIp };
