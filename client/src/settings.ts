import { ErrorMessage, FormData, ImageFiles, ItemOptions } from './types/type';

export const itemOptions: ItemOptions[] = [
  { value: 'undefined', label: 'Pick an item' },
  { value: 'tshirt', label: 'T-shirt' },
  { value: 'socks', label: 'Socks' },
  { value: 'bottle', label: 'Bottle' },
];

export const sizeOptions: ItemOptions[] = [
  { value: 'undefined', label: 'Select' },
  { value: 'small', label: 'Small' },
  { value: 'medium', label: 'Medium' },
  { value: 'large', label: 'Large' },
  { value: 'xlarge', label: 'Extra-large' },
];

export const imageFiles: ImageFiles = {
  undefined: 'question.jpg',
  tshirt: 'tshirt.png',
  socks: 'socks.jpg',
  bottle: 'bottle.png',
};

export const initialState: FormData = {
  order: undefined,
  size: undefined,
  firstName: '',
  lastName: '',
  email: '',
  address: '',
  province: '',
  postcode: '',
  country: '',
};

export const errorMessages = {
  unavailable: ErrorMessage.unavailable,
  'repeat-customer': ErrorMessage.repeatCustomer,
  undeliverable: ErrorMessage.undeliverable,
  'missing-data': ErrorMessage.missingData,
};
