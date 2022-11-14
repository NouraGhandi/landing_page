import React from 'react'
import Learn_btn from '../../assets/icons/Learn_btn'
import Twitter from '../../assets/icons/Twitter'

const TeamContainer = ({name,title,desc,img,links})=> {

    return(
      <div style={{width:"200px", height:500, display:"flex", flexDirection:"column", background:'#fff',
    padding:20, boxSizing:"border-box", justifyContent:"space-between", borderRadius:20,
     boxShadow: '-1px 1px 15px rgba(0, 0, 0, 0.25)',
    }}>
      <div>
          <img style={{
          width:"120px",
          height:"120px",
          background:'#fff',
          alignSelf:"center",
          borderRadius:"50%",
          boxShadow: '1px' ,
     boxShadow: '-2px 1px 20px rgba(0, 0, 0, 0.25)',

      }} src = {img}/>
      </div>

            <div style={{
                display:'flex',
                flexDirection:"column",
                alignItems:"center",
                justifyContent:"flex-start"
            }}>
        <text style={{
            fontSize:"20px",
            fontWeight:"bold"
        }}>{name}</text>

        <text  style={{
            fontSize:"20px",
            marginTop:"10px"
        }}>{title}</text>
        <p style={{
            fontSize:"10px",
            marginTop:"10px"
        }}>{desc}</p>
      </div>

                  <div style={{
                      display:"flex",
                      flexDirection:"row",
                      alignItems:"center",
                      justifyContent:"center"

                  }}>
          
                      <Twitter curser={"pointer"}/>
    

      </div>
    </div>
    )
}
export default TeamContainer