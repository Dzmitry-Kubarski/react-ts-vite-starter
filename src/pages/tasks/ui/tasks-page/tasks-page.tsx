import { tasksApi } from '@/shared/api/tasks/tasks.api'

export const TasksPage = () => {
    const { data, isPending } = tasksApi.list.useQuery()

    if (isPending) return <div>Loading...</div>

    return (
        <div>
            TasksPage
            <div>
                {data?.map((task) => (
                    <div key={task.id}>
                        <div>Task id: {task.id}</div>
                        <div>Task is done: {task.completed ? 'Yse' : 'No'}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
