import React from "react"

export default function Form() {
    const [userData, setUserData] = React.useState({
        firstName:"",
        lastName:"",
        email:"",
        comment:"",
        isFriendly:true,
        employed:"",
        favoriteColor:""
    })
    //const[lastName,setLatName]=React.useState("")
    /**
     * Challenge: Track the applicant's last name as well
     */
    /**
     * Challenge: add an email field/state to the form
     */
    /**
     * Challenge: Add a textarea for "comments" to the form
     * Make sure to update state when it changes.
     */
    console.log(userData.favoriteColor)
    function handleChange(event) {
        const {name,value,type,checked}= event.target
        setUserData(prevUserData =>
            {
                return{
                    ...prevUserData,
           [name] :type==="checkbox"?checked: value
                }
            }
        )
    }
    function handleSubmit(event){
        event.preventDefault();
        console.log(userData)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={userData.firstName}
            />
            <input
            type="text"
            placeholder="last name"
            onChange={handleChange}
            name="lastName"
            value={userData.lastName}
            />
            <input
            type="email"
            placeholder="Email"
            onChange={handleChange}
            name="email"
            value={userData.email}
            
            />
            <textarea 
            name="comment"
            placeholder="Comment"
            onChange={handleChange}
            value={userData.comment}
            />

            <input
            type="checkbox"
            id="isFriendly"
            name="isFriendly"
            checked={userData.isFriendly}
            onChange={handleChange}
            />
            <label htmlFor="isFriendly">Are you friendly</label>

            <div>Employement status:</div>
            <input
            type="radio"
            id="unemployed"
            name="employed"
            value="unemployed"
            
            checked={FormData.employed==="unemployed"}
            onChange={handleChange}
            />
            <label htmlFor="unemployed">Unemployed</label>

            <input
            type="radio"
            id="parttime"
            name="employed"
            value="parttime"
            checked={FormData.employed==="parttime"}
            onChange={handleChange}
            />
            <label htmlFor="parttime">Part time</label>

            <input
            type="radio"
            id="fulltime"
            name="employed"
            value="fulltime"
            checked={FormData.employed==="fulltime"}
            onChange={handleChange}
            />
            <label htmlFor="fulltime">Full Time</label>

            <label htmlFor="FavoriteColor" >Favorite Color</label>
            <select
            id="FavoriteColor"
            value={userData.favoriteColor}
            onChange={handleChange}
            name="favoriteColor"
            >
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            <button>Submit</button>
        </form>
    )
}
