/*CMD
  command: 📊 Statistics
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

var status = Libs.ResourcesLib.anotherChatRes("status", "global")
    .value()
    
      var totalSell = Libs.ResourcesLib.anotherChatRes("totalSell", "SSTR")
    .value()
    
    var totalPurchase = Libs.ResourcesLib.anotherChatRes("totalPurchase", "SSTR")
    .value()
    
Bot.sendMessage("*📊 Bot Statistics*\n• ━━━━━━━━━━━━━━━━━ •\n👤 *Total:* "+status+" Users\n\n🛒 *Total Sell:* "+totalSell+" Items\n\n🤑* Total Purchase:* "+totalPurchase+"₹\n• ━━━━━━━━━━━━━━━━━ •\n*⏰ Server Time:* "+new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka' })+"\n• ━━━━━━━━━━━━━━━━━ •");
