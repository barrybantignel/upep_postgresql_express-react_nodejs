import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render(){
    
    return (
      <div className="container text-center">
       
        <header className="App-header">
        <h1 className="App-title">Bienvenue sur Niam-Niam le site de produits naturels de l'Union 
              Pour le Progrès et l'Entraide entre les Peuples
          </h1> 
                 
        </header>

        <footer>
                <div className="footer-container">
                  <p style={{fontSize:"20px", color:"red"}}> Projet réalisé par BARRY Boubacar-2020</p>
                  <a style={{fontSize:"20px", color:"green"}}>Les images de produits disponibles en stock</a>
                  <p style={{fontSize:"20px", color:"blue"}}>Contact: Boubacar BARRY email: bb@sfr.fr tel: 1234</p>


                </div>
                </footer> 
      </div>
    );
  }

 
}

export default App;
