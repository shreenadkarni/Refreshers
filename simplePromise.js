let out = false;

function dogs() {
    return new Promise((resolve, reject) => {
        if (out) {
            resolve ('who, who, who')
        } else {
            reject ('who let the dogs out')
        }
    })
}

dogs().then((successMessage) => {
    console.log(successMessage)
}).catch((errorMessage) => {
    console.log(errorMessage)
})