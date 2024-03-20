import { useState } from "react"



const Form = () =>{

    const [username, setUsername] = useState("") 
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const data = {
        username, email, password
    }

    function formHandler (e) {
        // console.log (e);
        e.preventDefault()
        console.log(data);

    }



    return(

        <>

        <div>
            <pre>{JSON.stringify(data)}</pre>
        </div>

            <form onSubmit={formHandler}>

                {/* <div>
                    <div>{username}</div>
                    <div>{email}</div>
                    <div>{password}</div>
                </div> */}

                <div>
                    <label htmlFor="Name">username</label> <br />
                    <input type="text" name="name" id="name" value={"Nuha"} onChange={(e) => setUsername(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="Email">Email</label> <br />
                    <input type="email" name="email" id="email" value={"shittu@gmail.com"} onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="Password">Password</label> <br />
                    <input type="password" name="password" id="password" value={"we33"} onChange={(e) => setPassword(e.target.value)} />
                </div>
            
                   <button>Submit</button>
            
            </form>
        </>
    )
}

export default Form


//Use the onSubmit property for the form tag, then have a function that will make the changes work called FormHandler.
//Then have a div for the props of the input value in a curly bracket in the return space.
//To get the Synthetic statement on the console and inspect the event inpu t, use the following code on the function declared

// function formHandler (e) {
//     console.log (e);
//     e.preventDefault()

// }



//

//in other to simplify your code, you can just set your state to receive object such as;
//   const [userData, setUserData] = useState({
//     name : ""
//     email: "",
//     password: ""
// })


//then at your input, and the value key, use value {userData.name}, value {userData.email, value {userData.password}}
//then consol.log (userData)

//And at the JSON.stringify (...userData)


//

//To simplify the code further, create a function that does all the activities, 
//const onChangeHandler = (event)=> {
//     const {name, value}
//     setUserData ((prevData)) => (
//         {...prevData, [name]: value}
//     )
// }

