"use strict";

const chalk = require("chalk");

const primary = chalk.magentaBright.bold;
const accent = chalk.cyanBright;
const secondary = chalk.whiteBright;
const dim = chalk.gray;
const success = chalk.greenBright;

const line = dim("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

console.log(`\n${line}`);
console.log(`${primary("                  FR3 NEWERA                   ")}`);
console.log(`${secondary("        Official Baileys Modified Engine       ")}`);
console.log(line);
console.log(`  ${accent("✨ Developer :")} ${secondary("FR3 NEWERA")}`);
console.log(`  ${accent("📅 Built On  :")} ${secondary("3 March 2026")}`);
console.log(line);
console.log(`  ${chalk.blue("✈️  Telegram :")} ${success("@fr3newera")}`);
console.log(`  ${chalk.green("💬 WhatsApp :")} ${success("62882008771871")}`);
console.log(`  ${chalk.yellow("🌐 Website  :")} ${success("https://fr3newera.com")}`);
console.log(`${line}\n`);

const latestUpdate = new Date("2026-03-03");
console.log(`${chalk.yellow("🆕 Latest Patch:")} ${secondary(latestUpdate.toLocaleDateString())}`);
console.log(`${dim("System ready for deployment...")}\n`);


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWASocket = void 0;
const Socket_1 = __importDefault(require("./Socket"));
exports.makeWASocket = Socket_1.default;
__exportStar(require("../WAProto"), exports);
__exportStar(require("./Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Store"), exports);
__exportStar(require("./Defaults"), exports);
__exportStar(require("./WABinary"), exports);
__exportStar(require("./WAM"), exports);
__exportStar(require("./WAUSync"), exports);

exports.default = Socket_1.default;