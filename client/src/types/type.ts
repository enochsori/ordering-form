export type ItemOptions = {
  value: string | 'undefined';
  label: string;
};

export type ImageFiles = {
  undefined: string;
  tshirt: string;
  socks: string;
  bottle: string;
};

export type Order = 'bottle' | 'socks' | 'tshirt' | 'undefined';
export type Size = 'small' | 'medium' | 'large' | 'xlarge' | 'undefined';

export type FormData = {
  order: Order;
  size: Size;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  province: string;
  postcode: string;
  country: string;
};

export enum ErrorMessage {
  noError = '',
  unavailable = 'Item out of stock. :(',
  repeatCustomer = 'Exiting user. Not allowed to place another order at the moment.',
  undeliverable = 'Outside of delivery zone. :(',
  missingData = `Oops! Looks like we're missing some information.`,
}

export type SubStatus = 'idle' | 'pending' | 'success' | 'confirmed' | 'error';
export type Disabled = boolean;
