const config = {
  default: {
    client_id: 'XXXXXX',
    client_secret: 'XXXXXX',
    redirect_uri: 'http://localhost:3000/callback',
    scope: 'user-read-playback-state',
    state_key: 'SPOTIFY_VISUALIZER_AUTH_ID'
  },

  production: {
    client_id: 'XXXXXX',
    client_secret: 'XXXXXX',
    redirect_uri: 'https://kaleidosync.herokuapp.com/callback',
    scope: 'user-read-playback-state',
    state_key: 'SPOTIFY_VISUALIZER_AUTH_ID'
  }
}

module.exports = config[process.env.NODE_ENV] || config.default