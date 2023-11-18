import { useEffect, useState } from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import EmpList from './components/EmpList.jsx'
import AddEmp from './components/AddEmp.jsx'
import EditEmp from './components/EditEmp.jsx'
import { EmpProvider } from './context/EmpContext.js'
import EditList from './components/EditList.jsx'

function App() {

  const [empData, setempData] = useState([])
  

  const addEmp = (emp) => {
    setempData((prev) => [...prev, { id:Date.now(), ...emp }])
  }
  const deleteEmp = (id) => {
    setempData((prev) => prev.filter((emp) => emp.id !== id))
  }
  const updateEmp = (id , emp) => {
     setempData((prev)=>prev.map((prevEmp)=>(
      prevEmp.id === id ? emp : prevEmp
     )))
  }
  useEffect(() => {
    const empData = JSON.parse(localStorage.getItem("employessDetails"))
    if (empData && empData.length > 0) {
      setempData(empData)
    }
  }, [])
  useEffect(() => {
    localStorage.setItem("employessDetails", JSON.stringify(empData))
  }, [empData])

  const navrouter = createBrowserRouter([

    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <EmpList />
        },
        {
          path: 'addemp',
          element: <AddEmp />
        },
        {
          path: 'editemp',
          element: <EditList />
        },
        {
          element:<EditEmp />
        }
      ]
    }
  ])

  return (

    <EmpProvider value={{ empData, addEmp, deleteEmp, updateEmp }} >
      <RouterProvider router={navrouter} />
    </EmpProvider>


  )
}

export default App

