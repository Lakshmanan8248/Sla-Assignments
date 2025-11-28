SELECT 
    emp_code,
    LPAD(emp_code, 4, '0') AS emp_code_padded
FROM employees;
