("⦓⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡⦔");
/* 
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
("⦓⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡⦔");
process.env.YTDL_NO_UPDATE = "0";
process.env.SPDL_NO_UPDATE = "0";
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
require("events").EventEmitter.prototype._maxListeners = 0;
import makeWASocket, {
DisconnectReason,
makeInMemoryStore,
WASocket,
} from "@adiwajshing/baileys";
import fs from "fs";
import Kolor from "chalk";
import { join } from "path";
import Vmangos from "mongoose";
import Pot, { Logger } from "pino";
import ʟᴀʏᴏᴜᴛ from "./𝐕𝐥𝐤𝐲𝐫𝐞🀄𝐕𝐞𝐧𝐭/ʟᴀʏᴏᴜᴛ";
import { Sequelize } from "sequelize/types";
import Command from "./𝐕𝐥𝐤𝐲𝐫𝐞⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/command";
import useRemoteFileAuthState from "./𝐕𝐥𝐤𝐲𝐫𝐞⚜️𝐊𝐫𝐲𝐨𝐓𝐞𝐤/dbAuth";
import messages_upsert from "./𝐕𝐥𝐤𝐲𝐫𝐞💥𝐄𝐯𝐞𝐧𝐭𝐬/messages_upsert";
import connection_update from "./𝐕𝐥𝐤𝐲𝐫𝐞💥𝐄𝐯𝐞𝐧𝐭𝐬/connection_update";
import participants_update from "./𝐕𝐥𝐤𝐲𝐫𝐞💥𝐄𝐯𝐞𝐧𝐭𝐬/participants_update";
// ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
const UserPrivate = require(`./𝐕𝐥𝐤𝐲𝐫𝐞✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/private`);
const Welcome = require(`./𝐕𝐥𝐤𝐲𝐫𝐞✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/setwelcome`);
const LinkList = require(`./𝐕𝐥𝐤𝐲𝐫𝐞✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/antilink`);
const DebugList = require(`./𝐕𝐥𝐤𝐲𝐫𝐞✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/debug`);
const Ranker = require(`./𝐕𝐥𝐤𝐲𝐫𝐞✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/autorank`);
const Pokemon = require(`./𝐕𝐥𝐤𝐲𝐫𝐞✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/pokemon`);
const Economy = require(`./𝐕𝐥𝐤𝐲𝐫𝐞✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/economy`);
const NsfwList = require(`./𝐕𝐥𝐤𝐲𝐫𝐞✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/nsfw`);
const BanPerson = require(`./𝐕𝐥𝐤𝐲𝐫𝐞✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/ban`);
const BanGroup = require(`./𝐕𝐥𝐤𝐲𝐫𝐞✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/ban`);
const Zygote = require(`./𝐕𝐥𝐤𝐲𝐫𝐞✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/zygote`);
const Bagde = require(`./𝐕𝐥𝐤𝐲𝐫𝐞✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/badge`);
const Halt = require(`./𝐕𝐥𝐤𝐲𝐫𝐞✈️𝐂𝐨𝐧𝐧𝐞𝐜𝐭/🍃mongo/halt`);
// ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
const sequelize: Sequelize = ʟᴀʏᴏᴜᴛ.DATABASE;
const logger: Logger = Pot({
timestamp: () => `,"time":"${new Date().toJSON()}"`,
}).child({});
logger.level = "error";
var ӄ = makeInMemoryStore({ logger });
ӄ?.readFromFile("./𝕶𝖗𝖆𝖐𝖎𝖓𝖟𝕷𝖆𝖇®/Vʟӄʏʀɛ.json");
setInterval(() => {
ӄ?.writeToFile("./𝕶𝖗𝖆𝖐𝖎𝖓𝖟𝕷𝖆𝖇®/Vʟӄʏʀɛ.json");
}, 10_000);
// ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
(async (): Promise<void> => {
await sequelize.authenticate().catch((error) => {
console.log(Kolor.red(`❌𝐄𝐫𝐫𝐨𝐫: ${error}`));
process.exit(0);
});
await sequelize.sync().catch((error) => {
console.log(Kolor.red(`❌𝐄𝐫𝐫𝐨𝐫: ${error}`));
process.exit(0);
});
await Vmangos.connect(ʟᴀʏᴏᴜᴛ.VMango, {
useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,
useFindAndModify: false,
}).catch((error) => {
console.log(Kolor.red(`❌𝐄𝐫𝐫𝐨𝐫: ${error}`));
process.exit(0);
});
console.log(
Kolor.green(
"(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! "
)
);
// ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
let commandHandler: Map<string, Command> = new Map();
let Folders: string[] = fs.readdirSync(join(__dirname, "𝐕𝐥𝐤𝐲𝐫𝐞☣️𝐑𝐞𝐚𝐜𝐭𝐨𝐫"));
for (const Files of Folders) {
const AllFiles = fs
.readdirSync(join(__dirname, `./𝐕𝐥𝐤𝐲𝐫𝐞☣️𝐑𝐞𝐚𝐜𝐭𝐨𝐫/${Files}`))
.filter((File) => File.endsWith(`.js`));
for (const File of AllFiles) {
const command = require(`./𝐕𝐥𝐤𝐲𝐫𝐞☣️𝐑𝐞𝐚𝐜𝐭𝐨𝐫/${Files}/${File}`);
try {
commandHandler.set(command.name, command);
if (ʟᴀʏᴏᴜᴛ.Heroku_App === undefined) {
console.log(
Kolor.green(Files + ":   ") +
Kolor.blue(File.toLocaleUpperCase() + " ✔️")
);
}
} catch (error) {
console.log(
Kolor.red("❌𝐄𝐫𝐫𝐨𝐫: " + error + " | ") +
Kolor.green(Files + " :") +
Kolor.blue(File)
);
continue;
}
}
}
// ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
const { state, saveCreds } = await useRemoteFileAuthState(logger);
const InitApi = async () => {
const ӄ𝖗𝖞ӄ𝖓𝖟: WASocket = makeWASocket({
logger,
printQRInTerminal: true,
auth: state,
browser: ["Vlkyre", "Chrome", "4.0.0"],
getMessage: async (key) => {
return {};
},
});
// ⦓═════════════════════════════════「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」        ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™    「 𝐕𝐥𝐤𝐲𝐫𝐞 𝐀𝐩𝐢®」═════════════════════════════════⦔
ӄ?.bind(ӄ𝖗𝖞ӄ𝖓𝖟.ev);
ӄ𝖗𝖞ӄ𝖓𝖟.ev.on("group-participants.update", async (update) => {
participants_update.participants_update(update, ӄ𝖗𝖞ӄ𝖓𝖟);
});
ӄ𝖗𝖞ӄ𝖓𝖟.ev.on("connection.update", async (update) => {
connection_update.connection_update(
update,
DisconnectReason,
InitApi,
ӄ𝖗𝖞ӄ𝖓𝖟
);
});
ӄ𝖗𝖞ӄ𝖓𝖟.ev.on("messages.upsert", async (update) => {
messages_upsert.messages_upsert(update, ӄ𝖗𝖞ӄ𝖓𝖟, commandHandler, ӄ);
});
ӄ𝖗𝖞ӄ𝖓𝖟.ev.on("creds.update", (Re_Auth) => {
saveCreds(Re_Auth);
});
return ӄ𝖗𝖞ӄ𝖓𝖟;
};
InitApi().catch((error) => console.log(Kolor.red(error)));
})().catch((error) => console.log(Kolor.red(error)));
("⦓⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡⦔");
/* 
(𝐜)𝐕𝐥𝐤𝐲𝐫𝐞 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬! 
*/
("⦓⬡════════════════════════════════════════════|❝ Ⓒ𝐕𝐥𝐤𝐲𝐫𝐞 ☊ ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋʀᴀᴋɪɴᴢʟᴀʙ™ ❞|═══════════════════════════════════════════⬡⦔");
