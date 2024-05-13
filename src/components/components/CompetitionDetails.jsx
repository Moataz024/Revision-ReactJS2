import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container  from 'react-bootstrap/Container'
import Row  from 'react-bootstrap/Row'
import Col  from 'react-bootstrap/Col'
import Card  from 'react-bootstrap/Card'
import {getAllCompetitions} from "../../service/api.js";
import AddPlayer from "./AddPlayer.jsx";


export default function CompetitionDetails() {

    const { id } = useParams();
    const [competition, setCompetition] = useState(null);
    const [isLoading,setLoading] = useState(true);
    const [showForm,setShowForm] = useState(null);


    useEffect(() => {
        const fetchEvent = async (id) => {
            setLoading(true)
            const competitionResult = await getAllCompetitions(id);
            setCompetition(competitionResult.data);
            setLoading(false);
        };
        fetchEvent(id);
    }, []);

    const toggleForm = ()=>{
        setShowForm(!showForm);
    }


    if (!competition){

        return <h1> Competition does not exist !!! </h1>
    }

    return isLoading ? (<div>Loading...</div>):(
                // <Container style={{ marginTop: "30px" }}>
                //     <Row>
                //         <Col md={4}>
                //             <Card.Img
                //                 variant="top"
                //                 src={`/images/${competition.img}` }         alt="competition Img"
                //                 height="300"
                //             />
                //         </Col>
                //         <Col md={8}>
                //             <Row>
                //                 <Col md={12}>
                //                     <h1>{competition.name}</h1>
                //                 </Col>
                //             </Row>
                //             <Row>
                //                 <Col md={12}>
                //                     <h5>{competition.description}</h5>
                //                 </Col>
                //                 <Col>
                //                     <p style={{ marginLeft: "50px" }}></p>
                //                 </Col>
                //             </Row>
                //             <Row>
                //                 <Col md={12}>
                //                     <h5>Price</h5>
                //                 </Col>
                //                 <Col>
                //                     <p style={{ marginLeft: "50px" }}> {competition.price} DT</p>
                //                 </Col>
                //             </Row>
                //         </Col>
                //     </Row>
                // </Container>
        <>
            <Container style={{border:"1px solid"}}>
            <div className="text-center" >
            <h1>{competition.name}</h1><br/>
            <p>Price : {competition.fees}</p><br/>
            <p>Date : {competition.date}</p>
            <p>Description : {competition.description}</p>
            <p>Participants : {competition.participants}</p>
            </div>
            <div className="offset-1">
            <button className="btn btn-info" onClick={()=>toggleForm()}>Participate</button>
        </div>
            </Container>
            {showForm && <AddPlayer/>
            }
        </>
    )
}
