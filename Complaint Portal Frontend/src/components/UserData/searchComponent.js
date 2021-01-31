import React from 'react';
import { Form, Input, Button, Switch } from 'antd';
import './styles.css'
import MaterialTable from "material-table";
import { forwardRef } from 'react';
import Axios from 'axios';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
};
const tableColumns = [
    {
        title: "Complaint ID",
        field: "complaint_id"
    },
    {
        title: "Date Created",
        field: "date"
    },
    {
        title: "Status",
        field: "status"
    }
]

export class SearchComponent extends React.Component {
    state = {
        searchFlg: false,
        tableData: []
    }
    onFinish = values => {
        this.setState({ searchFlg: true });
        // this.props.searchUser(values.user)
        console.log("inside");
        Axios.get('http://127.0.0.1:8000/api/complaint/')
        .then((response) => {
            console.log(response.data);
            this.setState({tableData:response.data})
        })
        .catch((error) => {
            console.log(error);
        });

    };
    handleBack = () => {        
        this.setState({ searchFlg: false });
        // this.props.clearUserList();
    }

    render() {
        console.log(this.state.tableData)
        return (
            !this.state.searchFlg ?
                <div className="searchContainer">
                    <Form {...layout} name="nest-messages" onFinish={this.onFinish} >
                        <Form.Item name="complaintNo" label="Complaint No" >
                            <Input className='searchInput' />
                        </Form.Item>
                        



                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                            <Button className="submitButton" type="primary" htmlType="submit">
                                Search
                        </Button>
                        </Form.Item>
                    </Form>
                </div>
                : <div className="tableContainer">
                    <MaterialTable
                        className="searchTable"
                        options={{
                            rowStyle: {
                                backgroundColor: '#EEE',
                            },
                            headerStyle: {
                                backgroundColor: '#01579b',
                                color: '#FFF'
                              }
                        }}
                        title={"User Complaints"}
                        icons={tableIcons}
                        columns={tableColumns}
                        data={this.state.tableData}
                    />
                    <Button className="submitButton"  type="primary" style= {{marginTop:"8px", float:"right"}} onClick={this.handleBack}>
                                Back
                        </Button>
                </div>

        )
    }
}
export default SearchComponent;