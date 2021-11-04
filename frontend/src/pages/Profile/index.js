import React, { useEffect, useState } from "react";
import './styles.css'
import imagemLogo from '../../assets/logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

import api from '../../services/api'

export default function Profile() {
    const ongName = localStorage.getItem('ongName')
    const ongID = localStorage.getItem('ongID')
    const [incidents, setIncidents] = useState([])
    const nav = useNavigate()
    useEffect(()=>{
        api.get('/incidents/profile', {
            headers:{
                Authorization: ongID
            }
        }).then(response => {
            setIncidents(response.data)
        })
    }, [ongID])

    async function handleDeleteIncident(id){
        try {
            await api.delete(`/incidents/${id}`, {
                headers: {
                    Authorization: ongID
                }
            })
            setIncidents(incidents.filter(incident=> incident.id!==id))
        } catch (err) {
            alert('Erro ao deletar caso - ' + id)
        }
    }

    function handleLogout(){
        localStorage.clear()
        nav('/')
    }

    return (
        <div className="profile-container">
            <header>
                <img src={imagemLogo} alt="be the hero" />
                <span>Bem vinda, {ongName}</span>
                <Link class="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button onClick={() => handleLogout()}>
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>
            <ul>
                {
                    incidents.map((i)=>(
                    <li key={i.id}>
                        <strong>CASO:</strong>
                        <p>{i.title}</p>
                        <strong>DESCRIÇÃO:</strong>
                        <p>{i.description}</p>
                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(i.value)}</p>
                        <button onClick={()=>{handleDeleteIncident(i.id)}}> <FiTrash2 size={20} color="a8a8b6" /> </button>
                    </li>
                    ))
                }
            </ul>
        </div>
    );
}