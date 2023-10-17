import React from 'react';
import { DutyForm } from '../components/form';
import { useDuties } from '../hooks/use-duties';
import { useNavigate } from 'react-router';
import { Layout } from '../components/layout';

export const DutyCreatePage = () => {
    const { createDuty } = useDuties();
    const navigate = useNavigate();
    return (
        <Layout>
            <DutyForm 
                btnText={"Create"}
                onFinish={async (value, message) => {
                    await createDuty(value);
                    message.open({
                        type: "success",
                        content: "Duty is craeted.",
                    })
                    setTimeout(() => navigate('/'), 1000);
                }}
            />
        </Layout>
    );
}