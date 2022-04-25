// this file for admin sql queries ...
const addSerial = 'insert into "Serials" ("Id", "Poster", "Title", "NumEpisodes", "AgeRating", "UserRating", "Description") values ($1,$2,$3,$4,$5,$6,$7)';


module.exports = {
  addSerial
};
