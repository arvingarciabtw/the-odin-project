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
