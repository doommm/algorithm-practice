# Medium

https://www.sql-practice.com/

## q1

```sql
select distinct(year(birth_date)) as birth_year from patients order by birth_year asc;
```

```sql
SELECT year(birth_date)
FROM patients
GROUP BY year(birth_date)
```

## q2

Show unique first names from the patients table which only occurs once in the list.

```sql
select first_name
from patients
group by first_name
having count(first_name) = 1;
```

## q3

Show patient_id and first_name from patients where their first_name start and ends with 's' and is at least 6 characters long.

```sql
select
  first_name,
  patient_id
from patients
where
  first_name like 's%s'
  and len(first_name) >= 6;
```

```sql
SELECT
  patient_id,
  first_name
FROM patients
WHERE first_name LIKE 's____%s';
```

```sql
SELECT
  patient_id,
  first_name
FROM patients
where
  first_name like 's%'
  and first_name like '%s'
  and len(first_name) >= 6;
```

## q4

Show patient_id, first_name, last_name from patients whos diagnosis is 'Dementia'.

Primary diagnosis is stored in the admissions table.

```sql
select
  patients.patient_id,
  first_name,
  last_name
from patients
  join admissions on patients.patient_id = admissions.patient_id
where admissions.diagnosis = 'Dementia';
```

```sql
SELECT
  patient_id,
  first_name,
  last_name
FROM patients
WHERE patient_id IN (
    SELECT patient_id
    FROM admissions
    WHERE diagnosis = 'Dementia'
  );
```

## q5

Display every patient's first_name. Order the list by the length of each name and then by alphabetically.

```sql
select first_name
from patients
order by
  len(first_name),
  first_name;
```

## q6

Show the total amount of male patients and the total amount of female patients in the patients table.
Display the two results in the same row.

```sql
select (
    select count(*)
    from patients
    where gender = 'M'
  ) as male, (
    select count(*)
    from patients
    where gender = 'F'
  ) as female;
```

```sql
SELECT
  SUM(Gender = 'M') as male_count,
  SUM(Gender = 'F') AS female_count
FROM patients
```

```sql
select
  sum(case when gender = 'M' then 1 end) as male_count,
  sum(case when gender = 'F' then 1 end) as female_count
from patients;
```

## q7

Show first and last name, allergies from patients which have allergies to either 'Penicillin' or 'Morphine'. Show results ordered ascending by allergies then by first_name then by last_name.

```sql
select
  first_name,
  last_name,
  allergies
from patients
where
  allergies in ('Penicillin', 'Morphine')
order by
  allergies asc,
  first_name,
  last_name;
```

```sql
SELECT
  first_name,
  last_name,
  allergies
FROM
  patients
WHERE
  allergies = 'Penicillin'
  OR allergies = 'Morphine'
ORDER BY
  allergies ASC,
  first_name ASC,
  last_name ASC;
```

## q8

Show the city and the total number of patients in the city.
Order from most to least patients and then by city name ascending.

```sql
select
  city,
  count(*) as total_count
from patients
group by city
order by
  total_count desc,
  city;
```

## q9

Show first name, last name and role of every person that is either patient or doctor.
The roles are either "Patient" or "Doctor"

```sql
select
  first_name,
  last_name,
  'Patient' as role
from patients
union all
select
  first_name,
  last_name,
  'Doctor' as role
from doctors;
```

## q10

Show the difference between the largest weight and smallest weight for patients with the last name 'Maroni'

```sql
select
  (max(weight) - min(weight)) as weight_delta
from patients
where last_name = 'Maroni';
```

子查询写法，会多一次查询？

```sql
select (maxw - minw) as weight_delta
from (
    select
      max(weight) as maxw,
      min(weight) as minw
    from patients
    where last_name = 'Maroni'
  );
```

## q11

Show all of the days of the month (1-31) and how many admission_dates occurred on that day. Sort by the day with most admissions to least admissions.

```sql
select
  day(admission_date) as day_number,
  count(*) as day_count
from admissions
group by day_number
order by day_count desc;
```
