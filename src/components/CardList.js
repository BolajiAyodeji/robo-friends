import React from 'react';
import Card from './Card'

const CardList = ({ robots }) => {
    return (
        <div>
            {
                robots.map(user => {
                    return (
                        <Card
                         key={user.id}
                         id={user.id}
                         name={user.name}
                         username={user.username}
                         phone={user.phone}
                         email={user.email}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;