module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bdcbb43eae8f86389db6f94c20e1a771'),
  },
});
