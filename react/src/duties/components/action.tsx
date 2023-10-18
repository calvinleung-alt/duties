import React from "react";
import { Duty, useDuties } from "../hooks/use-duties";
import { Space } from "antd";
import { Link } from "react-router-dom";
import { useMessage } from "../hooks/use-message";

export interface ActionProps {
    duty: Duty;
    onDelete: () => any;
}

export const Action: React.FC<ActionProps> = ({ duty, onDelete }) => {
    const { deleteDuty } = useDuties();
    const [messageApi, contextHolder] = useMessage();
    return (
        <>
            {contextHolder}
            <Space size="middle">
                <Link aria-label="edit-link" to={`/${duty.id}/edit`} state={duty}>Edit</Link>
                <a aria-label="delete-link" onClick={async () => {
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