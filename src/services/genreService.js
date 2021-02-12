export const genres = [
    { _id: "1", name: "Action" },
    { _id: "2", name: "Comedy" },
    { _id: "3", name: "Drama" },
    { _id: "4", name: "Romantic" },
    { _id: "5", name: "Thriller" }
  ];
  
  export function getGenres() {
    return genres.filter(g => g);
  }
  