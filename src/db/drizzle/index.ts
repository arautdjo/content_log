import { drizzle } from "drizzle-orm/better-sqlite3";
import { postsTable } from "./schemas";
import {resolve} from 'path'
import Database from "better-sqlite3";

const sqliteDtatBasePath = resolve(process.cwd(),'db.sqlite3')
const sqliteDBInstance = Database(sqliteDtatBasePath)

export const drizzleDb = drizzle(sqliteDBInstance,{
    schema:{
        posts:postsTable
    },
    logger:false
})
