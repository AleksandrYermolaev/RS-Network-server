const removeClient = (socketId, userList) =>
  userList.filter((user) => user.socketId !== socketId);

export default removeClient;
