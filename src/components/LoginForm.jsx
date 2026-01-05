import { useState } from "react";

function LoginFrom(){


    const [fromdata, setFromData] = useState({
        email: "",
        password: ""
    });

    const [message, setMessage] = useState("");


    function handleChange(event) {
        const {name, value} = event.target;

        setFromData({
            ...fromdata,
            [name] : value

        });
    }


    function handalSubmit(event) {
        event.preventDefault();

        if(fromdata.email == "" || fromdata.password == "")
            {
            setMessage("❌ All fields are required");
        }
        else
        {
            setMessage("✅ Login Successful");
            console.log(fromdata);
            
        }
        
    }

    return(
        <form onSubmit={handalSubmit}>

            <div>
                <label> Email: </label>
                <br />
                <input type="email"
                name="email" 
                value={fromdata.email}
                onChange={handleChange}
                className="inn-ema"
                placeholder="Enter your email..."
                />
            </div>

             <br />

             <div>

                <label>Password</label>
                <br />
                <input type="password" 
                name="password" 
                value={fromdata.password} 
                onChange={handleChange}
                className="inn-pss" 
                placeholder="Enter your password..."
                />

             </div>

              <br />

              <button type="submit">Login</button>

              <p>{message}</p>

        </form>
    );
}

export default LoginFrom;