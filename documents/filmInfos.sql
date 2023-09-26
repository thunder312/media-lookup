SELECT f.*, GROUP_CONCAT(g.name SEPARATOR ', ') as genre, l.name as ort, r.description as rating, m.name as media FROM medialookup.films f
INNER JOIN filmsgenres fg On f.id = fg.filmid
INNER Join genre g ON fg.genreid = g.id
INNER Join location l on f.location = l.id
INNER JOIN rating r on f.rating = r.id
INNER JOIN media m on f.media = m.id
GROUP BY f.id;
