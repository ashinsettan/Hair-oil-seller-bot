/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: verify 💥

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: start
  group: 
CMD*/

if (params == "DevTanjed") {
  return;
}

function doTouchOwnLink() {
  Bot.sendMessage("You are already in this bot 🚫!");
}

function doAttracted(refUser) {
  Bot.sendMessage("Hello\n\n👤 Your Referred User » " + Libs.commonLib.getLinkFor(refUser));
  Bot.sendMessageToChatWithId(refUser.telegramid, "🆕 Referral User » " + Libs.commonLib.getLinkFor(user));
}

let trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted
};

Libs.ReferralLib.track(trackOptions);
Bot.runCommand("🎛️ Main Menu");
