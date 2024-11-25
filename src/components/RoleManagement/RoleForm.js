import React, { useState } from 'react';
import { createRole, updateRole } from '../../services/api';
const RoleForm = ({ role, onSave, onCancel }) => {
  const [name, setName] = useState(role ? role.name : '');
  const [permissions, setPermissions] = useState(role ? role.permissions : []);

  const handlePermissionChange = (perm) => {
    setPermissions((prev) =>
      prev.includes(perm)
        ? prev.filter((permission) => permission !== perm)
        : [...prev, perm]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const roleData = { name, permissions };
    if (role) {
      await updateRole(role.id, roleData);
    } else {
      await createRole(roleData);
    }
    onSave();
  };

  return (
    <div className="container">
      <h3>{role ? 'Edit Role' : 'Add Role'}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Role Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div>
          <label>
            <input
              type="checkbox"
              checked={permissions.includes('Read')}
              onChange={() => handlePermissionChange('Read')}
            />
            Read
          </label>
          <label>
            <input
              type="checkbox"
              checked={permissions.includes('Write')}
              onChange={() => handlePermissionChange('Write')}
            />
            Write
          </label>
          <label>
            <input
              type="checkbox"
              checked={permissions.includes('Delete')}
              onChange={() => handlePermissionChange('Delete')}
            />
            Delete
          </label>
        </div>
        <button type="submit">{role ? 'Save Changes' : 'Add Role'}</button>
        {onCancel && <button type="button" onClick={onCancel}>Cancel</button>}
      </form>
    </div>
  );
};

export default RoleForm;
