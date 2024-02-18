/*CMD
  command: /prsInfo
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Main Menu

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

if(params == "250ml"){
  var btlSize = "250ml";
  var price = "230";
} else {
var btlSize = "100ml";
var price = "90";
}

User.setProperty("prsInfo",params);
  Api.sendPhoto({
  photo: "https://a.top4top.io/p_267313i0m1.jpg",
  caption:
    "<b>Title: </b> "+btlSize+" തെന്താപ്പാല oil \n<b>Price: </b>"+price+"₹\n<b>Description: </b> Quantity is less but this product was fully natural all we are maded Rarely oil",
  parse_mode: "html",
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard: [
[{ text: "✅ Buy Now", callback_data: "/orderconfirmationtemp250" }]]
    
  }
})
