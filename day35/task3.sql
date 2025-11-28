SELECT email, TRIM(email) AS trimmed_email
FROM employees
WHERE TRIM(email) <> email;
