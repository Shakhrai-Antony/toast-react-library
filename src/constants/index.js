export const uuid = () => {
  const uniqueId =
    Date.now().toString(36) + Math.random().toString(36).substring(2);
  return uniqueId;
};

export const selectOptions = [
  { value: 'success', description: 'Success', id: 1 },
  { value: 'warning', description: 'Warning', id: 2 },
  { value: 'error', description: 'Error', id: 3 },
];
