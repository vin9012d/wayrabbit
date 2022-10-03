import logo from './logo.svg';
import './App.css';
import { Allroutes } from './pages/Allroutes';
import {useSelector} from "react-redux"


function App() {
const data=useSelector((store)=>store)
console.log(data,'data')
  return (
    <div className="App">
  <Allroutes />
      
    </div>
  );
}

export default App;
