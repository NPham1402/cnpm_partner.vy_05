import { Button, Col, Form, Input, Row, Select } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const FormNhapHang = (props) => {
    const [getData, setGetData] = useState(null)
    useEffect(() => {
        axios
            .get(`http://localhost:1402/providers`)
            .then(data => data.data.data).then(data => {
                console.log(data)
                const dataSelect = data.map(item => { return { value: item._id, label: item.providerName } })
                const data11541 = [dataSelect]
                console.log(typeof data11541)
                console.log(dataSelect)
                setGetData(data)
            })
            .catch(err => { if (err) console.log(err) })
    }, [])
    const la = [
        {
            value: '1',
            label: 'cong ty lam music',
        },
        {
            value: '2',
            label: 'cong ty thien long',
        },
        {
            value: '3',
            label: 'cong ty thanh thai',
        },
        {
            value: '4',
            label: 'cong ty pham nguyen',
        },
        {
            value: '5',
            label: 'cong ty huy hoang',
        },
        {
            value: '6',
            label: 'cong ty thanh tam',
        },
        {
            value: '7',
            label: 'cong ty thanh thai',
        },
        {
            value: '8',
            label: 'cong ty thanh thai',
        },
        {
            value: '9',
            label: 'cong ty thanh thai',
        },
    ]
    return (
        <Form
            onFinish={values => axios.post(`http://localhost:1402/products/addquanity/${props.id}`, { values })}>
            <Form.Item name="providerId" label="Provider" rules={[{ required: true, message: 'Required' }]} >
                <Select showSearch name="providerId" options={la}>
                </Select>
            </Form.Item>
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item name="quanity" label="Quanity" rules={[{ required: true, message: 'Required' }, { min: 0, message: 'min is 0' }, { max: 1000000, message: 'max is 1000000' }]}>
                        <Input type='number' />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item name="price" label="Price" rules={[{ required: true, message: 'Required' }, { min: 0, message: 'min is 0' }, { max: 1000000, message: 'max is 1000000' }]}>
                        <Input type='number' />
                    </Form.Item>
                </Col>
            </Row>
            <Button htmlType='submit'>Button</Button>
        </Form>
    )
}
export default FormNhapHang;
