const config = {
  /**
   * The AWS region where the resources are located
   *
   * @example 'eu-west-1'
   */
  region: '',
  /**
   * The Cognito Identity Pool ID
   *
   * @example 'eu-west-1:12345678-abcd-2345-efgh-6e3974c9c2b7'
   */
  identityPoolId: '',
  /**
   * The Amazon Location Service v2 map style name
   *
   * @example 'Standard', 'Monochrome', 'Hybrid', or 'Satellite'
   * @default 'Standard'
   */
  mapStyleName: 'Standard',
  /**
   * The AppSync Events API HTTP endpoint
   *
   * @example 'abcdef12ghilmnopqrstu34vwyz.appsync-api.eu-west-1.amazonaws.com'
   */
  httpDomain: '',
  /**
   * The AppSync Events API Realtime endpoint
   *
   * @example 'abcdef12ghilmnopqrstu34vwyz.appsync-realtime-api.eu-west-1.amazonaws.com'
   */
  realtimeDomain: '',
  /**
   * The AppSync Events API channel
   *
   * @example 'asset-tracker/thing123'
   * @default 'asset-tracker/thing123'
   */
  channel: 'asset-tracker/thing123',
};

export default config;
