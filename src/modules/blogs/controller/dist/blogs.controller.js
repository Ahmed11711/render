"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BlogsController = void 0;
var common_1 = require("@nestjs/common");
var isPublic_decorator_1 = require("src/modules/auth/decorator/isPublic.decorator");
var BlogsController = /** @class */ (function () {
    function BlogsController(blogService) {
        this.blogService = blogService;
    }
    BlogsController.prototype.getAll = function () {
        return this.blogService.getAll();
    };
    __decorate([
        isPublic_decorator_1.ISPublic(),
        common_1.Get()
    ], BlogsController.prototype, "getAll");
    BlogsController = __decorate([
        common_1.Controller('blogs')
    ], BlogsController);
    return BlogsController;
}());
exports.BlogsController = BlogsController;
