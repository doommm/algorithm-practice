# easy

https://www.sql-practice.com/

## answer

```sql

select
  first_name,
  last_name,
  province_name
from patients
  join province_names on patients.province_id = province_names.province_id;


select count(*) from patients where year(birth_date) = 2010;

select first_name,last_name,max(height) from patients;

select * from patients where patient_id in (1,45,534,879,1000);




```
