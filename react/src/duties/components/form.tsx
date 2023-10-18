import React from 'react';
import { Button, Form, FormProps, Input, message } from 'antd';
import { DutyDTO } from '../hooks/use-duties';
import { MessageInstance } from 'antd/es/message/interface';

export interface DutyFormProps extends Partial<Omit<FormProps, "onFinish">> {
    valueInit?: DutyDTO
    onFinish: (value: any, message: MessageInstance) => any;
    btnText: string;
}

export const DutyForm: React.FC<DutyFormProps> = ({ valueInit, onFinish, btnText, ...rest }) => {
    const [messageApi, contextHolder] = message.useMessage();
    return (
        <>
            {contextHolder}
            <Form
                {...rest}
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
                    aria-label="name-form-item"
                    rules={[{ required: true, message: 'Name is required.' }]}
                    initialValue={valueInit?.name}
                >
                    <Input aria-label="name-input" />
                </Form.Item>
                <Form.Item>
                    <Button aria-label="submit-button" type="primary" htmlType="submit">
                        {btnText}
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
};