/*CMD
  command: 🏆 Leaderboard
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

let list = Libs.ReferralLib.getTopList();

list.order_by = "integer_value";
list.order_ascending = false;

var items = list.get();
var msg = "*🏆 Leaderboard User:*\n\n";

for (var ind = 0; ind < items.length; ind++) {
  var prop = items[ind];

  if (ind === 0) {
    msg += "🥇 ";
  } else if (ind === 1) {
    msg += "🥈 ";
  } else if (ind === 2) {
    msg += "🥉 ";
  } else if (ind === 3) {
    msg += "◼️ ";
  } else {
    msg += "◻️ ";
  }

  msg += Libs.commonLib.getLinkFor(prop.user) + " » Referred: *" + String(prop.value) + "*\n";
  
  // Break the loop after displaying the top 3 users
  if (ind === 2) {
    break;
  }
}

Bot.sendMessage(msg);

