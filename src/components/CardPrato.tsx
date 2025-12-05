import react from "react";
import '../styles/CardPratoStyle.css';
import { useCarrinhoStore } from '../store/cardapioStore';
import { carrinhoProps } from "./Carrinho";

interface CardPratoProps {
    nome: string;
    descricao: string;
    preco: number;
    disponivel: boolean;
    imagem?: string;
}

const CardPrato: React.FC<CardPratoProps> = ({
    nome,
    descricao,
    preco,
    disponivel,
    imagem
}) => {

    const produtoExemplo: carrinhoProps = {
        id: '1',
        nome: nome,
        valor: preco,
        descricao: descricao
    };

    const cartStore = useCarrinhoStore();

    function handlePedir(): void {
        cartStore.addToCart(produtoExemplo)
    }

    return(
        <div className="card-background">
            <div className="image">
                <img src={imagem} alt="produto" />
            </div>
            <div className="card-content">
                <div className="info-1">
                    <p className="title">{nome}</p>
                    <p className="description">{descricao}</p>
                </div>
                <div className="info-2">
                    <div className="info-3">
                        <p>R$ {preco}</p>
                    </div>
                    <div className="info-3">
                        {
                        disponivel ? 
                            <button
                                className="order-button"
                                onClick={() => handlePedir()}
                            >
                                pedir
                            </button>
                        : <p className="indisp-text">Indisponível</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardPrato;