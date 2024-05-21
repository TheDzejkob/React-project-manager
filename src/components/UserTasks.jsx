// UserTasks.jsx
import React from 'react';
import usersData from '../data.json';

const UserTasks = ({ userId }) => {
    const user = usersData.users.find(u => u.userId === userId);

    if (!user) {
        return <div>No user found</div>;
    }

    return (
        <div>
            <h2>Tasks for {user.username}</h2>
            <ul>
                {user.projects.map((project, index) => (
                    <li key={index}>
                        <h3>{project.projectName}</h3>
                        <p>{project.projectDiscription}</p>
                        <p>Date: {project.date}</p>
                        <p>Important: {project.projectImportant}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserTasks;
