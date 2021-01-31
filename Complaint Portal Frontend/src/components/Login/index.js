import React from "react";
import "antd/dist/antd.css";
import { Row, Col, Divider } from "antd";
import { Image } from "antd";
import { Avatar } from "antd";
import "./index.css";
import { Typography } from "antd";
import { Form, Input, Button, Checkbox } from "antd";
import "./social.css"
import avatar from "../../assets/images/undraw_profile_pic_ic5t.svg";
import { Alert } from 'antd';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
// console.log(this.props.loginStatus)
export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadings: [],
    };
  }
  loginAction = (values) => {
    this.props.loginAction(values);
  };

  enterLoading = index => {
    this.setState(({ loadings }) => {
      const newLoadings = [...loadings];
      newLoadings[index] = true;

      return {
        loadings: newLoadings,
      };
    });
    setTimeout(() => {
      this.setState(({ loadings }) => {
        const newLoadings = [...loadings];
        newLoadings[index] = false;

        return {
          loadings: newLoadings,
        };
      });
    }, 6000);
  };

  render() {
    const { loadings } = this.state;
    return (
      <div className="container" style={{ marginTop: "-20%" }}>
        <Row>
          <Col xs={24} sm={24} md={6} lg={12} xl={12}>
            <Image
              className="bg-image"
              // width={200}
              src="https://res.cloudinary.com/mhmd/image/upload/v1555917661/art-colorful-contemporary-2047905_dxtao7.jpg"
            />
          </Col>

          <Col
            style={{ background: "white" }}
            xs={24}
            sm={24}
            md={6}
            lg={12}
            xl={12}
          >
            <div className="form-control">
              <Avatar className="avatar" size={180} src={avatar} />
              <Row>
                <Col xs={24} sm={4} md={6} lg={12} xl={20}>
                  <h1 className="loginHeader">Welcome</h1>
                  <h3 className="loginHeader">Enter into Complaints Portal !!!</h3>

                  <React.Fragment>
                    <Form
                      {...layout}
                      name="basic"
                      className="form"
                      initialValues={{
                        remember: true,
                      }}
                      onFinish={this.loginAction}
                      onFinishFailed={this.onFinishFailed}
                    >
                      <Form.Item
                        label="Username"
                        name="Usercode"
                        rules={[
                          {
                            required: true,
                            message: "Please input your username!",
                          },
                        ]}
                      >
                        <Input maxLength="20" className="input" />
                      </Form.Item>

                      <Form.Item
                        label="Password"
                        name="Password"
                        rules={[
                          {
                            required: true,
                            message: "Please input your password!",
                          },
                        ]}
                      >
                        <Input.Password maxLength="20" className="input" />
                      </Form.Item>

                      <Form.Item {...tailLayout}>
                        <button className="btn-mixed" htmltype="submit">
                          SIGN IN
                        </button>
                      </Form.Item>
                    </Form>
                  </React.Fragment>
                  

                </Col>
              </Row>
            </div>
            {this.props.loginStatus ?
              (<Alert
                message='User Validation Failed'
                description="This may be due to wrong credentials or server problem."
                type="error"
                showIcon
                closable
              />) : null}
          </Col>
        </Row>
      </div>
    );
  }
}
