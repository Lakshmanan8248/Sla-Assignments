SELECT 
    id,
    first_name,
    hire_date,
    DATEDIFF(NOW(), hire_date) AS days_worked
FROM employees
WHERE id = 1;
