import React, { Suspense } from 'react'
// import Reff from './components/Reff'
import Refff from './components/Refff'
import { Route, Routes } from 'react-router-dom'
// import Profile from './components/Profile'
const Profile = React.lazy(()=>import('./components/Profile') )

// import Dashboard from './components/Dashboard'
const Dashboard = React.lazy( ()=>import('./components/Dashboard') )

import Home from './components/Home'

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Home />} path='/' /> {/*root route*/}
        <Route element={<Suspense fallback="loading1..."> <Dashboard /> </Suspense>} path='/dashboard' />
        <Route element={<Suspense fallback="loading2..."> <Profile /> </Suspense>} path='/profile' />
      </Routes>

      {/* <div>
        <Refff />
      </div> */}
    </div>
  )
}

export default App