const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 3000 });
console.log('Start Server!');

const randomArr = [
  {
    name: 'Tonny',
    message: ['Tonny1', 'Tonny2', 'Tonny3', 'Tonny4', 'Tonny5'],
  },
  {
    name: 'Linda',
    message: ['Linda1', 'Linda2', 'Linda3', 'Linda4', 'Linda'],
  },
  {
    name: 'Jimmy',
    message: ['Jimmy1', 'Jimmy2', 'Jimmy3', 'Jimmy4', 'Jimmy'],
  },
  {
    name: 'Walter',
    message: ['Walter1', 'Walter2', 'Walter3', 'Walter4', 'Walter5'],
  },
  {
    name: 'Teacher',
    message: ['Teacher1', 'Teacher2', 'Teacher3', 'Teacher4', 'Teacher'],
  },
];

const randomWords = (itemName, itemArray) => {
  const selectedMessageArr = itemArray.find(el => el.name === itemName).message;
  const randomIndex = Math.floor(Math.random() * selectedMessageArr.length);
  return selectedMessageArr[randomIndex];
};

const randomTime = () => {
  const maxTime = 5;
  return Math.ceil(maxTime * Math.random() * 1000);
};

server.on('connection', (ws) => {
  ws.on('message', (item) => {
    const message = JSON.parse(item);
    setTimeout(() => {
      ws.send(randomWords(message.name, randomArr));
    }, randomTime());
  });
});
