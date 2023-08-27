import React,{useState} from "react";

function TextForm(props) {
    const [text, setText] = useState("");
    
    function handleupClick() {
        let newtext = text.toUpperCase();
        setText(newtext)
        props.alert("convert to uppercase","success")
    }

    function handlelowClick() {
        let newtask = text.toLowerCase();
        setText(newtask)
        props.alert("convert to lowercase","success")
    }

    function handleupChange(e) {
        setText(e.target.value)
    }

    function handleclearClick() {
        let newtask = '';
        setText(newtask)
        props.alert("convert to clear","success")
    }
    return (
        <>
        <div className="form-floating container my-3" style={{color : props.mode === 'light' ? 'black' : 'white' }}>
            <h1 >{props.heading}</h1>
            <div>
                <textarea className="form-control my-2" style={{backgroundColor: props.mode === 'dark' ? '#2A2A2A' : 'white',color:props.mode === 'light' ? 'black' : 'white'}} onChange={handleupChange} value={text} id="floatingTextarea2" rows={8}></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleupClick}>convert to uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handlelowClick}>convert to lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleclearClick}>clear</button>
        </div>

        <div style={{color : props.mode === 'light' ? 'black' : 'white' }} className="container">
            <h1 className="my-3">Text summery</h1>
            <p>no. of character {text.length} </p>
            <p>no. of words {text.split(" ").filter((e)=>{return e.length!==0}).length}</p>
            <h3>PREVIEW</h3>
            <p>{text}</p>
        </div>
        </>
    )
}

export default TextForm;