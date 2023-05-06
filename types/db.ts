import { Generated, ColumnType } from 'kysely'

export interface PersonTable {
    id: Generated<number>;
    first_name: string;
    last_name: string | null;
    email: string;
    created_at: ColumnType<Date, string | undefined, never>;
    modified_at: ColumnType<Date, string | undefined, never>;
}

export interface Database {
    person: PersonTable;
}
