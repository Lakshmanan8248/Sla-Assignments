-- Assuming full_name = 'John Doe'
SET @full_name = 'John Doe';

SELECT 
    SUBSTRING_INDEX(@full_name, ' ', 1) AS first_name,
    SUBSTRING_INDEX(@full_name, ' ', -1) AS last_name,
    CONCAT(LEFT(SUBSTRING_INDEX(@full_name, ' ', 1), 1), 
           LEFT(SUBSTRING_INDEX(@full_name, ' ', -1), 1)) AS initials;
