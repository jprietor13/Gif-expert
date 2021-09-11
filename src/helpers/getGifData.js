export const getGifData = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=nwVhWwSfEfq3Q0DEKZ3vXRbFZFvzFWf2&q=${encodeURI(category)}&limit=10`;
  const response = await fetch(url);
  const { data } = await response.json();
  const getData = data.map(item => {
    return {
      id: item.id,
      title: item.title,
      url: item.images?.downsized_medium.url
    }
  });
  return getData;
}