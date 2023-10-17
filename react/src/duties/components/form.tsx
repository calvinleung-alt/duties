import React from 'react';
import { Button, Form, Input, FormProps, message } from 'antd';
import { DutyDTO } from '../hooks/use-duties';
import { MessageInstance } from 'antd/es/message/interface';

export interface DutyFormProps {
    valueInit?: DutyDTO
    onFinish: (value: any, message: MessageInstance) => any;
    btnText: string;
}

export const DutyForm: React.FC<DutyFormProps> = ({ valueInit, onFinish, btnText }) => {
    const [messageApi, contextHolder] = message.useMessage();
    return (
        <>
            {contextHolder}
            <Form
                initialValues={{ remember: true }}
                onFinish={(value) => {
                    onFinish(value, messageApi);
                }}
                autoComplete="off"
                style={{ padding: '8px' }}
            >
                <Form.Item<DutyDTO>
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Name is required.' }]}
                    initialValue={valueInit?.name}
                >
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        {btnText}
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
};