/*CMD
  command: 💢 Address
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Main Menu
  answer: 〽️ Send your 10 digit phone number:

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var number = message;

if (isNaN(number) || number.length !== 10) {
  Bot.sendMessage("Invalid number");
} else {
  User.setProperty("phone","+91"+message);
Bot.runCommand("/address#100")
}

  

