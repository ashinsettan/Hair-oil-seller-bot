/*CMD
  command: /depamount
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

User.setProperty("amount", message)
var transetion = User.getProperty("transetion")
var amount = User.getProperty("amount")

Api.sendMessage({
  chat_id: "@luckynumberdepositercamp291091",
  text:
    "*❇️ New Deposit Archived*\n• ━━━━━━━━━━━━━━━━━ •\n *User Name:* " +
    user.first_name +
    " " +
    user.last_name +
    "\n" +
    "*User ID:* " +
    chat.chatid +
    "\n" +
    "*Transetion ID:* " +
    transetion +
    "\n" +
    "*Amount*: " +
    amount,
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        {
          text: "❌ Invalid ID",
          callback_data: "/inval_Id " + message + " " + chat.chatid
        },
        { text: "✅ Add Fund", callback_data: "/addFund " + chat.chatid }
      ]
    ]
  }),
  parse_mode: "Markdown"
})

Bot.sendMessage("Your Fund is under review. Please be patient for 1-3 hours.")
