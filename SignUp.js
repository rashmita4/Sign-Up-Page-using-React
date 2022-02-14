import React from "react"

export function SignUp(){
    const [signUpData, changeData]=React.useState(
        {
            UserId :" ",
            Password:" ",
            ConfirmPassWord:"",
            JoinNewsletter:true



        }
    )
    console.log(signUpData)
    function handleChange(event){
        const {name,value,type,checked}=event.target
        return(
            changeData((prevSignUpData)=>{
            return{
                ...prevSignUpData,
                [name]:type==="checkbox"? checked :value
            }
        }
            
            )
        )
    }

    function handleSubmit(event){
        event.preventDefault();
        if(signUpData.Password===signUpData.ConfirmPassWord){
            console.log("Successfully Signed up!!!")
        }
        else{
            console.log("Passwords to not match")
            return
        }

        if(signUpData.JoinNewsletter===true){
            console.log("Thanks for signing up for the newsletter")
        }
        //console.log(signUpData.Password)

    }

    return(
        
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder="User-Id"
            name="UserId"
            value={signUpData.UserId}
            onChange={handleChange}
            />
            
            <input
            type="password"
            placeholder="Password"
            name="Password"
            value={signUpData.Password}
            onChange={handleChange}
            />

            <input
            type="password"
            placeholder="Confirm-Password"
            name="ConfirmPassWord"
            value={signUpData.ConfirmPassWord}
            onChange={handleChange}
            />

            <input
            type="checkbox"
            id="JoinNewsLetter"   
            name="JoinNewsletter"                   
            checked={signUpData.JoinNewsletter}
            onChange={handleChange}
            
            />
            <label htmlFor="JoinNewsLetter">I want to join News Letter</label>

            <button>Sign Up</button>
            


        </form>

    )
}