import React from 'react';

function Location(props){
    return (
        <div className='location-wrapper'>
            <img 
                className="location-photo" 
                alt={props.items.title} 
                src={props.items.imageUrl}
            />
            <div className='location-details'>
                <div>
                    <img className='marker' alt='Location Marker' src={require("../images/marker.png")} />
                    <p className='country'>{props.items.location}</p>
                    <a className='maps-link' href={props.items.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className='location-title'>{props.items.title}</h1>
                <p className='date'>{props.items.startDate} - {props.items.endDate}</p>
                <p className='description'>{props.items.description}</p>
            </div>
        </div>
    );
}

export default Location;