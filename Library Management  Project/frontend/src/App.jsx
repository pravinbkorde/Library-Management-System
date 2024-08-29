import React from 'react'
import Navbar from './components/Navbar'
import AvailableBooks from './components/AvailableBooks'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './assets/css/main.css'
import StudentInfo from './components/StudentInfo';
import AddBook from './components/AddBook';
import Ranted from './components/Ranted';
import PageNotFound from './components/PageNotFound';
import AvailableBooksTable from './components/AvailableBooksTable'
import ViewBook from './components/ViewBook';
import Footer from './components/Footer';
import DetailStudent from './components/DetailStudent';
import Sendemail from './components/Sendemail';
export default function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<AvailableBooks/>} />
          <Route path='/studentform' element={<StudentInfo/>} />
          <Route path='/addbook' element={<AddBook/>} />
          <Route path='/ranted' element={<Ranted/>} />
          <Route path='/detailstudent/:id' element={<DetailStudent/>} />
          <Route path='/viewbook/:id' element={<ViewBook/>} />
          <Route path='/sendmail/:id' element={<Sendemail/>} />
          <Route path='*' element={<PageNotFound/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}
