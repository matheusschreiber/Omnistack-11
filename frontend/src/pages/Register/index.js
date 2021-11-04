import React, { useState } from "react";
import './styles.css'
import imagemLogo from '../../assets/logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'

export default function Register(){
    const nav = useNavigate()
    async function handleRegister(e){
        e.preventDefault();
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        }
        
        try {
            const response = await api.post('/ongs', data)
            alert('Seu ID de acesso: ' + response.data.id)
            nav('/')
        } catch (err) {
            alert('Erro no cadastro: ' + err)
        }
        
    }

    const [name, setName] = new useState("")
    const [email, setEmail] = new useState("")
    const [whatsapp, setWhatsapp] = new useState("")
    const [city, setCity] = new useState("")
    const [uf, setUf] = new useState("")
    
    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={imagemLogo} alt="be the hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos de sua ONG.</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para o logon
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input placeholder="Nome da ONG"
                            value = {name}
                            onChange={ (e)=>{setName(e.target.value)}}/> 
                    
                    <input type="email" placeholder="E-mail"
                            value = {email}
                            onChange={ (e)=>{setEmail(e.target.value)}}/>
                    
                    <input placeholder="Whatsapp" 
                            value = {whatsapp}
                            onChange={ (e) => {setWhatsapp(e.target.value)}}/>

                    <div className="input-group">
                        <input placeholder="Cidade"
                                value={city}
                                onChange={ (e)=>{setCity(e.target.value)}}/>

                        <input placeholder="UF" style={{width: 80}}
                                value={uf}
                                onChange={(e)=>{setUf(e.target.value)}}/>
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}