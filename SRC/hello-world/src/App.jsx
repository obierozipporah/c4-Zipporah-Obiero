import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
      <h1>Hello World</h1>

  <div>
    <h2>Full Name</h2>
        <p>Zipporah Obiero</p>
  </div>

  <div>
    <h2>Educational Background</h2>
        <p><b>2022-2025:</b> Multimedia University <br></br>
           <b>2018-2022:</b> Kisumu Girls <br></br>
           <b>2006-2017:</b> Legacy School
        
        </p>
  </div>

  <div>
    <h2>Professional Background</h2>
        <p>Unemployed</p>
  </div>

  <div>
    <h2>Skills</h2>
        <p>Html/Css <br></br>
          JavaScript <br></br>
          React
        </p>
  </div>
</div>

     
  )
}

export default App
