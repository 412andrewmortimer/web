const { withModuleFederation } = require('@nx/angular/module-federation');
const config = require('./module-federation.config');
module.exports = withModuleFederation({
<<<<<<< HEAD
<<<<<<< HEAD
  dts: false,
=======
>>>>>>> 0165f27 (Add third remote: Park Nitro)
=======
  dts: false,
>>>>>>> 5fc4f2f (Migrate Nx to v19 and Angular to v18)
  ...config,
  /*
   * Remote overrides for production.
   * Each entry is a pair of a unique name and the URL where it is deployed.
   *
   * e.g.
   * remotes: [
   *   ['app1', 'https://app1.example.com'],
   *   ['app2', 'https://app2.example.com'],
   * ]
   */
});
