import { ISO8601, DIS, snowflake } from "..";

/**User Structure 結構
 * @url https://discord.com/developers/docs/resources/user#user-object-user-structure
 */
export interface UserStructure {
  id: snowflake;
  username: string;
  discriminator: string;
  avatar: string | DIS;
  bot?: boolean;
  system?: boolean;
  mfa_enabled?: boolean;
  banner?: string | DIS;
  accent_color?: number | DIS;
  locale?: string;
  verified?: boolean;
  email?: string | DIS;
  flags?: number;
  premium_type?: number;
  public_flags?: number;
}
