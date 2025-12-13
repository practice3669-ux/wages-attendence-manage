'use client'

import { useState } from 'react'

export default function App() {
  const [currentPage, setCurrentPage] = useState('dashboard')

  const renderContent = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />
      case 'workers':
        return <Workers />
      case 'attendance':
        return <Attendance />
      case 'salary':
        return <Salary />
      case 'reports':
        return <Reports />
      case 'settings':
        return <Settings />
      default:
        return <Dashboard />
    }
  }

  return (
    <div id="mainApp">
      <div className="app-container">
        <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <MainContent>
          {renderContent()}
        </MainContent>
      </div>
    </div>
  )
}

function Sidebar({ currentPage, setCurrentPage }) {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <i className="fas fa-calculator"></i>
          <h1>Hisab</h1>
        </div>
      </div>
      <div className="user-profile">
        <div className="user-avatar">
          <i className="fas fa-user"></i>
        </div>
        <div className="user-info">
          <h3>Admin</h3>
          <span>Administrator</span>
        </div>
      </div>
      <ul className="nav-menu">
        <li className="nav-item">
          <a className={`nav-link ${currentPage === 'dashboard' ? 'active' : ''}`} onClick={() => setCurrentPage('dashboard')}>
            <i className="fas fa-tachometer-alt"></i>
            Dashboard
          </a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${currentPage === 'workers' ? 'active' : ''}`} onClick={() => setCurrentPage('workers')}>
            <i className="fas fa-users"></i>
            Workers
          </a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${currentPage === 'attendance' ? 'active' : ''}`} onClick={() => setCurrentPage('attendance')}>
            <i className="fas fa-calendar-check"></i>
            Attendance
          </a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${currentPage === 'salary' ? 'active' : ''}`} onClick={() => setCurrentPage('salary')}>
            <i className="fas fa-money-bill-wave"></i>
            Salary
          </a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${currentPage === 'reports' ? 'active' : ''}`} onClick={() => setCurrentPage('reports')}>
            <i className="fas fa-chart-bar"></i>
            Reports
          </a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${currentPage === 'settings' ? 'active' : ''}`} onClick={() => setCurrentPage('settings')}>
            <i className="fas fa-cog"></i>
            Settings
          </a>
        </li>
      </ul>
    </div>
  )
}

function MainContent({ children }) {
  return (
    <div className="main-content">
      <TopHeader />
      <div className="content-wrapper">
        {children}
      </div>
    </div>
  )
}

function TopHeader() {
  return (
    <div className="top-header">
      <div className="header-left">
        <button className="menu-toggle">
          <i className="fas fa-bars"></i>
        </button>
        <div className="search-box">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="header-right">
        <div className="notification">
          <i className="fas fa-bell"></i>
          <span className="notification-badge">3</span>
        </div>
        <div className="user-dropdown">
          <div className="user-dropdown-toggle">
            <img src="/avatar.jpg" alt="User" />
            <span>Admin</span>
            <i className="fas fa-chevron-down"></i>
          </div>
          <div className="dropdown-menu">
            <a href="#"><i className="fas fa-user"></i> Profile</a>
            <a href="#"><i className="fas fa-cog"></i> Settings</a>
            <div className="dropdown-divider"></div>
            <a href="#"><i className="fas fa-sign-out-alt"></i> Logout</a>
          </div>
        </div>
      </div>
    </div>
  )
}

function Dashboard() {
  return (
    <div>
      <div className="dashboard-stats">
        <div className="stat-card total-workers">
          <div className="stat-header">
            <i className="fas fa-users"></i>
          </div>
          <div className="stat-value">25</div>
          <div className="stat-label">Total Workers</div>
          <div className="stat-change positive">
            <i className="fas fa-arrow-up"></i>
            +2 this month
          </div>
        </div>
        <div className="stat-card present-today">
          <div className="stat-header">
            <i className="fas fa-check-circle"></i>
          </div>
          <div className="stat-value">22</div>
          <div className="stat-label">Present Today</div>
          <div className="stat-change positive">
            <i className="fas fa-arrow-up"></i>
            88% attendance
          </div>
        </div>
        <div className="stat-card pending-salary">
          <div className="stat-header">
            <i className="fas fa-clock"></i>
          </div>
          <div className="stat-value">₹45,000</div>
          <div className="stat-label">Pending Salary</div>
          <div className="stat-change negative">
            <i className="fas fa-arrow-down"></i>
            -5% from last month
          </div>
        </div>
        <div className="stat-card monthly-expense">
          <div className="stat-header">
            <i className="fas fa-rupee-sign"></i>
          </div>
          <div className="stat-value">₹2,50,000</div>
          <div className="stat-label">Monthly Expense</div>
          <div className="stat-change positive">
            <i className="fas fa-arrow-up"></i>
            +12% from last month
          </div>
        </div>
      </div>
      <div className="recent-activity">
        <div className="section-header">
          <h2>Recent Activity</h2>
          <a href="#" className="view-all">View All</a>
        </div>
        <ul className="activity-list">
          <li className="activity-item">
            <div className="activity-icon present">
              <i className="fas fa-check"></i>
            </div>
            <div className="activity-details">
              <h4>Ram Kumar marked present</h4>
              <div className="activity-time">2 hours ago</div>
            </div>
          </li>
          <li className="activity-item">
            <div className="activity-icon absent">
              <i className="fas fa-times"></i>
            </div>
            <div className="activity-details">
              <h4>Shyam Lal marked absent</h4>
              <div className="activity-time">4 hours ago</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

function Workers() {
  return <h2>Workers Page</h2>
}

function Attendance() {
  return <h2>Attendance Page</h2>
}

function Salary() {
  return <h2>Salary Page</h2>
}

function Reports() {
  return <h2>Reports Page</h2>
}

function Settings() {
  return <h2>Settings Page</h2>
}