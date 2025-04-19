import { useParams, useNavigate } from "react-router"
import { useState, useEffect } from "react"
import { supabase } from "../client"

const EditCrewmate = () => {
    let params = useParams()
    const navigate = useNavigate();
    const [crewmate, setCrewmate] = useState()
    const [name, setName] = useState("")
    const [speed, setSpeed] = useState('')
    const [color, setColor] = useState("")

    const getCrewmate = async () => {
        const {data, error} = await supabase.from('crewmates').select().eq("id", params.id)
        if (data){
            setCrewmate(data[0])
        }
        else if (error){
            console.log(error)
        }
    }
    useEffect(() => {
        getCrewmate()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(name == ''){
            setName(crewmate.name)
        }
        if (speed == ''){
            setSpeed(crewmate.speed)
        }
        if (color == ''){
            setColor(crewmate.color)
        }

        const {data, error} = await supabase.from('crewmates').update({name: name, speed: speed, color: color}).eq("id", crewmate.id).select()

        if(data){
            getCrewmate()
            alert(`Successfully Updated: ${name} | ${speed} | ${color}`)
        }
        else if (error){
            console.log(error)
        }
        
    }

    const deleteCrewmate = async () => {
        const {data, error} = await supabase.from('crewmates').delete().eq("id", crewmate.id);
        alert("Crewmate deleted successfully")
        navigate('/gallery')
    }

    if (crewmate){
        return (
            <div className="edit-page">
                <h1>Update Your Crewmate!</h1>
                <img src="https://shimmering-stardust-c75334.netlify.app/assets/crewmates.43d07b24.png" height="200" width="auto"/>
                <h2>Current Crewmate info:</h2>
                <h3>Name: {crewmate.name}, Speed: {crewmate.speed}, Color: {crewmate.color}</h3>
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
                        <option value="">Please select a new color</option>
                        <option value="Red">Red</option>
                        <option value="Green">Green</option>
                        <option value="Blue">Blue</option>
                        <option value="Purple">Purple</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Orange">Orange</option>
                    </select>                    
                </div>
            </form>
            <button className="submit-button" type="submit" form="crewmate-form">Update Crewmate</button>
            <br></br>
            <br></br>
            <button className="submit-button" type="button" onClick={deleteCrewmate}>Delete Crewmate</button>
            </div>
        )
    }
    else if(!crewmate){
        return (
            <h1>Crewmate not found!</h1>
        )
    }
}

export default EditCrewmate