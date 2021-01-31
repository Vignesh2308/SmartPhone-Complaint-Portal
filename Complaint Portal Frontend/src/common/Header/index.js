import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    HomeOutlined,
    ProjectOutlined,
    FolderOpenOutlined,
    UserOutlined,
    AreaChartOutlined,
    MoneyCollectOutlined,
    LogoutOutlined
} from '@ant-design/icons';
import './styles.css'
import { Avatar } from 'antd';
import avatar from "../../assets/images/undraw_profile_pic_ic5t.svg";
import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import * as actions from '../../store/actions/action';
import history from '../../utils/history';
import * as path from '../../common/path'
import { Redirect } from 'react-router-dom'

const { Header, Sider, Content } = Layout;

class HeaderComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            collapsed: true,
        };
    }
    

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    logOut = () => {
        this.setState({
            collapsed: true,
        });
        this.props.logOut();
        history.push(path.LOGIN);
    }
    handleMenu = (e) => {
        this.setState({
            collapsed: true,
        });
        if(e.key === '4') {
            history.push(path.COMPLAINTS);
        } else if(e.key === '5') {
            history.push(path.USER_COMPLAINTS);
        }
    }

    render() {
        return (
            (this.props.loginStatus ?
            
            <div >
                <Layout  className="layout">
                    <Header>
                        <div className="hamIcon" onClick={this.toggle}   >
                            {this.state.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        </div>
                        <div >
                            <h1 className = "appName">Complaints Tool</h1>
                        </div>
                       

                    </Header>
                </Layout>
                    <div className="sliderOption"   >
                        <Menu inlineCollapsed={this.state.collapsed} style={{height:"100%"}} theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                            
                            <Menu.Item key="4" onClick={(e)=> this.handleMenu(e)} icon={<UserOutlined />}>
                                User Complaints
                            </Menu.Item>
                            <Menu.Item key="5" onClick={(e)=> this.handleMenu(e)} icon={<AreaChartOutlined />}>
                                Agents
                            </Menu.Item>
                            
                            <Menu.Item key="7" onClick={this.logOut} icon={<LogoutOutlined />}>
                                Log Out
                            </Menu.Item>
                        </Menu>
                    </div>
                    <div>
                        <div className="propsChildren"></div>
                        <div className = 'children2'>
                        {this.props.children}
                        </div>
                        
                    </div>

                {/* </Layout> */}
            </div>
            :this.props.children)
        );
    }
}

export function mapDispatchToProps(dispatch) {
    return {
        logOut: () => dispatch(actions.logOut()),
        //   startLoader: () => dispatch(Loader(true)),
        //   loginAction: (data) => dispatch(loginAction(data)),
    };
}
export function mapStateToProps(state) {
    return state;
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(HeaderComponent);