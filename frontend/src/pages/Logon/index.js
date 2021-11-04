import React, { useState } from "react";
import './styles.css'
import imagemLogo from '../../assets/logo.svg'
import imagemHeroes from '../../assets/heroes.png'
import { Link, useNavigate } from 'react-router-dom'

import api from '../../services/api'

//site com icons https://feathericons.com/
import { FiLogIn } from 'react-icons/fi'

export default function Logon(){
    const nav = useNavigate();
    const [id, setId] = useState("");
    async function handleLogon(e){
        e.preventDefault()
        try {
            const response = await api.post('/sessions', {id})    
            localStorage.setItem('ongID', id)
            localStorage.setItem('ongName', response.data.name)
            nav('/profile')
        } catch (err) {
            alert('id incorreta')
        }
    }
    return (
        <div className="logon-container">
            <section className="form">
                <img src={imagemLogo} alt="be the hero"/>
                <form onSubmit={handleLogon}>
                    <h1>Faça seu Logon</h1>
                    <input placeholder="Sua ID"
                            value={id}
                            onChange={(e)=>{setId(e.target.value)}}/>

                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>

            </section>

            <img src={imagemHeroes} alt="imagem heroes"/>
        </div>
    );
}