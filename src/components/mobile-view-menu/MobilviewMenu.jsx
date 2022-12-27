import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import TradeIcon from '../../images/menu-trade.svg'
import { Menu } from 'antd';
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem('Trade', '1', <img src={TradeIcon} />),
    getItem('Liquidity', '2', <img src={TradeIcon} />),
    // getItem('Stake', '3', <img src={TradeIcon} />),
    getItem('Stake', 'sub3', <img src={TradeIcon} />, [
        getItem('Staking Overview', '4'),
        getItem('About MCB', '5'),
        getItem('veMUX Staking', '6'),
        getItem('MUXLP Staking', '7'),
        getItem('MUX Vesting', ''),
    ]),
    getItem('Leaderboard', '4', <img src={TradeIcon} />),
    getItem('Redeem', '5', <img src={TradeIcon} />),
    getItem('Stats', '6', <img src={TradeIcon} />),
    getItem('Referral', '7', <img src={TradeIcon} />),
];
const MobilviewMenu = () => {
    const onClick = (e) => {
        console.log('click ', e);
    };
    return (
        <>
            <div className='mobile-menu-header'>
                <img src={require('../../images/zex-logo.png')} className="logo" />
            </div>
            <Menu
                onClick={onClick}
                defaultSelectedKeys={['1']}
                mode="inline"
                items={items}
                theme="dark"
            />
        </>

    );
};
export default MobilviewMenu;