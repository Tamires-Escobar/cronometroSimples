import React, {Component} from "react";
import styled from './style.module.css';

class Cronometragem extends Component{
    constructor(props){
        super(props);
        this.state = {
            numero: 0,
            segundos: null,
            minutos: null,
            botao: 'Começar'
        };
        this.timer = null;
        this.comecar = this.comecar.bind(this);
        this.zerar = this.zerar.bind(this);
    }
    comecar(){
        let state = this.state;

        if (this.timer !== null){
            clearInterval(this.timer);
            this.timer = null;
            state.botao = 'Começar'
        }else{
           
                this.timer = setInterval(()=>{
                    let state = this.state;
                    state.numero += 0.01;
                    this.setState(state);
                },10);
                
                
                state.botao = 'pausar';
            }
                
        
        this.setState(state);
    }


    zerar(){
        if(this.timer !== null){
            clearInterval(this.timer);
            this.timer = null;
        }
        let state = this.state;
        state.numero = 0;
        state.botao = 'Começar'
        this.setState(state);
    }
    render(){
        return(
            <div className={styled.container}>
                <a className={styled.tempo}>{this.state.segundos}{this.state.numero.toFixed(1)}</a>
                <a className={styled.tempo}>{this.state.minutos}{this.state.segundos}</a>
                <div className={styled.areaBtn}>
                    <button className={styled.botao} onClick={this.comecar}>{this.state.botao}</button>
                    <button className={styled.botao} onClick={this.zerar}>Limpar</button>

                   
                </div>
                
            </div>
        );
    }
}
export default Cronometragem;