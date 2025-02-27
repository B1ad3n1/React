import './InformationCard.css'
function InformationCard(props){

    const {title, color} = props

    let styleObj = {
        fontSize: '32px',
        color: 'white',
        borderTop: '2px solid white',
        style: 'italic',
        margin: '5%'
      };
    return(
        <div className={`InformationCard ${color}`}>
            <h1 style={styleObj}>{title}</h1>
        </div>
    )
}

export default InformationCard;