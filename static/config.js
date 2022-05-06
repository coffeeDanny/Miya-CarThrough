/**
 * devlopment
 * local本地 | dev白盒 ｜ uat1 ｜ uat2 ｜ prod生产
 */
 const devlopment = 'local'

 let config = {}
 
 if(devlopment === 'local'){
   config = { 
        BASE_API: 'http://localhost:8080',  // 后端api地址
        BASE_API2: 'http://localhost:8090',  
   }
 }
 
 if(devlopment === 'dev'){
    config = { 
        BASE_API: 'http://localhost:8080',  // 后端api地址
        BASE_API2: 'http://localhost:8090',  
    }
 }
 
 if(devlopment === 'uat1'){
    config = { 
        BASE_API: 'http://localhost:8080',  // 后端api地址
        BASE_API2: 'http://localhost:8090',  
    }
 }
 
 if(devlopment === 'uat2'){
    config = { 
        BASE_API: 'http://localhost:8080',  // 后端api地址
        BASE_API2: 'http://localhost:8090',  
    }
 }
 
 if(devlopment === 'prod'){
    config = { 
        BASE_API: 'http://localhost:8080',  // 后端api地址
        BASE_API2: 'http://localhost:8090',  
    }
 }
 