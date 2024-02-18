/*CMD
  command: /address#100
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 100ml ⚡️
  answer: 〽️ Set your shipping address:

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

User.setProperty("address", message);
var phone = User.getProperty("phone");
Bot.sendMessage("ℹ️* Your Address Information*\n• ━━━━━━━━━━━━━━━━━ •\n◻️ *Phone Number:* "+phone+"\n◼️ *Shipping Address:* "+message);
