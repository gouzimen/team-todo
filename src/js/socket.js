import {io} from 'socket.io-client'

// 服务器地址
const socket = io('http://127.0.0.1:2560')

socket.on('connect',()=>{
    console.log('connected with id: '+socket.id)
})

export default socket