import React from 'react'
import Header from '../components/Header'
import Addrestaurant from '../components/Addrestaurant'
import Restaurantlist from '../components/Restaurantlist'

const HomePage = () => {
  return (
    <div>
      <Header/>
      <Addrestaurant/>
      <Restaurantlist/>
    </div>
  )
}

export default HomePage