import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, NavLink } from 'react-router-dom';




function Competition(props) {

    const [competition,setCompetition] = useState(props.competition);


    return (
        <>
                <tr>
                <td>
                    {competition.id}
                </td>
                 <td>
                    {competition.name}
                </td>
                 <td>
                    {competition.fees}
                </td>
                <td>
                    <NavLink to={'details/'+competition.id}>
                        Details
                    </NavLink>
                </td>
                </tr>
        </>
    )
}

export default Competition

