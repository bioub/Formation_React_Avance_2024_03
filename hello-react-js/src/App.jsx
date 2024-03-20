import { Suspense, lazy, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clock from './Clock'
import MultiStateButton from './exercices-tests/MultiStateButton'
import PokemonList from './exercices-tests/pokemons/pokemon-list'
// import ExportExcel from './ExportExcel'

const ExportExcel = lazy(() => import('./ExportExcel'));

function App() {
  const [color, setColor] = useState('Bleu')
  const [count, setCount] = useState(0)
  const [showClock, setShowClock] = useState(false);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)} data-testid="counter">
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR (Hot Module Replacement)
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Suspense fallback={<p>Loading...</p>}>
        {showClock && <ExportExcel />}
      </Suspense>
      {showClock && <Clock />}
      <button onClick={() => setShowClock(!showClock)}>ON/OFF</button>
      <MultiStateButton items={['Rouge', 'Vert', 'Bleu']} selected={color} onSelected={setColor} />
      <PokemonList />
    
    </>
  )
}

export default App
