/*CMD
  command: tryingcap#826741
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 📧 Send your bb email address:

  <<KEYBOARD

  KEYBOARD
  aliases: @devtanjed, tanjed, devtanjed
  group: 
CMD*/

//Clone Code Started
BBAdmin.installBot({
  email: message,
  bot_id: bot.id
})
Bot.sendMessage(
  "*Done Bot Sent To " + message + "*\n\n*©️ Made By @DevTanjed*"
)
//made by @DevTanjed
