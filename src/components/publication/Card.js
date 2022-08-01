import { AiOutlineCalendar } from 'react-icons/ai'
const Card = ({ image, p }) => {
    return (<div class="card"><img src={image}
        alt="publications" />
        <p>{p}</p>
        <p><AiOutlineCalendar style={{ color:'#f1b61a' }}/>5 october 2022</p>
    </div> );
}
 
export default Card;