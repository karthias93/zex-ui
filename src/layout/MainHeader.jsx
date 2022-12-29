import React, { useState } from 'react';
import { Menu, Button, Dropdown, Space, Drawer, Modal, Divider } from 'antd';
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

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (    
        <>
            <div className='flex place-content-between'>
                <div className='flex w-3/5'>
                    <div className='text-white mr-4 self-center hidden m-view-dblock' onClick={showDrawer}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-align-justified" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
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
                        <Button type="primary" className='' onClick={showModal}>Connect Wallet</Button>
                    </div>
                    <div className='tp self-center text-sm ml-5 m-view-dnone'>
                        <MoreLinksDropdown />
                    </div>
                </div>
            </div>
            <Drawer size="default" className='menu-drawer' placement="left" onClose={onClose} open={open}>
                <MobilviewMenu />
            </Drawer>

            <Modal
                centered
                open={isModalOpen}
                onOk={handleOk} onCancel={handleCancel}
                footer={null}
            > 
                <div className='modal-header mb-6 flex items-center text-white font-bold text-base'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <line x1="5" y1="12" x2="11" y2="18"></line>
                        <line x1="5" y1="12" x2="11" y2="6"></line>
                    </svg> <Divider type="vertical" /> <span className='ml-2'>Connect Wallet</span>
                </div>
                <div className='modal-body'>
                    <div className='flex justify-between p-3 connect-wallet-list mb-4'>
                        <div className='text-white font-bold text-base'>
                            WalletConnect
                        </div>
                        <div>
                            <img src={'https://app.mux.network/img/WalletConnect.4df4650b.svg'} />

                        </div>
                    </div>
                    <div className='flex justify-between p-3 connect-wallet-list mb-4'>
                        <div className='text-white font-bold text-base'>
                            WalletLink
                        </div>
                        <div>
                            <img src={'https://app.mux.network/img/CoinbaseWallet.2c6a98b5.svg'} />

                        </div>
                    </div>
                </div>
                <div className='modal-footer'>
                    <div className='tp text-center'>
                        Need Help? <u>Read Our Tutorials</u>
                    </div>
                </div>
            </Modal>

        </>
    );
}

export default MainHeader;