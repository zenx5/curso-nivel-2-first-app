/**
 *  Ejemplo de limpieza con interval
 *   - evitando enviar dependencias innecesarias
 *  Ejemplo escuchando un evento
 *  Ejemplo consumiendo API externa
 *  Ejemplo para "vigilar" estado
 *  
 */
import { useEffect, useState } from "react";
import ThemeEffect from "./ThemeEffect";


export default function AppEffect(){
    const [id, setId] = useState(1)
    const [user, setUser] = useState(null)

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then( response => response.json())
        .then( data => setUser(data) )

    },[id])

    const handlerChange = (event) => {
        setId( event.target.value )
    }

    return <div className="w-screen h-screen px-20 flex flex-col items-center justify-center gap-2">
        <ThemeEffect />
        {/* A partir de aqui nuestro codigo */}
        <p>Nombre: {user?.name}</p>
        <p>Email: {user?.email}</p>
        <input
            type="number"
            min={1}
            max={6}
            step={1}
            value={id}
            onChange={handlerChange}
            className="border border-black"/>
    </div>
}