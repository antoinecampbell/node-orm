-- System
ALTER DATABASE item SET timezone TO 'America/New_York';

-- Common functions
CREATE OR REPLACE FUNCTION update_audit()
    RETURNS TRIGGER AS
$$
BEGIN
    NEW.last_modified_date = NOW();
    NEW.last_modified_by = CURRENT_USER;
    RETURN NEW;
END;
$$
    LANGUAGE plpgsql;

-- Item table
CREATE TABLE IF NOT EXISTS item
(
    item_id            SERIAL PRIMARY KEY                            NOT NULL,
    name               VARCHAR(50) UNIQUE                            NOT NULL,
    created_by         VARCHAR(50)              DEFAULT CURRENT_USER NOT NULL,
    last_modified_by   VARCHAR(50)              DEFAULT CURRENT_USER NOT NULL,
    created_date       TIMESTAMP WITH TIME ZONE DEFAULT NOW()        NOT NULL,
    last_modified_date TIMESTAMP WITH TIME ZONE DEFAULT NOW()        NOT NULL
);

-- Item table functions
CREATE TRIGGER item_audit_trigger
    BEFORE UPDATE
    ON item
    FOR EACH ROW
EXECUTE PROCEDURE update_audit();

-- Item table data
INSERT INTO item(name)
VALUES ('name1'),
       ('name2'),
       ('name3')
ON CONFLICT DO NOTHING;
