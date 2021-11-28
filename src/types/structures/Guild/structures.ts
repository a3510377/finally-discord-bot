import { ISO8601, DIS, snowflake } from "..";

/**
 * @url https://discord.com/developers/docs/resources/guild#guild-object-guild-features
 */
export type GuildFeatures =
  | "ANIMATED_ICON"
  | "BANNER"
  | "COMMERCE"
  | "COMMUNITY"
  | "DISCOVERABLE"
  | "FEATURABLE"
  | "INVITE_SPLASH"
  | "MEMBER_VERIFICATION_GATE_ENABLED"
  | "MONETIZATION_ENABLED"
  | "MORE_STICKERS"
  | "NEWS"
  | "PARTNERED"
  | "PREVIEW_ENABLED"
  | "PRIVATE_THREADS"
  | "ROLE_ICONS"
  | "SEVEN_DAY_THREAD_ARCHIVE"
  | "THREE_DAY_THREAD_ARCHIVE"
  | "TICKETED_EVENTS_ENABLED"
  | "VANITY_URL"
  | "VERIFIED"
  | "VIP_REGIONS"
  | "WELCOME_SCREEN_ENABLED";

export interface GuildStructure {
  id: snowflake;
  name: string;
  icon: string | DIS;
  icon_hash?: string | DIS;
  splash: string | DIS;
  discovery_splash: string | DIS;
  owner?: boolean;
  owner_id: snowflake;
  permissions?: string;
  region?: string | DIS;
  afk_channel_id: snowflake | DIS;
  afk_timeout: number;
  widget_enabled?: boolean;
  widget_channel_id?: snowflake | DIS;
  verification_level: number;
  default_message_notifications: number;
  explicit_content_filter: number;
  // roles	array of role objects
  // emojis	array of emoji objects
  features: GuildFeatures[];
  // features	array of guild feature strings
  // mfa_level	integer
  // application_id	?snowflake
  // system_channel_id	?snowflake
  // system_channel_flags	integer
  // rules_channel_id	?snowflake
  // joined_at? *	ISO8601 timestamp
  // large? *	boolean
  // unavailable? *	boolean
  // member_count? *	integer
  // voice_states? *	array of partial voice state objects
  // members? *	array of guild member objects
  // channels? *	array of channel objects
  // threads? *	array of channel objects
  // presences? *	array of partial presence update objects
  // max_presences?	?integer
  // max_members?	integer
  // vanity_url_code	?string
  // description	?string
  // banner	?string
  // premium_tier	integer
  // premium_subscription_count?	integer
  // preferred_locale	string
  // public_updates_channel_id	?snowflake
  // max_video_channel_users?	integer
  // approximate_member_count?	integer
  // approximate_presence_count?	integer
  // welcome_screen?	welcome screen object
  // nsfw_level	integer
  // stage_instances? *	array of stage instance objects
  // stickers?	array of sticker objects
}
