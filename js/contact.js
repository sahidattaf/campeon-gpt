function notifyTelegram() {
  const data = {
    chat_id: CHAT_ID,
    text: "🚀 New Campeón GPT request submitted via site!",
    parse_mode: "HTML"
  };

  fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
}
