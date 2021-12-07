import {io} from 'socket.io-client'

// 服务器地址
const socket = io('http://192.168.1.79:2560')

socket.on('connect',()=>{
    console.log('connected with id: '+socket.id)
})

export default socket