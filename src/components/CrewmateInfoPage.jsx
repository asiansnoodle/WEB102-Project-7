import { useParams, Link } from "react-router"
import { useState, useEffect } from "react"
import { supabase } from "../client"

const CrewmateInfoPage = () => {
    let params = useParams()
    const [crewmate, setCrewmate] = useState()
    
    useEffect(() => {
        const getCrewmate = async () => {
            const {data, error} = await supabase.from('crewmates').select().eq("id", params.id)
            if (data){
                setCrewmate(data[0])
            }
            else if (error){
                return <h1>No Crewmate Found!</h1>
            }
        }
        getCrewmate()
    }, [])

    if (crewmate){
        return (
            <>
           <div className="crewmate-info">
                <h1>Crewmate: {crewmate.name}</h1>
                <h1>Stats:</h1>
                <h2>Color: {crewmate.color}</h2>
                <h2>Speed: {crewmate.speed} mph</h2>
                <br></br>
                <h3>This Crewmate's speed is pretty good, he can run from the imposter.</h3>
                <Link to={`/${crewmate.id}/edit`}>Edit this Crewmate?</Link>
           </div>
           <img src="https://shimmering-stardust-c75334.netlify.app/assets/suspect.bdfacc7e.png" height="150" width="auto"/>
           </>
        )
    }
    else if(!crewmate){
        return <h1>Loading...</h1>
        
    }
    else {
        return <h1>Loading...</h1>
    }

    
}

export default CrewmateInfoPage