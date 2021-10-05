import React from 'react'
import Btn from '../../components/Buttons/Button'
const Livre = (props) => {
    const livre=props.livre
    return (
        <tr>
            <td>{livre.titre}</td>
            <td>{livre.auteur}</td>
            <td>{livre.nb_page}</td>
            <td><Btn text="Modifier" color="btn-primary" click={() =>props.handleModifierLivre()} /></td>
            <td><Btn text="Supprimer" color="btn-danger" click={() =>props.handleDeleteLivre(livre.id)} /></td>
        </tr>
    )
}

export default Livre
