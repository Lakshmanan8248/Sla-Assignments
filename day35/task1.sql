SELECT *
FROM employees
WHERE YEAR(hire_date) = 2022;


SELECT *
FROM employees
WHERE YEAR(hire_date) = 2022
ORDER BY MONTH(hire_date);
