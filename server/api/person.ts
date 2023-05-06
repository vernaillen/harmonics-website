import { sql } from 'kysely'
import { createKysely } from '@vercel/postgres-kysely'
import { Database } from '~/types/db'

async function addPerson () {
  const db = createKysely<Database>()
  await db
    .insertInto('person')
    .values(
      {
        first_name: 'Wouter',
        last_name: 'Vernaillen',
        email: 'hidden'
      }
    )
    .execute()
}

async function seed () {
  const db = createKysely<Database>()
  await db.schema.createTable('person')
    .ifNotExists()
    .addColumn('id', 'serial', cb => cb.primaryKey())
    .addColumn('first_name', 'varchar(255)', cb => cb.notNull())
    .addColumn('last_name', 'varchar(255)')
    .addColumn('email', 'varchar(255)', cb => cb.notNull().unique())
    .addColumn('created_at', sql`timestamp with time zone`, cb => cb.defaultTo(sql`current_timestamp`))
    .addColumn('modified_at', sql`timestamp with time zone`, cb => cb.defaultTo(sql`current_timestamp`))
    .execute()
  await addPerson()
}

export default defineEventHandler(async () => {
  const db = createKysely<Database>()
  let data
  try {
    data = await db.selectFrom('person')
      .selectAll()
      .executeTakeFirstOrThrow()
    return {
      data
    }
  } catch (error) {
    // @ts-ignore
    if (error?.message === 'relation "person" does not exist') {
      await seed()
      data = await db.selectFrom('person').selectAll().execute()
      return {
        data
      }
    // @ts-ignore
    } else if (error?.message === 'no result') {
      await addPerson()
      data = await db.selectFrom('person').selectAll().execute()
      return {
        data
      }
    } else {
      throw error
    }
  }
})
