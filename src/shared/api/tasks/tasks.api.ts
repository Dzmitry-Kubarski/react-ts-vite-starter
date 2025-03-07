import { router } from 'react-query-kit'

import { ITask, TasksMutation, TasksQuery } from './types'

import { apiClient } from '@/shared/config/api-client'
import { queryClient } from '@/shared/config/query-client'

const resource = 'todos'

export const tasksApi = router(resource, {
    list: router.query<ITask[], TasksQuery['List']>({
        fetcher: (variables) =>
            apiClient.get(resource, {
                params: variables
            })
    }),

    byId: router.query<ITask, { id: number }>({
        fetcher: (variables) =>
            apiClient.get(`${resource}/${variables.id}`, {
                params: variables
            })
    }),

    update: router.mutation<ITask, { id: number; data: TasksMutation['Update'] }>({
        mutationFn: async (variables) => {
            return apiClient.patch(`${resource}/${variables.id}`, variables.data)
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: tasksApi.getKey()
            })
        }
    }),

    delete: router.mutation<void, { id: number }>({
        mutationFn: async (variables: { id: number }) => {
            return apiClient.delete(`${resource}/${variables.id}`)
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: tasksApi.getKey()
            })
        }
    })
})
