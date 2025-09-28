CREATE TABLE todos (
    id INTEGER PRIMARY KEY,
    content VARCHAR(50) NOT NULL
);


INSERT INTO todos (content)
VALUES ('connect sqlite database with nodejs');


INSERT INTO todos (content)
VALUES 
    ('connect sqlite database with nodejs'),
    ('connect sqlite database with nodejs')
;


DROP TABLE IF EXISTS todos;


UPDATE todos
SET content = 'install sqlite driver'
WHERE id = 1;


SELECT * FROM todos;


SELECT content
FROM todos;


SELECT content
FROM todos
WHERE content LIKE '%nodejs%';





