import  Container  from "react-bootstrap/Container"
// import Event from "./Event"
import Row from "react-bootstrap/Row"
import Alert from "react-bootstrap/Alert"
import { useEffect, useState } from "react"
import { deleteEvent, getallEvents } from "../../service/api"
import { useDispatch, useSelector } from "react-redux"
import { deleteEventReducer, selectEvents } from "../../redux/slices/eventsSlice"
import {getAllCompetitions} from "../../service/api.js";
import Competition from "./Competition.jsx";
function Competitions() {




    const [eventsData]  =useSelector(selectEvents);
    const [competitions,setCompetitions] = useState(null);
    const [loading,setLoading] = useState(true);
    const dispatch = useDispatch()



    const [isShowAlert , setIsShowAlert] = useState(false)
    const [isWelcome, setIsWelcome] = useState(true);








    useEffect(() => {
        async function fetchData(){
            setLoading(true);
            const response = await getAllCompetitions();
            setCompetitions(response.data);
            setLoading(false);
            console.log(competitions);
        }
        fetchData();
        const isWelcomeTimeout = setTimeout(() => {
            setIsWelcome(false);
        }, 3000);

        return () => {
            clearTimeout(isWelcomeTimeout);
        };
    }, []);
    const showAlert = ()=>{

        setIsShowAlert(true)

        setTimeout(()=>
                setIsShowAlert(false)
            , 2000 )
    }


    const handleDelete = async (eventId)=>{

        await deleteEvent(eventId);

        dispatch(deleteEventReducer(eventId))

    }
    return (


        <>
            {isWelcome && (
                <Alert style={{ width: "70%", marginBottom: 40 }} variant="success">
                    Hey welcome to Esprit Events
                </Alert>
            )}
            {loading ? <div>Fetching data ...</div>
            :
                <Container>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <th>
                                #
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                Fees
                            </th>
                            <th>
                                Details
                            </th>

                        </thead>
                        <tbody>
                        {competitions.map((item,index)=>(

                            <Competition  key={index} competition={item} showAlert={showAlert} delete={handleDelete}  />

                        ))}
                        </tbody>
                    </table>
                    {isShowAlert &&(<Alert variant="success">
                        <Alert.Heading>You are booked an event</Alert.Heading>
                    </Alert>) }
                </Container>
            }

        </>
    )
}

export default Competitions