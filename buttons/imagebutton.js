//  ╔◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
//  ║⧉༻ 🤖𝐖𝐡𝐚𝐭𝐬𝐁𝐨𝐭🕊️𝐌𝐮𝐥𝐭𝐢-𝐃𝐞𝐯𝐢𝐜𝐞🤖
//  ║  𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞 - 𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧, 𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟐𝟎𝟎++ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!
//  ║
//  ║🌟 A versatile WhatsApp multi-purpose bot designed for group management and user convenience.
//  ║🚀 Simplifies group management tasks and enhances the overall user experience.
//  ║⚠️ Please note: Engaging in spamming activities may lead to account suspension. Use responsibly!
//  ║🎉 whatsbot is intended for fun and convenience, but we're not responsible for account bans.
//  ║🔀 forking the repository is allowed, but customized versions or modified plugins are unsupported.
//  ║⚠️ Exercise caution and take responsibility for any modifications made to the bot.
//  ║📞 Need assistance or have issues? Contact our developers at +918436686758 and +918250889325.
//  ║🔄 We'll continue providing updates and support for the original version of the bot.
//  ║👉 Enjoy the features and functionality of whatsbot responsibly! Make the most out of your
//  ║   WhatsApp group management experience! 🎉
//  ║
//  ║🐞 Developers: +918436686758, +918250889325
//  ╚◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱"
module.exports = async (whatsbot, whatschat, 𝚌𝚘𝚗𝚝є𝚡𝚝, imåge) => {
  if (whatsbot.isReply) {
    var receiver =
      whatsbot.mtype == "extendedTextMessage" &&
      whatsbot.message.extendedTextMessage.contextInfo != null
        ? whatsbot.message.extendedTextMessage.contextInfo.participant || ""
        : "";
    await whatsbot.sendMessage(
      whatschat.chat,
      {
        image: { url: imåge },
        caption: `*📢Id:* ${whatschat.chat}
${𝚌𝚘𝚗𝚝є𝚡𝚝}`,
        footer: "*whatsbot by magneum*\n*💻HomePage:* https://bit.ly/magneum",
        buttons: [
          {
            buttonId: `${whatsbot.prefix}Dashboard`,
            buttonText: { displayText: `${whatsbot.prefix}Dashboard` },
            type: 1,
          },
          {
            buttonId: `${whatsbot.prefix}Help`,
            buttonText: { displayText: `${whatsbot.prefix}Help` },
            type: 1,
          },
        ],
        headerType: 4,
        mentions: [whatschat.sender, receiver],
      },
      {
        contextInfo: { mentionedJid: [whatschat.sender, receiver] },
        quoted: whatschat,
      }
    ).catch((e) => console.log(e));
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  } else if (whatsbot.mentionByTag) {
    var receiver =
      whatsbot.mtype == "extendedTextMessage" &&
      whatsbot.message.extendedTextMessage.contextInfo != null
        ? whatsbot.message.extendedTextMessage.contextInfo.mentionedJid
        : [];
    await whatsbot.sendMessage(
      whatschat.chat,
      {
        image: { url: imåge },
        caption: `*📢Id:* ${whatschat.chat}
${𝚌𝚘𝚗𝚝є𝚡𝚝}`,
        footer: "*whatsbot by magneum*\n*💻HomePage:* https://bit.ly/magneum",
        buttons: [
          {
            buttonId: `${whatsbot.prefix}Dashboard`,
            buttonText: { displayText: `${whatsbot.prefix}Dashboard` },
            type: 1,
          },
          {
            buttonId: `${whatsbot.prefix}Help`,
            buttonText: { displayText: `${whatsbot.prefix}Help` },
            type: 1,
          },
        ],
        headerType: 4,
        mentions: [whatschat.sender, receiver],
      },
      {
        contextInfo: { mentionedJid: [whatschat.sender, receiver] },
        quoted: whatschat,
      }
    ).catch((e) => console.log(e));
    ("◎☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱[ whatsbot by magneum ]☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱☱◎");
  } else {
    return await whatsbot.sendMessage(
      whatschat.chat,
      {
        image: { url: imåge },
        caption: `*📢Id:* ${whatschat.chat}
${𝚌𝚘𝚗𝚝є𝚡𝚝}`,
        footer: "*whatsbot by magneum*\n*💻HomePage:* https://bit.ly/magneum",
        buttons: [
          {
            buttonId: `${whatsbot.prefix}Dashboard`,
            buttonText: { displayText: `${whatsbot.prefix}Dashboard` },
            type: 1,
          },
          {
            buttonId: `${whatsbot.prefix}Help`,
            buttonText: { displayText: `${whatsbot.prefix}Help` },
            type: 1,
          },
        ],
        headerType: 4,
        mentions: [whatschat.sender],
      },
      {
        contextInfo: { mentionedJid: [whatschat.sender] },
        quoted: whatschat,
      }
    ).catch((e) => console.log(e));
  }
};
