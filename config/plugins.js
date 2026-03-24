module.exports = {
  upload: {
    enabled: true,
    config: {
      providerOptions: {
        localServer: {
          maxHttpHeaderSize: 16384,
        },
      },
    },
  },
  'users-permissions': {
    enabled: true,
  },
};
