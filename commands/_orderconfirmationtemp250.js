/*CMD
  command: /orderconfirmationtemp250
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: You need to select one option to confirm order.
  keyboard: cancel ❌️, confirm 🟢
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
