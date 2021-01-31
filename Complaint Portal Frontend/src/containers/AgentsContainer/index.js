import { Button, Row, Form, Input, Col } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import history from "../../utils/history";
import './styles.css';
import * as actions from '../../store/actions/action';
import ComplaintsComponent from '../../components/UserComplaints/ComplaintsComponent';
import Axios from 'axios'
import HeaderComponent from '../../common/Header/index'

export class UserComplaintsContainer extends Component {

    state = {tableData: []}
    clearUserList = () => {
        // this.props.getIBDList(values);
        this.setState({tableData: []})
    }
    getList = (values) => {
        Axios.get('http://127.0.0.1:8000/api/complaint/')
        .then((response) => {
            console.log(response.data);
            this.setState({tableData:response.data})
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <div className='userDataContainer'>
                <Row>
                    <Col span={20}>
                        <h2 className="ibdHeader"><b>Agents Portal</b></h2>
                    </Col>
                </Row>

                <Row>
                    <Form className="ibdForm" onFinish={this.getList}>
                        <Row>
                            <Col span={6} offset={1}>
                                <Form.Item
                                    name={`complaintNo`}
                                    label={`Complaint No`}
                                >
                                    <Input className="input" placeholder="Enter Complaint No..." />
                                </Form.Item>
                            </Col>
                            
                            <Col offset={1}>
                                <Button className="input" htmlType="submit"  type="primary">Search</Button>
                            </Col>
                        </Row>
                    </Form>
                </Row>
                <Row>
                    {this.state.tableData.length > 0 ?
                        <ComplaintsComponent
                            clearIBDList={this.clearUserList} ibdList={this.state.tableData}
                        /> : ""}
                </Row>

            </div>
        )
    }
}


export default UserComplaintsContainer;
