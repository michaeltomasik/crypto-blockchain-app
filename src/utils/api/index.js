import axios from 'axios';
import { url } from '../../constants/url';

export const getDatasAPI = async () =>
  await axios(url);
