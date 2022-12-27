import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import MainHeader from './MainHeader';
import MainFooter from './MainFooter';
import PageRoutes from '../routes/routes';
const { Header, Content, Footer } = Layout;
const MainLayout = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout>
            <Header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 9,
                    width: '100%',
                }}
            >              
                <MainHeader />
            </Header>
            <Content>
                <PageRoutes/>
            </Content>
            <Footer>
                <MainFooter />
            </Footer>
        </Layout>
    );
};
export default MainLayout;