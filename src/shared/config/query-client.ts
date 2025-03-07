import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 3 * 60 * 1000,
            gcTime: 3 * 60 * 1000
        }
    }
})
