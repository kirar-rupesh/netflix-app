import React, { useEffect } from 'react'
import "./Home.scss"
import axios from "axios";

const apiKey = "68fee47aa0d0b0f33fe5109b2ed736b7";
const URL = "https://api.themoviedb.org/3";

const Card = ({img}) => (
   <img className='card' src={img} alt="cover" />
)


const Row =({ title, arr = [{
  img: "https://cdn.marvel.com/content/1x/avengersendgame_lob_crd_05.jpg"
}] }) => (

  <div className='row'>

    <h2>{title}</h2>

   <div>
    {
    arr.map((item) => (
      <Card img={item.img} /> 

    ))
    }
    
   </div>

  </div>
)

const Home = () => {

  useEffect( () => {

    const fetchData = async() =>{

    };

    fetchData()
    
  }, [])



  return (

    <section className="home">
      <div className="banner"></div>

      <Row title={"Popular on Netflix"} />
      <Row title={"Movies"} />
      <Row title={"TV Shows"} />
      <Row title={"Recently Viewed"} />
      <Row title={"My List"} />

    </section>
    
  )
}

export default Home