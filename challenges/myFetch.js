'use strict';

const request = require('request');
async function getCountryName(code) {
    const response = await myFetch('https://jsonmock.hackerrank.com/api/countries?page=1');
    const { total_pages, data } = JSON.parse(response);
    const answer = findInCountries(data, code);
    if (answer) return answer.name;

    for (let i = 1; i <= total_pages; i++) {
        let { data } = await myFetch(`https://jsonmock.hackerrank.com/api/countries?page=${i}`);
        let answer = findInCountries(data, code);
        if (answer) return answer.name;
    }
}

function myFetch(url) {
    return new Promise((resolve, reject) => {
        request(url, function (error, response, body) {
            if (error) reject(error);

            else resolve(body);
        });
    });
}

function findInCountries(countries, code) {
    if (countries) {
        return countries.find((c) => c['alpha2Code'] === code);
    } else {
        return "";
    }
}

async function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const code = readLine().trim();
    const name = await getCountryName(code);
    ws.write(`${name}\n`);
}

main();
