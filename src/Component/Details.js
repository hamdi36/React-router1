import React,{useEffect,useState} from 'react'
import ReactPlayer from 'react-player'


const Details = ({movie,match}) => {
    const [details, setDetails] = useState({})

    console.log(match)


 
  useEffect(() => { 
    setDetails (movie.find((mv)=>mv.id === +match.params.id))
  }, [])


    return (
       

        
        <div>
            <h2 style={{marginTop:"4%",marginLeft:"10%", marginBottom: "4%"}}>Trailer Page</h2>
            <ReactPlayer style= {{marginLeft:"10%"}} url={details.trailerPage } />


            <h2 style={{marginTop:"4%",marginLeft:"10%", marginBottom: "4%"}}>Description</h2>
            <span style={{color: "red", marginLeft:"10%", fontSize:"150%", marginBottom: "4%"}}>{details.title} </span>

        <div style={{backgroundColor:"rgb(236, 231, 231)", width: "40%", marginLeft:"10%", marginBottom: "6%",}}> 
            <span >{details.description} </span>
            </div>
            
        </div>
    )
}

export default Details
