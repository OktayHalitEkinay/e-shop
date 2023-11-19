import React from 'react';
import LoginForm from '../components/auth/LoginForm';
import { Col, Layout, Row } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';

const headerStyle: React.CSSProperties = {
    color: '#fff',
    height: '10vh',
};

const contentStyle: React.CSSProperties = {
    height: '80vh',
    color: '#fff',
};


const footerStyle: React.CSSProperties = {
    color: '#fff',
    backgroundColor: '#7dbcea',
    height: '10vh'
};


const LoginPage: React.FC = () => {
    return (
        <div className='loginPageDiv'>
            <Layout>
                <Header style={headerStyle}>HEADER</Header>
                <Content style={contentStyle}>
                    <Row style={{ height: "100%", width: '100%' }}>
                        <Col span={16} style={{ height: "100%", width: "100%" }}></Col>
                        <Col span={8} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: "100%", width: "100%" }}>
                            <LoginForm ></LoginForm>
                        </Col>
                    </Row>
                </Content>
                <Footer style={footerStyle}>FOOTER</Footer>
            </Layout>
        </div>
    );
};

export default LoginPage;