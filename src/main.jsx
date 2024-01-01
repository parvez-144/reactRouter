import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Router,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home/Home"
import About from './components/About/About'
import Layout from './Layout.jsx'
import Contact from './components/contact/Contact';
import User from './components/User/User';
import Github, { githubInfoLoader } from './components/gitHub/Github';


// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       },
//     ]
//   }
// ])
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="contact" element={<Contact/>}/>
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="user" element={<User/>}>
        <Route path=":userId" element={<User/>}/>
      </Route>
      <Route 
      loader={githubInfoLoader}
      path="github" element={<Github/>}/>
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
