function success(value) {
    console.log('Resolved: ', value);
}
function error(err) {
    console.log('Error: ', err);
}

Promise.reject('Oops!')
    .then(success, error)           // Error:  Oops!

Promise.reject('Oops!')
    .then(success)
    .catch(error)                   // also Error:  Oops!


// That could be useful, for example, when you perform a fetch request to get a list of items, but the list must obligatory have at least one item.
// So, in case if the list is empty, you could simply reject that list:
//
// import axios from "axios";
// axios("/list.json")
//     .then(response => {                                          // response comes through ... so it is a  SUCCESS
//         const list = response.data;                              // response contains list
//         if (list.length === 0) {
//             return Promise.reject(new Error("Empty list!"));     // HOWEVER conditional states if list is empty reject the Promise
//         }
//         return list;                                             // else return the list
//     })
//     .catch((err) => {                                            // hence if the list is empty this will CATCH the "issue"/error
//         console.log(err);                                        // will console log the error
//     }
//
//
// BOTTOM LINE IT IS BETTER TO USE .catch to "catch" errors INSTEAD OF .then(success, error)