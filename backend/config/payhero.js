export const PAYHERO_CONFIG = {
  accountId: process.env.VITE_PAYHERO_ACCOUNT_ID || '12463',
  basicAuth: process.env.VITE_PAYHERO_BASIC_AUTH || 'Basic ZmFralAwdmE4dktQQTMzaWc0c3U6YkVyTXpDSjlaUE9RbHhiMVBjSUZaVmRpeGVrQTZ4WVZuWmQ5cGVBVg==',
  apiHost: 'backend.payhero.co.ke',
  primaryPath: '/api/v2/payments/initiate-stk-push',
  fallbackPath: '/api/v2/payments',
  callbackUrl: process.env.PAYHERO_CALLBACK_URL || 'https://rodstartechdevs.co.ke/api/payhero/callback'
}
