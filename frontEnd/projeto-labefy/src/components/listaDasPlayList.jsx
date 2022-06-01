import React from 'react'
import axios from 'axios';




class App extends React.Component {
  state = {
        valueCriarPlay: "",
        listaPlayList: [],
    }

  componentDidMount(){
    this.getAllPlaylist()
  }

  getAllPlaylist = () =>{
    //  função que pega todas as playlists que estão cadastrada no banco de dados

      const URL = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'

      const header = {
          headers: {
              Authorization: "jonathan-souza-joy"
            }
        }

      axios.get(URL, header)

      .then((res) =>{
          this.setState({listaPlayList: res.data.result.list})
      })

      .catch((err) =>{
        console.log(err.response.data)
      }) 
    }

    postCriarPlaylist = () =>{
        // função que cria a playlist e joga para o banco de dados

        const URL = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'

        const header = {
            headers: {
                Authorization: "jonathan-souza-joy"
            }
        }

        let body = {
            name: this.state.valueCriarPlay
        }

        axios.post(URL, body, header)

        .then((res) =>{
            console.log("playlist criada")
        })

        .catch((err) =>{
            console.log(err.response.data)
        })
    }





    handlerCriarPlaylist = (e) =>{
        this.setState({valueCriarPlay: e.target.value})
    }

  render(){
    let listaRenderizada = this.state.listaPlayList.map((i) => {
        return <div key={i.id}><p>{i.name}</p></div>
    });

    console.log(this.state.listaPlayList);
    return (
      <div>
            <img src="" alt="" /> <span>criar playlist</span> 
            <input
                placeholder='Nome da playlist'
                value={this.state.valueCriarPlay}
                onChange={this.handlerCriarPlaylist}
            />
            <button onClick={this.postCriarPlaylist}>criar</button>
            {listaRenderizada.length ? listaRenderizada : "carregando..."}
      </div>
    );
  }
}

export default App;