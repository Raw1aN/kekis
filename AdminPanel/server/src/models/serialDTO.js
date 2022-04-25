class SerialDTO {
  constructor(Id, Title, NumEpisodes, AgeRating, UserRating, Description) {
    this.Id = Id;
    this.Title = Title;
    this.NumEpisodes = NumEpisodes;
    this.AgeRating = AgeRating;
    this.UserRating = UserRating;
    this.Description = Description;
  }
}

module.exports = SerialDTO;
