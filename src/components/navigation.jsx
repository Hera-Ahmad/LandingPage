const Navigation =() =>{
    return(
        <nav className="container">
                <div className="logo">
                    <img src="brand.png" alt="logo" />
                </div>
                <ul>
                    <li href="#">Menu</li>
                    <li href="#">Loction</li>
                    <li href="#">About</li>
                    <li href="#">Contact</li>
                </ul>

                <button>Login</button>
            </nav>
    );
};

export default Navigation;