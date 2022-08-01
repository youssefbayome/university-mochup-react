import { AiOutlineCalendar } from 'react-icons/ai'
const Card = ({ className, image, head, p }) => {
    return (
        <div className={className}>
        <img src={image} alt="news" />
        <h2>{head}</h2>
        <p>{p}</p>
        <p><AiOutlineCalendar /> 2 jul 2022</p>
    </div>);
}

export default Card;