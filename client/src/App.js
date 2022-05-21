import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Link,
} from "react-router-dom"
import Login from './views/Login'

function App() {
  return (
    <BrowserRouter>
      <Login></Login>
    </BrowserRouter>
  );
}

export default App;
