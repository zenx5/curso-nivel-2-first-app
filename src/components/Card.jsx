import './styles.css'

export default function Card(props) {
    const { title, children } = props



    return <div className="card-2" >
        <h1 style={styles.title}>{ title }</h1>
        <p className="mi-estilo-custom">{ children }</p>
    </div>
}

const styles = {
    title:{
        color:'red'
    },
    content:{

    }
}