import React from 'react';
import styled from 'styled-components';
import DashboardHeader from './DashboardHeader';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const DashboardLayoutStyle = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  .dashboard {
    &-heading {
      font-weight: bold;
      font-size: 36px;
      margin-bottom: 40px;
      color: ${(props) => props.theme.primary};
      letter-spacing: 1px;
    }
    &-main {
      padding: 40px 20px;
      gap: 0 40px;
      display: grid;
      grid-template-columns: 300px minmax(0, 1fr);
      align-items: start;
    }
  }
`;

const DashboardLayout = ({ children }) => {
  return (
    <DashboardLayoutStyle>
      <DashboardHeader />
      <div className="dashboard-main">
        <Sidebar />
        <div className="dashboard-chilren">
          <Outlet />
        </div>
      </div>
    </DashboardLayoutStyle>
  );
};

export default DashboardLayout;
