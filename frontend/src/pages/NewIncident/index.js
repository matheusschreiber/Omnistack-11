import React, {useState} from "react";
import './styles.css'
import imagemLogo from '../../assets/logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'

export default function NewIncident(){
    const [title, setTitle] = new useState("")
    const [description, setDescription] = new useState("")
    const [value, setValue] = new useState("")
    const nav = useNavigate()
    const ongID = localStorage.getItem('ongID')

    async function handleNewIncident(e){
        e.preventDefault();
        const data = {
            title,
            description,
            value
        }        
        try{
            const response = await api.post('/incidents', data, {
                headers:{
                    Authorization: ongID
                }
            })
            alert(`Caso com id ${response.data.id}, foi criado!`)
            nav('/profile')
        } catch (err) {
            alert("Problema na criação do caso: "+ err)
        }
    }
    
    return(
        <div className="newincident-container">
            <div className="content">
                <section>
                    <img src={imagemLogo} alt="be the hero"/>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso</p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para home
                    </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input placeholder="Título do caso"
                            value={title}
                            onChange={e=>setTitle(e.target.value)}/> 
                    <textarea placeholder="Descrição"
                            value={description}
                            onChange={e=>setDescription(e.target.value)}/>
                    <input placeholder="Valor em reais"
                            value={value}
                            onChange={e=>{setValue(e.target.value)}}/>      
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}