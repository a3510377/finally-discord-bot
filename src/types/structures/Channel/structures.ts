import { ISO8601, snowflake } from "../Base";

/**覆蓋結構
 * @url https://discord.com/developers/docs/resources/channel#overwrite-object
 */
export interface OverwriteObject {
  id: snowflake;
  type: number;
  allow: string;
  deny: string;
}
export interface ChannelStructure {
  id: snowflake;
  type: number;
  guild_id: snowflake;
  position: number;
  permission_overwrites?: OverwriteObject[];
  name?: string;
  topic?: string;
  nsfw?: boolean;
  last_message_id?: snowflake;
  bitrate?: number;
  user_limit?: number;
  rate_limit_per_user: number;
  /* TODO: add user object */
  // recipients?	array of user objects
  icon?: string;
  owner_id?: snowflake;
  application_id?: snowflake;
  parent_id?: snowflake;
  last_pin_timestamp?: ISO8601;
  rtc_region?: string;
  video_quality_mode?: number;
  message_count?: number;
  member_count?: number;

  // thread_metadata?	a thread metadata object
  // member?	a thread member object

  default_auto_archive_duration?: number;
  permissions?: string;
}
