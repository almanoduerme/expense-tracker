import TelegramBot = require("node-telegram-bot-api");
import { manageDepositDao } from "../dao/dao";

export function handleGetTotalExpensesCommand(bot: TelegramBot) {
  bot.onText(/\/getTotalExpenses/, async (msg) => {
    const chatId = msg.chat.id;

    try {
      const values = await manageDepositDao.readSheetData('expenses!H1:H1');

      if (values.values && values.values[0]) {
        const [currentAmount] = values.values[0];
        bot.sendMessage(chatId, `Total expenses: ${currentAmount}`);
      } else {
        bot.sendMessage(chatId, "No expenses found.");
      }
    } catch (error) {
      console.error(error);
    }
  });
}