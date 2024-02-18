/*CMD
  command: /depRequest
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

User.setProperty("transetion", message);
Bot.sendMessage( "🏧 How much amount want to add?.");
    Bot.runCommand("/depamount");
