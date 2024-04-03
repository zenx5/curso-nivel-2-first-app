export default function ThemeConditionAndList() {
  return <div className="mx-auto w-1/2 border-b border-slate-200 pb-5">
    <h1 className="text-3xl font-semibold mb-5">Renderizado Condicional y Renderizado de listas</h1>
    <p className="mb-5 text-lg">En React, <span className="text-red-400">no hay una sintaxis especial para escribir condicionales</span>. En cambio, usarás las mismas técnicas que usas al escribir código regular de JavaScript.</p>
    <p className="text-lg">Dependerás de <span className="font-bold">funcionalidades de JavaScript</span> como los <span className="text-blue-400">bucles for</span> y la <span className="text-blue-400">función map()</span> de los arreglos para renderizar listas de componentes.</p>
  </div>;
}