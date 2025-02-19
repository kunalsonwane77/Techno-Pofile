import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Profile from './Profile'
import Basic from './Basic'
import Education from './Education'
import Work from './Work'
import Certification from './Certification'
import Skill from './Skill'
import Document from './Document'

function Allroutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Basic/>}/>
            <Route path='/education' element={<Education/>}/>
            <Route path='/work' element={<Work/>}/>
            <Route path='/certification' element={<Certification/>}/>
            <Route path='/skill' element={<Skill/>}/>
            <Route path='/documents' element={<Document/>}/>
        </Routes>
    </div>
  )
}

export default Allroutes