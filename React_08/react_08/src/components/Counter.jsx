import React from "react";
class Counter extends React.Component{
    componentDidUpdate(prevProp){
        if(this.props.count !== prevProp.count){
            console.log("component updated");
        }
    }  
    componentWillUnmount(){
        console.log("component deleted");
    } 
    render(){
        return(
            <h1>{this.props.count}</h1>
        )
    }
    
}
export default Counter;