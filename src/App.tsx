import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('@/components/pages/home/Home'))
const Layout = lazy(() => import('@/components/layout/Layout'))
const Orders = lazy(() => import('@/components/pages/orders/Orders'))
const Products = lazy(() => import('@/components/pages/products/Products'))
const Dashboard = lazy(() => import('@/components/pages/dashboard/Dashboard'))
const Suppliers = lazy(() => import('@/components/pages/suppliers/Suppliers'))

const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<Layout />}>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/dashboard"
              element={<Dashboard />}
            />
            <Route
              path="/suppliers"
              element={<Suppliers />}
            />
            <Route
              path="/products"
              element={<Products />}
            />
            <Route
              path="/orders"
              element={<Orders />}
            />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
