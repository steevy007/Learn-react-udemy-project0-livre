import React, { Component } from 'react'
import {withFormik} from 'formik'
import Btn from '../../components/Buttons/Button'
import * as Yup from 'yup'
class FormulaireAjout extends Component {
    /*state={
        titre:'',
        auteur:'',
        page:''
    }*/


    handleChange=(event)=>{
        const target=event.target
        this.setState({
            [target.name]:target.value
        })
    }

    /*handleSubmitForm=(event)=>{
        event.preventDefault()
        this.props.handleAddLivre(this.state.titre,this.state.auteur,this.state.page)
        this.clean()
    }*/

     clean=()=>{
        this.setState({
            titre:'',
            auteur:'',
            page:''
        })
    }

    render() {
        return (
            <>
                <h2 className="text-center text-primary" style={{ fontFamily: 'Raleway', fontWeight: 'bolder' }}>Formulaire Ajout Livre</h2>
                <form onSubmit={this.props.handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Titre du livre</label>
                        <input type="text" onBlur={this.props.handleBlur} value={this.props.values.titre} onChange={this.props.handleChange} className="form-control" id="titre" name="titre" placeholder="name@example.com" />
                        { this.props.touched.titre && this.props.errors.titre && <span style={{color:'red',marginTop:'1rem',fontStyle:'italic'}}>{this.props.errors.titre}</span>}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Auteur du livre</label>
                        <input type="text" onBlur={this.props.handleBlur} value={this.props.values.auteur} onChange={this.props.handleChange} className="form-control" name="auteur" id="auteur" placeholder="name@example.com" />
                        {this.props.touched.auteur && this.props.errors.auteur && <span style={{color:'red',marginTop:'1rem',fontStyle:'italic'}}>{this.props.errors.auteur}</span>}
                  
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Nombre Page du livre</label>
                        <input type="number" onBlur={this.props.handleBlur} value={this.props.values.page} onChange={(event)=>this.props.setFieldValue('page',+event.target.value)} className="form-control" id="page" name="page" placeholder="name@example.com" />
                        {this.props.touched.page && this.props.errors.page && <span style={{color:'red',marginTop:'1rem',fontStyle:'italic'}}>{this.props.errors.page}</span>}
                  
                   
                    </div>
                    <div className="mb-4">
                        <Btn text="Ajouter" color="btn-primary" />
                    </div>
                </form>
            </>
        )
    }
}

export default withFormik({
    mapPropsToValues:()=>({
        titre:'',
        auteur:'',
        page:''
    }),
    validationSchema:Yup.object().shape({
        titre:Yup.string()
                    .min(3,"Le titre doit avoir au plus 3 caracteres")
                    .max(15,"Le titre doit avoir moins de 15 caracteres")
                    .required("Le titre est obligatoire"),
        auteur:Yup.string()
                    .min(3,"L'auteur doit avoir plus de 3 caractere")
                    .required("l'auteur est obligatoire"),
        
        page:Yup.number()
                .lessThan(1000,"nombre de page inferieur a 1000")
                .moreThan(50,"nombre de page superieur a 50")
                .required('nombre page obligatoire')
    })
    /*validate:values=>{
        const errors={}
        if(values.titre.length<3){
            errors.titre="Le titre doit avoir au plus 3 caracteres"
        }
        if(values.titre.length>15){
            errors.titre="Le titre doit avoir moins de 15 caracteres"
        }

        if(!values.auteur){
            errors.auteur='le champs auteur est obligatoire'
        }
        return errors
    },*/,
    handleSubmit:(values,{props})=>{
        props.handleAddLivre(values.titre,values.auteur,values.page)
        props.clean()
    }
})(FormulaireAjout)