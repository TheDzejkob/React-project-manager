// Dashboard.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import UserTasks from '../components/UserTasks';
import '../App.css';

const Dashboard = () => {
    const { userId } = useParams();

    return (
        <div className="Dashboard">
            <UserTasks userId={parseInt(userId, 10)} />
        </div>
    );
};

export default Dashboard;
