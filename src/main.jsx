import { StrictMode } from 'react'
//import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom"; //No more used
import './index.css'
import App from './App.jsx'


/* En react nuevo ya no haces esto:
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
*/
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);