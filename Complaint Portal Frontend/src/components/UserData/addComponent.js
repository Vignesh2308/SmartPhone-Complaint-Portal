
import { Form, DatePicker, Input, Button, Switch } from 'antd';
import './styles.css'
import React, { useState } from 'react';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import { message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { UploadOutlined } from '@ant-design/icons';
const { TextArea } = Input;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 },
};
import Axios from 'axios';

export class AddComponent extends React.Component {
  state = {
    file: ""
  }

  onFinish = values => {
    // console.log("12",values)
    Axios.post('',{})
    .then(res => {

    })
    .catch(err => {

    })
  };
  onChange = ({ file: newFile }) => {
    // setFile(newFile);
    this.setState({ file: newFile });
  };

  render() {
    // const { visible, loading } = this.state;
    const props = {
      name: 'file',
    };
    return (

      <div className="Container">
        <Form {...layout} name="messages" onFinish={this.onFinish} >
          <Form.Item rules={[{ required: true }]} name='deviceModel' label="Device Modal" >
            <Input maxLength="20" className='searchInput' />
          </Form.Item>
          <Form.Item rules={[{ required: true }]} name='manufacturer' label="Manufacturer" >
            <Input maxLength="20" className='searchInput' />
          </Form.Item>
          <Form.Item rules={[{ required: true }]} name='summary' label="Problem Summary" >
            <Input className='searchInput' />
          </Form.Item>
          <Form.Item rules={[{ required: true }]} name='description' label="Description" >
            <TextArea className='searchInput' showCount maxLength={250} />
          </Form.Item>
          <Form.Item  name='logFile' label="Log File" >
            <Upload {...props}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>





          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 9 }}>
            <Button className="submitButton" type="primary" htmlType="submit">
              Save
                            </Button>
          </Form.Item>
        </Form>
      </div>

    )
  }
}
export default AddComponent;





function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}
