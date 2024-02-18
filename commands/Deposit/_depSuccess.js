/*CMD
  command: /depSuccess
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Deposit

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (request.data) {
  Api.editMessageMedia({
    chat_id: request.message.chat.id,
    message_id: request.message.message_id,
    media: {
      type: "photo",
      media: "https://telegra.ph/file/0d3cbb9f65d5d7b442552.jpg",
      caption: "<b>💜 Send Transaction Order ID</b>",
      parse_mode: "html",
      disable_web_page_preview: true
    },
    reply_markup: {
      inline_keyboard: [[{ text: "↩️ Back", callback_data: "/dpsub#2" }]]
    }
  })
  Bot.runCommand("/depRequest")
}
