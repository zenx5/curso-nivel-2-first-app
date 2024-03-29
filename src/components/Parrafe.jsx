
export default function Parrefe(props) {
    const { color, className, children } = props

    return <p className={className} style={{ color:color }}>{ children }</p>
}