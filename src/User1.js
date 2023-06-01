
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function User1() {
  const navigate = useNavigate();
  const { id, name } = useParams();

  return (
    <div>
      <h1>User No {id}</h1>
      <h1>User Name {name}</h1>
       <button onClick={() => navigate(-1)}>Go Back</button> 
    
    </div>
  );
}

export default User1;








