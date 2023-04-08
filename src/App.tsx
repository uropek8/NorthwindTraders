import { lazy, Suspense, useState, useRef, useEffect } from 'react'
import { Toast } from 'primereact/toast'
import { Routes, Route } from 'react-router-dom'

import { ISqlMetric } from '@/types/types'
import LogContext from '@/contex/log/LogContext'

const Home = lazy(() => import('@/components/pages/home/Home'))
const Layout = lazy(() => import('@/components/layout/Layout'))
const Order = lazy(() => import('@/components/pages/order/Order'))
const Search = lazy(() => import('@/components/pages/search/Search'))
const Orders = lazy(() => import('@/components/pages/orders/Orders'))
const Product = lazy(() => import('@/components/pages/product/Product'))
const Customer = lazy(() => import('@/components/pages/customer/Customer'))
const Supplier = lazy(() => import('@/components/pages/supplier/Supplier'))
const Products = lazy(() => import('@/components/pages/products/Products'))
const Employee = lazy(() => import('@/components/pages/employee/Employee'))
const Employees = lazy(() => import('@/components/pages/employees/Employees'))
const Customers = lazy(() => import('@/components/pages/customers/Customers'))
const Dashboard = lazy(() => import('@/components/pages/dashboard/Dashboard'))
const Suppliers = lazy(() => import('@/components/pages/suppliers/Suppliers'))

const App = () => {
  const [metrics, setMetrics] = useState<Partial<ISqlMetric[]>>([])
  const [errorMsg, setErrorMsg] = useState<string>('')
  const refToast = useRef<Toast>(null)

  useEffect(() => {
    initErrorMessage()
  }, [errorMsg])

  const initErrorMessage = () => {
    if (!errorMsg) return

    refToast.current?.show({
      detail: errorMsg,
      severity: 'error',
      summary: 'Request Error',
    })
  }

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <LogContext.Provider
          value={{
            metrics,
            fetchErrorMsg: errorMsg,
            updateErrorMsg: setErrorMsg,
            updateLogMetrics: setMetrics,
          }}
        >
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
                path="/supplier/:id"
                element={<Supplier />}
              />
              <Route
                path="/products"
                element={<Products />}
              />
              <Route
                path="/product/:id"
                element={<Product />}
              />
              <Route
                path="/orders"
                element={<Orders />}
              />
              <Route
                path="/order/:id"
                element={<Order />}
              />
              <Route
                path="/employees"
                element={<Employees />}
              />
              <Route
                path="/employee/:id"
                element={<Employee />}
              />
              <Route
                path="/customers"
                element={<Customers />}
              />
              <Route
                path="/customer/:id"
                element={<Customer />}
              />
              <Route
                path="/search"
                element={<Search />}
              />
            </Route>
          </Routes>
        </LogContext.Provider>
      </Suspense>
      <Toast ref={refToast} />
    </>
  )
}

export default App
