/*CMD
  command: /rejOrder
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Track Order

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if(request.data){
  var message_id = request.message.message_id;
  var chat_id = request.message.chat.id;

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  });
}

const [orderID, userId] = params.split` `.map((v,i)=>i?+v:v)

Api.sendMessage({
  chat_id: userId,
  text:
    "Your order has been rejected. Please place a new order right now!!",
  reply_markup: JSON.stringify({
    inline_keyboard: [[
      { text:"🔁 Reply Admin", callback_data: "/reply "+chat.chatid }
        ]]
      }),
      parse_mode: "Markdown"
    })
   
Bot.sendMessage("❌ Order Rejected Successfully\n*Order ID:* "+orderID)
Bot.setProperty(orderID,"Rejected")
