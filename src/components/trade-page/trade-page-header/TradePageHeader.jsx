import { Divider } from 'antd';
import React from 'react';

function TradePageHeader(props) {
    return (
        <div>
            <div className='flex items-center py-3'>
                <div className='flex'>
                    <div className='self-center'>
                        <img className='mr-3 h-8' src='https://mux-world.github.io/assets/img/tokens/MATIC.svg' />
                    </div>
                    <div className='mr-2'>
                        <div className='text-white font-semibold'>MATIC</div>
                        <div className='text-xs whitespace-nowrap tp'>
                            Up to 100X
                        </div>
                    </div>
                    <div className='self-center text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </div>
                </div>
                <Divider type="vertical" />
                <div className='px-4'>
                    <span className='font-bold text-xl text-white mr-3'>0.80</span>
                    <span className='text-base text-red-600'>(- 0.33%)</span>
                </div>
                <Divider type="vertical" />
                <div className='pl-3 pr-6 text-xs'>
                    <div className='tp'>Long / Short</div>
                    <div className='text-white'> $13 / $18</div>

                </div>
                <Divider type="vertical" />
                <div className='pl-3 pr-6 text-xs'>
                    <div className='tp'>Est. 8H Funding (L/S)</div>
                    <div className='text-white'>0.030% / 0.011%</div>
                </div>
            </div>
        </div>
    );
}

export default TradePageHeader;