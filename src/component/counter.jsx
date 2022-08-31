import { useState } from "react";
import Button from 'react-bootstrap/Button';
function Counter() {
    const [like, setlike]=useState(0)
    return(
    <div className="d-flex">
        <Button variant="light" onClick={()=>{setlike(like+1)}}>👍</Button>

        <p>{like}</p>
        <Button variant="light" onClick={()=>{setlike(like-1)}}>👎</Button>
    </div>
    )

}
export default Counter