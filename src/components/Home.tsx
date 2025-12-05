import React from "react";
import '../styles/HomeStyle.css'
import CardPrato from "./CardPrato";
import CardEvento from "./CardEvento";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
    return (
        <div className="background">
            <div className="main-container">
                <div className="user-area">
                    <p>username: example</p>
                    <p>typeuser: example</p>
                </div>
                <div className="user-options">
                    <p>filtros</p>
                    <p>filtro 1</p>
                    <p>filtro 2</p>
                    <p>filtro 3</p>
                    <Link to={"/carrinho"}>
                        <button className="carrinho-button">
                            Carrinho
                        </button>
                    </Link>
                </div>
                <div className="main-contend">
                    <CardPrato
                        nome="Prato Exemplo"
                        descricao="Descrição do prato exemplo"
                        preco={29.90}
                        disponivel={false}
                    />
                    <CardPrato
                        nome="Prato Exemplo2"
                        descricao="Descrição do prato exemplo"
                        preco={29.90}
                        disponivel={true}
                    />
                    <CardPrato
                        nome="Prato Exemplo3"
                        descricao="Descrição do prato exemplo"
                        preco={29.90}
                        disponivel={true}
                    />
                    <CardPrato
                        nome="Prato Exemplo4"
                        descricao="Descrição do prato exemplo"
                        preco={29.90}
                        disponivel={true}
                    />
                    <CardPrato
                        nome="Prato Exemplo5"
                        descricao="Descrição do prato exemplo"
                        preco={29.90}
                        disponivel={true}
                    />
                    <CardPrato
                        nome="Prato Exemplo6"
                        descricao="Descrição do prato exemplo"
                        preco={29.90}
                        disponivel={true}
                    />
                    <CardPrato
                        nome="Prato Exemplo6"
                        descricao="Descrição do prato exemplo"
                        preco={29.90}
                        disponivel={true}
                    />
                    <CardPrato
                        nome="Prato Exemplo6"
                        descricao="Descrição do prato exemplo"
                        preco={29.90}
                        disponivel={true}
                    />

                </div>
            </div>  
        </div>
    );
}

export default Home;