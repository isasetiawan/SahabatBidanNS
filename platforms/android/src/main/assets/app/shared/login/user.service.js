"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var _1 = require("@angular/http/");
require("rxjs/operator/do");
require("rxjs/operator/map");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLG1DQUF5RDtBQUV6RCw0QkFBeUI7QUFDekIsNkJBQTBCO0FBTTFCO0lBQ0kscUJBQW9CLElBQVM7UUFBVCxTQUFJLEdBQUosSUFBSSxDQUFLO0lBQUUsQ0FBQztJQUR2QixXQUFXO1FBRHZCLGlCQUFVLEVBQUU7eUNBRWdCLE9BQUk7T0FEcEIsV0FBVyxDQUl2QjtJQUFELGtCQUFDO0NBQUEsQUFKRCxJQUlDO0FBSlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cC9cIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcbmltcG9ydCBcInJ4anMvb3BlcmF0b3IvZG9cIlxyXG5pbXBvcnQgXCJyeGpzL29wZXJhdG9yL21hcFwiXHJcblxyXG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuL3VzZXJcIjtcclxuaW1wb3J0IHtDb25maWd9IGZyb20gXCIuLi9jb25maWdcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDpIdHRwKXt9XHJcblxyXG4gICAgXHJcbn0iXX0=