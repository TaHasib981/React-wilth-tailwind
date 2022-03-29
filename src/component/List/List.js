import React from 'react';

const List = (props) => {
    const { id, name, link } = props.uilist
    return (
        <div>
            <a className='mr-9' href={link} >{name}</a>
        </div>
    );
};

export default List;