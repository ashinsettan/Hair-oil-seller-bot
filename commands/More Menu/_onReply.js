/*CMD
  command: /onReply
  help: 
  need_reply: true
  auto_retry_time: 
  folder: More Menu
  answer: 〽️ Send Your Message:

  <<KEYBOARD

  KEYBOARD
  aliases: /onreply
  group: 
CMD*/

const words = message.split(/\W+/).filter(word => word.trim().length > 0);

let shortMsg;
if (words.length < 50) {
  shortMsg = message;
} else {
  shortMsg = words.slice(0, 50).join(" ");
  shortMsg += " *More...*";
}

const replyID = User.getProperty("reply-ID");
const who = chat.chatid === "5555963971" ? "Admin" : "User";

Api.sendMessage({
  chat_id: replyID,
  text: `📩 *Message from ${who}:*\n\n💬 *Message:* ${shortMsg}`,
  reply_markup: JSON.stringify({
    inline_keyboard: [[
      { text: `🔁 Reply to ${who}`, callback_data: `/reply ${chat.chatid}` }
    ]]
  }),
  parse_mode: "Markdown"
});

Bot.sendMessage("✅ Message sent");

