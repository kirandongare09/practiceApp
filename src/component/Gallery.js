import {useState} from 'react';
import { sculptureList } from '../data.js';

export default function Gallery() {
    const [index, setIndex] = useState(0);
    const [show, setShow] = useState(false);
    let showNext = false;
  function handleClick() {
        if(index <= sculptureList.length-2){
        setIndex(index +1);
        console.log(index);
        }else {
            showNext = true;
        }
    }

    function handleShow(){
        setShow(!show);
    }

  let sculpture = sculptureList[index];
  return (
    <>
       <br></br><button disabled = {showNext} onClick={handleClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      /><br></br>
      <button onClick = {handleShow}>Show Details</button><br></br>
      {show && <p>
        {sculpture.description}
      </p>}
    </>
  );
}
