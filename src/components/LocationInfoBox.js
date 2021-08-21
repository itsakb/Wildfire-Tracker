const LocationInfoBox = ({ info }) => {
    return (
        <div className="location-info">
            <h2>Event Location Info</h2>
            <br />
            <ul>
                <li>Location: <strong>{ info.title }</strong></li>
            </ul>
        </div>
    )
}

export default LocationInfoBox;