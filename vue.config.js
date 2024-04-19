module.exports = {
    configureWebpack: config => {
      if (process.env.NODE_ENV === 'production') {
        output.hashFunction = 'xxhash64'
      } else {
        output.hashFunction = 'xxhash64'
      }
    }
  }