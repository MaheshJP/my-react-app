import Button from "../components/Button";
import Loginstatus from "../components/Loginstatus.jsx";
import Itemlist from "../components/Itemlist.jsx";

function About() {
  const userObj = {
		firstName:"Madhu",
		lastName:"pushpa"
	}
  return <>
  <Button/>
    <h1>Tell me about yourself</h1>
    <p>Welcome to the about page.</p>
    <p>Your name is {userObj.firstName} {userObj.lastName}</p>
    <h2>Login Status</h2>
    <Loginstatus isLoggeIn={true}/>
    <Itemlist/>
  </>
}

export default About;