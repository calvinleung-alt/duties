import React, { useEffect } from "react";
import { useDuties } from "../hooks/use-duties";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { Action, ActionProps } from "../components/action";
import { Layout } from "../components/layout";

const columns: ColumnsType<ActionProps> = [
    {
        title: 'ID',
        key: 'id',
        render: (_, { duty }) => <a>{duty.id}</a>,
    },
    {
      title: 'Name',
      key: 'name',
      render: (_, { duty }) => <a>{duty.name}</a>,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, actionProps) => <Action {...actionProps}/>,
    },
];

export const DutyListPage = () => {
    const { duties, fetchDuties } = useDuties();
    useEffect(() => {
        fetchDuties();
    }, [])
    return (
        <Layout>
            <Table
                dataSource={duties.map<ActionProps>((duty) => ({
                    duty,
                    onDelete: fetchDuties,
                }))}
                columns={columns}
                pagination={false}
            />
        </Layout>
    );
}