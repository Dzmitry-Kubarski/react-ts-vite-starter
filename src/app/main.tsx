import React from 'react'

import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './app'
import { QueryProvider } from './providers/query-provider'

import { queryClient } from '@/shared/config/query-client'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <QueryProvider client={queryClient}>
                <App />
            </QueryProvider>
        </BrowserRouter>
    </React.StrictMode>
)
