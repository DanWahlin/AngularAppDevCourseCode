This repository is for the Code with Dan Angular/TypeScript development course.

To build the labs do the following:

Download the code and extract it to your machine (or use git).

1. Run `npm install` from a command prompt at the root of the folder.
1. Run `npm run setup` to run the lab setup process.

## Behind a Corporate Proxy?

If you're behind a proxy you'll need to configure your proxy server with npm:

npm config set proxy http://user_name:password@proxy.company.com:your_proxy_port

npm config set https-proxy https://user_name:password@proxy.company.com:your_proxy_port

Get details here:

http://wil.boayue.com/blog/2013/06/14/using-npm-behind-a-proxy/

You'll also need to set the following environment variables in order for the lab setup
process to work correctly and get out through the proxy:

#### Windows

setx HTTP_PROXY      http://user_name:password@proxy.company.com:your_proxy_port

setx HTTPS_PROXY     https://user_name:password@proxy.company.com:your_proxy_port

#### Mac

export HTTP_PROXY      http://user_name:password@proxy.company.com:your_proxy_port

export HTTPS_PROXY     https://user_name:password@proxy.company.com:your_proxy_port

More details here: https://www.npmjs.com/package/request#proxies
