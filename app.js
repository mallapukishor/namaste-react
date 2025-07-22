import React, { createElement } from "react";
import ReactDOM from "react-dom/client";

{/*const parent=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"I'm an h1 tag"),
        React.createElement("h2",{},"I'm an h2 tag"),
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"I'am an h1 tag"),
        React.createElement("h2",{},"I'm an h2 tag"),
    ]),
]);*/}
 {/*const heading= React.createElement(
    "h1",
    {id:"header",xyz:"sss"},
    "hello wrold from react");
    console.log(heading);
    const jsxheading=<h1 id= "header"> this is namaste jsx react🚀</h1>
    console.log(jsxheading);
     const root= ReactDOM.createRoot(document.getElementById("root"));
     root.render(jsxheading);*/}

// const Title=()=>(
//     <h1 className="head" tablIndex="5">this is convertion react element to react component</h1>
// );
// const HeadingComponent=()=>(
//     <div id="container">
//         <Title/>
//         <h1 className="heading">namaste react function component</h1>

//     </div>
// )
//     const root= ReactDOM.createRoot(document.getElementById("root"));
//     root.render(<HeadingComponent/>)
//const title=React.createElement("h1",{},"this react element")
//const Title=()=>(
    //<h1>this is react create component </h1>
//);
//const a= 1000
const FunctionCompoent= () =>(
    <div>
           <h1> this is a namaste react component</h1>
    </div>

);
//const title=React.createElement("h1",{},"this is react element",
    //<div><FunctionCompoent/></div>
//)
const root=ReactDOM. createRoot(document.getElementById("root"));
root.render(<FunctionCompoent/>)
  
     