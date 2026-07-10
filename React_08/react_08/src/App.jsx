// import React from "react";
// import Counter from "./components/Counter";

// class App extends React.Component{
//   constructor(){
//     super();
//     this.state = {
//       count: 0,
//     }
//   }

//   componentDidMount(){
//     console.log("hello from App");
//   }
//   handleDec(){
//     this.setState({count: this.state.count-1})
//   }

//   render(){
//     return(
//       <div>
//         <Counter count={this.state.count} />
//         <button onClick={()=>this.setState({count:this.state.count+1})} >Inc</button>
//         <button onClick={this.handleDec.bind(this)} >Dec</button>
//       </div>
//     )
//   }
// }

// export default App;
// // ----------------------------
import React from 'react'

function App() {
  let paisa = 100000;
  function loophole(para){
    console.log(para , "child se aega");
  }
  return (
    <div>
      <Chotu money={paisa} loopholefn={loophole} />
    </div>
  )
}

function Chotu({money, loopholefn}){
  let gift = "defender";
  return(
    <div>
      <button onClick={()=>loopholefn(gift)} >Click</button>
      <h1> {money} </h1>
    </div>
  )
}

export default App