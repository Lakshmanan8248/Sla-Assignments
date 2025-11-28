DELIMITER //

CREATE FUNCTION months_old(birth_date DATE)
RETURNS INT
DETERMINISTIC
BEGIN
    DECLARE total_months INT;
    
    -- Calculate total months between today and birth_date
    SET total_months = (YEAR(CURDATE()) - YEAR(birth_date)) * 12
                       + (MONTH(CURDATE()) - MONTH(birth_date));
