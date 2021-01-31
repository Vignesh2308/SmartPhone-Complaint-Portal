import React from 'react';
import { Button,Modal } from 'antd';
import './styles.css'
import MaterialTable from "material-table";
import { forwardRef } from 'react';

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
import { Delete } from '@material-ui/icons';

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
        title: "User Id",
        field: "userId"
    },  
    {
        title: "Device Modal",
        field: "device_model"
    }, 
    {
        title: "Manufacturer",
        field: "manufacturer"
    }, 
    {
        title: "Problem Summary",
        field: "problem_summary"
    }, 
    {
        title: "Description",
        field: "description"
    }, 
    {
        title: "Status",
        field: "status"
    },
    {
        title: "Assigned to",
        field: "agent"
    },

]

export class IBDComponent extends React.Component {
    state={
        showModal:false
    }
    handleBack = () => {
        this.props.clearIBDList();
    }
    handleCancel = () => {
        this.setState({ showModal: false });
    };

    render() {

        return (
            <div className="ibdTableContainer">
                <MaterialTable
                    className="ibdTable"
                    options={{
                        rowStyle: {
                            backgroundColor: '#EEE',
                        },
                        
                        headerStyle: {
                            backgroundColor: '#01579b',
                            color: '#FFF'
                        }
                    }}
                    onRowClick = {(event, rowData) => {
                        this.setState({showModal:true})
                    }}
                    title={"Complaints List"}
                    icons={tableIcons}
                    columns={tableColumns}
                    data={this.props.ibdList}
                />
                <Modal
                    visible={this.state.showModal}
                    title="Add Complaint"
                    footer={null}
                    onCancel={this.handleCancel}


                >
                    
                </Modal>
                <Button className="submitButton" type="primary" style={{ marginTop: "8px", float: "right" }} onClick={this.handleBack}>
                    Clear Search
                        </Button>
            </div>

        )
    }
}
export default IBDComponent;