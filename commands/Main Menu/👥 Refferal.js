/*CMD
  command: 👥 Refferal
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Main Menu

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var perref = "0" // Amount User Gets Per Refer
let stat = Bot.getProperty("" + user.telegramid + "?Ban")

if (stat == "ban") {
  Bot.sendMessage("*You're Banned From Using The Bot ❌*")
  return
}

let invLink = Libs.ReferralLib.currentUser.getRefLink("" + bot.name + "", "Bot")
Api.sendMessage({
  text:
    "<b>🙌🏻 Total Refers = " +
    Libs.ReferralLib.getRefCount() +
    " User(s) \n\n🙌🏻 Your Invite Link = " +
    invLink +
    "\n\n🪢 invite others to get a chance for free gift's </b>",
  parse_mode: "html",
  disable_web_page_preview: true
})
