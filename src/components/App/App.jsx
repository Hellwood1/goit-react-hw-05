import css from './App.module.css'
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={} />
        <Route path='' element={} />
        <Route path='' element={}>
          <Route path='' element={} />
          <Route path='' element={} />
        </Route>
        <Route path='*' element={} />
      </Routes>
    </>
  )
}

export default App
