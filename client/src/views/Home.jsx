import React, {useEffect, useState} from 'react';
import axios from 'axios';



const Home = () => {
    const [player, setPlayer] = useState("")

    useEffect(() => {
        axios.get("https://fly.sportsdata.io/v3/nba/scores/json/Players?key=2a756246348e4181b093983127a11250")
    }, [player])
    return (
        <div>
            
        </div>
    );
};

export default Home;