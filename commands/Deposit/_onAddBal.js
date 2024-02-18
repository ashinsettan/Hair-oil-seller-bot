/*CMD
  command: /onAddBal
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Deposit

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var transetion = User.getProperty("transetion")
var amount = User.getProperty("amount")
// Define a function to generate a random TrxID
function generateTrxID(length) {
  // Define the possible characters that can be used in the TrxID
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

  let trxID = ""
  // Loop through the length of the desired TrxID and add a random character each time
  for (let i = 0; i < length; i++) {
    trxID += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return trxID
}

// Call the function with the desired length of the TrxID
const trxID = generateTrxID(14)

//Add Another User Balance
var tgid = User.getProperty("userId")
var adminid = "5669792010"
if (user.telegramid == adminid) {
  let deposit = Libs.ResourcesLib.anotherUserRes("deposit", tgid)
  deposit.add(parseFloat(message))
  Bot.sendMessage(
  "*Amount " +
    message +
    "₹ has been added to the User ID:* " +
    tgid +
    "\n*Depositer: *@" +
    user.username +
    "\n*Order ID:* " +
    trxID +
    "\n*Transetion ID:* " +
    transetion +
    "\n*Time: " +
    new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }) +
    "*\n\n*👤 User Total Balance:* " +
    deposit.value().toFixed(2) +
    ""
);
  Api.sendPhoto({
    chat_id: tgid,
    photo: "https://t.me/documentsandalluploader/74",
    caption:
      "*♻️ Your deposit arrived \n\nYou have received: " +
      message +
      ".00₹ \nDepositer: " +
      user.first_name +
      "\nBalance: " +
      deposit.value().toFixed(2) +
      "\nOrder ID: *" +
      trxID +
      "*\nTransetion ID: "+
      transetion +
      "\nTime: " +
      new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }) +
      "*\n\n",
    reply_markup: {
      inline_keyboard: [
        [{ text: "💸 Check Balance", callback_data: "account" }]
      ]
    },
    parse_mode: "Markdown"
  })
} else {
  Bot.sendMessage("❌Access Denied")
}
