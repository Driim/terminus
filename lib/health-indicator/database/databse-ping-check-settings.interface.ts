/**
 * The settings for the typeorm ping check
 */
import { Connection as MongooseConnection } from 'mongoose';
import { Connection } from 'typeorm';

/**
 * @publicApi
 */
export interface DatabasePingCheckSettings {
  /**
   * The connection which the ping check should get executed
   */
  connection?: Connection | MongooseConnection;
  /**
   * The amount of time the check should require in ms
   */
  timeout?: number;
}
