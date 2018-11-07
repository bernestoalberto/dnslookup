const dns = require('dns');
const { Resolver } = require('dns');
let domain =  ((process.platform == 'linux' || process.platform == 'win32') && process.arch != 'x64' ) ? 'acslabtest.com.com': (process.platform == 'linux')? 'eabonet.com':'acslabtest.com.com';
dns.resolve4(domain, (err, addresses) => {
  if (err) throw err;

  console.log(`addresses: ${JSON.stringify(addresses)}`);

  addresses.forEach((a) => {
    dns.reverse(a, (err, hostnames) => {
      if (err) {
        throw err;
      }
      console.log(`reverse for ${a}: ${JSON.stringify(hostnames)}`);
    });
  });
});

const resolver = new Resolver();
resolver.setServers(['4.4.4.4']);

// This request will use the server at 4.4.4.4, independent of global settings.
resolver.resolve4(domain, (err, addresses) => {
  // ...
});
