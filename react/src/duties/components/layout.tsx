import React from "react";
import { Menu, Typography, Space } from "antd";
import { Link, useLocation } from "react-router-dom";

export interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    const location = useLocation();
    return (
        <div aria-label="layout">
            <Typography.Title aria-label="title">Duties</Typography.Title>
            <Space size={"middle"} direction={"vertical"}>
                <Menu
                    mode={"horizontal"}
                    selectedKeys={[location.pathname]}
                    items={[
                        {
                            key: '/',
                            label: (
                                <Link aria-label="home-link" to={'/'}>Home</Link>
                            ),
                        },
                        {
                            key: '/new',
                            label: (
                                <Link aria-label="new-link" to={'/new'}>New</Link>
                            ),
                        }
                    ]}
                />
                {children}
            </Space>
        </div>
    )
}