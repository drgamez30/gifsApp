export const Events = ({ event, starDate, endDate}) =>{
    return (
    <div className="event-container">
        <div className="event-container">
            <h3>{event}</h3>
            <span>Inicio: {starDate}</span>
            <span>Fin: {endDate}</span>
        </div>
    </div>
    );
}