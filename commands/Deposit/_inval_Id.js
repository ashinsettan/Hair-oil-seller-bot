/*CMD
  command: /inval_Id
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
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}

var transetion = User.getProperty("transetion")

const [orderId, userId] = params.split .map((v, i) => (i ? +v : v))

Api.sendMessage({
  chat_id: userId,
  text: "❌ Wrong Transetion ID: " + transetion
})

Bot.sendMessage("*✅ Invalid ID Message Successfully Sent.*")
