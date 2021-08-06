const EventEmitter = require('events');
const emmiter = new EventEmitter();

emmiter.on('jeahun', (args)=>{
    console.log('first callback', args);
});

emmiter.on('jeahun', (args)=>{
    console.log('second callback', args);
});

emmiter.emit('jeahun', { message : 1 });
emmiter.emit('jeahun', { message : 2 });
emmiter.emit('jeahun', { message : 3 });