import React, {useState} from "react";

const Structure = () => {

    const [data, setData] = useState([{
        username : '',
        department : '',
        rate : '',
    }])

    const [details, setDetails] = useState([]);
    const [display, setDisplay] = useState(true);
    const [head, setHead] = useState("EMPLOYEE FEEDBACK FORM")

    const nameEvent = (m) => {
        setData({ ...data, [m.target.name]: m.target.value })
    }

    const Submited = (m) => {
        m.preventDefault()
        const newData = { ...data, id: new Date().getTime().toString()}
    
        setDetails([...details, newData])
        console.log(details);
        setHead("EMPLOYEE FEEDBACK LIST")
        setDisplay(false)
        setData("")
    }

    const Goback = () => {
        setDisplay(true)
        setHead("EMPLOYEE FEEDBACK FORM")
    }

    return (
        <>
            <div className="main_container">
                <h1>{head}</h1><hr />
            </div>
            {display ?
                <form onSubmit={Submited}>
                    <div className="inputs">
                        <label>Name : </label>
                        <input 
                            type="text"
                            onChange={nameEvent}
                            value={data.username}
                            name = 'name'
                            required
                        />
                        <br /><br />
                        <label className="department">Department : </label>
                        <input 
                            type="Text"
                            onChange={nameEvent}
                            value = {data.department}
                            name = 'department'
                            required
                        /><br /><br />
                        <lable>Rating : </lable>
                        <input 
                            type='number'
                            onChange={nameEvent}
                            value = {data.rate}
                            name= 'rate'
                            required
                            min={0}
                            max={5}
                        /><br /><br />
                    </div>
                    <div className="button"><input type="submit" /></div>
                </form> :

                <div>
                    <div className="result">
                        {
                            details.map((m) => {
                                return (
                                    <>
                                        <div className="section">
                                            <p>Name : {m.name}</p>
                                            <p>Department : {m.department}</p>
                                            <p>Rating : {m.rate}</p>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    <span>
                        <button onClick={Goback} className="back_button">GO BACK</button>
                    </span>
                </div>
            }
        </>
    )
}

export default Structure;