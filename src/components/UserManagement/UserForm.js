import React, { useState } from 'react';
import { createUser, updateUser } from '../../services/api';
const UserForm = ({ user, onSave, onCancel }) => {
  const [name, setName] = useState(user ? user.name : '');
  const [role, setRole] = useState(user ? user.role : '');
  const [status, setStatus] = useState(user ? user.status : '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { name, role, status };
    if (user) {
      await updateUser(user.id, userData);
    } else {
      await createUser(userData);
    }
    onSave();
  };

  return (
    <div className="container">
      <h3>{user ? 'Edit User' : 'Add User'}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
          <option value="Guest">Guest</option>
        </select>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button type="submit">{user ? 'Save Changes' : 'Add User'}</button>
        {onCancel && <button type="button" onClick={onCancel}>Cancel</button>}
      </form>
    </div>
  );
};

export default UserForm;
