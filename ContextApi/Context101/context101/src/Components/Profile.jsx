import React, {useContext} from 'react'
import userContext from '../Context/userContext'

function Profile(){
    const {user} = useContext(userContext);
    const {details} = useContext(userContext);


    if(!user) return <div>Please Login</div>
    
    return (
        <>
            <div>{details.timeLogin}</div>
            <div>Welcome! {user.username}</div>
        </>
    )
}

export default Profile;