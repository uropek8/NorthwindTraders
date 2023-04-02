import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('@/components/pages/home/Home'))
const Layout = lazy(() => import('@/components/layout/Layout'))
const Search = lazy(() => import('@/components/pages/search/Search'))
const Orders = lazy(() => import('@/components/pages/orders/Orders'))
const Products = lazy(() => import('@/components/pages/products/Products'))
const Employees = lazy(() => import('@/components/pages/employees/Employees'))
const Customers = lazy(() => import('@/components/pages/customers/Customers'))
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
            <Route
              path="/employees"
              element={<Employees />}
            />
            <Route
              path="/customers"
              element={<Customers />}
            />
            <Route
              path="/search"
              element={<Search />}
            />
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}

export default App
