"use strict";
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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var YAML = __importStar(require("yaml"));
var fs_1 = require("fs");
// Requiring the module
var xlsx_1 = __importDefault(require("xlsx"));
var lodash_1 = require("lodash");
var generateDocs = function (fileName, outputDir, prefix) {
    var file = xlsx_1.default.readFile(fileName);
    var json = xlsx_1.default.utils.sheet_to_json(file.Sheets[file.SheetNames[0]], {});
    var mapped = json.map(function (record) { return (0, lodash_1.mapKeys)(record, function (_value, key, value) { return key === 'question' ? 'title' : (0, lodash_1.kebabCase)(key); }); });
    mapped.forEach(function (mappedJson, index) {
        (0, fs_1.writeFileSync)("".concat(outputDir, "/").concat(prefix, "-").concat(index + 1, ".md"), "---\nid: ".concat(prefix, "-").concat(index + 1, "\n").concat(YAML.stringify(mappedJson), "---"));
    });
};
generateDocs("".concat(__dirname, "/problem-list.xlsx"), "".concat(__dirname, "/../../docs/questions"), 'question');
