import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useUserStore = create(
  persist(
    ( set ) => ( {
      user: {
        name: '',
        email: '',
        token: '',
      },
      handleLogin: ( name, email, token) => set(({
        user: {
          name,
          email,
          token
        }
      })),
      handleLogout: () => set(({
        user: {
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