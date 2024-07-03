import React from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu'
import { useState } from 'react'

const Home = () => {

const [category, setCategory] = useState('All')

  return (
    <div> 
    <Header />
    <ExploreMenu category={category} setCategory ={setCategory}/>
    </div>
  )
}

export default Home