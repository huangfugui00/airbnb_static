const fetch = require('node-fetch');
const HttpsProxyAgent = require('https-proxy-agent');


(async () => {
    const proxyAgent = new HttpsProxyAgent('http://127.0.0.1:7890');
    // const response = await fetch('https://httpbin.org/ip?json', { agent: proxyAgent});
    const response = await fetch(' https://a0.muscache.com/pictures/565d2b91-07d8-43bb-b593-abe9c025e7eb.jpg', { agent: proxyAgent});
    const body = await response.text();
    console.log(body);
})();