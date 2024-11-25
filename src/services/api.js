export const fetchUsers = async () => [
  { id: 1, name: 'Ipsita', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Alisha', role: 'User', status: 'Inactive' },
];

export const createUser = async (user) => {
  console.log('User Created:', user);
};

export const updateUser = async (id, user) => {
  console.log('User Updated:', id, user);
};

export const deleteUser = async (id) => {
  console.log('User Deleted:', id);
};

export const fetchRoles = async () => [
  { id: 1, name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
  { id: 2, name: 'User', permissions: ['Read'] },
];

export const createRole = async (role) => {
  console.log('Role Created:', role);
};

export const updateRole = async (id, role) => {
  console.log('Role Updated:', id, role);
};

export const deleteRole = async (id) => {
  console.log('Role Deleted:', id);
};
