import { useState } from "react"

const HOME = 0
const ABOUT = 1
const CONTACT = 2


export default function AppNavigation(){
    const [tab, setTab] = useState(HOME)

    const handlerNavigation = (selectTab) => () => {
        setTab(selectTab)
    }

    return <div className="flex flex-col gap-2 items-center justify-center w-screen h-screen">
        <h1 className="text-xl font-bold">App Navigation</h1>
        <nav>
            <ul className="flex flex-ro items-center gap-10">
                <li
                    onClick={handlerNavigation(HOME)}
                    className={tab === HOME ? "cursor-pointer underline" : "hover:underline cursor-pointer"}>Home</li>
                <li
                    onClick={handlerNavigation(ABOUT)}
                    className={tab === ABOUT ? "cursor-pointer underline" : "hover:underline cursor-pointer"}>About</li>
                <li
                    onClick={handlerNavigation(CONTACT)}
                    className={tab === CONTACT ? "cursor-pointer underline" : "hover:underline cursor-pointer"}>Contact</li>
            </ul>
        </nav>
        <div>
            { tab === HOME && <ToggleView /> }
            { tab === ABOUT && <p>About</p> }
            { tab === CONTACT && <p>Contact</p> }
        </div>
    </div>
}



function ToggleView(){
    const [checked, setChecked] = useState(false)

    const handlerChange = (event) =>{
        setChecked(event.target.checked)
    }

    return <div>

        <label className="inline-flex items-center cursor-pointer py-4">
            <input type="checkbox" checked={checked} className="sr-only peer" onChange={handlerChange} />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 ">Automatico (cambia cada 60 segundos)</span>
        </label>
    </div>
}