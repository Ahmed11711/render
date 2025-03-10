"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OrderWithdraw = void 0;
var class_validator_1 = require("class-validator");
var OrderWithdraw = /** @class */ (function () {
    function OrderWithdraw() {
    }
    __decorate([
        class_validator_1.IsNotEmpty()
    ], OrderWithdraw.prototype, "amount");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.MinLength(25)
    ], OrderWithdraw.prototype, "publicAddress");
    __decorate([
        class_validator_1.IsNotEmpty(),
        class_validator_1.MinLength(6),
        class_validator_1.MaxLength(6)
    ], OrderWithdraw.prototype, "pinCode");
    return OrderWithdraw;
}());
exports.OrderWithdraw = OrderWithdraw;
