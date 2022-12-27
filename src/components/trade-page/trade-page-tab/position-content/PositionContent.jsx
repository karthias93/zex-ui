import React from 'react';
import { Space, Table, Tag } from 'antd';
function PositionContent(props) {
    const columns = [
        {
            title: 'Market',
            dataIndex: 'market',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Size',
            dataIndex: 'size',
            key: 'size',
        },
        {
            title: 'Collateral',
            dataIndex: 'collateral',
            key: 'collateral',
        },
        {
            title: 'Net Value',
            dataIndex: 'net-value',
            key: 'net-value',
        },
        {
            title: 'Entry Price',
            dataIndex: 'entry-price',
            key: 'ntry-price',
        },
        {
            title: 'Mark Price',
            dataIndex: 'mark-price',
            key: 'mark-price',
        },
        {
            title: 'Liq. Price',
            dataIndex: 'liq-price',
            key: 'liq-price',
        },
        {
            title: 'PNL & ROE',
            dataIndex: 'pnl-roe',
            key: 'pnl-roe',
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions',
        },
    ];
    const data = [
        // {
        //     key: '1',
        //     name: 'John Brown',
        //     age: 32,
        //     address: 'New York No. 1 Lake Park',
        //     tags: ['nice', 'developer'],
        // },
        // {
        //     key: '2',
        //     name: 'Jim Green',
        //     age: 42,
        //     address: 'London No. 1 Lake Park',
        //     tags: ['loser'],
        // },
        // {
        //     key: '3',
        //     name: 'Joe Black',
        //     age: 32,
        //     address: 'Sidney No. 1 Lake Park',
        //     tags: ['cool', 'teacher'],
        // },
    ];

    return (
        <div className=''>
            <Table className='zex-table' columns={columns} dataSource={data} />
        </div>
    );
}

export default PositionContent;