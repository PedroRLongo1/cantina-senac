import react from "react";
import '../styles/CardEventoStyle.css';

const CardEvento: React.FC = () => {

    return(
        <div className="card-background">
            <p>Nome do Evento</p>
            <p>Descrição do Evento</p>
            <p>Sala do Evento</p>
            <p>Data</p>
            <p>Hora</p>
            <p>Expectativa de público</p>
        </div>
    )
}

export default CardEvento;