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

### 4 SELECT within SELECT

### 5 SUM and COUNT

### 6 JOIN

### 7 More JOIN Operations

### 8 Using NULL

### 8+ Numeric Examples

### 9- Window Function

### 9+ COVID-19

### 9 Self Join
