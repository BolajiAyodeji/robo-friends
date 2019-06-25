import React from 'react';
import Card from './Card'

const CardList = ({ robots }) => {
    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                        <Card
                         key={i}
                         id={robots[i].id}
                         name={robots[i].name}
                         username={robots[i].username}
                         phone={robots[i].phone}
                         email={robots[i].email}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;