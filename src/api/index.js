import axios from "axios";

// access_token=34766b94023d9825e8812415adfef305d5aaf1fa9aa63c2c468d8c55101b8954074dcdc6bc143ae6d0a63&expires_in=86400&user_id=59994655

const proxy = 'https://hexlet-allorigins.herokuapp.com/get?url';

const type = 'photos.getAll?owner_id=-1';

const getImages = () => {
  // const url = 'https://api.vk.com/method/photos.getAll?owner_id=59994655&access_token=34766b94023d9825e8812415adfef305d5aaf1fa9aa63c2c468d8c55101b8954074dcdc6bc143ae6d0a63&v=5.52';
  // fetch(`${proxy}=${encodeURIComponent(url)}`)
  //     .then(response => {
  //       if (response.ok) {
  //         // return response.json();
  //         console.log(response);
  //         return response;
  //       } else {
  //         throw new Error('Network response was not ok.')
  //       }
  //     })

  axios.get('https://example.com').then((res) => {
    console.log(res);
  });
};

export default getImages;
