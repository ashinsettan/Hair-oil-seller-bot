/*CMD
  command: /onOrder
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Main Menu
  answer: Your order was placed we will contact you.

  <<KEYBOARD

  KEYBOARD
  aliases: confirm 🟢
  group: 
CMD*/

if(User.getProperty("prsInfo") == "250ml"){
  var btlSize = "250ml";
  var price = "230";
  var priceNum = parseInt(price);
} else {
  var btlSize = "100ml";
  var price = "90";
  var priceNum = parseInt(price);
}

Bot.runCommand("menu");

function generateRandomString(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const totalSell = Libs.ResourcesLib.anotherChatRes("totalSell", "SSTR"); // change "totalPurchase" to "totalSell"
totalSell.add(1); // add the price of the current order to totalSell

const totalPurchase = Libs.ResourcesLib.anotherChatRes("totalPurchase", "SSTR");
totalPurchase.add(priceNum); // add the price of the current order to totalPurchase

const invoiceID = generateRandomString(8);
const phone = User.getProperty("phone");
const address = User.getProperty("address");

Bot.sendMessage("✅️ Your order request has been submitted!\n\n*ℹ️ Order Information*• ━━━━━━━━━━━━━━━━━ •\n*◼️ Quantity: "+btlSize+"* \n*◻️ Price:* "+price+"₹\n◼️ *Phone Number:* "+phone+"\n◻️ *Shipping Address:* "+address+"\n◼️ *Order ID:* "+invoiceID);

Api.sendMessage({
  chat_id: "@checkorderstatusoilsp19",
  text:
    "*✅ New Order Notification*\n• ━━━━━━━━━━━━━━━━━ •\n〽️*Product:* "+btlSize+" oil \n*◼️Price:* "+price+"₹\n*◻️ Name:* " + user.first_name + " " + user.last_name +
    "\n*◼️ Username:* @" + user.username +
    "\n*◻️ Phone Number:* " +phone.slice(0, -5) + "XXXXX"+
    "\n*◼️ Shipping Address:* " +address+
    "\n*◻️ Order ID:* " +invoiceID,
  reply_markup: JSON.stringify({
    inline_keyboard: [[
      { text: "👤 Customer", url: "tg://user?id=" + user.telegramid }
    ],
    [{ text: "📳 whatsapp", url: "https://api.whatsapp.com/send?phone=" +phone+"&text=hai" }]]
  }),
  parse_mode: "Markdown"
})
    
Api.sendMessage({
  chat_id: "@checkorderstatusoilsp19",
  text:
    "*✅ New Order Notification*\n• ━━━━━━━━━━━━━━━━━ •\n〽️*Product Title:* Example Premium Clothes.\n*◻️ Name:* " + user.first_name + " " + user.last_name +
    "\n*◼️ Username:* @" + user.username +
    "\n*◻️ Phone Number:* " +phone+
    "\n*◼️ Shipping Address:* " +address+
    "\n*◻️ Invoice ID:* " +invoiceID,
  reply_markup: JSON.stringify({
    inline_keyboard: [[
      { text: "❌ Reject Order", callback_data: "/rejOrder "+invoiceID+" "+chat.chatid },{ text:"✅ Order Done", callback_data: "/comOrder "+invoiceID }
        ]]
      }),
      parse_mode: "Markdown"
    })
  

Bot.setProperty("phone"+invoiceID,phone.slice(0, -5) + "XXXXX","text");
Bot.setProperty("quantity"+invoiceID,btlSize,"text");
Bot.setProperty("price"+invoiceID,price,"text");
