import { useState } from "react";
import ThemeState from "./ThemeState";

export default function AppState() {
  const [count, setCount] = useState(0)
  const [list, setList] = useState([1,2,3])

  const handlerClick = () =>{
    setCount(count + 1)
  }

  const handlerChange = (event) => {
    setCount( Number( event.target.value ) )
  }

  const handlerAdd = () => {
    setList(prevList => {
      return [...prevList, count]
    })
  }

  return <div 
    style={{
      alignContent:'center',
      padding: `${count}px`,
    }}
    className="w-screen h-screen px-5 flex flex-col item justify-center gap-2">
    <ThemeState />
    {/* A partir de aqui nuestro codigo */}
    <p>Count = {count}</p>
    <button className="border rounded" onClick={handlerClick}>Click me!</button>
    <input
      className="border border-black rounded"
      type="number"
      value={count}
      onChange={handlerChange} />

    <button onClick={handlerAdd}>Agregar</button>
    
    <p>{JSON.stringify(list)}</p>
  </div>

}