import React, { useEffect } from 'react';
import Datafeed from './datafeed.js';
const TradeChart = (props) => {
    useEffect(() => {
        // eslint-disable-next-line no-undef
        window.tvWidget = new TradingView.widget({
            symbol: 'MATIC', // default symbol
            width: '100%',
            height: '100%',
            // fullscreen: true, // displays the chart in the fullscreen mode
            container: 'tv_chart_container',
            datafeed: Datafeed,
            library_path: '/libs/charting_library/',
            theme: "Dark",
            loading_screen: {
                backgroundColor: "#040818"
            },
            debug: true,
            autosize: true,
            charts_storage_api_version: "1.1",
            charts_storage_url: "",
            client_id: "",
            user_id: "",
            interval: "5",
            time_frames: [{
                text: "1d",
                resolution: "1",
                description: "1 Day",
                title: "1D"
            }, {
                text: "5d",
                resolution: "5",
                description: "5 Days",
                title: "5D"
            }, {
                text: "1M",
                resolution: "30",
                description: "1 Month",
                title: "1M"
            }, {
                text: "3M",
                resolution: "60",
                description: "1 Months",
                title: "3M"
            }, {
                text: "6M",
                resolution: "120",
                description: "6 Months",
                title: "6M"
            }, {
                text: "1Y",
                resolution: "1W",
                description: "1 Year",
                title: "1Y"
            }],
            disabled_features: ["header_symbol_search", "header_interval_dialog_button", "show_interval_dialog_on_key_press", "symbol_search_hot_key", "study_dialog_search_control", "header_compare", "edit_buttons_in_legend", "symbol_info", "main_series_scale_menu", "star_some_intervals_by_default", "datasource_copypaste", "right_bar_stays_on_scroll", "context_menus", "go_to_date", "compare_symbol", "timezone_menu", "remove_library_container_border"],
            enabled_features: ["dont_show_boolean_study_arguments", "use_localstorage_for_settings", "border_around_the_chart", "remove_library_container_border", "save_chart_properties_to_local_storage", "side_toolbar_in_fullscreen_mode", "hide_last_na_study_output", "constraint_dialogs_movement", "show_chart_property_page", "pane_context_menu"],
            studies_overrides: {
                "volume.volume.color.0": "#10C8A8",
                "volume.volume.color.1": "#FF4E59",
                "volume.volume.transparency": 75,
                "rsi.plot.color": "#B8DBEB",
                "rsi.hlines background.color": "#B8DBEB",
                "macd.histogram.color": "#FF4E59",
                "macd.signal.color": "#FF4E59",
                "macd.macd.color": "#B8DBEB"
            },
            custom_css_url: "chart.v4.css",
        });
    }, [])
    return (
        <div id="tv_chart_container" className='h-[50vh]'>
        </div>
    );
}

export default TradeChart;