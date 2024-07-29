const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_30_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDAsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTksXG4gICAgICAgIDg2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODMsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDksXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDcsXG4gICAgICAgIDkyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAzNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDY1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjAzLFxuICAgICAgICA1OCxcbiAgICAgICAgMjIwLFxuICAgICAgICA5MixcbiAgICAgICAgNjgsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDc0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTMsXG4gICAgICAgIDkwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjksXG4gICAgICAgIDExLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxMixcbiAgICAgICAgODgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTY4LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTcsXG4gICAgICAgIDI3LFxuICAgICAgICA5MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM3LFxuICAgICAgICA4NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMyxcbiAgICAgICAgMjUxLFxuICAgICAgICA0MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4LFxuICAgICAgICA4MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3LFxuICAgICAgICA2NixcbiAgICAgICAgNDcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTE3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTg1LFxuICAgICAgICA1OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTIzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTc2LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjIwLFxuICAgICAgICA1NixcbiAgICAgICAgOTQsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzksXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDcwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOSxcbiAgICAgICAgNixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDM3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMixcbiAgICAgICAgOTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjM3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDksXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDcxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAwLFxuICAgICAgICAxODQsXG4gICAgICAgIDMyLFxuICAgICAgICA5NixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDkyLFxuICAgICAgICA1MixcbiAgICAgICAgMTE2LFxuICAgICAgICA0MixcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibEpRU21FZ0JkNlV4NzN0cWNLbElML1ZzWWRVQkRJa0ZETllCbGExVmJDcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc2OTIyMTMyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMjA2MUQyODM0MUY4QUMzNTZBMzM2ODYwMjhDQjQ0ODdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMjgxMzk2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTQ3NjkyMjEzMjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkM5MzBENjY5M0U4RUNGQ0Y3QjFCQkVEOUEwMEEzNjZCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjI4MTM5NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJTaEhxMEdXMFRpMkZvb1BGYVhsdnVnXCIsXG4gIFwicGhvbmVJZFwiOiBcImJkMjg4OTgzLTIzNGYtNDU0MS05ZmM2LTg1MDBkOTdlODg2ZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MixcbiAgICAgIDk1LFxuICAgICAgMjIwLFxuICAgICAgOTIsXG4gICAgICA0NixcbiAgICAgIDU1LFxuICAgICAgNTIsXG4gICAgICAxMjYsXG4gICAgICAyMTEsXG4gICAgICA2NixcbiAgICAgIDE4NixcbiAgICAgIDE5MSxcbiAgICAgIDIxMyxcbiAgICAgIDU3LFxuICAgICAgMTQ5LFxuICAgICAgMjA1LFxuICAgICAgMjM4LFxuICAgICAgMjE0LFxuICAgICAgNyxcbiAgICAgIDE5MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3OSxcbiAgICAgIDE1NCxcbiAgICAgIDIxNSxcbiAgICAgIDE1MCxcbiAgICAgIDEwNyxcbiAgICAgIDc3LFxuICAgICAgMjIwLFxuICAgICAgMjA3LFxuICAgICAgMTg3LFxuICAgICAgMTksXG4gICAgICAxMTUsXG4gICAgICAxNzIsXG4gICAgICA2OSxcbiAgICAgIDI0NCxcbiAgICAgIDIyNyxcbiAgICAgIDIwMSxcbiAgICAgIDEzNyxcbiAgICAgIDkwLFxuICAgICAgMjM4LFxuICAgICAgNjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSjg4S1RGVkdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzY5MjIxMzI3OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIyODcyODk2OTk0NTE1MzoyQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIvCfkbtcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJSHV2UlFRcTl1ZnRRWVlBaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkdBUXZJZ1NmQkVWTlltZFdiZUw4MlFLeTh4YkNpMlFsTG5YMUJkZTc1MkE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZ1F3V3l4SWN0d01jQTBmQjhsaUFMNCtuRStsbXlzZWsyMnJWd3Nmb1dCMnJteXZmTnhQNUg2aThLcWxwWVBkNS9CWW5KeWN4ZXI5UHdsdlBrMVRDRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYmU5dU5pYUZaQ1VJbWIyY255eEd4S0VxMzJ3aHNxc2M5Tld1QkZSMG14MXJ6N1hScUYzb3hiYXZqUUowbnIrWFMvblNzZVdQK2NVYldqYXNRUXpMQWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NjkyMjEzMjc6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjI4MTM5MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVIK1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRUgrLmpzb24iOiAie1wia2V5RGF0YVwiOlwieW5oQjB1MUtOU2piWGFjZFdyeW8rYmxDRDVaTDVGVjd4RlJoQ2tUQnBuND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0Mjk1NjU0NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyMjY1MzYwNjQ5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
