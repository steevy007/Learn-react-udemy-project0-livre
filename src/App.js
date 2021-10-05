import React from 'react'
import Titre1 from './components/Titre/Titre1'
import Btn from './components/Buttons/Button';
import Livres from './container/Livres'
class App extends React.Component {
  state={
    isSubmit:false
  }

  handleAddBook=(event)=>{
    event.preventDefault()
    this.setState((oldState,props)=>{
      return {
        isSubmit:!oldState.isSubmit
      }
    })
    
  }
  render(){
    const textSubmit=this.state.isSubmit?'Fermer Ajout':'Ajouter Livres'
    return (
      <>
        <div className="container">
          <Titre1 text="Pages listants les livres" />
          <Livres isSubmit={this.state.isSubmit} fermerAjoutLivre={()=>this.setState({isSubmit:false})} />
          <Btn  text={textSubmit} color="btn-success" size="w-100" click={(event)=>this.handleAddBook(event)}/>
        </div>
      </>
    );
  }
}

export default App;
