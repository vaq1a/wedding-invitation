import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  fullName: varchar("fullName", { length: 255 }).notNull(),
  presence: varchar("presence", { length: 255 }).notNull(),
  agreement: varchar("agreement", { length: 255 }).notNull(),
  music: varchar("music", { length: 255 }),
});
