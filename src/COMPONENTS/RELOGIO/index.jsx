import React, {Component} from 'react';
import styled from './style.module.css';

class CronometroDigital extends Component{
    constructor(props){
        super(props);
        this.state = {
            hora: '00 : 00: 00'
           
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({hora: new Date().toLocaleTimeString()})
        });
    }
  
    render(){
        return(
            <div className={styled.container}>
                <img src={require('../ASSETS/relogio.png')} alt={'img-relogio'} className={styled.img} ></img>
                <h1 className={styled.horario}>{this.state.hora}</h1>
                            
            </div>
        );
    }
}
export default CronometroDigital;