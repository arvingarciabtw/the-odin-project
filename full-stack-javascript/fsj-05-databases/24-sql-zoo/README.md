<h1 align="center">
  SQL Zoo 
  <h4 align="center">A compilation of my answers for SQL Zoo</h4>
</h1>

<div align="center">

[![SQL](https://img.shields.io/badge/SQL-4479A1?logo=sql&logoColor=fff)](#)

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
