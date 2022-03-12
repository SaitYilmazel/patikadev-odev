function RoomParser(data) {
  return Object.keys(data).map(key => {
    return {
      roomName: key,
    };
  });
}

function MessageParser(data) {
  return Object.keys(data)
    .map(key => {
      return {
        id: key,
        date: data[key].date,
        userName: data[key].userName,
        userMail: data[key].userMail,
        value: data[key].value,
        like: data[key].like,
      };
    })
    .sort(function (a, b) {
      return a.date > b.date ? -1 : a.date > b.date ? 1 : 0;
    });
}

export {RoomParser, MessageParser};
