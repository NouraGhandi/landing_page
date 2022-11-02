import React from 'react';
// import './App.css';
import SIcon from './assets/icons/SIcon';
import WIcon from './assets/icons/WIcon';
import AIcon from './assets/icons/AIcon';
import RIcon from './assets/icons/RIcon';
import Background from './assets/icons/Background';
import Logoyellow from './assets/icons/Logoyellow';

function App() {
  return (
  
        <div style={{width:'full', height:'full'}}>
          {/* <div style={{width:'full', height:'full'}}>
          <Background/>
          </div> */}

  {/* <div style={{
    position:"absolute",
    zIndex:10,
    top:0,
    right:0,

  }}>

    <div style={{
      marginTop: 400,
      marginRight: 150,
      alignItems: 'center',
    
    }}>
  <p style={{fontSize: 18, textAlign: 'center', color:'white'}}>لعبة تأخذك في جولات وتحديات مختلفة من  <br/>المستقبل وتساعدك لتتعلم حماية خصوصية<br/> في الانترنت</p>
  <button style={{width:150, height: 50,  marginLeft: 80, background:'#4BBD9B', color:'white', borderColor:'#4BBD9B', borderRadius:12,  fontSize:20, }}>اطلب تجربة</button>
    </div>
  
  
  </div> */}
  {/* <div style={{width:'full',height:'full',  }} >
  <p style={{textAlign:'center',fontSize:40, fontWeight:'bolder'}}>نعلم الاطفال الخصوصية</p>
  <p style={{textAlign:'center',fontSize:20, }}>هدفنا في لعبة سوار أن نعلم الاطفال كيف يتعاملون مع خصوصية بياناتهم ويحفظونها<br/> 
  وذلك ضمن لعبة مصممة لتحقق الفائدة والمتعة في آن واحد</p>
  </div> */}

  {/* componant 2  */}
  <div style={{width:'full', height:150,marginTop:100 ,flexDirection:'row', display:'flex'}}>
    <div style={{width:'25%', flexDirection:'row-reverse', display:'flex',justifyContent:'center',}}>
    <RIcon/>
  <div style={{display:'flex', flexDirection:'column', marginRight:30, }}>
    <h1 style={{textAlign:'end', }}>راشد</h1>
    <h5 style={{textAlign:'end', marginTop:0}}>في اتخاذ القرارات <br/> المتعلقة بخصوصيتي</h5>
  </div>
    </div>
    <div style={{width:'25%',flexDirection:'row-reverse', display:'flex',justifyContent:'center',}}><AIcon/>
  <div style={{display:'flex', flexDirection:'column', marginRight:30, }}>
    <h1 style={{textAlign:'end', }}>أحترم</h1>
    <h5 style={{textAlign:'end', marginTop:0}}>خصوصية الاخرين في <br/>عالم الانترنت</h5>
  </div>
  </div>
    <div style={{width:'25%', flexDirection:'row-reverse', display:'flex',justifyContent:'center',}}><WIcon/>
  <div style={{display:'flex', flexDirection:'column', marginRight:30, }}>
    <h1 style={{textAlign:'end', }}>واعِ</h1>
    <h5 style={{textAlign:'end', marginTop:0}}>بأهمية خصوصية في <br/>سعالم الانترنت</h5>
  </div></div>
    <div style={{width:'25%', flexDirection:'row-reverse', display:'flex',justifyContent:'center', }}>
  <SIcon/>
  <div style={{display:'flex', flexDirection:'column', marginRight:30,  }}>
    <h1 style={{textAlign:'end', }}>سريع</h1>
    <h5 style={{textAlign:'end', marginTop:0}}>في تلقي المعلومات<br/> والاستفادة منها</h5>
  </div>

    </div>
  </div>

  {/* componant 3 */}
  <div style={{width:'full', height:400,  flexDirection:'row-reverse', display:'flex',justifyContent:'center',marginTop:20}}>
  <div style={{width:'50%',marginTop:60}}>
  <h1 style={{textAlign:'center', }}>الخصوصية</h1>
  <h2 style={{textAlign:'center',marginTop:-20 }}>في عالم الانترنت</h2>
  <h5 style={{textAlign:'center', marginTop:-10}}>كل شيء تفعله على جهازك اليوم مثل البحث عن طريقة عمل أكله معينه<br/> 
  أو اللعب يعتبر بيانات شخصية تستفيد منها الشركات و تمثل أرباح للمجرمين<br/> 
  لذلك يجب توعية الاطفال عن ماهي الخصوصية في عالم الانترنت وكيف يحافظون<br/>
  على خصوصيتهم</h5>
  </div>
  <div style={{width:'50%' , background:'pink'}}>
    {/* <AirplaneIcon/> */}
  </div>
  </div>

  {/* componant 4*/}
  {/* <div style={{width:'full', height:400,  flexDirection:'row-reverse', display:'flex',justifyContent:'center',marginTop:20, }}>
  <div style={{width:'60%',background:'grey'}}>

  </div>
  <div style={{width:'40%', flexDirection:'center', display:'flex',justifyContent:'center', marginTop:50, background:'black'   }}>
  
  </div>
  </div> */}
  {/* componant 5*/}
  <h1 style={{textAlign:'center', marginTop:150, width:'auto', height:'auto'}}>فريق العمل</h1>

  <Logoyellow/>
        </div>
   
  );
}


export default App;
