import React from 'react';
import { Col, Layout, Row } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';

const headerStyle: React.CSSProperties = {
    color: '#fff',
    height: '10vh',
};

const contentStyle: React.CSSProperties = {
    height: '80vh',
};


const footerStyle: React.CSSProperties = {
    color: '#fff',
    backgroundColor: '#7dbcea',
    height: '10vh'
};


const HomePage: React.FC = () => {
    return (
        <div className='HomePageDiv'>
            <Layout>
                <Header style={headerStyle}>HEADER</Header>
                <Content style={contentStyle}>
                    <Row style={{ height: "100%", width: '100%' }}>
                        Ana Sayfa
                    </Row>
                </Content>
                <Footer style={footerStyle}>FOOTER</Footer>
            </Layout>
        </div>
    );
};

export default HomePage;