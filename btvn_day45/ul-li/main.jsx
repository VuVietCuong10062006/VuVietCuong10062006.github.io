const App = () => {
    const [list,setList] = React.useState([])
    const [item,setItem] = React.useState('')
    const [show,setShow] = React.useState(true)

    const addItem = () => {
        setList([...list, item])
        setItem('')
    }

    const removeItem = () => {
        setList(list.slice(0,-1))
    }

    return(
        <div style={{padding:50}}>
            <input
            value={item}
                onChange={e => setItem(e.target.value)}
            />
            <button onClick={addItem}>Add</button>
            <button onClick={removeItem}>Remove</button>
            <button onClick={() =>{setShow(!show)}}>{show == true ? "Hide" : "Show"}</button>
            {show &&
            <ul>
                {list.map((item,index) =>{
                    return <li key={index}>{item}</li>
                })}
            </ul>
            }
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
