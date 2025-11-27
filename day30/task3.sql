SELECT 
    a.assignment_id,
    a.title AS assignment_title,
    a.description,
    a.due_date,
    a.max_marks,
    l.lesson_title
FROM assignments a
LEFT JOIN lessons l ON a.lesson_id = l.lesson_id
WHERE a.course_id = 1   -- replace 1 with the desired course_id
ORDER BY a.due_date ASC;
