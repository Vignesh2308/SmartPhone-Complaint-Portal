import { Button, Row, Col, Modal } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import history from "../../utils/history";
import './styles.css';
import SearchComponent from '../../components/UserData/searchComponent';
import AddComponent from '../../components/UserData/addComponent.js';
// import HomePage from "../../common/Drawer/drawer"

import HeaderComponent from '../../common/Header/index'
import * as actions from '../../store/actions/action';


export class UsersContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addFlg: false,
            loading: false,
            visible: false,
        };
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    // handleCancel =() => {

    // }
    handleCancel = () => {
        this.setState({ visible: false });
    };




    searchUser = (values) => {

        this.props.searchUser(values);
    }

    render() {
        // const { visible, loading } = this.state;
        return (
            <div className='userDataContainer'>


                <Row>
                    <Col offset={10} span={4}>
                        <h3 className="userDataHeader"><b>User Data</b></h3>
                    </Col>
                    <Col span={6} offset={4}>
                        <Button onClick={this.showModal} className='addButton' type="primary" >Add Complaint</Button>
                    </Col>
                </Row>
                <SearchComponent clearUserList={this.props.clearUserList} userList={this.props.userList} searchUser={this.searchUser} />

                <Modal
                    visible={this.state.visible}
                    title="Add Complaint"
                    footer={null}
                    onCancel={this.handleCancel}


                >
                    <AddComponent registerComplaint={this.props.registerComplaint}/>
                </Modal>
            </div>

        )
    }
}


export default UsersContainer;
