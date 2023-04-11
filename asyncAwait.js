let input = 'google.com'; // change to bing.com and see what happens

// this function will return a promise
function makeRequest(url) {
    return new Promise ((resolve, reject) =>  {
        if (url === 'google.com') {
            resolve({
                message: 'you are connected',
                where: url
            })
        } else {
            reject('can only talk to google, you tried ' + url)
        }
    })
}

// this function always resolves when called
function processRequest(response) {
    return new Promise((resolve) => {
        resolve(`you may continue to search on ${response.where}`)
    })
}

// function is async meaning it will wait for data
// utilizes try (successes) & catch (errors)
// above functions are called with await
async function searchEngine(website) {
    try {
        let session = await makeRequest(website)
        console.log(session)
        let response = await processRequest(session)
        console.log(response)
    } catch(err) {
        console.log(err)
    }
}

searchEngine(input)