import { Snowflake } from "../Base";

export interface OverwriteObject {
  id: Snowflake; // 用戶ID || 角色ID
  type: number; // 0 (角色) || 1 (用戶)
  allow: string; // 權限 bit
  deny: string; // 權限 bit
}
export interface ChannelStructure {
  id: Snowflake; // channel id
  type: number; // channel type ( ChannelTypes

  guild_id?: number; // channel guild id
  position?: number; // channel 排序位置
  permission_overwrites?: Array<OverwriteObject>; // 權限
  name?: string; // min: 1, max: 100
  topic?: string; // channel 主題 min: 0, max: 1024
  nsfw?: boolean; // check is nsfw channel
  last_message_id?: number; // in channel 最後一條 message id
  bitrate?: number; // 語音 channel 比特率(bits)
  user_limit?: number; // 語音 channel max 使用者比特率(bits)
  rate_limit_per_user?: number; //訊息發送延遲  if `manage_messages` or `manage_channel` pass

  // recipients?	array of user objects	the recipients of the DM
  // icon?	?string	icon hash
  // owner_id?	snowflake	id of the creator of the group DM or thread
  // application_id?	snowflake	application id of the group DM creator if it is bot-created
  // parent_id?	?snowflake	for guild channels: id of the parent category for a channel (each parent category can contain up to 50 channels), for threads: id of the text channel this thread was created
  // last_pin_timestamp?	?ISO8601 timestamp	when the last pinned message was pinned. This may be null in events such as GUILD_CREATE when a message is not pinned.
  // rtc_region?	?string	voice region id for the voice channel, automatic when set to null
  // video_quality_mode?	integer	the camera video quality mode of the voice channel, 1 when not present
  // message_count?	integer	an approximate count of messages in a thread, stops counting at 50
  // member_count?	integer	an approximate count of users in a thread, stops counting at 50
  // thread_metadata?	a thread metadata object	thread-specific fields not needed by other channels
  // member?	a thread member object	thread member object for the current user, if they have joined the thread, only included on certain API endpoints
  // default_auto_archive_duration?	integer	default duration for newly created threads, in minutes, to automatically archive the thread after recent activity, can be set to: 60, 1440, 4320, 10080
  // permissions?	string	computed permissions for the invoking user in the channel, including overwrites, only included when part of the resolved data received on a slash command interaction
}
