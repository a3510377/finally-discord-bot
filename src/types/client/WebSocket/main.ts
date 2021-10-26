import { ArrayKey } from "../../util/fun";

/** https://discord.com/developers/docs/topics/gateway#commands-and-events-gateway-events */
export const WSEvents = ArrayKey([
  "HELLO",
  "READY",
  "RESUMED",
  "RECONNECT",
  "INVALID_SESSION",
  "CHANNEL_CREATE",
  "CHANNEL_UPDATE",
  "CHANNEL_DELETE",
  "CHANNEL_PINS_UPDATE",
  "THREAD_CREATE",
  "THREAD_UPDATE",
  "THREAD_DELETE",
  "THREAD_LIST_SYNC",
  "THREAD_MEMBER_UPDATE",
  "THREAD_MEMBERS_UPDATE",
  "GUILD_CREATE",
  "GUILD_UPDATE",
  "GUILD_DELETE",
  "GUILD_BAN_ADD",
  "GUILD_BAN_REMOVE",
  "GUILD_EMOJIS_UPDATE",
  "GUILD_STICKERS_UPDATE",
  "GUILD_INTEGRATIONS_UPDATE",
  "GUILD_MEMBER_ADD",
  "GUILD_MEMBER_REMOVE",
  "GUILD_MEMBER_UPDATE",
  "GUILD_MEMBERS_CHUNK",
  "GUILD_ROLE_CREATE",
  "GUILD_ROLE_UPDATE",
  "GUILD_ROLE_DELETE",
  "INTEGRATION_CREATE",
  "INTEGRATION_UPDATE",
  "INTEGRATION_DELETE",
  "INTERACTION_CREATE",
  "INVITE_CREATE",
  "INVITE_DELETE",
  "MESSAGE_CREATE",
  "MESSAGE_UPDATE",
  "MESSAGE_DELETE",
  "MESSAGE_DELETE_BULK",
  "MESSAGE_REACTION_ADD",
  "MESSAGE_REACTION_REMOVE",
  "MESSAGE_REACTION_REMOVE_ALL",
  "MESSAGE_REACTION_REMOVE_EMOJI",
  "PRESENCE_UPDATE",
  "STAGE_INSTANCE_CREATE",
  "STAGE_INSTANCE_DELETE",
  "STAGE_INSTANCE_UPDATE",
  "TYPING_START",
  "USER_UPDATE",
  "VOICE_STATE_UPDATE",
  "VOICE_SERVER_UPDATE",
  "WEBHOOKS_UPDATE",
]);

/** https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-close-event-codes */
export const WsCodes: { [key: number]: string } = {
  4000: "未知錯誤",
  4001: "未知操作碼",
  4002: "解碼錯誤",
  4003: "未認證",
  4004: "認證失敗",
  4005: "通過身分認證",
  4007: "無效 seq",
  4008: "限速",
  4009: "超時",
  4010: "無效分片",
  4011: "需要分片",
  4012: "API本版錯誤",
  4013: "權限格式錯誤",
  4014: "無權限",
};

/** https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-opcodes */
export const OpCodes = {
  DISPATCH: 0,
  HEARTBEAT: 1,
  IDENTIFY: 2,
  STATUS_UPDATE: 3,
  VOICE_STATE_UPDATE: 4,
  VOICE_GUILD_PING: 5,
  RESUME: 6,
  RECONNECT: 7,
  REQUEST_GUILD_MEMBERS: 8,
  INVALID_SESSION: 9,
  HELLO: 10,
  HEARTBEAT_ACK: 11,
};
