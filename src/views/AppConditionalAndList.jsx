import { useState } from "react"
import ThemeConditionAndList from "./ThemeConditionAndList"
import { useEffect } from "react"
import List from "../components/List"
import ItemUser from "../components/ItemUser"

export default function AppConditionAndList() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState('')

    useEffect(()=>{
        setSearch('')
    },[])

    useEffect(()=>{
        (async ()=>{
            setLoading(true)
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()
            console.log( data )
            setTimeout(()=>{
                setUsers(data)
                setLoading(false)

            },2000)
        })()
    },[])

    const handlerFilter = (value) => {
        setSearch(value)
    }

    const filterUser = (user) => {
        if( search==="" ) return true
        return user.name.toLowerCase().includes( search.toLowerCase() )
    }


    return <div className="w-screen h-screen px-5 flex flex-col items-center justify-center gap-4">
        <ThemeConditionAndList />
        {/* A partir de aqui nuestro acodigo */}
        {search}
        {loading ? <p>Loading...</p> :
        <List onFilter={handlerFilter}>
            { users.filter(filterUser).map( (user,index) => <ItemUser key={index} user={user} /> )}
        </List> }
    </div>

}
