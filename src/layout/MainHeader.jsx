import React from 'react';
import { Menu, Button, Dropdown, Space } from 'antd';
import NetsTypeDropdown from '../components/main-header/nets-type-dropdown/NetsTypeDropdown';


function MainHeader(props) {
    const items = [
        {
            label: 'Trade',
            key: 'trade',
        },
        {
            label: 'Liquidity',
            key: 'liquidity',
        },
        {
            label: 'Stake',
            key: 'stake',
        },
        {
            label: 'Stake',
            key: 'stake',
        },
        {
            label: 'Leaderboard',
            key: 'leaderboard',
        },
        {
            label: 'Redeem',
            key: 'redeem',
        },
        {
            label: 'Stats',
            key: 'stats',
        },
        {
            label: 'Referral',
            key: 'referral',
        },
    ];

    return (
        <>
            <div className='flex place-content-between'>
                <div className='flex w-3/5'>
                    <div
                        style={{
                            float: 'left',
                        }}
                        className='self-center mr-5 flex-none'>
                        <img src={require('../images/zex-logo.png')} className="logo" />
                    </div>
                    <div className='grow '>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['trade']}
                            items={items}
                            className="w-full"
                        />
                    </div>
                </div>
                <div className='flex self-center'>

                    <div>
                        <NetsTypeDropdown />
                    </div>
                    {/* <div className='tp self-center text-sm mr-5 flex'>
                        <img src='https://polygon.mux.network/img/polygon.0c049c96.svg' className='mr-1'></img> Polygon Mumbai Testnet
                    </div> */}
                    <div className='self-center'>
                        <Button type="primary" className='mr-5'>Connect Wallet</Button>
                    </div>
                    <div className='tp self-center text-sm mr-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokWidth="2" stroke="currentColor" fill="none" >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <circle cx="5" cy="12" r="1"></circle>
                            <circle cx="12" cy="12" r="1"></circle>
                            <circle cx="19" cy="12" r="1"></circle>
                        </svg>
                    </div>
                </div>
            </div>

        </>
    );
}

export default MainHeader;