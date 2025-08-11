const GOOGLE_API_KEY = "";

export const getMapPreview = ({ lat, long }) => {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${long}&zoom=13&size=400x200&maptype=roadmap&markers=color:blue%7Clabel:S%7C${lat},${long}&key=${GOOGLE_API_KEY}`;

  return imagePreviewUrl;
};

export const getAddress = async ({ lat, long }) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${GOOGLE_API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();

  const address = data.results[0].formatted_address;
  
  return address;
};
