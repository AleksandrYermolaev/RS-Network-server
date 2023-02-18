const getClient = (userId, userList) =>
  userList.find((user) => user.userId === userId);

export default getClient;
