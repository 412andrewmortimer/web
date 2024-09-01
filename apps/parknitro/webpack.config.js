const { withModuleFederation } = require('@nx/angular/module-federation');
const config = require('./module-federation.config');
<<<<<<< HEAD
<<<<<<< HEAD
module.exports = withModuleFederation(config, { dts: false });
=======
module.exports = withModuleFederation(config);
>>>>>>> 0165f27 (Add third remote: Park Nitro)
=======
module.exports = withModuleFederation(config, { dts: false });
>>>>>>> 5fc4f2f (Migrate Nx to v19 and Angular to v18)
