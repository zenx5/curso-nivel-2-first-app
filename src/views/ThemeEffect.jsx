export default function ThemeEffect(){

    return <>
        <h1 className="text-3xl font-bold">Hooks: <span className="text-red-500">useEffect</span></h1>
        <p className="italic">useEffect es un Hook de React que te permite <span className="font-bold">sincronizar</span> un componente con un sistema externo.</p>
        <code className="text-center w-full mt-4">
        <span className="text-red-400">useEffect</span>(() {'=> {'}
        <br/>
        <span className="text-blue-400">{'    // Efecto'}</span>
        <br/>
        {'    return () => {'}
        <br/>
        <span className="text-blue-400">{'        // Limpieza'}</span>
        <br/>
        {'    }'}
        <br/>
        {'}, [dependencies])'}
        </code>
    </>
}