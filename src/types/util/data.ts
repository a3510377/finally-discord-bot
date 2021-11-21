export const APIVersion: number = 9;
function t(v: number) {
  return `https://rear-end-1.a102009102009.repl.co/api/discord/v1/?v=${
    v || APIVersion
  }&url=`;
}

export const urls = {
  image: "https://cdn.discordapp.com/",
};
