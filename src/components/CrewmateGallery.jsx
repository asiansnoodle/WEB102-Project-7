import { useState, useEffect } from "react"
import { supabase } from "../client"
import { Link, Outlet } from "react-router"
import CrewmateCard from "./CrewmateCard"


const CrewmateGallery = () => {
    const [mates, setMates] = useState([])

    useEffect(() => {
        const getData = async () => {
            const {data, error} = await supabase.from('crewmates').select()
            if(data){
                setMates(data)
            }
            else if (error){
                console.log("Error getting mates")
            }
        }
        getData()
    }, [])

    if(mates){
        console.log(mates)
    }

    if (mates){
        return (
            <div className="crewmate-gallery">
                <Outlet/>
                <h1>Your Crewmate Gallery!</h1>
                <div className="crewmate-container">
                    {mates.map((mate) => <Link to='/:id'><CrewmateCard/></Link>)}
                </div>
            </div>
        )
    }  
    else {
        return(
            <div className="crewmate-gallery">
                <h1>Loading crewmates!</h1>
            </div>
        )
    }
}

export default CrewmateGallery