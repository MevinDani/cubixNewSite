import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import LayOut from './LayOut';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<LayOut />}>
            <Route index element={<HomePage />} />

          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
