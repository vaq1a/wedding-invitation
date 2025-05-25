import type { User, NewUser } from '~/server/db/schema';

export function useUsers() {
    const users = ref<User[]>([]);
    const loading = ref(false);
    const error = ref<string | null>(null);

    const fetchUsers = async () => {
        loading.value = true;
        error.value = null;
        try {
            users.value = await $fetch('/api/users');
        } catch (e: any) {
            error.value = e.message;
        } finally {
            loading.value = false;
        }
    };

    const getUser = async (id: number) => {
        loading.value = true;
        error.value = null;
        try {
            return await $fetch(`/api/users/${id}`);
        } catch (e: any) {
            error.value = e.message;
            throw e;
        } finally {
            loading.value = false;
        }
    };

    const createUser = async (user: NewUser) => {
        loading.value = true;
        error.value = null;
        try {
            const newUser = await $fetch('/api/users', {
                method: 'POST',
                body: user,
            });
            users.value.push(newUser);
            return newUser;
        } catch (e: any) {
            error.value = e.message;
            throw e;
        } finally {
            loading.value = false;
        }
    };

    const updateUser = async (id: number, user: Partial<NewUser>) => {
        loading.value = true;
        error.value = null;
        try {
            const updatedUser = await $fetch(`/api/users/${id}`, {
                method: 'PUT',
                body: user,
            });
            const index = users.value.findIndex(u => u.id === id);
            if (index !== -1) {
                users.value[index] = updatedUser;
            }
            return updatedUser;
        } catch (e: any) {
            error.value = e.message;
            throw e;
        } finally {
            loading.value = false;
        }
    };

    const deleteUser = async (id: number) => {
        loading.value = true;
        error.value = null;
        try {
            await $fetch(`/api/users/${id}`, { method: 'DELETE' });
            users.value = users.value.filter(u => u.id !== id);
        } catch (e: any) {
            error.value = e.message;
            throw e;
        } finally {
            loading.value = false;
        }
    };

    return {
        users,
        loading,
        error,
        fetchUsers,
        getUser,
        createUser,
        updateUser,
        deleteUser,
    };
}
