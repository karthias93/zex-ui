import React from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
function TradeChart(props) {
    return (
        <div>
            <TradingViewWidget
                symbol="NASDAQ:AAPL"
                theme={Themes.DARK}
                locale="fr"
                classNamge="trade-chart"
                autosize
            />

        </div>
    );
}

export default TradeChart;