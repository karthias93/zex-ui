import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import TradeChart from '../../components/trade-page/trade-chart/TradeChart';
import TradePageHeader from '../../components/trade-page/trade-page-header/TradePageHeader';
import TradePageRightBar from '../../components/trade-page/trade-page-right-bar/TradePageRightBar';
import TradePageTab from '../../components/trade-page/trade-page-tab/TradePageTab';
import './trade.scss';

// const base64ToArrayBuffer = (base64) => {
//     var binary_string = Buffer.from(base64, 'base64').toString('binary');
//     var len = binary_string.length;
//     var bytes = new Uint8Array(len);
//     for (var i = 0; i < len; i++) {
//         bytes[i] = binary_string.charCodeAt(i);
//     }    

//     return bytes.buffer;
// }

const Trade = ({setIsModalOpen}) => {
    // const ws = new WebSocket(process.env.REACT_APP_SOCKETAPIURL)
    // ws.binaryType = 'arraybuffer';
    // const content_base64 = "c3RyZWFtIGV2ZW50";
    // const binaryData = base64ToArrayBuffer(content_base64);
    // useEffect(()=>{
    //     ws.onopen = (event) => {
    //         ws.send(binaryData);
    //     };
        
    //     ws.onmessage = function (event) {
        
    //     };
    // }, [])
    // const [bids, setBids] = useState([0]);

    // const ws = new WebSocket("wss://ws.bitstamp.net");
  
    // const apiCall = {
    //   event: "bts:subscribe",
    //   data: { channel: "order_book_btcusd" },
    // };
    // useEffect(()=>{
    //     ws.onopen = (event) => {
    //         ws.send(JSON.stringify(apiCall));
    //       };
        
    //       ws.onmessage = function (event) {
    //         const json = JSON.parse(event.data);
    //         try {
    //           if ((json.event = "data")) {
    //             setBids(json.data.bids.slice(0, 5));
    //           }
    //         } catch (err) {
    //           console.log(err);
    //         }
    //       };
    // }, [])
    
    return (
        <div className='trade-page'>
            <Row >
                <Col flex="3" className='trade-page-left '>
                    <div className='trade-page-header px-4'>
                        <TradePageHeader />
                    </div>
                    <div className='trade-page-chart mb-3'>
                        <TradeChart/>
                    </div>
                    <div className='trade-tab-sec'>
                        <TradePageTab setIsModalOpen={setIsModalOpen}/>
                    </div>
                </Col>
                <Col flex="1" className='trade-page-right'>
                    <TradePageRightBar setIsModalOpen={setIsModalOpen}/>
                </Col>
            </Row>
        </div >
    );
}

export default Trade;