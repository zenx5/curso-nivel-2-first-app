export default function ThemeState(){

    return <>
        <h1 className="text-3xl font-bold">Hooks: <span className="text-red-500">useState</span></h1>
        <p className="italic">useState es un Hook de React que te permite agregar una <span className="font-bold">variable de estado</span> a tu componente.</p>
        <code className="text-center w-full mt-4">
            <span className="text-red-400">const</span> [state, setState] = <span className="text-purple-400">useState</span>(initialState)
        </code>
    </>
}