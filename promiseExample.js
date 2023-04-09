const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // reject(Error('Promise Rejected Unconditionally.'));
        resolve('Promise accepted');
    }, 2500);
});

promise.then((res) => {
    console.log(res);
});

promise.catch((err) => {
    alert(err);
});