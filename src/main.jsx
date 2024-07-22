import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/Home/App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NewsPage from './routes/News/NewsPage.jsx'
import ErrorPage from './components/errorPage.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    errorElement:<ErrorPage />
  },
  {
    path:"/news",
    element: <NewsPage />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
