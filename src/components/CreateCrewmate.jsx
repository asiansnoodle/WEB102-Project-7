import { useState } from "react"
import { supabase } from "../client"

const CreateCrewmate = () => {
    
    const [name, setName] = useState("")
    const [speed, setSpeed] = useState(0)
    const [color, setColor] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        const {data, error} = await supabase.from('crewmates').insert({name: name, speed: speed, color: color}).select()
        if (data){
            console.log(data)
            setName("");
            setSpeed(0)
            setColor("")
        }
        else if (error){
            console.log(error)
        }
    }

    return (
        <div className="create-page">
            <h1>Create a Crewmate</h1>
            <img src="https://shimmering-stardust-c75334.netlify.app/assets/crewmates.43d07b24.png" height="100" width="auto" />
            <br></br>
            <form className="form-container" id="crewmate-form" onSubmit={handleSubmit}>
                <div className="mini-container">
                    <label>Name:</label>
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder="Enter your Crewmate's name!">
                    </input>
                </div>
                <div className="mini-container">
                    <label>Speed (mph):</label>
                    <input 
                        type="number" 
                        value={speed} 
                        onChange={(e) => setSpeed(Number(e.target.value))} 
                        placeholder="Enter speed (EX: 5)"
                        min={0}>
                    </input>
                </div>
                <div className="mini-container">
                    <label>Color:</label>
                    <select value={color} onChange={(e) => {setColor(e.target.value)}}>
                        <option value="Red">Red</option>
                        <option value="Green">Green</option>
                        <option value="Blue">Blue</option>
                        <option value="Purple">Purple</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Orange">Orange</option>
                    </select>                    
                </div>
            </form>
            <button className="submit-button" type="submit" form="crewmate-form">Submit</button>
        </div>
    )
}

export default CreateCrewmate