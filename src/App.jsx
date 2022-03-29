import React, {Component} from "react";
import './COMPONENTS/STYLES/App.css';
import CronometroDigital from './COMPONENTS/RELOGIO';
import Cronometragem from "./COMPONENTS/RELOGIO/cronometragem";

class App extends Component {
  render(){
    return(
      <div>
        <CronometroDigital/>
        <Cronometragem/>
      </div>
    );
  }
}
export default App;