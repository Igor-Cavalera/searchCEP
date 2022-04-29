function Resultado (props) {
    return (
        <main className="main">
            <h2>CEP: {props.cep.cep}</h2>

            <span>{props.cep.logradouro}</span>
            <span>Complemento  - {props.cep.complemento}</span>
            <span>Bairro - {props.cep.bairro}</span>
            <span>{props.cep.localidade} - {props.cep.uf}</span>
        </main>
        )
}

export default Resultado;