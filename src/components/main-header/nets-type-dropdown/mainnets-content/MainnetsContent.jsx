import React from 'react';

function MainnetsContent(props) {
    return (
        <div className='nets-dropdown-items'>
            <ul className='tp p-0 font-bold text-sm'>
                <li className='p-2'>
                    Arbitrum
                </li>
                <li className='p-2'>
                    BNB Chain
                </li >
                <li className='p-2'>
                    Avalanche
                </li>
                <li className='p-2'>
                    Fantom
                </li>
            </ul>
        </div>
    );
}

export default MainnetsContent;