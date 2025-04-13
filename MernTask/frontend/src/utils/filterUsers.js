export const filterUsers = (text, userList) => {
  const trimmedText = text.trim().toLowerCase();
  if (!trimmedText) return userList;

  return userList.filter((user) => {
    const userInput = [
      user.name,
      user.email,
      user.username,
      user.phone,
      user.website,
      user.company?.name,
      user.company?.catchPhrase,
      user.company?.bs,
      user.address?.street,
      user.address?.suite,
      user.address?.city,
      user.address?.zipcode,
      user.address?.geo?.lat,
      user.address?.geo?.lng,
    ];

    return userInput.some(
      (field) => field && field.toLowerCase().includes(trimmedText)
    );
  });
};
