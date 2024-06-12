import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useUserStore = create(
  persist(
    ( set ) => ( {
      user: {
        id: null,
        name: '',
        email: '',
        token: '',
      },
      handleLogin: ( id, name, email, token) => set(({
        user: {
          id,
          name,
          email,
          token
        }
      })),
      handleLogout: () => set(({
        user: {
          id: null,
          name: '',
          email: '',
          token: ''
        }
      }))
    }), {
      name: 'user-storage'
    }
  )
);