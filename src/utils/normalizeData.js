const normalizeData = (rawData) => {
  const filteredItems = rawData.reduce((acc, item) => {
    if (!item.attachments) {
      return acc;
    }
    const { attachments } = item;
    const photos = attachments.filter((el) => el.type === 'photo');
    return photos.length > 0 ? [...acc, photos] : acc;
  }, []).flat();

  return filteredItems.map((item) => {
    const { photo } = item;

    if (!photo['photo_1280']) {
      return null;
    }
    return { src: photo['photo_1280'], id: photo.id };
  }).filter((item) => item !== null);
};

export default normalizeData;
