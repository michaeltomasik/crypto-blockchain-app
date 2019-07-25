import axios from 'axios';
import { addressData } from '../../constants/url';

export const getAddressDataAPI = async ({ address, currency, params }) => {
  const queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');

  return  await axios(`${addressData}/${address}?cors=true&${queryString}`);
}
