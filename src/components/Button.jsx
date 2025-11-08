function Button() {
    var currentTime = new Date().toLocaleTimeString();
    var user = false;
    let element = <div>
        <button>Login</button>
        <p> Login user</p>
        </div>
    if (!user) {
            element = <div>
                <button>Logout time {currentTime}</button>
                <p> user is not present</p>
                </div>
        }
  return element ;
}

export default Button;
