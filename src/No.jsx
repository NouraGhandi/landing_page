import React from 'react'
import './App.css';
import Background from './assets/icons/Background';
import Logo from './assets/Logo';
export default function No() {
  return (
    <div  style={{width:'full', height: 300, }} className="App">
     
      <div style={{width:'full', height: 1200, background: 'red'}}>
        <div style={{width:'full',height: 'full', background: 'pink' }}>
        <Background/>
        </div>
    
      {/* <div style={{width:'full', height: 30, background: 'green', flexDirection:"row" , alignItems:"center", justifyContent:"center"}}>
      <div style={{width:60, height: 20, background: 'yellow', justifySelf:"center", alignSelf: 'center' }}>
      <Logo/>
      </div>
     
         </div>
      */}
      </div>
     
     
  
 </div>
  )
}
