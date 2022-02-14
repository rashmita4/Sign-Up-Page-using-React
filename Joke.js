import React from "react"

export default function Joke(props) {
    /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */
    /**
     * Challenge:
     * - Only display the punchline paragraph if `isShown` is true
     */
    const [isShown,setIsShown]=React.useState(false)
    
    function handleClick(){
        setIsShown(!isShown)
    }


    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            
            {isShown && <p>{props.punchline}</p>}
            <button onClick={handleClick}>{isShown ? <p>Hi punchline</p> :<p>Show punchline</p>}</button>
            
            <hr />
        </div>
    )
}