const ENDPOINT = 'http://jsonplaceholder.typicode.com'
const http = require('http')

async function getAll() {
    return new Promise((resolve, reject) => {
        try {
            http.get(`${ENDPOINT}/todos`, (response) => {
                let result = ''
                response.on('data', (bytes) => {
                    result += bytes
                })
                response.on('end', () => {
                    resolve(result)
                })
            })
        } catch (e) {
            reject(e)
        }
    })
}

exports.getAll = getAll