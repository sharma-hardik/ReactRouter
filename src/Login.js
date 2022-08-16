import { useState } from "react";
import './Login.css'
function Login() {
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
        <div className="box">
            <div >
                <label > Name</label>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <label > Email</label>
                <input
                    type="text"
                    value={input1}
                    onChange={(e) => setInput1(e.target.value)}
                />
                <label > Password</label>
                <input
                    type="text"
                    value={input2}
                    onChange={(e) => setInput2(e.target.value)}
                />

                <button onClick={clickHandler} style={{ marinBottom: '50px' }}>Submit</button>
                <div style={{ paddingTop: '10px' }}>
                    {data.length ? (
                        <ul>
                            {data.map((value, index) => {
                                return <p style={{ margin: '10px' }} key={index}>{value}</p>
                            })}
                        </ul>
                    ) : ''}
                </div>
            </div>
        </div>
    );
}
export default Login