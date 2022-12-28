// // 云函数入口文件
// const cloud = require( " wx-server-sdk " )//引入mysq1操作模块
// const mysql = require( ' mysql2/ promise ' )
// cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境

// // 云函数入口函数
// exports.main = async (event, context) => {
//   const id = event.id

//   try {
//     const connection = await mysql.createconnection({
//       host:"192.168.110.69",
//       database: "test",
//       user: "root",
//       password: ""
//     }),
//       const [row, fields] = await connection.execute( 'SELECT version() ; '),
//       return rows;
//   }catch (err){
//     console.log("链接错误", err)
//     return err
//   }
// }
