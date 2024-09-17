import './card.css'

function Card(props){
    let clases='Card '+props.className;
    return <div className={clases}>{props.children}</div>;
}
export default Card; 