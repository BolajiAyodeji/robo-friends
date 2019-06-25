import React from 'react';

const Card = ({ name, email, phone, id }) => {
    return (
        <div className="tc grow bg-light-blue br3 pa3 ma3 dib bw2 shadow-5">
            <img alt='robot' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>&#x2706; {phone}</p>
                <p>&#x2709; {email}</p>
            </div>
        </div>
    );
}

export default Card;