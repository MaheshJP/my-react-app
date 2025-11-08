const Itemlist = () => {
    const items=['Apple','Banana','Mango','Orange'];
    return (
        <ul>
            {items.map((item,index)=>{
               return <li key={index}>{item}</li>
            })}
        </ul>
    )
}
export default Itemlist; 

// ['Apple','Banana','Mango']
// 0,         1      3