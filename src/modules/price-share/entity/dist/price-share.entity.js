"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PriceShare = void 0;
var typeorm_1 = require("typeorm");
var PriceShare = /** @class */ (function () {
    function PriceShare() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], PriceShare.prototype, "id");
    __decorate([
        typeorm_1.Column({ type: 'double', precision: 8, scale: 2 })
    ], PriceShare.prototype, "price");
    __decorate([
        typeorm_1.Column({ type: 'text' })
    ], PriceShare.prototype, "desc");
    __decorate([
        typeorm_1.Column({ type: 'datetime', nullable: true })
    ], PriceShare.prototype, "expire_date");
    __decorate([
        typeorm_1.CreateDateColumn({ type: 'timestamp' })
    ], PriceShare.prototype, "created_at");
    __decorate([
        typeorm_1.UpdateDateColumn({ type: 'timestamp' })
    ], PriceShare.prototype, "updated_at");
    PriceShare = __decorate([
        typeorm_1.Entity('price_shares')
    ], PriceShare);
    return PriceShare;
}());
exports.PriceShare = PriceShare;
