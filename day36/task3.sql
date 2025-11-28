SELECT 
    name,
    CONCAT(
        UPPER(LEFT(TRIM(name), 1)),       -- Capitalize first letter
        LOWER(SUBSTRING(TRIM(name), 2))   -- Lowercase the rest
    ) AS formatted_name
FROM employees;
