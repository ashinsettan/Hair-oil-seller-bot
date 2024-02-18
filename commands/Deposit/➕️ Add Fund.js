/*CMD
  command: ➕️ Add Fund
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Deposit

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /deposit
  group: 
CMD*/

if (request.data) {
  Api.editMessageMedia({
    chat_id: request.message.chat.id,
    message_id: request.message.message_id,
    media: {
      type: "photo",
      media: "https://telegra.ph/file/540ba5f677e3f367ed0f7.jpg",
      caption:
        "<b>👋 Welcome!</b>\nHere You Can Add Funds To Your Balance!\n\n<b>1INR = 1 💎</b>\n\n➕ Select Deposit Method. All deposits will be converted to <b>💎</b>\n\n<b>🤩 Offer Active »</b> Deposit through UPI!!",
      parse_mode: "html",
      disable_web_page_preview: true
    },
    reply_markup: {
      inline_keyboard: [[{ text: "🏧 UPI", callback_data: "/dpsub#2" }]]
    }
  })
} else {
  Api.sendPhoto({
    photo: "https://a.top4top.io/p_267313i0m1.jpg",
    caption:
      "<b>👋 Welcome!</b>\nHere You Can Add Funds To Your Balance!\n\n<b>1 INR = 1 💎</b>\n\n➕ Select Deposit Method. All deposits will be converted to <b>💎</b>\n\n<b>🤩 Offer Active »</b> Deposit through UPI!!",
    parse_mode: "html",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: [[{ text: "🏧 UPI", callback_data: "/dpsub#2" }]]
    }
  })
}
