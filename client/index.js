import React from 'react'
import ReactDOM from 'react-dom'
import io from 'socket.io-client'
import Routes from './routes';

ReactDOM.render(<Routes />, document.querySelector('#app'));