// @flow
export const PROVIDER = 'edge'
export const API_VERSION = '1'
export const BITREFILL_URL = 'https://embed.bitrefill.com/'
export const CALLBACK_KEY = 'edge'
export const RETURN_URL = null
export const KEYS = {
  apiKey: '',
  refToken: ''
}

export const SUPPORTED_DIGITAL_CURRENCIES = [
  'BTC',
  'ETH',
  'LTC',
  'DASH',
  'DOGE'
]
// `https://embed.bitrefill.com/:coin?ref=&refundAddress=
export const formatUrlCall = (address: string, type: string) => {
  const route = type.replace('wallet:', 'embed/')
  const url =
    BITREFILL_URL +
    route +
    '?ref=' +
    KEYS.refToken +
    '&refundAddress=' +
    address
  return url
}
