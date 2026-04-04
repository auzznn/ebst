import { io } from 'socket.io-client'

export const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL + '/chat', {
  withCredentials: true,   // ← sends cookies automatically, better-auth uses cookies
  autoConnect: false,
})