import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Layout from './pages/Layout.jsx'
import NoteList from './pages/NoteList.jsx'
import NoteViewEdit from './pages/NoteViewEdit.jsx'
import CreateNotes from './pages/CreateNotes.jsx'

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
    <Route path='' element={<NoteList/>}/>,
    <Route path="note/:id" element={<NoteViewEdit/>}/>,
    <Route path='create' element={<CreateNotes/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
