import TelegramBot = require("node-telegram-bot-api");

import { handleExpenseCommand } from "./expense.command";
import { handleDepositCommand } from "./deposit.command";
import { handleHelpCommand } from "./help.command";
import { handleGetTotalExpensesCommand } from "./total.command";

export function setupCommands(bot: TelegramBot) {
  handleDepositCommand(bot);
  handleExpenseCommand(bot);
  handleGetTotalExpensesCommand(bot);
  handleHelpCommand(bot);
}