let colors = [
    '#3498db',
    '#9b59b6',
    '#e74c3c',
    '#2c3e50',
    '#d35400',
]

const App = () => {
    
    const [colorList,setColorList] = React.useState(colors)

    const deleteBox = (index) =>{
        setColorList(colorList.filter((colorItem,i) => i != index))
    }

    const addBox = () =>{
        setColorList([...colorList, ...colors])
    }

    return(
        <div className="wrap">
            <h1> JS DOM</h1>
            <button id="btn" onClick={addBox}>More boxes</button>
            <h4 id="score"> Total box:<span className="points">{colorList.length}</span></h4>

            <div className="boxes">
                {colorList.map((color,index) =>{
                    return (
                        <div 
                        key={index} 
                        className="box" 
                        style={{backgroundColor: color}}
                        onClick={() => deleteBox(index)}
                        >
                        </div>
                    )
                })}
            </div>
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
