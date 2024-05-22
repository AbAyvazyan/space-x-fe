import { HomeDataType } from 'src/types';
import axios from '../../axios';

const GET = '/api/posts/';

export const getData = async () => {
  try {
    return (await axios.get<HomeDataType>(GET)).data;
  } catch (err) {
    console.error(err);
  }
};
