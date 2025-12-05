import react from "react";
import '../styles/CardItemPedidoStyle.css';
import { useCarrinhoStore } from '../store/cardapioStore';

interface CardItemPratoProps {
    nome: string;
    descricao: string;
    preco: number;
}

const CardItemPrato: React.FC<CardItemPratoProps> = ({
    nome,
    descricao,
    preco,
}) => {

    return(
        <div className="item-background">
            <div className="item-content">
                <div className="table-cell-name">
                    <p className="name">{nome}</p>
                </div>
                <div className="table-cell-desc">
                    <p className="detalhes">{descricao}</p>
                </div>
                <div className="table-cell-pric">
                    <p className="price">R$ {preco}</p>
                </div>
                <div className="table-cell-dele">
                    <button>
                        Remover
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardItemPrato;