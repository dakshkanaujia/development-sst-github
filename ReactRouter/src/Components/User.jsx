import React from 'react'
import {useParams} from 'react-router-dom';

function User() {
    const {userId} = useParams();
  return (
    <div>
      {`the text you kept after url is ${userId}`}
    </div>
  )
}

export default User;
