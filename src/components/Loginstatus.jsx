const Loginstatus = (props) => {
    
    return <div>{props.isLoggeIn ? <div>Loginstatus On</div> : <div>Not Login</div>}</div>
}
export default Loginstatus;

// function Loginstatus() {
//     return <div>Loginstatus</div>
// }   
// export default Loginstatus;