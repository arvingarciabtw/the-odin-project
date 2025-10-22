<h1 align="center">
  SQL Zoo 
  <h4 align="center">A compilation of my answers for SQL Zoo</h4>
</h1>

<div align="center">

[![MySQL](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=fff)](#)

</div>

## 📝 Project Description

The [project specification](https://www.theodinproject.com/lessons/node-path-databases-sql-zoo) describes the general instructions in doing the project. This project simply involves going through Tutorials 0-9 in [SQL Zoo](https://sqlzoo.net/wiki/SQL_Tutorial). This markdown file contains my answers for the tutorials.

### 0 SELECT Basics

<span>1.</span> The example uses a `WHERE` clause to show the population of 'France'. Note that strings should be in 'single quotes'. Modify it to show the population of Germany.

```sql
SELECT population FROM world
  WHERE name = 'Germany'
```

<span>2.</span> Checking a list The word `IN` allows us to check if an item is in a list. The example shows the name and population for the countries 'Brazil', 'Russia', 'India' and 'China'.
Show the name and the population for 'Sweden', 'Norway' and 'Denmark'.

```sql
SELECT name, population FROM world
  WHERE name IN ('Sweden', 'Norway', 'Denmark');
```

<span>3.</span> Which countries are not too small and not too big? `BETWEEN` allows range checking (range specified is inclusive of boundary values). The example below shows countries with an area of 250,000-300,000 sq. km. Modify it to show the country and the area for countries with an area between 200,000 and 250,000.

```sql
SELECT name, area FROM world
  WHERE area BETWEEN 200000 AND 250000
```

### 1 SELECT Name

<span>1.</span> You can use `WHERE name LIKE 'B%'` to find the countries that start with "B". The % is a wild-card it can match any characters. Find the country that start with Y.

```sql
SELECT name FROM world
  WHERE name LIKE 'Y%';
```

<span>2.</span> Find the countries that end with y.

```sql
SELECT name FROM world
  WHERE name LIKE '%y';
```

<span>3.</span> Luxembourg has an x - so does one other country. List them both. Find the countries that contain the letter x.

```sql
SELECT name FROM world
  WHERE name LIKE '%x%';
```

<span>4.</span> Iceland, Switzerland end with land - but are there others? Find the countries that end with land.

```sql
SELECT name FROM world
  WHERE name LIKE '%land';
```

<span>5.</span> Columbia starts with a C and ends with ia - there are two more like this. Find the countries that start with C and end with ia.

```sql
SELECT name FROM world
  WHERE name LIKE 'C%ia';
```

<span>6.</span> Greece has a double e - who has a double o? Find the country that has oo in the name.

```sql
SELECT name FROM world
  WHERE name LIKE '%oo%';
```

<span>7.</span> Bahamas has three a - who else? Find the countries that have three or more a in the name.

```sql
SELECT name FROM world
  WHERE name LIKE '%a%a%a%';
```

<span>8.</span> India and Angola have an n as the second character. You can use the underscore as a single character wildcard. Find the countries that have "t" as the second character.

```sql
SELECT name FROM world
  WHERE name LIKE '_t%'
  ORDER BY name;
```

<span>9.</span> Lesotho and Moldova both have two o characters separated by two other characters. Find the countries that have two "o" characters separated by two others.

```sql
SELECT name FROM world
  WHERE name LIKE '%o__o%';
```

<span>10.</span> Cuba and Togo have four characters names. Find the countries that have exactly four characters.

```sql
SELECT name FROM world
  WHERE name LIKE '____';
```

<span>11.</span> The capital of Luxembourg is Luxembourg. Show all the countries where the capital is the same as the name of the country. Find the country where the name is the capital city.

```sql
SELECT name
  FROM world
  WHERE name LIKE capital;
```

<span>12.</span> The capital of Mexico is Mexico City. Show all the countries where the capital has the country together with the word "City". Find the country where the capital is the country plus "City".

```sql
SELECT name
  FROM world
  WHERE capital LIKE '%City';
```

<span>13.</span> Find the capital and the name where the capital includes the name of the country.

```sql
SELECT capital, name
  FROM world
  WHERE capital LIKE CONCAT('%', name, '%');
```

<span>14.</span> Find the capital and the name where the capital is an extension of name of the country. You should include Mexico City as it is longer than Mexico. You should not include Luxembourg as the capital is the same as the country.

```sql
SELECT capital, name
  FROM world
  WHERE capital LIKE CONCAT(name, '%') AND capital > name;
```

<span>15.</span> The capital of Monaco is Monaco-Ville: this is the name Monaco and the extension is -Ville. Show the name and the extension where the capital is a proper (non-empty) extension of name of the country. You can use the SQL function `REPLACE`.

```sql
SELECT name, replace(capital, name, '')
  FROM world
  WHERE capital LIKE CONCAT(name, '%') AND capital > name;
```

### 2 SELECT from World

<span>1.</span> Observe the result of running this SQL command to show the name, continent and population of all countries.

```sql
SELECT name, continent, population FROM world;
```

<span>2.</span> Show the name for the countries that have a population of at least 200 million. 200 million is 200000000, there are eight zeros.

```sql
SELECT name
  FROM world
  WHERE population >= 200000000;
```

<span>3.</span> Give the `name` and the per capita GDP for those countries with a `population` of at least 200 million.

```sql
SELECT name, gdp/population AS per_capita_GDP
  FROM world
  WHERE population >= 200000000;
```

<span>4.</span> Show the `name` and `population` in millions for the countries of the `continent` 'South America'. Divide the population by 1000000 to get population in millions.

```sql
SELECT name, population/1000000 AS population_in_millions
  FROM world
  WHERE continent = 'South America';
```

<span>5.</span> Show the `name` and `population` for France, Germany, Italy.

```sql
SELECT name, population
  FROM world
  WHERE name IN ('France', 'Germany', 'Italy');
```

<span>6.</span> Show the countries which have a `name` that includes the word 'United'

```sql
SELECT name
  FROM world
  WHERE name LIKE ('%United%');
```

<span>7.</span> Two ways to be big: A country is big if it has an area of more than 3 million sq km or it has a population of more than 250 million. Show the countries that are big by area or big by population. Show name, population and area.

```sql
SELECT name, population, area
  FROM world
  WHERE area > 3000000 OR population > 250000000;
```

<span>8.</span> Exclusive OR (XOR). Show the countries that are big by area (more than 3 million) or big by population (more than 250 million) but not both. Show name, population and area.

```sql
SELECT name, population, area
  FROM world
  WHERE
    (area > 3000000 AND population < 250000000)
      OR
    (area < 3000000 AND population > 250000000);
```

<span>9.</span> Show the `name` and `population` in millions and the GDP in billions for the countries of the `continent` 'South America'. Use the `ROUND` function to show the values to two decimal places. For Americas show population in millions and GDP in billions both to 2 decimal places.

```sql
SELECT
 name,
 ROUND(population/1000000, 2) AS population_in_millions,
 ROUND(gdp/1000000000, 2) AS gdp_in_billions
  FROM world
  WHERE continent = 'South America';
```

<span>10.</span> Show the `name` and per-capita GDP for those countries with a GDP of at least one trillion (1000000000000; that is 12 zeros). Round this value to the nearest 1000. Show per-capita GDP for the trillion dollar countries to the nearest $1000.

```sql
SELECT name, ROUND(gdp/population, -3) AS per_capita_GDP
  FROM world
  WHERE gdp >= 1000000000000;
```

<span>11.</span> Greece has capital Athens. Each of the strings 'Greece', and 'Athens' has 6 characters. Show the name and capital where the name and the capital have the same number of characters.

```sql
SELECT name, capital
  FROM world
  WHERE LENGTH(name) = LENGTH(capital);
```

<span>12.</span> The capital of Sweden is Stockholm. Both words start with the letter 'S'. Show the name and the capital where the first letters of each match. Don't include countries where the name and the capital are the same word.

```sql
SELECT name, capital
  FROM world
  WHERE LEFT(name, 1) = LEFT(capital, 1) AND name != capital;
```

<span>13.</span> Equatorial Guinea and Dominican Republic have all of the vowels (a e i o u) in the name. They don't count because they have more than one word in the name. Find the country that has all the vowels and no spaces in its name.

```sql
SELECT name
  FROM world
  WHERE name NOT LIKE '% %'
    AND name LIKE '%a%'
    AND name LIKE '%e%'
    AND name LIKE '%i%'
    AND name LIKE '%o%'
    AND name LIKE '%u%';
```

### 3 SELECT from Nobel

<span>1.</span> Change the query shown so that it displays Nobel prizes for 1950.

```sql
SELECT yr, subject, winner
  FROM nobel
  WHERE yr = 1950;
```

<span>2.</span> Show who won the 1962 prize for literature.

```sql
SELECT winner
  FROM nobel
  WHERE yr = 1962
    AND subject = 'literature';
```

<span>3.</span> Show the year and subject that won 'Albert Einstein' his prize.

```sql
SELECT yr, subject
  FROM nobel
  WHERE winner = 'Albert Einstein';
```

<span>4.</span> Give the name of the 'peace' winners since the year 2000, including 2000.

```sql
SELECT winner
  FROM nobel
  WHERE subject = 'peace'
    AND yr >= 2000;
```

<span>5.</span> Show all details (yr, subject, winner) of the literature prize winners for 1980 to 1989 inclusive.

```sql
SELECT *
  FROM nobel
  WHERE subject = 'literature'
  AND (yr >= 1980 AND yr <= 1989);
```

<span>6.</span> Show all details of the presidential winners: Theodore Roosevelt, Thomas Woodrow Wilson, Jimmy Carter, Barack Obama.

```sql
SELECT * FROM nobel
 WHERE winner IN ('Theodore Roosevelt',
                  'Thomas Woodrow Wilson',
                  'Jimmy Carter',
                  'Barack Obama');
```

<span>7.</span> Show the winners with first name John.

```sql
SELECT winner
  FROM nobel
  WHERE winner LIKE 'John%';
```

<span>8.</span> Show the year, subject, and name of physics winners for 1980 together with the chemistry winners for 1984.

```sql
SELECT *
  FROM nobel
  WHERE
    (subject = 'physics' AND yr = 1980)
      OR
    (subject = 'chemistry' AND yr = 1984);
```

<span>9.</span> Show the year, subject, and name of winners for 1980 excluding chemistry and medicine.

```sql
SELECT *
  FROM nobel
  WHERE yr = 1980 AND subject NOT IN ('chemistry', 'medicine');
```

<span>10.</span> Show year, subject, and name of people who won a 'Medicine' prize in an early year (before 1910, not including 1910) together with winners of a 'Literature' prize in a later year (after 2004, including 2004).

```sql
SELECT *
  FROM nobel
  WHERE
    (subject = 'medicine' AND yr < 1910)
      OR
    (subject = 'literature' AND yr >= 2004);
```

<span>11.</span> Find all details of the prize won by PETER GRÜNBERG.

```sql
SELECT *
  FROM nobel
  WHERE winner = 'Peter Grünberg';
```

<span>12.</span> Find all details of the prize won by EUGENE O'NEILL.

```sql
SELECT *
  FROM nobel
  WHERE winner = 'Eugene O''Neill';
```

<span>13.</span> List the winners, year and subject where the winner starts with Sir. Show the most recent first, then by name order.

```sql
SELECT winner, yr, subject
  FROM nobel
  WHERE winner LIKE 'Sir%'
  ORDER BY yr DESC, winner;
```

<span>14.</span> The expression subject `IN ('chemistry', 'physics')` can be used as a value - it will be 0 or 1. Show the 1984 winners and subject ordered by subject and winner name; but list chemistry and physics last.

```sql
SELECT winner, subject
  FROM nobel
  WHERE yr = 1984
  ORDER BY subject IN ('chemistry', 'physics'), subject, winner;
```

### 4 SELECT within SELECT

<span>1.</span> List each country name where the population is larger than that of 'Russia'.

```sql
SELECT name FROM world
   WHERE population >
     (SELECT population FROM world
      WHERE name='Russia');
```

<span>2.</span> Show the countries in Europe with a per capita GDP greater than 'United Kingdom'.

```sql
SELECT name
  FROM world
  WHERE continent = 'Europe' AND gdp/population >
    (SELECT gdp/population FROM world
     WHERE name = 'United Kingdom');
```

<span>3.</span> List the name and continent of countries in the continents containing either Argentina or Australia. Order by name of the country.

```sql
SELECT name, continent
  FROM world
  WHERE continent = (SELECT continent FROM world WHERE name = 'Argentina')
           OR
        continent = (SELECT continent FROM world WHERE name = 'Australia')
  ORDER BY name;
```

<span>4.</span> Which country has a population that is more than United Kingdom but less than Germany? Show the name and the population.

```sql
SELECT name, population
  FROM world
  WHERE population > (SELECT population FROM world WHERE name = 'United Kingdom')
                      AND population <
                     (SELECT population FROM world WHERE name = 'Germany');
```

<span>5.</span> Germany (population roughly 80 million) has the largest population of the countries in Europe. Austria (population 8.5 million) has 11% of the population of Germany. Show the name and the population of each country in Europe. Show the population as a percentage of the population of Germany.

```sql
SELECT name,
  CONCAT(ROUND(100*population/(SELECT population FROM world WHERE name = 'Germany'), 0), '%')
  AS percentage
  FROM world
  WHERE continent = 'Europe';
```

<span>6.</span> Which countries have a GDP greater than every country in Europe? [Give the name only.] (Some countries may have `NULL` gdp values).

```sql
SELECT name
  FROM world
  WHERE gdp > ALL(SELECT gdp FROM world WHERE continent = 'Europe'
                  AND gdp > 0);
```

<span>7.</span> Find the largest country (by area) in each continent, show the continent, the name and the area.

```sql
SELECT continent, name, area FROM world x
  WHERE area >= ALL
    (SELECT area FROM world y
        WHERE y.continent=x.continent
          AND area>0);
```

<span>8.</span> List each continent and the name of the country that comes first alphabetically.

```sql
SELECT continent, name
  FROM world x
  WHERE name <= ALL(SELECT name
                    FROM world y
                    WHERE x.continent = y.continent);
```

<span>9.</span> Find the continents where all countries have a population <= 25000000. Then find the names of the countries associated with these continents. Show name, continent and population.

```sql
SELECT name, continent, population
  FROM world x
  WHERE 25000000 >= ALL(SELECT population
                        FROM world y
                        WHERE x.continent = y.continent);
```

<span>10.</span> Some countries have populations more than three times that of all of their neighbours (in the same continent). Give the countries and continents.

```sql
SELECT name, continent
  FROM world x
  WHERE x.population > ALL(SELECT y.population * 3
                           FROM world y
                           WHERE x.continent = y.continent
                           AND x.name != y.name
                           AND population != 0);
```

### 5 SUM and COUNT

<span>1.</span> Show the total population of the world.

```sql
SELECT SUM(population) FROM world;
```

<span>2.</span> List all the continents - just once each.

```sql
SELECT DISTINCT continent FROM world;
```

<span>3.</span> Give the total GDP of Africa.

```sql
SELECT SUM(gdp)
  FROM world
  WHERE continent = 'AFrica';
```

<span>4.</span> How many countries have an area of at least 1000000?

```sql
SELECT COUNT(name)
  FROM world
  WHERE area >= 1000000;
```

<span>5.</span> What is the total population of ('Estonia', 'Latvia', 'Lithuania')?

```sql
SELECT SUM(population)
  FROM world
  WHERE name IN ('Estonia', 'Latvia', 'Lithuania');
```

<span>6.</span> For each continent show the continent and number of countries.

```sql
SELECT DISTINCT continent, COUNT(name)
  FROM world
  GROUP BY continent;
```

<span>7.</span> For each continent show the continent and number of countries with populations of at least 10 million.

```sql
SELECT DISTINCT continent, COUNT(name)
  FROM world
  WHERE population >= 10000000
  GROUP BY continent;
```

<span>8.</span> List the continents that have a total population of at least 100 million.

```sql
SELECT DISTINCT continent
  FROM world
  GROUP BY continent
  HAVING SUM(population) >= 100000000;
```

### 6 JOIN

<span>1.</span> The first example shows the goal scored by a player with the last name 'Bender'. The `*` says to list all the columns in the table - a shorter way of saying `matchid, teamid, player, gtime`. Modify it to show the matchid and player name for all goals scored by Germany.

```sql
SELECT matchid, player FROM goal
  WHERE teamid = 'GER';
```

<span>2.</span> From the previous query you can see that Lars Bender's scored a goal in game 1012. Now we want to know what teams were playing in that match.

```sql
SELECT id, stadium, team1, team2
  FROM game
  WHERE id = 1012;
```

<span>3.</span> Modify it to show the player, teamid, stadium and mdate for every German goal.

```sql
SELECT player, teamid, stadium, mdate
  FROM game JOIN goal ON (id = matchid) WHERE teamid = 'GER';
```

<span>4.</span> Show the team1, team2 and player for every goal scored by a player called Mario.

```sql
SELECT team1, team2, player
  FROM  game JOIN goal ON (id = matchid) WHERE player LIKE 'Mario%';
```

<span>5.</span> The table `eteam` gives details of every national team including the coach. Show `player, teamid, coach, gtime` for all goals scored in the first 10 minutes.

```sql
SELECT player, teamid, coach, gtime
  FROM goal JOIN eteam ON teamid = id
  WHERE gtime <= 10;
```

<span>6.</span> List the dates of the matches and the name of the team in which 'Fernando Santos' was the `team1` coach.

```sql
SELECT mdate, teamname
  FROM game JOIN eteam ON (team1 = eteam.id)
  WHERE coach = 'Fernando Santos';
```

<span>7.</span> List the player for every goal scored in a game where the stadium was 'National Stadium, Warsaw'.

```sql
SELECT player
  FROM game JOIN goal ON id = matchid
  WHERE stadium = 'National Stadium, Warsaw';
```

<span>8.</span> Instead show the name of all players who scored a goal against Germany. Select goals scored only by non-German players in matches where GER was the id of either `team1` or `team2`.

```sql
SELECT DISTINCT player
  FROM game JOIN goal ON matchid = id
    WHERE teamid != 'GER'
    AND ((team1 != 'GER' AND team2 = 'GER') OR
         (team1 = 'GER' AND team2 != 'GER'));
```

<span>9.</span> Show `teamname` and the total number of goals scored.

```sql
SELECT teamname, COUNT(matchid)
  FROM eteam JOIN goal ON id = teamid
  GROUP BY teamname;
```

<span>10.</span> Show the stadium and the number of goals scored in each stadium.

```sql
SELECT stadium, COUNT(matchid)
  FROM game JOIN goal ON id = matchid
  GROUP BY stadium;
```

<span>11.</span> For every match involving 'POL', show the `matchid`, date and the number of goals scored.

```sql
SELECT matchid, mdate, COUNT(teamid)
  FROM game
    JOIN goal ON game.id = goal.matchid
    JOIN eteam ON goal.teamid = eteam.id
  WHERE ((team1 = 'POL' AND team2 != 'POL') OR
         (team1 != 'POL' AND team2 = 'POL'))
  GROUP BY matchid, mdate;
```

<span>12.</span> For every match where 'GER' scored, show `matchid`, match date and the number of goals scored by 'GER'.

```sql
SELECT matchid, mdate, COUNT(teamid)
  FROM game
    JOIN goal ON game.id = goal.matchid
    JOIN eteam ON goal.teamid = eteam.id
  WHERE teamid = 'GER'
  GROUP BY matchid, mdate;
```

<span>13.</span> List every match with the goals scored by each team as shown. This will use `CASE WHEN` which has not been explained in any previous exercises. Sort your result by `mdate`, `matchid`, `team1` and `team2`.

```sql
SELECT
  mdate,
  team1, SUM(CASE WHEN teamid = team1 THEN 1 ELSE 0 END) score1,
  team2, SUM(CASE WHEN teamid = team2 THEN 1 ELSE 0 END) score2
  FROM game LEFT JOIN goal
    ON matchid = id
    GROUP BY mdate, matchid, team1, team2;
```

### 7 More JOIN Operations

<span>1.</span> List the films where the yr is 1962 and the budget is over 2000000.

```sql
SELECT id, title
  FROM movie
  WHERE yr = 1962 AND budget > 2000000;
```

<span>2.</span> Give year of 'Citizen Kane'.

```sql
SELECT yr
  FROM movie
  WHERE title = 'Citizen Kane';
```

<span>3.</span> List all of the Star Trek movies, include the id, title and yr (all of these movies start with the words Star Trek in the title). Order results by year.

```sql
SELECT id, title, yr
  FROM movie
  WHERE title LIKE ('Star Trek%')
  ORDER BY yr;
```

<span>4.</span> What id number does the actor 'Glenn Close' have?

```sql
SELECT id
  FROM actor
  WHERE name = 'Glenn Close';
```

<span>5.</span> What is the id of the 1942 film 'Casablanca'

```sql
SELECT id
  FROM movie
  WHERE title = 'Casablanca' AND yr = 1942;
```

<span>6.</span> Obtain the cast list for 1942's 'Casablanca'.

```sql
SELECT actor.name
  FROM movie
  JOIN casting ON casting.movieid = movie.id
  JOIN actor ON casting.actorid = actor.id
  WHERE yr = 1942 AND title = 'Casablanca';
```

<span>7.</span> Obtain the cast list for the film 'Alien'

```sql
SELECT actor.name
  FROM movie
  JOIN casting ON casting.movieid = movie.id
  JOIN actor ON casting.actorid = actor.id
  WHERE title = 'Alien';
```

<span>8.</span> List the films in which 'Harrison Ford' has appeared.

```sql
SELECT title
  FROM movie
  JOIN casting ON casting.movieid = movie.id
  JOIN actor ON casting.actorid = actor.id
  WHERE actor.name = 'Harrison Ford';
```

<span>9.</span> List the films where 'Harrison Ford' has appeared - but not in the starring role.

```sql
SELECT title
  FROM movie
  JOIN casting ON casting.movieid = movie.id
  JOIN actor ON casting.actorid = actor.id
  WHERE actor.name = 'Harrison Ford' AND ord != 1;
```

<span>10.</span> List the films together with the leading star for all 1962 films.

```sql
SELECT title, name
  FROM movie
  JOIN casting ON casting.movieid = movie.id
  JOIN actor ON casting.actorid = actor.id
  WHERE yr = 1962 AND ord = 1;
```

<span>11.</span> Which were the busiest years for 'Rock Hudson', show the year and the number of movies he made each year for any year in which he made more than 2 movies.

```sql
SELECT yr, COUNT(title) AS num_of_movies_he_made
  FROM movie
    JOIN casting ON movie.id=movieid
    JOIN actor   ON actorid=actor.id
  WHERE name='Rock Hudson'
  GROUP BY yr
  HAVING COUNT(title) > 2;
```

<span>12.</span> List the film title and the leading actor for all of the films 'Julie Andrews' played in.

```sql
SELECT title, name FROM movie
JOIN casting ON (casting.movieid = movie.id AND ord = 1)
JOIN actor ON casting.actorid = actor.id
WHERE movie.id
  IN (SELECT movieid FROM casting
      WHERE actorid IN (
        SELECT id FROM actor
        WHERE name = 'Julie Andrews'));
```

<span>13.</span> Obtain a list, in alphabetical order, of actors who've had at least 15 starring roles.

```sql
SELECT actor.name
  FROM actor
  JOIN casting ON casting.actorid = actor.id
  WHERE ord = 1
  GROUP BY name
  HAVING COUNT(actor.id) >= 15
  ORDER BY name;
```

<span>14.</span> List the films released in the year 1978 ordered by the number of actors in the cast, then by title.

```sql
SELECT title, COUNT(casting.actorid) AS num_of_actors
  FROM movie
  JOIN casting ON casting.movieid = movie.id
  WHERE yr = '1978'
  GROUP BY movie.id, movie.title
  ORDER BY COUNT(casting.actorid) DESC, movie.title;
```

<span>15.</span> List all the people who have worked with 'Art Garfunkel'.

```sql
SELECT DISTINCT actor.name
  FROM movie
    JOIN casting ON casting.movieid = movie.id
    JOIN actor ON casting.actorid = actor.id
  WHERE movie.id IN (SELECT movieid FROM casting
                     JOIN actor ON id = actorid
                     WHERE actor.name = 'Art Garfunkel')
  AND actor.name != 'Art Garfunkel';
```

### 8 Using NULL

<span>1.</span> List the teachers who have `NULL` for their department.

```sql
SELECT name FROM teacher WHERE dept IS NULL;
```

<span>2.</span> Note the `INNER JOIN` misses the teachers with no department and the departments with no teacher.

```sql
SELECT teacher.name, dept.name
  FROM teacher
    INNER JOIN dept ON (teacher.dept = dept.id);
```

<span>3.</span> Use a different `JOIN` so that all teachers are listed.

```sql
SELECT teacher.name, dept.name
  FROM teacher
    LEFT JOIN dept ON (teacher.dept = dept.id);
```

<span>4.</span> Use a different `JOIN` so that all departments are listed.

```sql
SELECT teacher.name, dept.name
  FROM teacher
    RIGHT JOIN dept ON (teacher.dept = dept.id);
```

<span>5.</span> Use `COALESCE` to print the mobile number. Use the number '07986 444 2266' if there is no number given. Show teacher name and mobile number or '07986 444 2266'.

```sql
SELECT name, COALESCE(mobile, '07986 444 2266') FROM teacher;
```

<span>6.</span> Use the `COALESCE` function and a `LEFT JOIN` to print the teacher name and department name. Use the string 'None' where there is no department.

```sql
SELECT teacher.name, COALESCE(dept.name, 'None')
  FROM teacher
    LEFT JOIN dept ON dept.id = dept;
```

<span>7.</span> Use `COUNT` to show the number of teachers and the number of mobile phones.

```sql
SELECT COUNT(name), COUNT(mobile) FROM teacher;
```

<span>8.</span> Use `COUNT` and `GROUP BY` dept.name to show each department and the number of staff. Use a `RIGHT JOIN` to ensure that the Engineering department is listed.

```sql
SELECT dept.name, COUNT(teacher.name) AS num_of_staff
  FROM teacher
    RIGHT JOIN dept ON dept.id = dept
    GROUP BY dept.name;
```

### 8+ Numeric Examples

<span>1.</span> Show the percentage who STRONGLY AGREE.

```sql
SELECT A_STRONGLY_AGREE FROM nss
  WHERE question='Q01'
    AND institution='Edinburgh Napier University'
    AND subject='(8) Computer Science';
```

<span>2.</span> Show the institution and subject where the score is at least 100 for question 15.

```sql
SELECT institution, subject FROM nss
  WHERE score >= 100 AND question = 'Q15';
```

<span>3.</span> Show the institution and score where the score for '(8) Computer Science' is less than 50 for question 'Q15'.

```sql
SELECT institution, score FROM nss
  WHERE question='Q15'
    AND score < 50
    AND subject='(8) Computer Science';
```

<span>4.</span> Show the subject and total number of students who responded to question 22 for each of the subjects '(8) Computer Science' and '(H) Creative Arts and Design'.

```sql
SELECT subject, SUM(response) FROM nss
  WHERE question = 'Q22'AND
    ((subject = '(8) Computer Science') OR
     (subject = '(H) Creative Arts and Design'))
  GROUP BY subject;
```

<span>5.</span> Show the subject and total number of students who A_STRONGLY_AGREE to question 22 for each of the subjects '(8) Computer Science' and '(H) Creative Arts and Design'.

```sql
SELECT subject, SUM(response*A_STRONGLY_AGREE/100) AS num_of_strongly_agree
  FROM nss
  WHERE question = 'Q22'AND
    ((subject = '(8) Computer Science') OR
     (subject = '(H) Creative Arts and Design'))
  GROUP BY subject;
```

<span>6.</span> Show the percentage of students who A_STRONGLY_AGREE to question 22 for the subject '(8) Computer Science' show the same figure for the subject '(H) Creative Arts and Design'.

```sql
SELECT subject, ROUND(SUM(response*A_STRONGLY_AGREE)/SUM(response),0) AS perc_of_strongly_agree
  FROM nss
  WHERE question = 'Q22'AND
    ((subject = '(8) Computer Science') OR
     (subject = '(H) Creative Arts and Design'))
  GROUP BY subject;
```

<span>7.</span> Show the average scores for question 'Q22' for each institution that include 'Manchester' in the name.

```sql
SELECT DISTINCT institution,
  ROUND(SUM(response * score) / SUM(response), 0) AS score
    FROM nss
    WHERE question='Q22' AND (institution LIKE '%Manchester%')
    GROUP BY institution;
```

<span>8.</span> Show the institution, the total sample size and the number of computing students for institutions in Manchester for 'Q01'.

```sql
SELECT institution, SUM(sample),
  SUM(CASE WHEN subject LIKE '(8)%' THEN sample END)
    FROM nss
    WHERE question = 'Q01' AND (institution LIKE '%Manchester%')
    GROUP  BY institution;
```

### 9- Window Function

<span>1.</span> Show the lastName, party and votes for the constituency 'S14000024' in 2017.

```sql
SELECT lastName, party, votes FROM ge
  WHERE constituency = 'S14000024' AND yr = 2017
  ORDER BY votes DESC;
```

<span>2.</span> Show the party and RANK for constituency S14000024 in 2017. List the output by party.

```sql
SELECT party, votes,
       RANK() OVER (ORDER BY votes DESC) as posn
  FROM ge
  WHERE constituency = 'S14000024' AND yr = 2017
  ORDER BY party;
```

<span>3.</span> Use PARTITION to show the ranking of each party in S14000021 in each year. Include yr, party, votes and ranking (the party with the most votes is 1).

```sql
SELECT yr, party, votes,
       RANK() OVER (PARTITION BY yr ORDER BY votes DESC) as posn
  FROM ge
  WHERE constituency = 'S14000021'
  ORDER BY party, yr;
```

<span>4.</span> Use PARTITION BY constituency to show the ranking of each party in Edinburgh in 2017. Order your results so the winners are shown first, then ordered by constituency.

```sql
SELECT constituency, party, votes,
       RANK() OVER (PARTITION BY constituency ORDER BY votes DESC) as posn
  FROM ge
  WHERE constituency BETWEEN 'S14000021' AND 'S14000026'
  AND yr  = 2017
  ORDER BY posn, constituency;
```

<span>5.</span> Show the parties that won for each Edinburgh constituency in 2017.

```sql
SELECT constituency, party FROM
  (
  SELECT
     constituency,
     party,
     RANK() OVER(
     PARTITION BY constituency
      ORDER BY votes DESC) AS posn
   FROM ge
   WHERE yr = '2017'
     AND (constituency BETWEEN 'S14000021' AND 'S14000026')
   ) AS rank
WHERE posn = 1;
```

<span>6.</span> Show how many seats for each party in Scotland in 2017.

```sql
SELECT party, SUM(posn) seats FROM
  (
    SELECT party,
      RANK() OVER (PARTITION BY constituency ORDER BY votes DESC) AS posn
    FROM ge
    WHERE (yr = 2017) AND (constituency LIKE 'S%')
  ) AS rank
WHERE posn = 1
GROUP BY party;
```

### 9+ COVID-19

<span>1.</span> Modify the query to show data from Spain.

```sql
SELECT name, DAY(whn), confirmed, deaths, recovered
  FROM covid
  WHERE name = 'Spain' AND MONTH(whn) = 3 AND YEAR(whn) = 2020
  ORDER BY whn;
```

<span>2.</span> Modify the query to show confirmed for the day before.

```sql
SELECT name, DAY(whn), confirmed,
  LAG(confirmed, 1) OVER (PARTITION BY name ORDER BY whn) AS dbf
  FROM covid
  WHERE name = 'Italy' AND MONTH(whn) = 3 AND YEAR(whn) = 2020
  ORDER BY whn;
```

<span>3.</span> Show the number of new cases for each day, for Italy, for March.

```sql
SELECT name, DAY(whn),
       confirmed - (LAG(confirmed, 1)
       OVER (PARTITION BY name ORDER BY whn)) AS new
  FROM covid
  WHERE name = 'Italy' AND MONTH(whn) = 3 AND YEAR(whn) = 2020
  ORDER BY whn;
```

<span>4.</span> Show the number of new cases in Italy for each week in 2020 - show Monday only.

```sql
SELECT name, DATE_FORMAT(whn,'%Y-%m-%d') AS date,
       confirmed - (LAG(confirmed, 1)
       OVER (PARTITION BY name ORDER BY whn)) AS new
  FROM covid
  WHERE name = 'Italy' AND WEEKDAY(whn) = 0 AND YEAR(whn) = 2020
  ORDER BY whn;
```

<span>5.</span> Show the number of new cases in Italy for each week - show Monday only.

```sql
SELECT tw.name, DATE_FORMAT(tw.whn,'%Y-%m-%d') AS date,
       tw.confirmed - lw.confirmed AS new
  FROM covid tw LEFT JOIN covid lw ON
  DATE_ADD(lw.whn, INTERVAL 1 WEEK) = tw.whn
  AND tw.name=lw.name
  WHERE tw.name = 'Italy' AND WEEKDAY(tw.whn) = 0
  ORDER BY tw.whn;
```

<span>6.</span> Add a column to show the ranking for the number of deaths due to COVID.

```sql
SELECT
    name,
    confirmed,
    RANK() OVER (ORDER BY confirmed DESC) AS rank_confirmed,
    deaths,
    RANK() OVER (ORDER BY deaths DESC) AS rank_deaths
  FROM covid
  WHERE whn = '2020-04-20'
  ORDER BY confirmed DESC;
```

<span>7.</span> Show the infection rate ranking for each country. Only include countries with a population of at least 10 million.

```sql
SELECT
    world.name,
    ROUND(100000*confirmed/population,2) AS infection_rate,
    RANK() OVER(ORDER BY 100000*confirmed/population) AS rank_ir
  FROM covid
  JOIN world ON covid.name = world.name
  WHERE whn = '2020-04-20' AND population > 10000000
  ORDER BY population DESC;
```

<span>8.</span> For each country that has had at least 20000 new cases in a single day, show name of country, the date of the peak number of new cases and the peak value.

```sql
SELECT name, DATE_FORMAT(whn, '%Y-%m-%d') AS date, new_cases AS peakNewCases
  FROM (
    SELECT name, whn, new_cases,
           RANK() OVER (PARTITION BY name ORDER BY new_cases DESC) as ranking
      FROM (
        SELECT name, whn,
               confirmed - LAG(confirmed, 1) OVER
               (PARTITION BY name ORDER BY whn) AS new_cases
        FROM covid
           ) AS c
      WHERE c.new_cases >= 20000
       ) c1
  WHERE ranking = 1
  ORDER BY name;
```

### 9 Self Join

<span>1.</span> How many stops are in the database?

```sql
SELECT COUNT(*) FROM stops;
```

<span>2.</span> Find the id value for the stop 'Craiglockhart'.

```sql
SELECT id FROM stops WHERE name = 'Craiglockhart';
```

<span>3.</span> Give the id and the name for the stops on the '4' 'LRT' service.

```sql
SELECT id, name FROM stops
  JOIN route ON route.stop = stops.id
  WHERE company = 'LRT' AND num = '4';
```

<span>4.</span> The query shown gives the number of routes that visit either London Road (149) or Craiglockhart (53). Run the query and notice the two services that link these stops have a count of 2. Add a HAVING clause to restrict the output to these two routes.

```sql
SELECT company, num, COUNT(*) FROM route
  WHERE stop = 149 OR stop = 53
  GROUP BY company, num
  HAVING COUNT(*) = 2;
```

<span>5.</span> Execute the self join shown and observe that b.stop gives all the places you can get to from Craiglockhart, without changing routes. Change the query so that it shows the services from Craiglockhart to London Road.

```sql
SELECT a.company, a.num, a.stop AS a_stop, b.stop AS b_stop
  FROM route a
  JOIN route b ON (a.company = b.company AND a.num = b.num)
  WHERE a.stop = 53 AND b.stop = 149;
```

<span>6.</span> The query shown is similar to the previous one, however by joining two copies of the stops table we can refer to stops by name rather than by number. Change the query so that the services between 'Craiglockhart' and 'London Road' are shown. If you are tired of these places try 'Fairmilehead' against 'Tollcross'.

```sql
SELECT a.company, a.num, stopa.name AS stop_a_name, stopb.name AS stop_b_name
  FROM route a JOIN route b ON
    (a.company=b.company AND a.num=b.num)
    JOIN stops stopa ON (a.stop=stopa.id)
    JOIN stops stopb ON (b.stop=stopb.id)
  WHERE stopa.name='Craiglockhart' AND stopb.name='London Road';
```

<span>7.</span> Give a list of all the services which connect stops 115 and 137 ('Haymarket' and 'Leith').

```sql
SELECT DISTINCT a.company, a.num
  FROM route a
  JOIN route b ON (a.company = b.company AND a.num = b.num)
  WHERE a.stop = 115 AND b.stop = 137;
```

<span>8.</span> Give a list of the services which connect the stops 'Craiglockhart' and 'Tollcross'.

```sql
SELECT a.company, a.num
  FROM route a JOIN route b ON
    (a.company=b.company AND a.num=b.num)
    JOIN stops stopa ON (a.stop=stopa.id)
    JOIN stops stopb ON (b.stop=stopb.id)
  WHERE stopa.name='Craiglockhart' AND stopb.name='Tollcross';
```

<span>9.</span> Give a distinct list of the stops which may be reached from 'Craiglockhart' by taking one bus, including 'Craiglockhart' itself, offered by the LRT company. Include the company and bus no. of the relevant services.

```sql
SELECT DISTINCT stopb.name AS name, a.company, a.num
  FROM route a JOIN route b ON
    (a.company=b.company AND a.num=b.num)
    JOIN stops stopa ON (a.stop=stopa.id)
    JOIN stops stopb ON (b.stop=stopb.id)
  WHERE stopa.name = 'Craiglockhart' AND a.company = 'LRT';
```

<span>10.</span> Find the routes involving two buses that can go from Craiglockhart to Lochend.
Show the bus no. and company for the first bus, the name of the stop for the transfer, and the bus no. and company for the second bus.

```sql
SELECT DISTINCT a.num, a.company, stopb.name ,  c.num,  c.company
  FROM route a
  JOIN route b ON (a.company = b.company AND a.num = b.num)
  JOIN ( route c JOIN route d ON (c.company = d.company AND c.num= d.num))
  JOIN stops stopa ON (a.stop = stopa.id)
  JOIN stops stopb ON (b.stop = stopb.id)
  JOIN stops stopc ON (c.stop = stopc.id)
  JOIN stops stopd ON (d.stop = stopd.id)
  WHERE  stopa.name = 'Craiglockhart'
    AND stopd.name = 'Lochend'
    AND  stopb.name = stopc.name
  ORDER BY a.num, stopb.name, c.num;
```
