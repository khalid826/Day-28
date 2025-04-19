import React from 'react';

const Card = ({ name, price, description }) => {
    const formatIDR = (value) => 'Rp' + value.toLocaleString('id-ID');

    return (
        <div style={{
            border: '1px solid gray',
            padding: '12px',
            borderRadius: '8px',
            width: '250px',
            margin: '10px'
        }}>
            <h3>{name}</h3>
            <table>
                <tbody>
                    <tr>
                        <td><strong>Price:</strong></td>
                        <td>{formatIDR(price)}</td>
                    </tr>
                    <tr>
                        <td>{description}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Card;
