import Button from '../components/Button.jsx';
function Home() {
  const style = {color:'blue',fontSize:'120px'}
  let name ="Madhupushpa"
  return <>
    <h1 className="info">Hello, World from Home! <span style={style}>{name}</span></h1>
    <p>Welcome to the home page.</p>
    <Button/>
  </>
}

export default Home;