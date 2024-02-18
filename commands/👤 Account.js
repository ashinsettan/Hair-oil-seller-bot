/*CMD
  command: 👤 Account
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: account
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

var phone = User.getProperty("phone");
var address = User.getProperty("address");
var deposit = Libs.ResourcesLib.userRes("deposit")
var lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get();
   
Api.sendPhoto({
    photo: "https://t.me/documentsandalluploader/75",
    caption:
      "*👤 Name : *"+ user.first_name +"\n*🆔 User ID : *"+ user.telegramid +"\n\n*💵 Balance : *"+ deposit.value().toFixed(2) +"*₹*\n\n*📱 phone : *"+ phone +"\n*〽️ Address: *"+ address +"",
    parse_mode: "markdown",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: [[{ text: "➕️ Add Fund", callback_data: "/deposit" }]]
    }
  })
