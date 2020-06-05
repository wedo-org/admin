import React from 'react'
import {fetchPostLogin} from '../utils'


export default function Dashboard(props) {

    console.log(props);

    return (
        <main className="Dashboard">
        <p>Added by me:</p>
        <ol>
            {props.user.online.map(i => <li> i.title</li>)}
            <li> hi</li>
        </ol>
        </main>
    )
}
