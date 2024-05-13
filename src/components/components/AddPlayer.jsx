import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {increment, selectParticipants} from "../../redux/slices/participateSlice.js";
import Competition from "./Competition.jsx";

function AddPlayer() {
    const [name,setName] = useState('');
    let participants = useSelector(selectParticipants);
    const dispatch = useDispatch();
    const handleSubmit = ()=>{
        console.log(name);
        dispatch(increment({name}));
    }
    useEffect(()=>{
        console.log(participants);
    },[participants])
    return (
        <>
            <div className="text-center p-2 m-2">
                <label>
                    Username :
                    <input
                        type="text"
                        placeholder="Username"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                <br/>
                <button onClick={handleSubmit} style={{backgroundColor: 'green', color: 'white'}}>
                    Confirm
                </button>
        </div>
            {participants && Array.isArray(participants) && (
                <div>
                    <table className="table table-striped offset-1" style={{border:"1px",width:"200px"}}>
                        <thead><tr><th>User</th></tr></thead>
                        <tbody>
                        {participants.map((item, index) => (
                            <>
                                <tr><td>{item}</td></tr>
                            </>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    );
}

export default AddPlayer;