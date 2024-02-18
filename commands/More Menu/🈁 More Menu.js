/*CMD
  command: 🈁 More Menu
  help: 
  need_reply: false
  auto_retry_time: 
  folder: More Menu

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

const button = "📊 Statistics,❤️ Rate Us\n🏆 Leaderboard,👥 Refferal,🔙Back";
Bot.sendKeyboard(button,"Hᴇʏᴀ! "+ user.first_name + " " + user.last_name +" Welcome to our "+bot.name+" ❤️")
