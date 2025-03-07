import { Link, Outlet, Route, Routes } from 'react-router-dom'

import { ServerErrorPage } from '@/pages/error'
import { MainPage } from '@/pages/main'
import { TasksPage } from '@/pages/tasks'
import { ROUTES } from '@/shared/routes'

const App = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to={ROUTES.HOME}>Home</Link>
                </li>

                <li>
                    <Link to={ROUTES.TASKS}>Tasks</Link>
                </li>
            </ul>

            <div>
                <Routes>
                    <Route path={ROUTES.ROOT} element={<Outlet />}>
                        <Route path={ROUTES.HOME} element={<MainPage />} />
                        <Route path={ROUTES.TASKS} element={<TasksPage />} />

                        <Route path={ROUTES.SERVER_ERROR} element={<ServerErrorPage />} />
                    </Route>
                </Routes>
            </div>
        </>
    )
}

export default App
