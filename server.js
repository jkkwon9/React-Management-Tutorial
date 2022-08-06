const express  = require('express');
const bodyparser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extend: true}));

app.get('/api/customer',(req,res) => {
    res.send({
        'id'   : '1',
        'name' : '홍길동',
        'birthday' : '12322',
        'gendor' : '남자',
        'job' : '회사원',
    });
});

app.listen(port,()=>console.log('Listening on port ${port}'));
