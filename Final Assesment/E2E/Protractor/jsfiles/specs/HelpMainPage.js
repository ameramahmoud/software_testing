"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const protractor_2 = require("protractor");
var protractor_1 = require("protractor");
describe('HelpMainPage', function () {
    protractor_1.browser.get('https://support.spotify.com/eg-en/?_ga=2.151724666.2105580048.1591620644-974573419.1582503200');
    it('tests help button', function () {
        protractor_1.element(protractor_2.by.id('nav-link-help')).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/?_ga=2.151724666.2105580048.1591620644-974573419.1582503200');
    });
    it('Test Help Page Scroll Down', () => {
        protractor_1.browser.executeScript('window.scrollTo(0,10000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
    });
    it('Test Help Page Scroll Up', () => {
        protractor_1.browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
    });
    it('tests search bar case 1', function () {
        protractor_1.by.xpath("//h1[.='How can we help you?']");
        protractor_1.element(protractor_1.by.id('search')).sendkeys('artist');
        if (protractor_1.element(protractor_1.by.xpath('protractor_1')).click())
            expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/search/?q=artist');
        protractor_1.by.xpath("//h2[.='Articles']");
        if (protractor_1.element(protractor_1.by.xpath("//a[.='< Back']")).click())
            expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/?_ga=2.151724666.2105580048.1591620644-974573419.1582503200');
        if (protractor_1.browser.actions().sendKeys(protractor_2.protractor.Key.ENTER).perform())
            expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/search/?q=artist');
        protractor_1.by.xpath("//h2[.='Articles']");
        if (protractor_1.element(protractor_1.by.xpath("//a[.='< Back']")).click())
            expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/?_ga=2.151724666.2105580048.1591620644-974573419.1582503200');
    });
    it('tests search bar case 2', function () {
        protractor_1.by.xpath("//h1[.='How can we help you?']");
        protractor_1.element(protractor_1.by.id('search')).sendkeys('playlist');
        if (protractor_1.element(protractor_1.by.xpath('protractor_1')).click())
            expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/search/?q=playlist');
        protractor_1.by.xpath("//h2[.='Articles']");
        if (protractor_1.element(protractor_1.by.xpath("//a[.='< Back']")).click())
            expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/?_ga=2.151724666.2105580048.1591620644-974573419.1582503200');
        if (protractor_1.browser.actions().sendKeys(protractor_2.protractor.Key.ENTER).perform())
            expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/search/?q=playlist');
        protractor_1.by.xpath("//h2[.='Articles']");
        if (protractor_1.element(protractor_1.by.xpath("//a[.='< Back']")).click())
            expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/?_ga=2.151724666.2105580048.1591620644-974573419.1582503200');
    });
    it('tests search bar case 3', function () {
        protractor_1.by.xpath("//h1[.='How can we help you?']");
        protractor_1.element(protractor_1.by.id('search')).sendkeys('album');
        if (protractor_1.element(protractor_1.by.xpath('protractor_1')).click())
            expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/search/?q=album');
        protractor_1.by.xpath("//h2[.='Articles']");
        if (protractor_1.element(protractor_1.by.xpath("//a[.='< Back']")).click())
            expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/?_ga=2.151724666.2105580048.1591620644-974573419.1582503200');
        if (protractor_1.browser.actions().sendKeys(protractor_2.protractor.Key.ENTER).perform())
            expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/search/?q=album');
        protractor_1.by.xpath("//h2[.='Articles']");
        if (protractor_1.element(protractor_1.by.xpath("//a[.='< Back']")).click())
            expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/?_ga=2.151724666.2105580048.1591620644-974573419.1582503200');
    });
    it('tests search bar case 4 (input empty space)', function () {
        protractor_1.by.xpath("//h1[.='How can we help you?']");
        protractor_1.element(protractor_1.by.id('search')).sendkeys(' ');
        if (protractor_1.element(protractor_1.by.xpath('protractor_1')).click())
            expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/search/?q=%20');
        protractor_1.by.xpath("//h3[.='No results found']");
        if (protractor_1.element(protractor_1.by.xpath("//a[.='< Back']")).click())
            expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/?_ga=2.151724666.2105580048.1591620644-974573419.1582503200');
        if (protractor_1.browser.actions().sendKeys(protractor_2.protractor.Key.ENTER).perform())
            expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/search/?q=%20');
        protractor_1.by.xpath("//h3[.='No results found']");
        if (protractor_1.element(protractor_1.by.xpath("//a[.='< Back']")).click())
            expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/?_ga=2.151724666.2105580048.1591620644-974573419.1582503200');
    });
    it('tests search bar case 5 (input dot)', function () {
        protractor_1.by.xpath("//h1[.='How can we help you?']");
        protractor_1.element(protractor_1.by.id('search')).sendkeys('.');
        if (protractor_1.element(protractor_1.by.xpath('protractor_1')).click())
            expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/search/?q=.');
        protractor_1.by.xpath("//h3[.='No results found']");
        if (protractor_1.element(protractor_1.by.xpath("//a[.='< Back']")).click())
            expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/?_ga=2.151724666.2105580048.1591620644-974573419.1582503200');
        if (protractor_1.browser.actions().sendKeys(protractor_2.protractor.Key.ENTER).perform())
            expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/search/?q=.');
        protractor_1.by.xpath("//h3[.='No results found']");
        if (protractor_1.element(protractor_1.by.xpath("//a[.='< Back']")).click())
            expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/?_ga=2.151724666.2105580048.1591620644-974573419.1582503200');
    });
    it('Cant log in button)', function () {
        protractor_1.element(protractor_1.by.css("div.top-solutions div:nth-of-type(1) > .hidden-xs "));
        protractor_1.element(protractor_1.by.css("a[data-ga-event-action='309']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/account_help/cannot-log-in-to-spotify/?ref=in_top');
    });
    it('Reset your password button)', function () {
        protractor_1.element(protractor_1.by.css("div.top-solutions div:nth-of-type(2) > .hidden-xs "));
        protractor_1.element(protractor_1.by.css(" a[data-ga-event-action='295']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/account_help/change-password/?ref=in_top');
    });
    it('Finding accounts button)', function () {
        protractor_1.element(protractor_1.by.css("div.top-solutions div:nth-of-type(3) > .hidden-xs "));
        protractor_1.element(protractor_1.by.css("a[data-ga-event-action='307']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/account_help/do-i-have-an-additional-account/?ref=in_top');
    });
    it('Manage Payement Details button)', function () {
        protractor_1.element(protractor_1.by.css("div.top-solutions div:nth-of-type(4) > .hidden-xs "));
        protractor_1.element(protractor_1.by.css("a[data-ga-event-action='408']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/payment_help/manage-payments/?ref=in_top');
    });
    it('Subscription Options button)', function () {
        protractor_1.element(protractor_1.by.css("div.front-navigation__categories > div:nth-of-type(1) > .front-navigation__header "));
        protractor_1.element(protractor_1.by.css("a[href='/eg-en/account_payment_help/subscription_options']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/subscription_options/');
    });
    it('Premium Family  button)', function () {
        protractor_1.element(protractor_1.by.css("div.front-navigation__categories > div:nth-of-type(1) > .front-navigation__header "));
        protractor_1.element(protractor_1.by.css("a[href='/eg-en/account_payment_help/premium_for_family']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/premium_for_family/');
    });
    it('Privacy and Security  button)', function () {
        protractor_1.element(protractor_1.by.css("div.front-navigation__categories > div:nth-of-type(1) > .front-navigation__header "));
        protractor_1.element(protractor_1.by.css("a[href='/eg-en/account_payment_help/privacy']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/account_payment_help/privacy/');
    });
    it('Video Tutorials  button)', function () {
        protractor_1.element(protractor_1.by.css("div.front-navigation__categories > div:nth-of-type(2) > .front-navigation__header"));
        protractor_1.element(protractor_1.by.css("a[href='/eg-en/using_spotify/video_tutorials']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/using_spotify/video_tutorials/tutorial-videos/');
    });
    it('Getting Started  button)', function () {
        protractor_1.element(protractor_1.by.css("div.front-navigation__categories > div:nth-of-type(2) > .front-navigation__header"));
        protractor_1.element(protractor_1.by.css("a[href='/eg-en/using_spotify/getting_started']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/using_spotify/getting_started/');
    });
    it('Playlist  button)', function () {
        protractor_1.element(protractor_1.by.css("div.front-navigation__categories > div:nth-of-type(2) > .front-navigation__header"));
        protractor_1.element(protractor_1.by.css("a[href='/eg-en/using_spotify/playlists']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/using_spotify/playlists/');
    });
    it('Features button)', function () {
        protractor_1.element(protractor_1.by.css("div.front-navigation__categories > div:nth-of-type(2) > .front-navigation__header"));
        protractor_1.element(protractor_1.by.css("a[href='/eg-en/using_spotify/features']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/using_spotify/features/');
    });
    it('Playlist  button)', function () {
        protractor_1.element(protractor_1.by.css("div.front-navigation__categories > div:nth-of-type(2) > .front-navigation__header"));
        protractor_1.element(protractor_1.by.css("a[href='/eg-en/using_spotify/system_settings']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/using_spotify/system_settings/');
    });
    it('About button)', function () {
        protractor_1.element(protractor_1.by.css("a[data-ga-event-action='about']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://www.spotify.com/eg-en/about-us/contact/?_ga=2.185347690.2105580048.1591620644-974573419.1582503200');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVscE1haW5QYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3BlY3MvSGVscE1haW5QYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQW1DO0FBQ25DLDZCQUE2QjtBQUM3QiwyQ0FBc0U7QUFHdEUsSUFBSSxZQUFZLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBSXpDLFFBQVEsQ0FBQyxjQUFjLEVBQUM7SUFDcEIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0ZBQStGLENBQUMsQ0FBQztJQUUxSCxFQUFFLENBQUMsbUJBQW1CLEVBQUM7UUFHbkIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckQsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsK0ZBQStGLENBQUMsQ0FBQztJQUV2SixDQUFDLENBQUMsQ0FBQztJQUNILEVBQUUsQ0FBQyw0QkFBNEIsRUFBQyxHQUFHLEVBQUU7UUFDakMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDakUsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7SUFHSCxFQUFFLENBQUMsMEJBQTBCLEVBQUMsR0FBRyxFQUFFO1FBQy9CLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLHVCQUF1QixDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzdELE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ0gsRUFBRSxDQUFDLHlCQUF5QixFQUFDO1FBQ3pCLFlB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