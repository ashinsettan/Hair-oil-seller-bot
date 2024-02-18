/*CMD
  command: /reply
  help: 
  need_reply: false
  auto_retry_time: 
  folder: More Menu

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

User.setProperty("reply-ID",params);
Bot.runCommand("/onReply")
