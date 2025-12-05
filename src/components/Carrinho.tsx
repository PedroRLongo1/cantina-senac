import react from "react";
import '../styles/CarrinhoStyle.css';
import { useCarrinhoStore } from '../store/cardapioStore';
import { Link } from "react-router-dom";
import CardItemPrato from "./CardItemPedido";

export interface carrinhoProps {
    id: string;
    nome: string;
    valor: number;
    descricao: string;
  }

const Carrinho: React.FC = () => {

    const cart = useCarrinhoStore();

    console.log(cart.cart)

    return(
        <div className="background">
            <div className="carrinho-container">
                <div className="carrinho-interface">
                    <div className="user-area">
                        <p>username: example</p>
                        <p>typeuser: example</p>
                    </div>
                    <div className="carrinho-content">
                        <h1>Carrinho</h1>
                        <div className="itens">
                            {
                                cart.cart.map((item) => {
                                    return (
                                        <CardItemPrato
                                            nome={item.nome}
                                            descricao={item.descricao}
                                            preco={item.valor}
                                        />
                                    )
                                })
                            }
                        </div>
                        <div className="total">
                            <p>Total: R$ 00,00</p>
                        </div>
                    </div>
                    <div className="buttons">
                        <Link to="/Home">
                            <button className="Voltar">
                                Voltar
                            </button>
                        </Link>
                        <button className="cancelar">Cancelar pedido</button>
                        <button className="finalizar">Finalizar pedido</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carrinho;