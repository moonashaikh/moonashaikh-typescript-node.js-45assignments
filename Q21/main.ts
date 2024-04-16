// they think of something u could store in a typescrpt object.
//  write a program that creates objects containig these items

import { createRedirectInterceptor } from "undici-types/interceptors"

// : shows type anno
let objectContainingitems : { [key: string]: any }= {
"laptop":{
    name: "laptop",
    price : "8000",
    description:"high performance laptop"
},
"mouse":{
    name: "mouse",
    price : "800",
    description:"high performance laptop"
},
}    
    console.log(objectContainingitems);