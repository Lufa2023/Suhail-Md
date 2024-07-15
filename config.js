const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://lufa:lufa@cluster0.8av8jar.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Kolkata";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/lufa-official/Jessi-md/blob/main/Assets/50c65d1da9af7322cbbc79074ec7cc26.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʟᴜꜰᴀ ᴍᴏᴅꜱ" 


global.devs = "94775688597" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94775688597";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_07_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTkwLFxuICAgICAgICA0NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAzNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTY5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDMwLFxuICAgICAgICAzNixcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDYxLFxuICAgICAgICA0MixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDgsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjksXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDM0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDMwLFxuICAgICAgICA3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDksXG4gICAgICAgIDExNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDY0LFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxLFxuICAgICAgICA0OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgODgsXG4gICAgICAgIDc5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI2LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzcsXG4gICAgICAgIDM5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQxLFxuICAgICAgICAzNixcbiAgICAgICAgMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDczLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTMyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTg5LFxuICAgICAgICA1NSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjksXG4gICAgICAgIDE3NixcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDk0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzAsXG4gICAgICAgIDQ1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjAwLFxuICAgICAgICA3MCxcbiAgICAgICAgOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEsXG4gICAgICAgIDU2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTM4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjEsXG4gICAgICAgIDg1LFxuICAgICAgICA0MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjExLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTk3LFxuICAgICAgICA1MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODUsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDQsXG4gICAgICAgIDIsXG4gICAgICAgIDMxLFxuICAgICAgICAxOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTAzLFxuICAgICAgICAxODAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjExLFxuICAgICAgICAyOCxcbiAgICAgICAgNixcbiAgICAgICAgMTkyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTc4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjA2LFxuICAgICAgICA5NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjI3LFxuICAgICAgICA3MyxcbiAgICAgICAgMzksXG4gICAgICAgIDExNixcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDk2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE3LFxuICBcImFkdlNlY3JldEtleVwiOiBcImJlOUtHMmIyUnMzWFlna3dmbnZmYkFmOUF4QkdORUY3L002RWdFcW9nVFk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImdxWUpZTkI3U19LbDJMMzdQem8zREFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTYxNmY3MmMtMjlkYy00OWI2LTliNGEtNjZjMmFiMjQzY2YwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNyxcbiAgICAgIDQ0LFxuICAgICAgMjAxLFxuICAgICAgNzQsXG4gICAgICA1MSxcbiAgICAgIDI0NixcbiAgICAgIDIzNSxcbiAgICAgIDE0NSxcbiAgICAgIDExMSxcbiAgICAgIDIzMixcbiAgICAgIDgwLFxuICAgICAgNyxcbiAgICAgIDE1NixcbiAgICAgIDIxMixcbiAgICAgIDEyNyxcbiAgICAgIDE0NixcbiAgICAgIDc0LFxuICAgICAgMjQ1LFxuICAgICAgMTQ5LFxuICAgICAgNzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIxLFxuICAgICAgMTgzLFxuICAgICAgMzYsXG4gICAgICAxNTEsXG4gICAgICAyNTIsXG4gICAgICAxMjksXG4gICAgICAxMDIsXG4gICAgICAyMDAsXG4gICAgICA0MixcbiAgICAgIDI1NSxcbiAgICAgIDE4NixcbiAgICAgIDEzMixcbiAgICAgIDE2NCxcbiAgICAgIDIyOCxcbiAgICAgIDE2LFxuICAgICAgNjIsXG4gICAgICAyMTMsXG4gICAgICA5LFxuICAgICAgMTYxLFxuICAgICAgMTI2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlMzOVM5U1ZIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc3NTY4ODU5NzozM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjIxOTYwMDUxMTM4NzEyOjMzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ08yZm9OVUJFSTIrMUxRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiODZKMEpremdQbTlibkh6bWZOU0ZlVXRIbm1WeG1BWldzUDVDS04zNGRIVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJYYXA3MFg5VVU4dFdRSSs3Tk95aTcrbTlpWEczaktub2hNSHl5N09rcmJ3UHdvcWY4ZTQ2SkJuWHBkMHNEYzA4S0RMTlZCUHVaa2liRGlmZWpjVmhCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJpdzBya1JoYVNoOW5sMTBIc1RmU0FKbFJXazlESDJucEhQeXNwUGQ1VEllc291MXRxZm9hamxGNXFoTVJJT0Q3UmlkVmdScUFqdlpDOGVJYXVjUExqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc3NTY4ODU5NzozM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEwNDg4NDgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNN3FcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU03cS5qc29uIjogIntcImtleURhdGFcIjpcInBTWEZjbG5UU1BvT1UxcXM0aVVMMDF6ejhmelJHYjVwcy9pUHFVYXp4T1k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDQ3MjIxNzQwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "ʟᴜꜰᴀ ʙᴏᴛ",
  ownername:process.env.OWNER_NAME|| "𝐗𝐗𝐗 𝐋𝐔𝐅𝐀",


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
