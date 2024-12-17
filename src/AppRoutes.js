import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import TaskList from '../pages/TaskList';
import AdminPanel from '../pages/AdminPanel';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/tasks" element={<TaskList />} />
      <Route path="/admin" element={<AdminPanel />} />
    </Routes>
  );
};

export default AppRoutes;
