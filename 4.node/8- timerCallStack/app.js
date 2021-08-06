let num = 1;
const interval = setInterval(()=>{
    console.log(num++);
}, 1000);

setTimeout(()=>{
    console.log("Time Out!");
    clearInterval(interval);
}, 6000);