export default defineEventHandler(async (event) => {
    const method = getMethod(event);
    const id = parseInt(event.context.params.id);

    try {
        switch (method) {
            case 'GET': {
                const [user] = await db
                    .select()
                    .from(users)
                    .where(eq(users.id, id));

                if (!user) {
                    throw createError({
                        statusCode: 404,
                        message: 'User not found',
                    });
                }

                return user;
            }

            case 'PUT': {
                const body = await readBody(event);
                const [user] = await db
                    .update(users)
                    .set(body)
                    .where(eq(users.id, id))
                    .returning();

                if (!user) {
                    throw createError({
                        statusCode: 404,
                        message: 'User not found',
                    });
                }

                return user;
            }

            case 'DELETE': {
                await db.delete(users).where(eq(users.id, id));
                return { success: true };
            }

            default:
                throw createError({
                    statusCode: 405,
                    message: 'Method not allowed',
                });
        }
    } catch (error: any) {
        throw createError({
            statusCode: 500,
            message: error.message,
        });
    }
});
