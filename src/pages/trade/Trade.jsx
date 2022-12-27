import { Col, Row } from 'antd';
import React from 'react';
import TradeChart from '../../components/trade-page/trade-chart/TradeChart';
import TradePageHeader from '../../components/trade-page/trade-page-header/TradePageHeader';
import TradePageRightBar from '../../components/trade-page/trade-page-right-bar/TradePageRightBar';
import TradePageTab from '../../components/trade-page/trade-page-tab/TradePageTab';
import './trade.scss';

function Trade(props) {
    return (
        <div className='trade-page'>
            <Row >
                <Col flex="1 1 0" className='trade-page-left '>
                    <div className='trade-page-header px-4'>
                        <TradePageHeader />
                    </div>
                    <div className='trade-page-chart mb-3'>
                        <TradeChart/>
                    </div>
                    <div className='trade-tab-sec'>
                        <TradePageTab />
                    </div>
                </Col>
                <Col flex="0 1 345px" className='trade-page-right'>
                    <TradePageRightBar/>
                </Col>
            </Row>
        </div >
    );
}

export default Trade;