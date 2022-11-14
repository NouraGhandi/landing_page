import React from 'react'
import Learn_btn from '../../assets/icons/Learn_btn'

const RocketComponent = ()=> {

    return(
        <div style={{ height: 400,flex:1,  background:'blue', display:"flex", flexDirection:"column", paddingRight:20, paddingLeft:20, justifyContent:"space-around"}}>
            {/** c1 */}
   <div style={{
       height:232,
       background:'yellow'
   }}> 

      <div style={{width:"48%", height:180, background:"#4BBD9B" ,display:"flex", alignItems:"center",justifyContent:"center",border:1, borderRadius:20, cursor:"pointer"}}>
       <img style={{
           width:150
       }} src= "./rocket.png"/>
      </div>

            </div>
            <div style={{
                width:300,
                height:100,
                background:'red'
            }}>
<Learn_btn style={{
    width:"inherit",
    heigt:"inherit",

}}/>
            </div>

                        {/** c2 */}


   {/* <div style={{width:"48%", height:100, background:"#4BBD9B" ,display:"flex", alignItems:"center",justifyContent:"center",border:1, borderRadius:20, cursor:"pointer"}}>
       <text style={{
           fontSize:26,
           color:"#fff",
           fontWeight:"bold"
       }}>تعلم في بيئة ممتعة</text>
            </div> */}

        </div>
    )
}
export default RocketComponent