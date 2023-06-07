const path = require('path');

module.exports = {
  // ... other webpack configurations

  resolve: {
    fallback: {
      fs: false, // or provide a polyfill if necessary
      os: false, // or provide a polyfill if necessary
    },
  },

  // ... other webpack configurations
};

