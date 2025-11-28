SELECT 
    birth_date,
    CURDATE() AS today,
    
    -- Difference in years
    TIMESTAMPDIFF(YEAR, birth_date, CURDATE()) AS diff_years,
    
    -- Difference in months
    TIMESTAMPDIFF(MONTH, birth_date, CURDATE()) AS diff_months,
    
    -- Difference in days
    DATEDIFF(CURDATE(), birth_date) AS diff_days

FROM employees
WHERE id = 1;  -- You can change this or remove to calculate for all
