import React, { Component } from 'react'
import Livre from './Livre/Livre'
import FormulaireAjout from './FormulaireAjout/FormulaireAjout'
import FormulaireModificationLivre from './Livre/FormulaireModification/FormulaireModification'
import Alert from '../components/Alert/Alert'
export default class Livres extends Component {

    state = {
        Livres: [
            { id: 1, titre: 'Algorithmique', auteur: 'Mathieu Gaston', nb_page: 234 },
            { id: 2, titre: 'Java', auteur: 'Jaques', nb_page: 214 },
            { id: 3, titre: 'PHP', auteur: 'Jaques Monestime', nb_page: 114 }
        ],
        idLivreModifier: 0,
        alertMessage:null,
        alertStyle:null
    }


    handleDeleteLivre = (id) => {
        const livreIndexFind = this.state.Livres.findIndex(l => { return l.id === id })
        const newLivres = [...this.state.Livres]
        newLivres.splice(livreIndexFind, 1)
        this.setState({ Livres: newLivres ,alertMessage:'Supression Reussi',alertStyle:'alert-danger' })
        console.log(`Delete Livre Id : ${id}`)
    
    }

    handleAddLivre = (titre, auteur, page) => {
        const id = this.state.Livres.length + 1;
        const newLivre = {
            id: id,
            titre: titre,
            auteur: auteur,
            page: page
        }

        const copyLivres = [...this.state.Livres]
        copyLivres.push(newLivre)

        this.setState({
            Livres: copyLivres,
            alertMessage:'Livre Ajoute avec success',
            alertStyle:'alert-primary'
        })

        this.props.fermerAjoutLivre()
    }


    handleModificationLivre=(id,titre,auteur,page)=>{
        const caseLivre=this.state.Livres.findIndex((l)=>{return l.id===id})
        const newLivre={id,titre,auteur,page}
        const oldLivres=[...this.state.Livres]
        oldLivres[caseLivre]=newLivre

        this.setState({
            Livres:oldLivres,
            idLivreModifier:0,
            alertMessage:'Modification Reussi',
            alertStyle:'alert-dark'
        })

        //console.log(oldLivres)
    }



    render() {
        return (
            <>
                {this.state.alertMessage && <Alert text={this.state.alertMessage} alertStyle={this.state.alertStyle} />}
                <table className="table text-center">
                    <thead>
                        <tr className="table-dark">
                            <th>Titre</th>
                            <th>Auteur</th>
                            <th>Nombres Pages</th>
                            <th colSpan="2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            this.state.Livres.map((value, index) => {
                                if (this.state.idLivreModifier !== value.id) {
                                    return (
                                        <Livre key={index} livre={value} handleDeleteLivre={this.handleDeleteLivre} handleModifierLivre={() => this.setState({ idLivreModifier: value.id })} />
                                    )
                                } else {
                                    return <FormulaireModificationLivre key={index} livre={value} handleModificationLivre={this.handleModificationLivre} />
                                }

                            })
                        }
                    </tbody>
                </table>

                {this.props.isSubmit && <FormulaireAjout handleAddLivre={this.handleAddLivre} />}
            </>

        )
    }
}
