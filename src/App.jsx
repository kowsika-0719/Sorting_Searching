import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import StudentDetails from './Components/StudentDetails';
import StudentEntry from './Components/StudentEntry';
import { ToastContainer } from 'react-toastify';
function App() {
    return (
        <>
        <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<StudentDetails />} />
                    <Route path="/student" element={<StudentEntry />} />
                </Routes>
        </Router>
        <ToastContainer />
        </>
        
    );
}

export default App;
