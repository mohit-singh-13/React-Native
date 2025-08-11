export class Place {
  constructor(title, imageUri, location) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = location.address;
    this.location = { lat: location.lat, long: location.long };
    this.id =
      Date.now().toString() + Math.floor(Math.random() * 1000000).toString();
  }
}
