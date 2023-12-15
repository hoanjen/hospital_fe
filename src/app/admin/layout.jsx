"use client";

import "./layout.scss";
import { Layout } from "antd";
import { SearchOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Inter } from "next/font/google";
import SideBarAdmin from "../../components/SideBar/sideBarAdmin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import Notify from "@/components/admin/Notify";
import { Outlet } from 'react-router-dom';
const { Header, Footer, Sider, Content } = Layout;
const inter = Inter({ subsets: ["latin"] });
import Logo from '@/image/logo.png';

export default function AdminLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <Layout className="layout">
        <ToastContainer></ToastContainer>
        <Header className="header">
          <div className={"header__logo " + (collapsed && "header__hidden")}>
            <img src={Logo.src} alt="logo" className="header__logo--img" />
            
          </div>
          <div className="header__nav">
            <div className="header__nav--left">
              <div
                className="header__nav--collapsed"
                onClick={() => setCollapsed(!collapsed)}
              >
                <MenuUnfoldOutlined />
              </div>
              <div className="header__nav--search">
                <SearchOutlined />
              </div>
            </div>
            <div className="header__nav--right">
              <Notify />
            </div>
          </div>
        </Header>
        <Layout>
          <Sider className="sider" collapsed={collapsed} theme="light">
              <SideBarAdmin/>
          </Sider>
          <Content className="content "> 
              {children}
          </Content>
        </Layout>
        <Footer className="footer">footer</Footer>
      </Layout>
    </>
  );

  // return (
  //   <div className='h-screen w-screen bg-slate-100'>
  //       <div className='flex '>
  //         <div className='fixed z-20 h-full w-64 border-r-1 border-dashed '>
  //           <SideBarAdmin></SideBarAdmin>
  //         </div>
  //         <div className='ml-[256px]'>
  //           {children}
  //         </div>
  //       </div>
  //         <ToastContainer/>
  //     </div>
  // )
}
