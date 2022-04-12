// import mockjs from 'mockjs';

// export default {
//     'GET /user' : (req, res) => {
//         res.send(mockjs.mock({
//             "ret" : 0,
//             "data" : {
//                 "list" :[
//                     'ddddddddddddddddd',
//                     'ccccccccccccccccccccccc',
//                     'eeeeeeeeee',
//                     '1111111111111'
//                 ]
//             }
//         }))
//     }
// }

const Mock = require('mockjs');

module.exports = Mock.mock('/user', 'get', (options)=> {


    return {
        'data' : {
            'list' : [
                'ddddddddddddddddd',
                'ccccccccccccccccccccccc',
                'eeeeeeeeee',
                '1111111111111'
            ]
        }
    }
})