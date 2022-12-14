"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var pageForgotPassword_1 = require("../pages/pageForgotPassword");
var pageLogin_1 = require("../pages/pageLogin");
var newForgotPassword = new pageForgotPassword_1.pageForgotPassword();
var newlogin = new pageLogin_1.pageLogin();
describe('Testing forgot password', function () {
    beforeAll(function () {
        protractor_1.browser.get('http://localhost:4200/account.mayestro/forget-password');
    });
    it('send btn disabled untinl', function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = expect;
                        return [4 /*yield*/, newForgotPassword.sendBtn.isEnabled()];
                    case 1:
                        _a.apply(void 0, [_c.sent()]).toBe(false);
                        newForgotPassword.emailOrUsername.sendKeys('a');
                        _b = expect;
                        return [4 /*yield*/, newForgotPassword.sendBtn.isEnabled()];
                    case 2:
                        _b.apply(void 0, [_c.sent()]).toBe(true);
                        return [2 /*return*/];
                }
            });
        });
    });
    it('no username', function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                protractor_1.browser.refresh();
                newForgotPassword.emailOrUsername.click();
                newForgotPassword.emailOrUsername.sendKeys(protractor_1.protractor.Key.TAB).then(function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    protractor_1.browser.sleep(1500);
                                    _a = expect;
                                    return [4 /*yield*/, newForgotPassword.errorEmail.getText()];
                                case 1:
                                    _a.apply(void 0, [_b.sent()]).toContain('Please enter your email.');
                                    return [2 /*return*/];
                            }
                        });
                    });
                });
                return [2 /*return*/];
            });
        });
    });
    it('invalid email', function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                newForgotPassword.emailOrUsername.sendKeys('ahmedd');
                newForgotPassword.sendBtn.click().then(function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _a = expect;
                                    return [4 /*yield*/, newForgotPassword.errorDoesNotExist.getText()];
                                case 1:
                                    _a.apply(void 0, [_b.sent()]).toContain('The email address you entered is not linked to a Spotify account. You can either try another email address, or log in through Facebook - if your account is connected. match.');
                                    return [2 /*return*/];
                            }
                        });
                    });
                });
                return [2 /*return*/];
            });
        });
    });
    it('invalid email error disappears and have another error', function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                protractor_1.browser.refresh();
                newForgotPassword.emailOrUsername.sendKeys('ahmedd');
                newForgotPassword.sendBtn.click().then(function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _a = expect;
                                    return [4 /*yield*/, newForgotPassword.errorDoesNotExist.getText()];
                                case 1:
                                    _a.apply(void 0, [_b.sent()]).toContain('The email address you entered is not linked to a Spotify account. You can either try another email address, or log in through Facebook - if your account is connected. match.');
                                    return [2 /*return*/];
                            }
                        });
                    });
                });
                newForgotPassword.emailOrUsername.sendKeys(protractor_1.protractor.Key.CONTROL, 'a');
                newForgotPassword.emailOrUsername.sendKeys(protractor_1.protractor.Key.DELETE);
                newForgotPassword.emailOrUsername.sendKeys(protractor_1.protractor.Key.TAB).then(function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var _a, _b;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    _a = expect;
                                    return [4 /*yield*/, newForgotPassword.errorEmail2.getText()];
                                case 1:
                                    _a.apply(void 0, [_c.sent()]).toContain('Please enter your email.');
                                    _b = expect;
                                    return [4 /*yield*/, newForgotPassword.errorDoesNotExist.isDisplayed()];
                                case 2:
                                    _b.apply(void 0, [_c.sent()]).toBe(false);
                                    return [2 /*return*/];
                            }
                        });
                    });
                });
                return [2 /*return*/];
            });
        });
    });
    it('open spotify support', function () {
        protractor_1.browser.refresh();
        protractor_1.browser.ignoreSynchronization = true;
        newForgotPassword.spotifySupport.click();
        var windowHandles = protractor_1.browser.getAllWindowHandles();
        var parentHandle, childHandle;
        windowHandles.then(function (handles) {
            parentHandle = handles[0];
            childHandle = handles[1];
            protractor_1.browser.switchTo().window(childHandle).then(function () {
                protractor_1.browser.close();
            });
            protractor_1.browser.switchTo().window(parentHandle);
        });
    });
    it('valid till reset', function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                protractor_1.browser.refresh();
                newForgotPassword.emailOrUsername.sendKeys('ahmed@gmail.com');
                newForgotPassword.sendBtn.click().then(function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            newForgotPassword.resetUsingMockServer.click().then(function () {
                                return __awaiter(this, void 0, void 0, function () {
                                    var _a, _b;
                                    return __generator(this, function (_c) {
                                        switch (_c.label) {
                                            case 0:
                                                protractor_1.browser.sleep(2000);
                                                _a = expect;
                                                return [4 /*yield*/, protractor_1.browser.getCurrentUrl()];
                                            case 1:
                                                _a.apply(void 0, [_c.sent()]).toContain('http://localhost:4200/account.mayestro/reset-password/');
                                                _b = expect;
                                                return [4 /*yield*/, newForgotPassword.resetSendBtn.isEnabled()];
                                            case 2:
                                                _b.apply(void 0, [_c.sent()]).toBe(false);
                                                return [2 /*return*/];
                                        }
                                    });
                                });
                            });
                            return [2 /*return*/];
                        });
                    });
                });
                return [2 /*return*/];
            });
        });
    });
    it('no new password', function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        protractor_1.browser.navigate().to("http://localhost:4200/account.mayestro/forget-password");
                        newForgotPassword.emailOrUsername.sendKeys('ahmed@gmail.com');
                        newForgotPassword.sendBtn.click().then(function () {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    newForgotPassword.resetUsingMockServer.click().then(function () {
                                        return __awaiter(this, void 0, void 0, function () {
                                            var _a;
                                            return __generator(this, function (_b) {
                                                switch (_b.label) {
                                                    case 0:
                                                        protractor_1.browser.sleep(2000);
                                                        _a = expect;
                                                        return [4 /*yield*/, protractor_1.browser.getCurrentUrl()];
                                                    case 1:
                                                        _a.apply(void 0, [_b.sent()]).toContain('http://localhost:4200/account.mayestro/reset-password/');
                                                        return [2 /*return*/];
                                                }
                                            });
                                        });
                                    });
                                    return [2 /*return*/];
                                });
                            });
                        });
                        newForgotPassword.newPassword.click();
                        newForgotPassword.confirmNewPassword.click();
                        _a = expect;
                        return [4 /*yield*/, newForgotPassword.errorNewPassword.getText()];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).toContain("Enter a password to continue.");
                        return [2 /*return*/];
                }
            });
        });
    });
    it('password too short', function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        protractor_1.browser.navigate().to("http://localhost:4200/account.mayestro/forget-password");
                        newForgotPassword.emailOrUsername.sendKeys('ahmed@gmail.com');
                        newForgotPassword.sendBtn.click().then(function () {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    newForgotPassword.resetUsingMockServer.click().then(function () {
                                        return __awaiter(this, void 0, void 0, function () {
                                            var _a;
                                            return __generator(this, function (_b) {
                                                switch (_b.label) {
                                                    case 0:
                                                        protractor_1.browser.sleep(2000);
                                                        _a = expect;
                                                        return [4 /*yield*/, protractor_1.browser.getCurrentUrl()];
                                                    case 1:
                                                        _a.apply(void 0, [_b.sent()]).toContain('http://localhost:4200/account.mayestro/reset-password/');
                                                        return [2 /*return*/];
                                                }
                                            });
                                        });
                                    });
                                    return [2 /*return*/];
                                });
                            });
                        });
                        newForgotPassword.newPassword.sendKeys('123');
                        newForgotPassword.newPassword.sendKeys(protractor_1.protractor.Key.TAB);
                        _a = expect;
                        return [4 /*yield*/, newForgotPassword.errorPasswordTooShort.getText()];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).toContain("Your password is too short.");
                        return [2 /*return*/];
                }
            });
        });
    });
    it('confirm paassword too short', function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        protractor_1.browser.navigate().to("http://localhost:4200/account.mayestro/forget-password");
                        newForgotPassword.emailOrUsername.sendKeys('ahmed@gmail.com');
                        newForgotPassword.sendBtn.click().then(function () {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    newForgotPassword.resetUsingMockServer.click().then(function () {
                                        return __awaiter(this, void 0, void 0, function () {
                                            var _a;
                                            return __generator(this, function (_b) {
                                                switch (_b.label) {
                                                    case 0:
                                                        protractor_1.browser.sleep(2000);
                                                        _a = expect;
                                                        return [4 /*yield*/, protractor_1.browser.getCurrentUrl()];
                                                    case 1:
                                                        _a.apply(void 0, [_b.sent()]).toContain('http://localhost:4200/account.mayestro/reset-password/');
                                                        return [2 /*return*/];
                                                }
                                            });
                                        });
                                    });
                                    return [2 /*return*/];
                                });
                            });
                        });
                        newForgotPassword.confirmNewPassword.sendKeys('123');
                        newForgotPassword.newPassword.click();
                        _a = expect;
                        return [4 /*yield*/, newForgotPassword.errorConfirmPasswordTooShort.getText()];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).toContain("Your password is too short.");
                        return [2 /*return*/];
                }
            });
        });
    });
    it('no confirm new password', function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        protractor_1.browser.navigate().to("http://localhost:4200/account.mayestro/forget-password");
                        newForgotPassword.emailOrUsername.sendKeys('ahmed@gmail.com');
                        newForgotPassword.sendBtn.click().then(function () {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    newForgotPassword.resetUsingMockServer.click().then(function () {
                                        return __awaiter(this, void 0, void 0, function () {
                                            var _a;
                                            return __generator(this, function (_b) {
                                                switch (_b.label) {
                                                    case 0:
                                                        protractor_1.browser.sleep(2000);
                                                        _a = expect;
                                                        return [4 /*yield*/, protractor_1.browser.getCurrentUrl()];
                                                    case 1:
                                                        _a.apply(void 0, [_b.sent()]).toContain('http://localhost:4200/account.mayestro/reset-password/');
                                                        return [2 /*return*/];
                                                }
                                            });
                                        });
                                    });
                                    return [2 /*return*/];
                                });
                            });
                        });
                        newForgotPassword.confirmNewPassword.click();
                        newForgotPassword.newPassword.click();
                        _a = expect;
                        return [4 /*yield*/, newForgotPassword.errorConfirmNewPassword.getText()];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).toContain("Enter a password to continue.");
                        return [2 /*return*/];
                }
            });
        });
    });
    it('password does not match.', function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        protractor_1.browser.navigate().to("http://localhost:4200/account.mayestro/forget-password");
                        newForgotPassword.emailOrUsername.sendKeys('ahmed@gmail.com');
                        newForgotPassword.sendBtn.click().then(function () {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    newForgotPassword.resetUsingMockServer.click().then(function () {
                                        return __awaiter(this, void 0, void 0, function () {
                                            var _a;
                                            return __generator(this, function (_b) {
                                                switch (_b.label) {
                                                    case 0:
                                                        protractor_1.browser.sleep(2000);
                                                        _a = expect;
                                                        return [4 /*yield*/, protractor_1.browser.getCurrentUrl()];
                                                    case 1:
                                                        _a.apply(void 0, [_b.sent()]).toContain('http://localhost:4200/account.mayestro/reset-password/');
                                                        return [2 /*return*/];
                                                }
                                            });
                                        });
                                    });
                                    return [2 /*return*/];
                                });
                            });
                        });
                        newForgotPassword.newPassword.sendKeys('12345678');
                        newForgotPassword.confirmNewPassword.sendKeys('123456789');
                        newForgotPassword.confirmNewPassword.sendKeys(protractor_1.protractor.Key.TAB);
                        _a = expect;
                        return [4 /*yield*/, newForgotPassword.errorDoesNotMatch.getText()];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).toContain("password doesn't match.");
                        return [2 /*return*/];
                }
            });
        });
    });
    it('valid password change', function () {
        return __awaiter(this, void 0, void 0, function () {
            var newPassword, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        protractor_1.browser.navigate().to("http://localhost:4200/account.mayestro/login");
                        newlogin.forgotPassword.click();
                        protractor_1.browser.sleep(2000);
                        protractor_1.browser.refresh();
                        newForgotPassword.emailOrUsername.sendKeys('ahmed@gmail.com');
                        newForgotPassword.sendBtn.click().then(function () {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    newForgotPassword.resetUsingMockServer.click().then(function () {
                                        return __awaiter(this, void 0, void 0, function () {
                                            var _a;
                                            return __generator(this, function (_b) {
                                                switch (_b.label) {
                                                    case 0:
                                                        protractor_1.browser.sleep(2000);
                                                        _a = expect;
                                                        return [4 /*yield*/, protractor_1.browser.getCurrentUrl()];
                                                    case 1:
                                                        _a.apply(void 0, [_b.sent()]).toContain('http://localhost:4200/account.mayestro/reset-password/');
                                                        return [2 /*return*/];
                                                }
                                            });
                                        });
                                    });
                                    return [2 /*return*/];
                                });
                            });
                        });
                        newPassword = 123456789;
                        newForgotPassword.newPassword.sendKeys(newPassword);
                        newForgotPassword.confirmNewPassword.sendKeys(newPassword);
                        _a = expect;
                        return [4 /*yield*/, newForgotPassword.resetSendBtn.isEnabled()];
                    case 1:
                        _a.apply(void 0, [_c.sent()]).toBe(true);
                        newForgotPassword.resetSendBtn.click();
                        //check token
                        // or in my case check if i can login
                        protractor_1.browser.navigate().back();
                        protractor_1.browser.navigate().back();
                        newlogin.emailInput.sendKeys('ahmed@gmail.com');
                        newlogin.passwordInput.sendKeys(newPassword);
                        newlogin.loginBtn.click();
                        protractor_1.browser.sleep(4000);
                        _b = expect;
                        return [4 /*yield*/, protractor_1.browser.getCurrentUrl()];
                    case 2:
                        _b.apply(void 0, [_c.sent()]).toContain('http://localhost:4200/open.mayestro/overview');
                        return [2 /*return*/];
                }
            });
        });
    });
});
//# sourceMappingURL=testsForgotPassword.js.map