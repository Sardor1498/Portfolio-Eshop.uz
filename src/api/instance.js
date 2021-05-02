import * as axios from "axios";

let url = "";
if (process.env.MIX_API_URL === "local") {
    url = "http://localhost:8000";
} else {
    url = "https://laravel-react-eshop.herokuapp.com";
}


const loading = isLoading => ({
    type: isLoading ? "LOADING_TRUE" : "LOADING_FALSE"
});

// const loading = (data) => {
//    return async dispatch => {
//         console.log("LOADING LOADING2");
//         console.log(data);
//         dispatch(setIsLoading(data));
//     };
// }
    
let instance = axios.create({
    baseURL: `${url}/api`,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-CSRF-TOKEN": document
            .querySelector('meta[name="csrf-token"]')
            .getAttribute("content")
    }
});

//  instance.interceptors.request.use(
//          config => {
//              dispatch => {
//                  dispatch(loading(true)); 
//              }
//              console.log("REQUEST");
//              return config;
//          },
//          error => {
//              return Promise.reject(error);
//          }
// );

// instance.interceptors.response.use(
//         response => {
//             console.log("RESPONSE");
//             switch (response.status) {
//                 case 200:
//                 case 204:
//                 case 201:
//                     loading(false);
//                     break;
//                 default:
//                     break;
//             }
//             return response;
//         },
//         error => {
//             loading(false);
//             if (error?.response && error?.response?.data) {
//                 return Promise.reject(error.response.data);
//             }
//             return Promise.reject(error?.message);
//         }
// );

export default instance;