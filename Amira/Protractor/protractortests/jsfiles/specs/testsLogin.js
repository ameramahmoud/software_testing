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
var pageLogin_1 = require("../pages/pageLogin");
var log4jsconf_1 = require("../log4jsconf");
var newlogin = new pageLogin_1.pageLogin();
/**This is the specs for login the page  */
describe('Testing login', function () {
    /**
     * getting executed before each test case
     */
    beforeAll(function () {
        protractor_1.browser.get('http://3.137.69.49/account.mayestro/login');
        var browserTitle = protractor_1.browser.getTitle();
        browserTitle.then(function (txt) {
            log4jsconf_1.log4jsconf.log().info("Browser title: " + txt);
        });
    });
    /**
     * tests the responsiveness of the window
     */
    it('responsiveness', function () {
        for (var i = 0; i <= 4; i++) {
            switch (i) {
                case 0:
                    protractor_1.browser.manage().window().setSize(320, 480);
                    protractor_1.browser.sleep(1500);
                    break;
                case 1:
                    protractor_1.browser.manage().window().setSize(600, 800);
                    protractor_1.browser.sleep(1500);
                    break;
                case 2:
                    protractor_1.browser.manage().window().setSize(768, 1024);
                    protractor_1.browser.sleep(1500);
                    break;
                case 3:
                    protractor_1.browser.manage().window().setSize(1080, 1920);
                    protractor_1.browser.sleep(1500);
                    break;
                case 4:
                    protractor_1.browser.manage().window().setSize(1200, 1800);
                    return;
            }
        }
    });
    it('cursor on email by default FAIL', function () {
        return __awaiter(this, void 0, void 0, function () {
            var currentElement;
            return __generator(this, function (_a) {
                protractor_1.browser.sleep(2000);
                currentElement = protractor_1.browser.driver.switchTo().activeElement();
                expect(currentElement.getId()).toEqual(newlogin.emailInput.getId());
                return [2 /*return*/];
            });
        });
    });
    it('login disabled until..', function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        protractor_1.browser.refresh();
                        _a = expect;
                        return [4 /*yield*/, newlogin.loginBtn.isEnabled()];
                    case 1:
                        _a.apply(void 0, [_c.sent()]).toBe(false);
                        newlogin.emailInput.sendKeys('a');
                        newlogin.passwordInput.sendKeys('11111111');
                        _b = expect;
                        return [4 /*yield*/, newlogin.loginBtn.isEnabled()];
                    case 2:
                        _b.apply(void 0, [_c.sent()]).toBe(true);
                        return [2 /*return*/];
                }
            });
        });
    });
    it('valid login', function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        protractor_1.browser.refresh();
                        newlogin.emailInput.sendKeys('ahmed@gmail.com');
                        newlogin.passwordInput.sendKeys('12345678');
                        newlogin.loginBtn.click();
                        protractor_1.browser.sleep(4000);
                        _a = expect;
                        return [4 /*yield*/, protractor_1.browser.getCurrentUrl()];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).toContain('http://3.137.69.49/open.mayestro/overview');
                        protractor_1.browser.navigate().back();
                        return [2 /*return*/];
                }
            });
        });
    });
    it('forbidden characters FAIL', function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        newlogin.emailInput.clear();
                        newlogin.emailInput.sendKeys("`");
                        _a = expect;
                        return [4 /*yield*/, newlogin.errorEmail.getText()];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).toContain('Forbidden character(s) ` in username.');
                        return [2 /*return*/];
                }
            });
        });
    });
    it('should have error message for incorrect username', function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        protractor_1.browser.refresh();
                        newlogin.emailInput.sendKeys('heloo');
                        newlogin.passwordInput.sendKeys('12345678');
                        newlogin.loginBtn.click();
                        _a = expect;
                        return [4 /*yield*/, newlogin.redErrormsg.getText()];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).toContain('Incorrect username or password.');
                        return [2 /*return*/];
                }
            });
        });
    });
    it('should have error message for incorrect password', function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        protractor_1.browser.refresh();
                        newlogin.emailInput.sendKeys('ahmed@gmail.com');
                        newlogin.passwordInput.sendKeys('1234567899');
                        newlogin.loginBtn.click();
                        _a = expect;
                        return [4 /*yield*/, newlogin.redErrormsg.getText()];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).toContain('Incorrect username or password.');
                        return [2 /*return*/];
                }
            });
        });
    });
    it('Testing can not copy password', function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                protractor_1.browser.refresh();
                newlogin.passwordInput.sendKeys('123456789').then(function () {
                    //newlogin.passwordInput.sendKeys(protractor.Key.CONTROL, 'a');
                    newlogin.passwordInput.sendKeys(protractor_1.protractor.Key.CONTROL, 'c');
                    newlogin.emailInput.sendKeys(protractor_1.protractor.Key.CONTROL, 'v');
                });
                expect(newlogin.emailInput.getText()).not.toContain(newlogin.passwordInput.getText());
                return [2 /*return*/];
            });
        });
    });
    it('Testing tab key', function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                protractor_1.browser.refresh();
                newlogin.emailInput.sendKeys(protractor_1.protractor.Key.TAB).then(function () {
                    var currentElement = protractor_1.browser.driver.switchTo().activeElement();
                    expect(currentElement.getId()).toEqual(newlogin.passwordInput.getId());
                });
                return [2 /*return*/];
            });
        });
    });
    it('no email', function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        protractor_1.browser.refresh();
                        newlogin.emailInput.click();
                        newlogin.passwordInput.click();
                        _a = expect;
                        return [4 /*yield*/, newlogin.errorEmail.getText()];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).toContain('Please enter your email.');
                        protractor_1.browser.sleep(1500);
                        return [2 /*return*/];
                }
            });
        });
    });
    it('no password', function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        protractor_1.browser.refresh();
                        newlogin.passwordInput.click();
                        newlogin.emailInput.click();
                        _a = expect;
                        return [4 /*yield*/, newlogin.errorPassword.getText()];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).toContain('Enter a password to continue.');
                        protractor_1.browser.sleep(1500);
                        return [2 /*return*/];
                }
            });
        });
    });
    it('go to sign up', function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        protractor_1.browser.refresh();
                        newlogin.signUp.click();
                        protractor_1.browser.sleep(2000);
                        _a = expect;
                        return [4 /*yield*/, protractor_1.browser.getCurrentUrl()];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).toContain('http://3.137.69.49/account.mayestro/signup');
                        protractor_1.browser.navigate().back();
                        return [2 /*return*/];
                }
            });
        });
    });
    it('go to forget password', function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        newlogin.forgotPassword.click();
                        protractor_1.browser.sleep(2000);
                        _a = expect;
                        return [4 /*yield*/, protractor_1.browser.getCurrentUrl()];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).toContain('http://3.137.69.49/account.mayestro/forget-password');
                        protractor_1.browser.navigate().back();
                        return [2 /*return*/];
                }
            });
        });
    });
    it('terms & conditions and privacy policy', function () {
        protractor_1.browser.ignoreSynchronization = true;
        var browserTitle = protractor_1.browser.getTitle();
        browserTitle.then(function (txt) {
            log4jsconf_1.log4jsconf.log().info("Main browser title: " + txt);
        });
        newlogin.termsAndConditions.click();
        newlogin.privacyPolicy.click();
        var windowHandles = protractor_1.browser.getAllWindowHandles();
        var parentHandle, childHandle, child2Handle;
        windowHandles.then(function (handles) {
            parentHandle = handles[0];
            childHandle = handles[1];
            child2Handle = handles[2];
            protractor_1.browser.switchTo().window(childHandle).then(function () {
                protractor_1.browser.getTitle().then(function (txt) {
                    log4jsconf_1.log4jsconf.log().info("Main browser title: " + txt);
                    protractor_1.browser.close();
                });
            });
            protractor_1.browser.switchTo().window(child2Handle).then(function () {
                protractor_1.browser.getTitle().then(function (txt) {
                    log4jsconf_1.log4jsconf.log().info("Main browser title: " + txt);
                    protractor_1.browser.close();
                });
            });
            protractor_1.browser.switchTo().window(parentHandle).then(function () {
                console.log('Returning to main window...');
                protractor_1.browser.getTitle().then(function (txt) {
                    log4jsconf_1.log4jsconf.log().info("Main browser title: " + txt);
                });
            });
        });
    });
});
//# sourceMappingURL=testsLogin.js.map