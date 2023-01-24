// // import React from "react";
// // import ReactDOM from "react-dom";
// // import "./index.css";
// // import Para from "./para"


// // function App(){
// // // const fmae = "Mohammed"
// // // const flame = "Shazeeb c";
// // // const img1 = "https://picsum.photos/200/300"
// // // const img2 = "https://picsum.photos/200/300"
// // // const img3 = "https://picsum.photos/200/300"
// // // const link = "https://www.google.com/search?q=font+awesome&oq=&aqs=chrome.3.35i39i362l2j46i39i199i362i465j35i39i362l5.602411j0j7&sourceid=chrome&ie=UTF-8"
// // // const p = {
// // //    color:"red",
// // //    textAlign: 'center'
// // // }



// // // ------------------
// // let curDate = new Date(2023,1,18,13);
// // curDate=curDate.getHours();
// // let greeting = " ";
// // const cssStyle ={}

// // if(curDate >=1 && curDate<12){
// //   greeting ="Good Moring";
// //   cssStyle.color = "green";
// // }else if(curDate >=12 && curDate <18){
// //   greeting ="Good Afternoon";
// //   cssStyle.color = "Orange";
// // }else{
// //   greeting ="Good Night";
// //   cssStyle.color = "black";
// // }
 

// // //   <>
// // //     <h1 contentEditable>{`My Name Is ${fmae} ${flame}`} </h1>
// // //     <p contentEditable style ={p}>Hello guys iam shazeeb {Math.random()}</p>
// // //        <ol>
// // //           <li>hussam</li>
// // //           <li>ifzal</li>
// // //           <li>afraz</li>
// // //       </ol>
// // //     <div className="img12">
// // //       <img src={img1} alt="random image" />
// // //       <img src={img2} alt="random image" />
// // //       <a href={link} target="-lorem">
// // //         <img src={img3} alt="random image" />
// // //       </a>
// // //     </div>
    

// // //     {/* ------------- */}
   
    
// // //   </>,
// // return(
// //      <>
// //             <div className="num">
// //     <h2>Hello , <span style={cssStyle}>{ greeting} </span></h2>
// //     </div> 
// //     </>);
 

 
// //     }
// //  export default App;

// import React from "react";

// function App(){
//      let curDate = new Date(2023,1,18,13);
//      curDate=curDate.getHours();
//         let greeting = " ";
//      const cssStyle ={}

//      if(curDate >=1 && curDate<12){
//   greeting ="Good Moring";
//   cssStyle.color = "green";
// }else if(curDate >=12 && curDate <18){
//   greeting ="Good Afternoon";
//   cssStyle.color = "Orange";
// }else{
//   greeting ="Good Night";
//   cssStyle.color = "black";
// }
 


//      return(
//      <>
//             <div className="num">
//                     <h2>Hello , <span style={cssStyle}>{ greeting} </span></h2>
//          </div> 
//        </>);


// }

// export default App;
import React, { useState } from "react";
import "./index.css";

const App = () => {
   
    let time = new Date().toLocaleTimeString();

    const [ctime, setCtime] = useState(time);
    const UpdateTime = ( ) => {
        time = new Date().toLocaleTimeString();
        setCtime(time); 
    };
    setInterval(UpdateTime,1000)
     return(
        <>
             <div className="back">
                 <h1>Time ⏱️</h1>
                 <h2 className="sha"> {time}</h2>
             </div>
        </>
     )
}

export default App;