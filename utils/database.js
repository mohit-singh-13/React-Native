import * as SQLite from "expo-sqlite";

const database = SQLite.openDatabaseSync("places.db");

export const init = async () => {
  await database.execAsync(
    `CREATE TABLE IF NOT EXISTS places (
        id INTEGER PRIMARY KEY NOT NULL, 
        title TEXT NOT NULL,
        imageUri TEXT NOT NULL,
        address TEXT NOT NULL,
        lat REAL NOT NULL,
        long REAL NOT NULL
      )`
  );
};

export const insertPlace = async (place) => {
  try {
    const result = await database.runAsync(
      "INSERT INTO places (title, imageUri, address, lat, long) VALUES (?, ?, ?, ?, ?)",
      [
        place.title,
        place.imageUri,
        place.address,
        place.location.lat,
        place.location.long,
      ]
    );
  } catch (err) {
    console.log(err);
  }
};

export const fetchPlaces = async () => {
  const result = await database.getAllAsync("SELECT * FROM places");

  return result;
};
