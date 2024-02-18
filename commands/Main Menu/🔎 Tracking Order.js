/*CMD
  command: 🔎 Tracking Order
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Main Menu
  answer: Please Enter Your Tracking Code ⬇️

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var status = Bot.getProperty(message);
var onStatus, rem;

if (status === undefined) {
  onStatus = "Processing";
  rem = "1";
} else {
  onStatus = status;
  rem = "0";
}

var invoiceID = message;
var phone = Bot.getProperty("phone"+invoiceID);
var quantity = Bot.getProperty("quantity"+invoiceID);
var price = Bot.getProperty("price"+invoiceID);

if(phone){
  Bot.sendMessage("*🔎 Tracking Order Information*\n• ━━━━━━━━━━━━━━━━━ •\n 🆔* Order ID:* " + message + "\n\n*💹 Status:* " + onStatus + "\n\n*📱Phone:* " + phone + "\n\n*📦 Quantity:* " + quantity + "\n\n*💲Price:* " + price + " ₹\n\n⌛️* Remains:* " + rem+"\n• ━━━━━━━━━━━━━━━━━ •\n*⏰ Sever Time:* "+new Date().toLocaleString("en-US", {
  timeZone: "Asia/dhaka"
})+"\n• ━━━━━━━━━━━━━━━━━ •");
} else {
Bot.sendMessage("❌ Invalid Order ID");
}
