// import React from 'react';


// export function Input(props) {
//     return (
//       <div>
       
//         <label>
        
//         Input:
//         <input type="submit"  style={{margin:"10px",padding:"5px"}} type="text" value={props.value}  onKeyDown={(event)=>{event.keyCode==13?props.onSubmit():console.log("")}}  onChange={props.onChange}/>
//         </label>
    
//       </div>  
//     );
//   }
  
//   export function Button(props) {


//     return (
        
//       <div>
//         <button style={{margin:"10px",padding:"10px 20px"}} onClick={props.onClick}>
//           Submit
//         </button>
//         {/* <Output output={abc}></Output> */}
//       </div>
    
//     );
//   }
  
//   export function Output(props) {
//     return <div  >{props.output}</div>;
//   }
  
//   export function isClosed(str) {
//     var startingChar=0;
   
//     var confirmFalse=true;
    
    

//     for(let i =0;i<str.length;i++){
    
//         if(str[i]==='^'){
//           confirmFalse=false;
//             startingChar=startingChar+1;
//             console.log("^ appeared")
//         }
//         if(str[i]==='$'){
//             if(startingChar<1){
//                 return false;
//             }else{
//                 startingChar=startingChar-1;
//                 // console.log("^ appeared")
//             }
//         }
//     }
//     if(confirmFalse==true)
//     {
//       return false;
//     }

//     if(startingChar<=0){
//       // if(str[str.length-1]!=='$')
//       //   return false
//       // else
//         return true;
//     }else{
//         return false;
//     }

    
//   }
  
// class ComputeIO extends React.Component {
//     constructor(props){
//       super(props);
//       this.state = {
//         input: '',
//         output:'',
//         button: false
//       }
//       this.handleChange=this.handleChange.bind(this);
//     }
//     handleChange(event) {
//         console.log(event.target.value)
//       this.setState({input: event.target.value});
//     }
    
//     setOutput(input){
//       // event.preventDefault();
//       var a =  isClosed(input);
//       if(a==true){
//           a="true"
//       }else{
//           a="false"
//       }
//       this.setState({
//           output:a,
//           input:''
//       })
//       return false;
//     }
  
//     render() {
//       return (
//         <section style={{marginTop:"50px",padding:"30px"}}>
//           <Input  value={this.state.input} onChange={this.handleChange}  onSubmit={()=>this.setOutput(this.state.input)} />
//           <Button  input={this.state.input} onClick={()=>this.setOutput(this.state.input)}/>
//           <Output  output={this.state.output}/>
//         </section>
//       );
//     }
//   }

//   export default ComputeIO;