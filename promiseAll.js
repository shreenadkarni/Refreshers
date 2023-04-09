let scalping = true;
let velocityIncrease = true;
let sales = true;


let trading = new Promise ( (resolve, reject) => {
    if (scalping) {
        resolve({
            key: 'stockOptions',
            value: 'able to make money'
        });
    } else {
        reject('not working out');
    }
});

let work = new Promise ( (resolve, reject) => {
    if (velocityIncrease) {
        resolve({
            key: 'softwareDeveloper',
            value: 'time for a promotion'
        });
    } else {
        reject('time to find a new job');
    }
});

let apparel = new Promise ( (resolve, reject) => {
    if (sales) {
        resolve({
            key: '3CXIX',
            value: 'people love the designs'
        });
    } else {
        reject('not enough brand marketing');
    }
});

let whatsWorking = Promise.all([
    trading,
    work,
    apparel
]).then((messages) => {
    console.log(messages);
}).catch((message) => {
    console.log(message);
})