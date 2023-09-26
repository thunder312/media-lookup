INSERT INTO `medialookup`.`films`
(
`name`,
`year`,
`rating`,
`location`,
`media`,
`notes`,
`url`)
VALUES
(
'American Pie 4 - Das Klassentreffen',
STR_TO_DATE('04-26-2012','%m-%d-%Y'),
9, -- rating
1, -- location
2, -- media
'', -- notes
'https://www.imdb.com/title/tt0328828/?ref_=fn_al_tt_1');
SET @last_film_id = LAST_INSERT_ID();

/*id, name, notes
'1', 'Action', ''
'2', 'Krimi', ''
'3', 'Drama', ''
'4', 'Fantasy', ''
'5', 'Horror', ''
'6', 'Komödie', ''
'7', 'Romanze', ''
'8', 'Science-Fiction', ''
'9', 'Sport', ''
'10', 'Thriller', ''
'11', 'Mystery', ''
'12', 'Krieg', ''
'13', 'Western', ''
*/

INSERT INTO `medialookup`.`filmsgenres`
(`filmId`,
`genreId`)
VALUES
(@last_film_id,
6);

