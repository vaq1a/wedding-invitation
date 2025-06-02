import { db } from "../../db";
import { users } from "../../db/schema";

export default defineEventHandler(async (event) => {
  const method = getMethod(event);

  try {
    switch (method) {
      case "GET":
        return await db.select().from(users).orderBy(users.name);

      case "POST": {
        const body = await readBody(event);
        const [user] = await db.insert(users).values(body).returning();
        return user;
      }

      default:
        throw createError({
          statusCode: 405,
          message: "Method not allowed",
        });
    }
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      message: error.message,
    });
  }
});
