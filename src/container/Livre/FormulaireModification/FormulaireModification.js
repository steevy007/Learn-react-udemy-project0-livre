import React, { Component } from 'react'
import Btn from '../../../components/Buttons/Button'
export default class ModificationLivre extends Component {

    state = {
        id:'',
        titre: '',
        auteur: '',
        page: ''
    }

    componentDidMount=()=> {
        this.setState({
            id:this.props.livre.id,
            titre: this.props.livre.titre,
            auteur: this.props.livre.auteur,
            page: this.props.livre.nb_page
        })
    }

    handleValidation = () => {
        this.props.handleModificationLivre(this.state.id,this.state.titre,this.state.auteur,this.state.page)
    }

    handleChange=(event)=>{
        const target=event.target
        this.setState({
            [target.name]:target.value
        })
    }
    render() {
        return (
            <>
                <tr>
                    <td><input className="form-control" value={this.state.titre} name="titre"  onChange={(event)=>this.handleChange(event)} /></td>
                    <td><input className="form-control" value={this.state.auteur} name="auteur" onChange={(event)=>this.handleChange(event)}  /></td>
                    <td><input className="form-control" value={this.state.page} name="page" onChange={(event)=>this.handleChange(event)}  /></td>
                    <td><Btn text="validation" color="btn-dark" click={() => this.handleValidation()} /></td>
                </tr>
            </>
        )
    }
}
