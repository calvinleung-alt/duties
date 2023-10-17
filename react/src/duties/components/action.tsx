import React from "react";
import { Duty, useDuties } from "../hooks/use-duties";
import { Space, message } from "antd";
import { Link } from "react-router-dom";

export interface ActionProps {
    duty: Duty;
    onDelete: () => any;
}

export const Action: React.FC<ActionProps> = ({ duty, onDelete }) => {
    const { deleteDuty } = useDuties();
    const [messageApi,contextHolder] = message.useMessage();
    return (
        <>
            {contextHolder}
            <Space size="middle">
                <Link to={`/${duty.id}/edit`} state={duty}>Edit</Link>
                <a onClick={async () => {
                    await deleteDuty(String(duty.id));
                    messageApi.open({
                        type: "success",
                        content: "Duty is deleted."
                    })
                    onDelete();
                }}>Delete</a>
            </Space>
        </>
    )
}