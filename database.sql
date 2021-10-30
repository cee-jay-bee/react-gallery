CREATE TABLE images (
    id integer DEFAULT nextval('untitled_table_id_seq'::regclass) PRIMARY KEY,
    path text,
    description text,
    likes integer
);