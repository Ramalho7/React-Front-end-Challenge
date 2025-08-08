import React, { useEffect, useState } from "react";
import "./IntroModel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const IntroModel = () => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setShowModal(true)
    }, [])

    if (!showModal) return null;

    return (
        <div className="modal-overlay"
            onClick={() => setShowModal(false)}>
            <div className="modal-content"
                onClick={e => e.stopPropagation()}>
                <button className="button-close" onClick={() => setShowModal(false)}><FontAwesomeIcon icon={faTimes} /></button>
                <h2>Bem-vindo ao site!</h2>
                <h3>Funcionalidades do sistema:</h3>
                <ol className="features-list">
                    <li>Visualizar lista e card de países com: nome, bandeira, região e população e botão para favorito</li>
                    <li>Alterar modo de visualização de lista para card</li>
                    <li>Pesquisar por países pelo nome</li>
                    <li>Ordenar a visualização por população (crescente ou decrescente) e região (de A-Z ou de Z-A)</li>
                    <li>Adicionar países aos favoritos e visualizar em uma seção separada</li>
                    <li>Alternar entre DarkTheme e LightTheme</li>
                </ol>
                <p className="api-info">
                    <i>Todos os dados são obtidos da API pública <a href="https://restcountries.com/" target="_blank" rel="noopener noreferrer">Rest Countries</a>.</i>
                </p>
            </div>

        </div>
    )
}

export default IntroModel;