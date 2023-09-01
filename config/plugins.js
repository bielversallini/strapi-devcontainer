module.exports = ({ env }) => ({
  // ...
  sentry: {
    enabled: env('NODE_ENV') === 'production',
    config: {
    dsn: env('SENTRY_DSN'),
    sendMetadata: true,
    },
  },
  // ...
});