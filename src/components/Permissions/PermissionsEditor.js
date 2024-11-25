import React from 'react';

const PermissionsEditor = ({ role, onSave }) => {
  const handleSavePermissions = () => {
    onSave(role.permissions);
  };
  return (
    <div className="container">
      <h3>Permissions for {role.name}</h3>
      <button onClick={handleSavePermissions}>Save Permissions</button>
    </div>
  );
};

export default PermissionsEditor;
