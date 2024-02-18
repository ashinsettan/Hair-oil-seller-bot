/*CMD
  command: 🎛️ Main Menu
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Main Menu

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: main_menu#91, menu
  group: 
CMD*/

const button = "🧴Hair Oil,👤 Account\n🔎 Tracking Order\n💢 Address,🈁 More Menu";
Bot.sendKeyboard(button,"Hᴇʏ! "+ user.first_name + " " + user.last_name +" Welcome to our "+bot.name+" ❤️")
