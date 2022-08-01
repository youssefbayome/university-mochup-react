
import { AiOutlineCalendar } from 'react-icons/ai'
const Card = ({ image, p, head }) => {
    return (<div className={'card'}>
        <div className={'card-image'}><img
            src={image} alt="research" />
        </div>
        <div className={'card-text'}><h2>{head}</h2>
            <p>{p}</p>
            <p><AiOutlineCalendar style={{ color: '#f1b61a' }} />2 may 2022</p>
        </div>
    </div>);
}

export default Card;