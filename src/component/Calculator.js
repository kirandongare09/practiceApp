import {
    useState,
    useRef
  } from "react"; 
  import "./Calculator.css";
  
  function Calculator() {
    const inputRef = useRef(null);
    const resultRef = useRef(null);
    const [result, setResult] = useState(0);
    const [input, setInput] = useState('');
   
    function plus(e) { 
      e.preventDefault(); 
      if(input !== ''){
        const inputValue = parseFloat(input);
        setResult((result) => result + inputValue);
        inputRef.current.value = '';
        resultRef.current.innerText = `${result}`;
      }
    }; 
   
    function minus(e) { 
        // Add the code for the minus function
        e.preventDefault(); 
        if(input !== ''){
          const inputValue = parseFloat(input);
          setResult((result) => result - inputValue);
          inputRef.current.value = '';
        resultRef.current.innerText = `${result}`;
        }
    };
   
    function times(e) { 
      // Add the code for the plus function 
      e.preventDefault(); 
      if(input !== ''){
        const inputValue = parseFloat(input);
        setResult((result) => result * inputValue);
        inputRef.current.value = '';
        resultRef.current.innerText = `${result}`;
      }
    }; 
   
    function divide(e) { 
      // Add the code for the divide function 
      e.preventDefault(); 
      if(input !== ''){
        const inputValue = parseFloat(input);
        setResult((result) => result / inputValue);
        inputRef.current.value = '';
        resultRef.current.innerText = `${result}`;
      }
    };
   
    function resetInput(e) { 
      // Add the code for the resetInput function 
      setInput('');
      inputRef.current.value = '';
    }; 
   
    function resetResult(e) { 
        setInput('');
        setResult(0);
        inputRef.current.value = '';
        resultRef.current.innerText = '0';
        // Add the code for the resetResult function 
    }; 
   
    return ( 
      <div className="App"> 
        <div> 
          <h1>Simplest Working Calculator</h1> 
        </div> 
        <form> 
          <p ref={resultRef}> 
            {result} 
          </p> 
          <div>
            <input
            pattern="[0-9]" 
            ref={inputRef} 
            type="number" 
            placeholder="Type a number" 
            onChange={(e)=> setInput(e.target.value)}
            />
          </div> 
          <button onClick={plus}>add</button> 
          <button onClick={minus}>subtract</button>
          <button onClick={times}>multiply</button>
          <button onClick={divide}>divide</button>
          <button onClick={resetInput}>resetInput</button>
          <button onClick={resetResult}>resetResult</button>
          {/* Add the subtract button */} 
          {/* Add the multiply button */} 
          {/* Add the divide button */} 
          {/* Add the resetInput button */} 
          {/* Add the resetResult button */} 
        </form> 
      </div> 
    ); 
  } 
   
  export default Calculator; 
  