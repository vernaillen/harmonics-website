export default {
  scanner: {
    samples: 2
  },
  chrome: {
    useSystem: false
  },
  debug: false
  /* uncomment for CI
    server: {
      open: false
    },
    hooks: {
      'worker-finished': () => {
        process.exit(0)
      }
    }, */
}
