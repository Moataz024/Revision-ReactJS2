
import './App.css'
import React, { Suspense } from 'react'
import { Route , Routes } from 'react-router-dom'
import NotFound from './components/NotFound'
import NavigationBar from './components/NavigationBar'
import EventDetails from './components/EventDetails'
import AddEvent from './components/AddEvent'
import UpdateEvent from './components/UpdateEvent'
import { fetchEvents } from './redux/slices/eventsSlice'
import { useDispatch } from 'react-redux'
import Competitions from "./components/components/Competitions.jsx";
import CompetitionDetails from "./components/components/CompetitionDetails";
import Home from "./components/components/Home.jsx";


const Events = React.lazy(()=>import('./components/Events'))
function App() {

  const dispatch =useDispatch()

  return (
<>

<NavigationBar/>

<Suspense fallback={<p>Loading ...</p>}>
<Routes>

  <Route path="competitions" element={<Competitions/>}/>
  <Route path="competitions/details/:id" element={<CompetitionDetails/>}/>
  <Route path="home" element={<Home/>}/>
  <Route path="*" element={<NotFound/>}/>

</Routes>
</Suspense>
</>



      
  )
}

export default App
