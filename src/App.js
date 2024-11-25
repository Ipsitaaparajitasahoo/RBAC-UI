import React, { useState } from 'react';
import './styles.css';
import UserList from './components/UserManagement/UserList';
import UserForm from './components/UserManagement/UserForm';
import RoleList from './components/RoleManagement/RoleList';
import RoleForm from './components/RoleManagement/RoleForm';

const App = () => {
  const [editingUser, setEditingUser] = useState(null);
  const [editingRole, setEditingRole] = useState(null);

  return (
    <div className="app">
      <h1>RBAC Admin Dashboard</h1>

      {/* User Management Section */}
      <UserList onEdit={(user) => setEditingUser(user)} />
      {editingUser && (
        <UserForm user={editingUser} onSave={() => setEditingUser(null)} onCancel={() => setEditingUser(null)} />
      )}

      {/* Role Management Section */}
      <RoleList onEdit={(role) => setEditingRole(role)} />
      {editingRole && (
        <RoleForm role={editingRole} onSave={() => setEditingRole(null)} onCancel={() => setEditingRole(null)} />
      )}
    </div>
  );
};

export default App;
