import React, {useEffect, useState} from 'react'
import './Components/covid.css';
//import 'g:\reactjskprojects\calculator\src\Components\covid.css';

const Statewise = () => {

   const [data, setData] = useState([]);

    const getCovidData = async () => {
        try {
        const res = await fetch('https://api.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.statewise[0]);
        setData(actualData.statewise[0]);
        }
        catch(err)
        {
            console.log(err);
        }

    }
    useEffect(() => {
        
       getCovidData();
    }, []);

    return (
        <section>
     
        <section>
        <p>This is Card</p>
            <div className="row">
            <div className="column">
                    <div className="card">
                    <p>Our</p>
                    <h2 >Country</h2>
                    <h1>India</h1>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                    <p>Total</p>
                    <h2 >Confirmed</h2>
                    <h1>{data.confirmed}</h1>
                    </div>
                </div>
                <div className="column">
                    <div className="card">
                    <p>Total</p>
                    <h2 >Recovered</h2>
                    <h1>{data.recovered}</h1>
                    </div>
                </div>
            </div>
            </section>
            <section>
                <p>
            
                </p>
            <div className="row">
            <div className="column">
                    <div className="card">
                    <p>Total</p>
                    <h2 >Death</h2>
                    <h1>{data.deaths}</h1>
                    </div>
                </div>                <div className="column">
                    <div className="card">
                    <p>Total</p>
                    <h2 >Active</h2>
                    <h1>{data.active}</h1>
                    </div>
                </div>
                
                <div className="column">
                    <div className="card">
                    <p>Last</p>
                    <h2 >Updated</h2>
                    <h1>{data.lastupdatedtime}</h1>
                    </div>
                </div>
            </div>
            </section>
        </section>

    )
    

}
export default Statewise;