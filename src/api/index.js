import axios from 'axios';
import normalizeData from '../utils/normalizeData';

const getImages = () => {
  return axios.get('api/get.images').then(({ data }) => {
    const rawData = data.response.items;
    return normalizeData(rawData);
  });
};

export default getImages;
