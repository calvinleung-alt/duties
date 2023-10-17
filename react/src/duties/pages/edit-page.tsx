import React from 'react';
import { useDuties } from '../hooks/use-duties';
import { useLocation, useNavigate, useParams } from 'react-router';
import { DutyForm } from '../components/form';
import { Layout } from '../components/layout';

export const DutyEditPage = () => {
    const { id } = useParams<{ id: string }>();
    const { state } = useLocation();
    const { updateDuty } = useDuties();
    const navigate = useNavigate();
    return (
        <Layout>
            <DutyForm 
                valueInit={state}
                btnText={"Update"}
                onFinish={async (value, message) => {
                    if (!id) return;
                    await updateDuty(id, value);
                    message.open({
                        type: 'success',
                        content: 'Duty is updated.'
                    })
                    setTimeout(() => navigate('/'), 1000);
                }}
            />
        </Layout>
    );
}