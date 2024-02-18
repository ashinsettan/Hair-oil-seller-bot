/*CMD
  command: /comOrder
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

Bot.sendMessage("✅ Order Completed Successfully\n*Order ID:* "+params)
Bot.setProperty(params,"Completed")
