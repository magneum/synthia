const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const UltronSitreper = require(`../../ʊʟȶʀօռ/UltronSitreper`);
const anime = require("anime-actions");
module.exports = {
  name: `yes`,
  description: `	I know you like anime yes`,
  ƈʏɮօʀɢʍօʀɛ: `
	I know you like anime yes`,
  async handle(υℓтяσηℓιєηт, chat, ʊʟȶʀօռ, args) {
    try {
      await υℓтяσηℓιєηт.sendMessage(
        ʊʟȶʀօռ.chatId,
        {
          url: await anime.yes(),
        },
        MessageType.image,
        {
          mimetype: Mimetype.jpeg,
          caption: `*☢️ƈʏɮօʀɢ ⧴ ᴜꜱᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ᴛʜᴇ ᴀᴅᴠᴀɴᴄᴇ ᴡᴀʏ!*

Genre: Anime-Conversation
NSFW: No`,
        }
      );
    } catch (err) {
      console.log(err);
    }
  },
};
