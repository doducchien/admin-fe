import { Button, Form, Input, Row } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import bga from '../../asset/img/background-auth.jpg'
import hue_logo from '../../asset/img/hue-logo.png'
import { loginRequestAction } from '../../redux/action/authen-action'
export default function Login() {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const onFinish = (value)=>{
    dispatch(loginRequestAction(value))
  }
  return (
    <div style={{ backgroundImage: `url(${bga})` }} className='bg-img-auth w-100p h-100p'>
      <div className='w-400px bg-cl-white pd-1rem  bd-rad-1rem txt-center'>
        <img src={hue_logo} alt="" width='100'/>
        <Form labelCol={{span: 24}} form={form} onFinish={onFinish}>
          <Form.Item name='username' label='User name'>
            <Input placeholder='Enter your username' size='large'/>
          </Form.Item>
          <Form.Item name='password' label='Password'>
            <Input.Password placeholder='Enter your password' size='large'/>
          </Form.Item>
          <Form.Item className='txt-center'>
            <Button type='primary' htmlType='submit' size='large' className='w-100p'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>

    </div>
  )
}
