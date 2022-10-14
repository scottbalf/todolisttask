import {useState} from "react";

const Todolist = () => {

    // const [todo, setTodo] = useState(true);
    const [list, setList] = useState([])
    const [input, setInput] = useState("");
    const [strike, setStrike] = useState(false);
    
    const strikeThrough = (index) => {
        setStrike(true);
        const temp = [...list];
        temp[index].done = true
        setList(temp);
    }

    const clickHandler = () => {
        const temp = [...list];
        temp.push({text:input, done:false});   // adding each item as an object
        setList(temp);
        setInput("")
    };

    function deleteItem (index) {
        const temp = [...list];
        temp.splice(index, 1);
        setList(temp);
    };

    return (
        <div className="background">
        <div className="notepad">
        <h1 className="header">To Do List -</h1>

        <div className="entries">
        <input className="input" type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button className="button" onClick={clickHandler} >Add to list</button></div>
        <br></br>
        <div className="page">
        <div className="list">        
        {list.map((item, index) => {
            return <p className={strike && item.done ? "strike" : "noStrike"} key={item} onClick={() => strikeThrough(index)} onDoubleClick={() => deleteItem(index)}>{item.text}</p>})
        }</div>
        <p className="instructions">Click your job to score it complete, double click it to remove it.</p>
        </div></div></div>
    );
}

export default Todolist