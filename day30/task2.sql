ALTER TABLE assignments
ADD lesson_id INT AFTER course_id;

ALTER TABLE assignments
ADD CONSTRAINT fk_assignments_lesson
    FOREIGN KEY (lesson_id) REFERENCES lessons(lesson_id)
    ON DELETE SET NULL
    ON UPDATE CASCADE;
