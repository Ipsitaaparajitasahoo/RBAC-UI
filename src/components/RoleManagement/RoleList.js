import React, { useState, useEffect } from 'react';
import { fetchRoles, deleteRole } from '../../services/api';

const RoleList = ({ onEdit }) => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    const loadRoles = async () => {
      const result = await fetchRoles();
      setRoles(result);
    };

    loadRoles();
  }, []);

  const handleDelete = async (roleId) => {
    await deleteRole(roleId);
    setRoles(roles.filter((role) => role.id !== roleId));
  };

  return (
    <div className="container">
      <h3>Role List</h3>
      <table>
        <thead>
          <tr>
            <th>Role</th>
            <th>Permissions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td>{role.name}</td>
              <td>{role.permissions.join(', ')}</td>
              <td>
                <button onClick={() => onEdit(role)}>Edit</button>
                <button onClick={() => handleDelete(role.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoleList;
