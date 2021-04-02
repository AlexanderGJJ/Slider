import axios from "axios";

const getImages = () => { //добавить async?
  axios.get('api/get.images').then((res) => {
    console.log(res.data);
  });
};

export default getImages;
