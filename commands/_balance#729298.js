/*CMD
  command: /balance#729298
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var deposit = Libs.ResourcesLib.userRes("deposit")
var lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get();
Bot.sendMessage("*🤴 User : "+user.first_name+"\n\n💰 deposit : "+deposit.value().toFixed(2)+" $INR\n\n⚜️Refer And Earn More*")
