SELECT 
    phone,
    REPLACE(phone, '-', '') AS phone_clean
FROM employees;
