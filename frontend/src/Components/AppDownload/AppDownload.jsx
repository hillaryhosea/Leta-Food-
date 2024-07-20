 
 import React from 'react'
 import './AppDownload.css'
import { assets } from '../../assets/assets'
 
 export const AppDownload = () => {
   return (
     <div className='app-download' id='app-download'>
     <p>For better experience Download <br></br>Leta Food</p>
     <div className='app-download-platforms'>
        <img src={assets.play_store} />
        <img src={assets.app_store} />
     </div>
     </div>
   )
 }
 