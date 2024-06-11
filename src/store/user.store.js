import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useUserStore = create(
  persist(
    ( set ) => ( {
      user: {
        email: '',
        token: '',
      },
      handleLogin: ( email, token) => set(({
        user: {
          email,
          token
        }
      })),
      handleLogout: () => set(({
        user: {
          email: '',
          token: ''
        }
      }))
    }), {
      name: 'user-storage'
    }
  )
);