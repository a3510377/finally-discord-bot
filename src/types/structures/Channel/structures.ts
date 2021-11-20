import { ISO8601, DIS, snowflake } from "../Base";
import { UserStructure } from "../User/structures";

/**Overwrite 結構
 * @url https://discord.com/developers/docs/resources/channel#overwrite-object
 */
export interface OverwriteObject {
  id: snowflake;
  type: number;
  allow: string;
  deny: string;
}
/**Thread Metadata 結構
 * @url https://discord.com/developers/docs/resources/channel#thread-metadata-object
 */
export interface ThreadMetadataStructure {
  archived: boolean;
  auto_archive_duration: number;
  archive_timestamp: ISO8601;
  locked: boolean;
  invitable?: boolean;
}
/**Thread Member 結構
 * @url https://discord.com/developers/docs/resources/channel#thread-member-object
 */
export interface ThreadMemberStructure {
  id?: snowflake;
  user_id?: snowflake;
  join_timestamp: ISO8601;
  flags: number;
}
/**Channel 結構
 * @url https://discord.com/developers/docs/resources/channel#channel-object-channel-structure
 */
export interface ChannelStructure {
  id: snowflake;
  type: number;
  guild_id: snowflake;
  position: number;
  permission_overwrites?: OverwriteObject[];
  name?: string;
  topic?: string | DIS;
  nsfw?: boolean;
  last_message_id?: snowflake | DIS;
  bitrate?: number;
  user_limit?: number;
  rate_limit_per_user: number;
  recipients?: UserStructure[];
  icon?: string | DIS;
  owner_id?: snowflake;
  application_id?: snowflake;
  parent_id?: snowflake | DIS;
  last_pin_timestamp?: ISO8601 | DIS;
  rtc_region?: string | DIS;
  video_quality_mode?: number;
  message_count?: number;
  member_count?: number;
  thread_metadata?: ThreadMetadataStructure;
  member?: ThreadMemberStructure;
  default_auto_archive_duration?: number;
  permissions?: string;
}
