const addClient = (userId, socketId, userList) => {
  if (!userList.some((user) => user.userId === userId)) {
    userList.push({
      userId,
      socketId,
    });
  }
};

export default addClient;
