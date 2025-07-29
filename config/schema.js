
import { boolean, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const Users=pgTable('users',{
    id: serial('id').primaryKey(),
    name:varchar('name',255).notNull(),
    email:varchar('email',255).notNull().unique(),
    imageURL:varchar('imageURL',255),
    password:varchar('password',255).notNull(),
    subscription: boolean('subscription').default(false),
})