
const CrewmateCard = ({color, name, speed, id}) => {
    return(
        <div>
            <img src="https://www.citypng.com/public/uploads/preview/hd-white-outline-among-us-crewmate-guy-player-character-png-733961695134876fnsmwhpglv.png" height={150}/>
            <h3>Name of crewmate: <span>{name}</span></h3>
            <h3>Speed of crewmate: <span>{speed} mph</span></h3>
            <h3>Color of crewmate: <span>{color}</span></h3>
        </div>
    )
}

export default CrewmateCard