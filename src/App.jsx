import React from 'react';
import './index.css';
import SIcon from './assets/icons/SIcon';
import WIcon from './assets/icons/WIcon';
import AIcon from './assets/icons/AIcon';
import RIcon from './assets/icons/RIcon';
import Background from './assets/icons/Background';
import Logoyellow from './assets/icons/Logoyellow';
// import Rocket from './assets/icons/Rocket';
// import RocketComponent from './components/rocket-container';
import TeamContainer from './components/team';
import Nouri from './assets/icons/Noura.jpg';
import Raghad from './assets/icons/Raghad.jpg';
import Farah from './assets/icons/Farah.jpg';
import Shatha from './assets/icons/Shatha.jpg';
import Lujain from './assets/icons/Lujain.jpg';
import SiwarVid from './assets/icons/SiwarVid.mp4';
import AirplaneIcon from './assets/icons/AirplaneIcon';
// import CircleBlue from './assets/icons/CircleBlue';

function App() {
  return (
  
        <div style={{width:'100%', height:'100%',}}>
         
          <Background/>
        
        
  <div style={{
    position:"absolute",
    zIndex:10,
    top:0,
    right:0,

  }}>
   
 
    <div style={{
      marginTop: 10,
      marginRight: 80,
      width: 450,
      display:'flex',
      flexDirection:'row-reverse'
    }}>
  <a style={{fontSize: 18,  color:'white', marginRight: 50}} href={'#about'}>من نحن؟</a>
  
  <a style={{fontSize: 18,  color:'white',marginRight: 50 }} href={'#try'}>التجربة</a>
  <a style={{fontSize: 18,  color:'white', marginRight: 50}} href={'#about'}>الميزات</a>
  <a style={{fontSize: 18,  color:'white', marginRight: 50}} href={'#team'}>الفريق</a>
 
   
    </div>


    <div style={{
      marginTop: 400,
      marginRight: 150,
      alignItems: 'center',
    
    }}>
  <p style={{fontSize: 18, textAlign: 'center', color:'white'}} id={'try'}>لعبة تأخذك في جولات وتحديات مختلفة من  <br/>المستقبل وتساعدك لتتعلم حماية خصوصية<br/> في الانترنت</p>
  <button style={{width:150, height: 50,  marginLeft: 120, background:'#4BBD9B', color:'white', borderColor:'#4BBD9B', borderRadius:12,  fontSize:20, boxShadow: '-2px 1px 20px rgba(0, 0, 0, 0.25)' }} >اطلب تجربة</button>
    </div>
  
  
  </div>
  <div style={{width:'full',height:'full',  }} id={'about'} >
  <p style={{textAlign:'center',fontSize:40, fontWeight:'bolder'}}>نعلم الاطفال الخصوصية</p>
  <p style={{textAlign:'center',fontSize:20, }}>هدفنا في لعبة سوار أن نعلم الاطفال كيف يتعاملون مع خصوصية بياناتهم ويحفظونها<br/> 
  وذلك ضمن لعبة مصممة لتحقق الفائدة والمتعة في آن واحد</p>
  </div>

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
  <div style={{width:'100%', height:300,  flexDirection:'row-reverse', display:'flex',justifyContent:'center',marginTop:120, }}>
  <div style={{width:'50%',marginTop:160}}>
  <h1 style={{textAlign:'center', }}>الخصوصية</h1>
  <h2 style={{textAlign:'center',marginTop:-20 }}>في عالم الانترنت</h2>
  <h5 style={{textAlign:'center', marginTop:-10}}>كل شيء تفعله على جهازك اليوم مثل البحث عن طريقة عمل أكله معينه<br/> 
  أو اللعب يعتبر بيانات شخصية تستفيد منها الشركات و تمثل أرباح للمجرمين<br/> 
  لذلك يجب توعية الاطفال عن ماهي الخصوصية في عالم الانترنت وكيف يحافظون<br/>
  على خصوصيتهم</h5>
  </div>

  
  <div style={{width:'50%' ,  display:'flex', justifyContent:'center', paddingLeft:200 }}>
      
       <div style={{width: 400, height:200, background:'white',marginTop: 20, borderRadius: 6,  boxShadow: '-2px 1px 20px rgba(0, 0, 0, 0.25)', }}></div>
       <div style={{ position:"absolute",
    zIndex:10, marginTop:-20}}>
      <AirplaneIcon/>
    </div>
    

  </div>
  
  </div>
  <button style={{width:250, height: 80,  marginLeft: 120, background:'#4BBD9B', color:'white', borderColor:'#4BBD9B', borderRadius:12,  fontSize:20, boxShadow: '-2px 1px 20px #4BBD9B' }}> تعلم في بيئة ممتعة</button>
  
  {/* componant 4*/}
  <div style={{width:'full',flexDirection:'row-reverse', display:'flex',justifyContent:'center', alignItems:"center", justifyItems:"center", marginTop:150, }}>
  <div style={{flex:1, flexDirection:'center', display:'flex',justifyContent:'center', borderColor:'#4BBD9B', borderRadius:12, boxShadow: '1px 10px 235px -36px #4BBD9B',  marginRight:50 }}>
    <video autoPlay={true} controls={true} width="700">

 <source src={SiwarVid} type='video/mp4' />
    </video>
  </div>
  <div style={{flex:1, flexDirection:'column', display:'flex',justifyContent:'center', alignItems:"center", marginTop:130  }}>
    <Logoyellow/>
    <div style={{
      width:"60%"
    }}>
    <h5 style={{
      textAlign:"center",

    }}>
لعبة تفاعلية تتكون من 3 مراحل في كل مرحلة يتعلم الطفل طريقة للحفاظ على خصوصيته في عالم الانترنت، في بيئة مليئة بالتحدي والمرح، و تكون اللعبة في إطار مستقبلي.
    </h5>
    </div>
  </div>
  </div>
  {/* componant 5*/}
  <div>
  <h1 style={{textAlign:'center', marginTop:150, width:'auto', height:'auto'}}>فريق العمل</h1>

  <div style={{
    width:"100%",
    height:"auto",
    display:"flex",
    flexDirection:"row",
    padding:20,
    alignContent:"center"
    ,alignItems:"center",
    justifyItems:"center",
    textAlign:"center",
    boxSizing:"border-box",
     justifyContent:"space-between",
  }}
  id={'team'}>




  <TeamContainer img={Nouri} name = {"نوره غندوره"} title={"مهندسة برمجيات"} desc=  {"تعمل نوره كمطورة مواقع في شركة محور البداية، ركزت نوره خلال فترة دراستها على تطوير مهاراتها البرمجية (المواقع، التطبيقات)"}/>

        <TeamContainer img={Lujain} name = {"لجين الصحفي"} title={"مهندسة برمجيات"} desc=  {"تدربت لجين لدى الخطوط السعودية، وتعلمت خلال رحلتها الجامعية أهم المهارات لإدارة المشاريع البرمجية"}/>

            <TeamContainer img={Shatha} name = {"شذا الزهراني"} title={"مهندسة برمجيات"} desc=  {"تدربت شذا لدى شركة الاساليب الذكية، وتعلمت خلال رحلتها الجامعية أهم المهارات لإدارة المشاريع البرمجية"}/>

                <TeamContainer img={Farah} name = {"فرح العمري"} title={"مهندسة برمجيات"} desc=  {"تدربت فرح في مستشفى الملك عبدالعزيز الجامعي، و تعلمت خلال رحلتها الجامعية مهارات البرمجة وتتميز بخبرتها في مجال التصميم و تجربة المستخدم"}/>

                    <TeamContainer img={Raghad} name = {"رغد الحربي"} title={"مهندسة برمجيات"} desc=  {"تعمل رغد كمديرة منتج في شركة تراكيب، وركزت خلال فترة دراستها على تعلم تجربة المستخدم وإدارة المنتجات، والبرمجة، و تأسيس الشركات"}/>

                        <TeamContainer name = {"د.مها الجهني"} title={"مشرفة المشروع"} desc=  {"استاذ مساعد في قسم هندسة البرمجيات، ونائب المشرف على مركز التحول الرقمي بجامعة جدة"}/>



  </div>

  <div style={{ height: 200,   boxShadow: '-2px 1px 20px rgba(0, 0, 0, 0.25)', flexDirection:"row-reverse", display:'flex', padding:20
}}>
  <div style={{display:'flex', flexDirection:'column'}}>
  <h4 style={{marginTop:20, textAlign: 'right', color:'#36B5B0'}}> من نحن؟</h4>
  <h4 style={{marginTop:0, textAlign: 'right',color:'#36B5B0'}}> مميزاتنا</h4>
  <h4 style={{marginTop:0, textAlign: 'right',color:'#36B5B0'}}> فيديو</h4>
  <h4 style={{marginTop:0, textAlign: 'right',color:'#36B5B0'}}> فريق العمل</h4>
  </div>
  <div style={{display:'flex', flexDirection:'column', marginRight: 100}}>
  <h4 style={{marginTop:20, textAlign: 'right', color:'#36B5B0'}}> مجتمعنا</h4>
  <h4 style={{marginTop:0, textAlign: 'right',color:'#36B5B0'}}> السياسة</h4>
  </div>
 
</div>


  </div>


        </div>
   
  );
}


export default App;
