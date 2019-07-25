import axios from 'axios';
import { addressData } from '../../constants/url';

export const getAddressDataAPI = async ({ address, filter }) =>
  await axios(`${addressData}/${address}?cors=true&filter=${filter}`);
