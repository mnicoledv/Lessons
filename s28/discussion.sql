--NOTE: commands: uppercase letter; tables: lowercase letters


-- list down the databases inside the DBMS
SHOW DATABASES;

--Create a database
CREATE DATABASE; music_db;

--Select to use a database
USE music_db;

--Delete a database
DROP DATABASE music_db;

--create tables
--table columns have the ff format: [column_name]
-- [data_type] [other_options]

--CREATE TABLE [table_name] ([column_name] [data_type] [other_options])

--CREATE TABLE users (

-- id INT NOT NULL AUTO_INCREMENT,
-- username VARCHAR(50) NOT NULL,
-- psword VARCHR(50) NOT NULL,
-- full_name VARCHAR(50) NOT NULL,
-- contact_number INT NOT NULL,
-- email VARCHAR (50),
-- address VARCHAR (50),

--);

--CREATE TABLE artist (
    --id INT NOT NULL AUTO_INCREMENT,
    --name VARCHAR (50) NOT NULL,
    --PRIMARY KEY (id)
    
--);


-- CREATE TABLE albums ( 
    
    --id INT NOT NULL AUTO_INCREMENT, 
    --album_title VARCHAR (50) NOT NULL, 
    --date_released DATE NOT NULL, 
    --artist_id INT NOT NULL, 
    --PRIMARY KEY (id) 
    --CONSTRAINT fk_albums_artists_id  
        --FOREIGN KEY (artist_id) REFERENCES artists (id)
        --ON UPDATE CASCADE
        --ON DELETE RESTRICT

--);

--CONSTRAINT - Specify rules for the data in a table.
-- it limits the type of data into the table to ensure table's accuracy and reliability of data 

-- ON - used to join columns
-- Cascade - simultaneously delete or update an entry from both child and parent TABLE
-- Restrict - rejects the delete or update operation for the parent table.]

--songs

-- CREATE TABLE songs (
    -- id INT NOT NULL AUTO_INCREMENT,
    -- song_name VARCHAR (50) NOT NULL,
    -- length TIME NOT NULL,
    -- genre VARCHAR(50) NOT NULL,
    -- album_id INT NOT NULL,
    -- PRIMARY KEY (id),
    -- CONSTRAINT fk_songs_albums_id
    -- FOREIGN KEY (album_id) REFERENCES albums (id)
        --ON UPDATE CASCADE
        --ON DELETE RESTRICT    
--);

-- playlist 

-- CREATE TABLE playlist (
    -- id INT NOT NULL AUTO_INCREMENT,
    -- datetime_created DATETIIME NOT NULL,
    -- user_id INT NOT NULL,
    -- song_id INT NOT NULL,
    -- PRIMARY KEY (id),
    -- CONSTRAINT fk_playlist_user_id
    -- FOREIGN KEY (user_id) REFERENCES users (id)
        --ON UPDATE CASCADE
        --ON DELETE RESTRICT,

    -- CONSTRAINT fk_playlist_songs_song_id
    -- FOREIGN KEY (song_id) REFERENCES songs (id)
        --ON UPDATE CASCADE
        --ON DELETE RESTRICT    
--);