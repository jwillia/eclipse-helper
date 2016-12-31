import app from './app';
import http from 'http';
import socketio from 'socket.io';
import { createDeck } from './mock-utils';

let server = http.createServer(app);
let io = socketio.listen(server);

server.listen(app.get('port'), () => {
  console.log('app started on port', app.get('port'));
});

let gameState = {

}

let sharedStates = {

}

let playerStates = {}

io.on('connection', (socket) => {
  console.log('a user connected')
  io.emit('loadData', {deck: createDeck()});
  socket.on('joinGame', (userName) => {
    if (!playerStates[userName]) {
      playerStates[userName] = {}
      playerStates[userName].deck = createDeck(userName)
      playerStates[userName].name = userName;
      playerStates[userName].opponent = userName === 'Player 1' ? 'Player 2' : 'Player 1';
    }
    io.emit('playerStatesUpdated', playerStates)
  });
  socket.on('draw', ([userName, deck, hand]) => {
    playerStates[userName].deck = deck;
    playerStates[userName].hand = hand;
    io.emit('playerStatesUpdated', playerStates)
  })
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});
