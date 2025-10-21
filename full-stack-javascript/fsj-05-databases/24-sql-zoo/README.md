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

<span>9.</span> Show the `name` and `population` in millions and the GDP in billions for the countries of the `continent` 'South America'. Use the ROUND function to show the values to two decimal places. For Americas show population in millions and GDP in billions both to 2 decimal places.

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

### 7 More JOIN Operations

### 8 Using NULL

### 8+ Numeric Examples

### 9- Window Function

### 9+ COVID-19

### 9 Self Join
