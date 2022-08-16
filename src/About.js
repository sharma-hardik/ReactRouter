import { useState } from "react";

function About() {
    const [data, setData] = useState([]);
    const [input, setInput] = useState("");
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");

    const clickHandler = () => {
        const tempData = data;
        tempData.push(input);
        tempData.push(input1);
        tempData.push(input2);
        setData(data);
        setInput("");
        setInput1("");
        setInput2("");
        console.log(data);
    };



    return (
        <div className="App">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <input
                type="text"
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
            />
            <input
                type="text"
                value={input2}
                onChange={(e) => setInput2(e.target.value)}
            />

            <button onClick={clickHandler}>Add</button>

            {data.length ? (
                <ul>
                    {data.map((value) => {
                        return <span style={{ margin: '10px' }}>{value}</span>;
                    })}
                </ul>
            ) : ''}
        </div>
    );
}
export default About