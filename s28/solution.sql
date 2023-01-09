CREATE DATABASE enrollment_db;

USE enrollment_db;
CREATE TABLE students (

id INT NOT NULL AUTO_INCREMENT,
student_name VARCHAR(50) NOT NULL,
PRIMARY KEY (id) 
);

CREATE TABLE student_courses (

id INT NOT NULL AUTO_INCREMENT,
PRIMARY KEY (id) 
    CONSTRAINT fk_courses_id  
        FOREIGN KEY (courses_id) REFERENCES courses (id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT,

PRIMARY KEY (id) 
    CONSTRAINT fk_students_student_id  
        FOREIGN KEY (students_id) REFERENCES students (id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);

CREATE TABLE courses (

id INT NOT NULL AUTO_INCREMENT,
course_name VARCHAR(50) NOT NULL,
PRIMARY KEY (id) 
    CONSTRAINT fk_courses_teacher_id  
        FOREIGN KEY (teachers_id) REFERENCES teachers (id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT

);

CREATE TABLE teachers (

id INT NOT NULL AUTO_INCREMENT,
teacher_name VARCHAR(50) NOT NULL,
);


