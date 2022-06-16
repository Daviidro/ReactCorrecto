import "./Title.css"

export default function Title (props) {
    console.table(props)
    return (
        <h1>{props.text.toUpperCase()}</h1>
    )
}


// Crear un componente llamado Full name,el cual nos regrese nuestro nomvbre completo, como parrafo, dadoslos promps
// firstname, lastname
// Notas el apellido puede no ir


