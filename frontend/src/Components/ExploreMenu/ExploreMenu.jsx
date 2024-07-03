import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({Category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1> Explore Our menu </h1>
        <p className='explore-menu-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div className='explore-menu-list'>
            {menu_list.map((item, index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_image?'All':item.menu_name)} key={index} className='explore-menu-list-item' >
                        <img className={Category===item.menu_name?'active':''} src={item.menu_image} alt='' />
                        <p> {item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr/>
    </div>
  )
}

export default ExploreMenu