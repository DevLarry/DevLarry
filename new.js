const { default: axios } = require("axios");
const express = require('express');
const app = express();
const nDate = new Date();
var {log} = console;
port = process.env.PORT || 3000;
var passed = (time)=>{
    let date= nDate.toLocaleString('en-US', {
        timeZone: 'Africa/Lagos'
    });
    let arr = date.split(' ');
    let th = parseInt(time.split(':')[0]);
    let tm = parseInt(time.split(':')[1]);
    let h = parseInt(arr[1].split(':')[0]);
    if(arr[2]==='PM'){
        h +=12;
    }
    let m = parseInt(arr[1].split(':')[1]);
    if(h>th){
        return true;
    }else if(h===th && m>tm){
        return true;
    }else if(h===th && m<tm){
        return false;
    }else{
        return false;
    }
}
app.get('/', (req, res)=>{
    let doc = JSON.stringify({
        first: passed('7:00'), 
        second: passed('11:00'), 
        third: passed('13:30'), 
        fourth: passed('17:30')
    }); 
    console.log(doc);
    res.send(doc);
});
app.listen(port, ()=>log('started at port', port));
// const config = {
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded'
//     }
//   };
// axios.post('http://localhost/eazy/bullshit.php', {
//     time: [passed('7:00'), passed('11:00'), passed('13:30'), passed('17:30')]
// }, config)
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log('something went wrong!');
// })