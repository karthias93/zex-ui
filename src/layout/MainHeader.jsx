import React, { useState } from 'react';
import { Menu, Button, Dropdown, Space, Drawer } from 'antd';
import NetsTypeDropdown from '../components/main-header/nets-type-dropdown/NetsTypeDropdown';
import MoreLinksDropdown from '../components/main-header/more-links-dropdown/MoreLinksDropdown';
import MobilviewMenu from '../components/mobile-view-menu/MobilviewMenu';


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
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (
        <>
            <div className='flex place-content-between'>
                <div className='flex w-3/5'>
                    <div className='text-white mr-4 self-center hidden m-view-dblock' onClick={showDrawer}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-align-justified" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <line x1="4" y1="6" x2="20" y2="6"></line>
                            <line x1="4" y1="12" x2="20" y2="12"></line>
                            <line x1="4" y1="18" x2="16" y2="18"></line>
                        </svg>
                    </div>
                    <div
                        style={{
                            float: 'left',
                        }}
                        className='self-center mr-5 flex-none'>
                        <img src={require('../images/zex-logo.png')} className="logo" />
                    </div>
                    <div className='grow m-view-dnone'>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['trade']}
                            items={items}
                            className="w-full"
                        />
                    </div>
                </div>
                <div className='flex self-center w-2/5 justify-end'>

                    <div>
                        <NetsTypeDropdown />
                    </div>
                    {/* <div className='tp self-center text-sm mr-5 flex'>
                        <img src='https://polygon.mux.network/img/polygon.0c049c96.svg' className='mr-1'></img> Polygon Mumbai Testnet
                    </div> */}
                    <div className='self-center'>
                        <Button type="primary" className=''>Connect Wallet</Button>
                    </div>
                    <div className='tp self-center text-sm ml-5 m-view-dnone'>
                        <MoreLinksDropdown />
                    </div>
                </div>
            </div>
            <Drawer size="default" className='menu-drawer' placement="left" onClose={onClose} open={open}>
                <MobilviewMenu/>
            </Drawer>
        </>
    );
}

export default MainHeader;