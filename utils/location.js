const GOOGLE_API_KEY = "";

export const getMapPreview = ({ lat, long }) => {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${long}&zoom=13&size=400x200&maptype=roadmap&markers=color:blue%7Clabel:S%7C${lat},${long}&key=${GOOGLE_API_KEY}`;

  return imagePreviewUrl;
};
