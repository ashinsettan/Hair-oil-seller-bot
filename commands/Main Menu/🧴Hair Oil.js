/*CMD
  command: 🧴Hair Oil
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

Api.sendChatAction({ chat_id: chat.chatid, action: "typing" });

const phone = User.getProperty("phone");
const address = User.getProperty("address");
const text = "❗ Address information not found on our server, please set the address.";
const keyboard = { text: "⚙️ Set Address", callback_data: "💢 Address" };

if (!phone || !address) {
  Api.sendMessage({ chat_id: chat.chatid, text, reply_markup: { inline_keyboard: [[keyboard]] } });
} else {
  const text = "How much hair oil do you want?";
  const keyboard = [
    [{ text: "100ml", callback_data: "/prsInfo 100ml" }, { text: "250ml", callback_data: "/prsInfo 250ml" }]
  ];
  Api.sendMessage({ chat_id: chat.chatid, text: text, reply_markup: { inline_keyboard: keyboard }, parse_mode: "Markdown" });
}

