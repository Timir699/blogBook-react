import Components from './components/Components'
import './App.css';
import { BrowserRouter } from "react-router-dom"
function App() {

  return (
    <div style={{ padding: "40px" }}>
      <BrowserRouter basename="https://practical-snyder-2e0e48.netlify.app/">
        <Components />
      </BrowserRouter>
    </div >


  );
}

export default App;
