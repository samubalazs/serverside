export const truncate = (string, limit) =>
  string.length <= limit ? string : `${string.substr(0, limit)}...`;

export const linkId = (id) =>
  '/film/' + id;

export const listGenres = (genres, limit) =>
  !limit || genres.length <= limit ?
    genres.join(', ') :
    `${genres.slice(0, limit).join(', ')}...`;

export const releaseDate = (date) =>
  date.split('-')[0];
