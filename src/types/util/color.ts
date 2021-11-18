import { random as utilRandom } from "./util";

export class Color {
  value: number;
  constructor(value: number) {
    this.value = value;
  }

  /* protected */
  protected _getByte(byte: number): number {
    return (this.value >> (8 * byte)) & 0xff;
  }

  /* public */
  public get r(): number {
    return this._getByte(2);
  }
  public get g(): number {
    return this._getByte(1);
  }
  public get b(): number {
    return this._getByte(0);
  }
  public get RGB() {
    return Object.freeze([this.r, this.g, this.b]);
  }
  public toString(): string {
    return `#${Color.fromRGB(this.r, this.g, this.b).toString(16)}`;
  }

  /* static */
  static random(): number {
    let _ = () => utilRandom(255, 0);
    return this.fromRGB(_(), _(), _());
  }
  static fromRGB(r: number, g: number, b: number): number {
    return (r << 16) + (g << 8) + b;
  }
  static DEFAULT = 0x000000;
  static WHITE = 0xffffff;
  static AQUA = 0x1abc9c;
  static GREEN = 0x57f287;
  static BLUE = 0x3498db;
  static YELLOW = 0xfee75c;
  static PURPLE = 0x9b59b6;
  static LUMINOUS_VIVID_PINK = 0xe91e63;
  static FUCHSIA = 0xeb459e;
  static GOLD = 0xf1c40f;
  static ORANGE = 0xe67e22;
  static RED = 0xed4245;
  static GREY = 0x95a5a6;
  static NAVY = 0x34495e;
  static DARK_AQUA = 0x11806a;
  static DARK_GREEN = 0x1f8b4c;
  static DARK_BLUE = 0x206694;
  static DARK_PURPLE = 0x71368a;
  static DARK_VIVID_PINK = 0xad1457;
  static DARK_GOLD = 0xc27c0e;
  static DARK_ORANGE = 0xa84300;
  static DARK_RED = 0x992d22;
  static DARK_GREY = 0x979c9f;
  static DARKER_GREY = 0x7f8c8d;
  static LIGHT_GREY = 0xbcc0c0;
  static DARK_NAVY = 0x2c3e50;
  static BLURPLE = 0x5865f2;
  static GREYPLE = 0x99aab5;
  static DARK_BUT_NOT_BLACK = 0x2c2f33;
  static NOT_QUITE_BLACK = 0x23272a;
}
