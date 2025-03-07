import { ListQueryParamsDto } from '@/shared/lib/utility-types'

export type TasksListQueryDto = ListQueryParamsDto

export interface TaskUpdateDto {
    title?: string
    id: number
}

export interface ITask {
    userId: number
    id: string
    title: string
    completed: boolean
}

export interface TasksQuery {
    List: TasksListQueryDto
}

export interface TasksMutation {
    Update: TaskUpdateDto
}
