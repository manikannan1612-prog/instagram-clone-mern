import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import ViewStory from './ViewStory.jsx'
import Profile from './Profile.jsx'
import Messages from './Messages.jsx'
import Myposts from './Myposts.jsx'
import Newpost from './Newpost.jsx'

const router=createBrowserRouter(
[

{

  path:'/',
  element:<App/>
},
{
  path:'/story/:id',
  element:<ViewStory/>
},
{
  
  path:'/profile',
  element:<Profile/>

},
{
path:'/messages',
element:<Messages/>
},
{
path:'/myposts',
element:<Myposts/>
},
{
path:'newposts',
element:<Newpost/>
},
{
path:'myposts',
element:<Myposts/>
}

]

)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
