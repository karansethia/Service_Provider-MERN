import React from "react"
import Navbar from "./components/Navbar/Navbar"
import Footer from './components/Footer/Footer'
import Home from './pages/home/Home'
import AddService from './pages/addService/AddService'
import Chat from './pages/chat/Chat'
import Messages from './pages/messages/Messages'
import Orders from './pages/orders/Orders'
import SellerDash from './pages/sellerDash/SellerDash'
import ServiceList from './pages/serviceList/ServiceList'
import SingleService from './pages/singleService/SingleService'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom'
import './app.scss'

function App() {

  const Layout = () => {
    return (
      <div className="app">

      <Navbar />
      <Outlet />
      <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/servicelist',
          element: <ServiceList />
        },
        {
          path: '/singleservice/:id',
          element: <SingleService />
        },
        {
          path: '/orders',
          element: <Orders />
        },
        {
          path: '/sellerdash',
          element: <SellerDash />
        },
        {
          path: '/addservice',
          element: <AddService />
        },
        {
          path: '/messages',
          element: <Messages />
        },
        {
          path: '/chat/:id',
          element: <Chat />
        },
      ]
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
