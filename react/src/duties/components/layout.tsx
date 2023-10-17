import React from "react";
import { Menu, Typography, Space } from "antd";
import { Link, useLocation } from "react-router-dom";

export interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    const location = useLocation();
    return (
        <div>
            <Typography.Title>Duties</Typography.Title>
            <Space size={"middle"} direction={"vertical"}>
                <Menu
                    mode={"horizontal"}
                    selectedKeys={[location.pathname]}
                    items={[
                        {
                            key: '/',
                            label: (
                                <Link to={'/'}>Home</Link>
                            ),
                        },
                        {
                            key: '/new',
                            label: (
                                <Link to={'/new'}>New</Link>
                            ),
                        }
                    ]}
                />
                {children}
            </Space>
        </div>
    )
}