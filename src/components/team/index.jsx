import React from 'react'
import Learn_btn from '../../assets/icons/Learn_btn'
import Twitter from '../../assets/icons/Twitter'

const TeamContainer = ({name,title,desc,img,url})=> {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
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
        //   boxShadow: '1px' ,
     boxShadow: '-2px 1px 20px rgba(0, 0, 0, 0.25)',

      }} src = {img} 
      alt={""}
      />
      </div>

            <div style={{
                display:'flex',
                flexDirection:"column",
                alignItems:"center",
                justifyContent:"flex-start"
            }}>
        <text style={{
            fontSize:"20px",
            fontWeight:"bold",
             fontFamily:'cairo'
        }}>{name}</text>

        <text  style={{
            fontSize:"20px",
            marginTop:"10px"
            , fontFamily:'cairo'
        }}>{title}</text>
        <p style={{
            fontSize:"10px",
            marginTop:"10px"
            , fontFamily:'cairo'
        }}>{desc}</p>
      </div>

                  <div style={{
                      display:"flex",
                      flexDirection:"row",
                      alignItems:"center",
                      justifyContent:"center"

                  }}>
          <div onClick={() => openInNewTab("www.google.com")}  style={{ width:40, height:40}}>
          <Twitter  curser={"pointer"}/>
          </div>
                     
    

      </div>
    </div>
    )
}
export default TeamContainer