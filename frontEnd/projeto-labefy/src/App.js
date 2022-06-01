import React from 'react'
import './App.css';
import Home from './components/home'
import Lista from './components/listaDasPlayList'

class App extends React.Component {
  state = {
    pagina: "home"
  }
    
  mudarPagina = () =>{
    if (this.state.pagina === "home"){
      this.setState({pagina: "playlists"})
    }else if (this.state.pagina === "playlists"){
      this.setState({pagina: "home"})
    }
  }

  render(){
    

    return (
      <div class="layout"> 
        <div>
          <p onClick={this.mudarPagina}>{this.state.pagina === "home"? "Minhas Playlists" : "Home"}</p>
        </div>

        <div>
          {this.state.pagina === "home"? <Home/> : <Lista/>}

        </div>
      </div>
    );
  }
}

export default App;