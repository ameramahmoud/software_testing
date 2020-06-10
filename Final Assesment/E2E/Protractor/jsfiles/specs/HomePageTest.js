"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe('HomePageTest', function () {
    protractor_1.browser.get('https://www.spotify.com/eg-en/');
    it('Test HomePage Scroll Down', () => {
        protractor_1.browser.executeScript('window.scrollTo(0,10000);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
    });
    it('Test HomePage Scroll Up', () => {
        protractor_1.browser.executeScript('window.scrollTo(0,0);').then(function () {
            console.log('++++++SCROLLED UP+++++');
        });
    });
    it('Spotify button', function () {
        protractor_1.element(protractor_1.by.css("span.mh-header-primary [d='M61.842 9.506a1.02 1.02 0 0 1-1.023-1.024c0-.562.453-1.03 1.029-1.03a1.02 1.02 0 0 1 1.023 1.024 1.03 1.03 0 0 1-1.029 1.03m.006-1.952a.915.915 0 0 0-.922.928c0 .51.394.921.916.921a.916.916 0 0 0 .922-.927.908.908 0 0 0-.916-.922m.226 1.027l.29.406h-.244l-.26-.372h-.225v.372h-.204V7.912h.48c.249 0 .413.128.413.343 0 .176-.102.284-.25.326m-.172-.485h-.267v.34h.267c.133 0 .212-.065.212-.17 0-.11-.08-.17-.212-.17m-12.804-3.52a1.043 1.043 0 1 0-.001 2.086 1.043 1.043 0 0 0 0-2.087m.72 2.89h-1.454a.107.107 0 0 0-.106.107v6.346c0 .06.047.107.106.107h1.455a.107.107 0 0 0 .107-.107V7.572a.107.107 0 0 0-.107-.107m3.233.006v-.2c0-.592.227-.856.736-.856.303 0 .546.06.82.152a.106.106 0 0 0 .14-.102V5.24a.107.107 0 0 0-.076-.102 3.993 3.993 0 0 0-1.21-.174c-1.343 0-2.053.757-2.053 2.188v.308h-.699a.107.107 0 0 0-.107.106v1.257c0 .059.048.107.107.107h.699v4.99c0 .058.047.106.106.106h1.455a.107.107 0 0 0 .106-.107v-4.99h1.358l2.081 4.99c-.236.523-.468.628-.785.628-.257 0-.527-.077-.803-.228a.109.109 0 0 0-.084-.008.106.106 0 0 0-.063.058l-.493 1.081a.106.106 0 0 0 .045.138c.515.279.98.398 1.554.398 1.074 0 1.668-.5 2.191-1.847L60.6 7.617a.106.106 0 0 0-.099-.146h-1.514a.107.107 0 0 0-.1.072l-1.552 4.431-1.7-4.434a.106.106 0 0 0-.099-.069h-2.485m-5.577-.006h-1.6V5.828a.106.106 0 0 0-.107-.106h-1.455a.107.107 0 0 0-.106.106v1.637h-.7a.106.106 0 0 0-.106.107v1.25c0 .059.048.107.106.107h.7v3.234c0 1.308.65 1.97 1.934 1.97.522 0 .954-.107 1.362-.338a.106.106 0 0 0 .054-.093v-1.19a.106.106 0 0 0-.154-.096c-.28.141-.551.206-.854.206-.467 0-.675-.211-.675-.686V8.929h1.6a.106.106 0 0 0 .107-.107v-1.25a.106.106 0 0 0-.106-.107m-7.671-.133c-1.96 0-3.497 1.51-3.497 3.437 0 1.907 1.526 3.4 3.473 3.4 1.967 0 3.508-1.504 3.508-3.424 0-1.914-1.53-3.413-3.484-3.413m0 5.362c-1.043 0-1.83-.838-1.83-1.95 0-1.115.76-1.924 1.806-1.924 1.05 0 1.84.838 1.84 1.95 0 1.115-.763 1.924-1.816 1.924m-7.014-5.362c-.82 0-1.492.323-2.046.984v-.744a.107.107 0 0 0-.106-.107h-1.455a.107.107 0 0 0-.106.107v8.27c0 .058.048.106.106.106h1.455a.107.107 0 0 0 .106-.106v-2.61c.555.621 1.227.925 2.046.925 1.522 0 3.063-1.172 3.063-3.412s-1.54-3.413-3.063-3.413m1.372 3.413c0 1.14-.703 1.937-1.709 1.937-.995 0-1.745-.833-1.745-1.937s.75-1.937 1.745-1.937c.99 0 1.71.814 1.71 1.937m-8.437-1.81c-1.624-.388-1.913-.66-1.913-1.231 0-.54.508-.903 1.264-.903.732 0 1.459.275 2.22.843a.107.107 0 0 0 .15-.023l.794-1.119a.107.107 0 0 0-.02-.144c-.906-.728-1.927-1.081-3.12-1.081-1.755 0-2.98 1.052-2.98 2.559 0 1.615 1.057 2.187 2.884 2.628 1.554.358 1.817.658 1.817 1.195 0 .594-.53.963-1.385.963-.948 0-1.721-.32-2.587-1.068a.11.11 0 0 0-.078-.026.105.105 0 0 0-.073.038l-.89 1.058a.105.105 0 0 0 .011.148 5.303 5.303 0 0 0 3.581 1.373c1.89 0 3.112-1.033 3.112-2.631 0-1.351-.807-2.098-2.787-2.58M9.507.305a9.41 9.41 0 1 0 0 18.82 9.41 9.41 0 0 0 0-18.82m4.316 13.572a.586.586 0 0 1-.807.195c-2.21-1.35-4.99-1.655-8.266-.907a.586.586 0 1 1-.261-1.143c3.584-.82 6.659-.467 9.139 1.049.276.169.363.53.195.806m1.15-2.562a.734.734 0 0 1-1.008.242c-2.529-1.555-6.385-2.005-9.377-1.097a.735.735 0 0 1-.426-1.404c3.418-1.037 7.666-.534 10.57 1.25a.734.734 0 0 1 .242 1.01m.1-2.669C12.04 6.846 7.036 6.68 4.141 7.56a.88.88 0 1 1-.511-1.684c3.323-1.01 8.849-.814 12.34 1.258a.88.88 0 0 1-.898 1.514']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://www.spotify.com/eg-en/');
    });
    it('Premium button', function () {
        protractor_1.element(protractor_1.by.xpath("//a[.='Premium']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://www.spotify.com/eg-en/premium/?checkout=false');
    });
    it('Help(in header) button', function () {
        protractor_1.element(protractor_1.by.xpath("//a[@id='nav-link-help']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/?_ga=2.151096954.2105580048.1591620644-974573419.1582503200');
    });
    it('Download button', function () {
        protractor_1.element(protractor_1.by.xpath("//a[@id='nav-link-download']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://www.spotify.com/eg-en/download/windows/');
    });
    it('SignUp button', function () {
        protractor_1.element(protractor_1.by.xpath("//span[@id='signup']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://www.spotify.com/eg-en/signup/');
    });
    it('LogIn button', function () {
        protractor_1.element(protractor_1.by.xpath("//a[contains(.,'Log In')]")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://accounts.spotify.com/en/login/?continue=https:%2F%2Fwww.spotify.com%2Fapi%2Fgrowth%2Fl2l-redirect&_locale=en-EG');
    });
    it('GET SPOTIFY FREEE button', function () {
        protractor_1.element(protractor_1.by.xpath("//h1[@class='en-lie-tagline']"));
        protractor_1.element(protractor_1.by.xpath(" //a[@id='generic-btn-premium']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://www.spotify.com/eg-en/signup/?forward_url=https%3A%2F%2Fwww.spotify.com%2Feg-en%2Fdownload%2F');
    });
    it('About button', function () {
        protractor_1.element(protractor_1.by.xpath("//dt[.='Company']"));
        protractor_1.element(protractor_1.by.xpath(" //a[.='About']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://www.spotify.com/eg-en/about-us/contact/');
    });
    it('Jobs button', function () {
        protractor_1.element(protractor_1.by.xpath("//dt[.='Company']"));
        protractor_1.element(protractor_1.by.xpath("//a[.='Jobs']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://www.spotifyjobs.com/?_ga=2.150761077.2105580048.1591620644-974573419.1582503200');
    });
    it('For Artists button', function () {
        protractor_1.element(protractor_1.by.xpath("//dt[.='Communities']']"));
        protractor_1.element(protractor_1.by.xpath("//a[.='For Artists']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://artists.spotify.com/?_ga=2.175269729.2105580048.1591620644-974573419.1582503200');
    });
    it('Help (in footer) button', function () {
        protractor_1.element(protractor_1.by.xpath("//dt[.='Useful links']"));
        protractor_1.element(protractor_1.by.xpath(" //dl[3]//a[.='Help']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://support.spotify.com/eg-en/?_ga=2.150761077.2105580048.1591620644-974573419.1582503200');
    });
    it('Instagram button', function () {
        protractor_1.element(protractor_1.by.xpath("//span[@class='mh-social-icon-instagram svelte-1ad7r0v']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://www.instagram.com/spotify/');
    });
    it('Twitter button', function () {
        protractor_1.element(protractor_1.by.xpath(" //span[@class='mh-social-icon-twitter svelte-1ad7r0v']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://twitter.com/spotify');
    });
    it('Facebook button', function () {
        protractor_1.element(protractor_1.by.xpath("//a[@href='https://www.facebook.com/Spotify']")).click();
        expect(protractor_1.browser.getCurrentUrl()).toBe('https://www.facebook.com/spotifyegypt/?brand_redir=6243987495');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZVBhZ2VUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3BlY3MvSG9tZVBhZ2VUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsSUFBSSxZQUFZLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBRXpDLFFBQVEsQ0FBQyxjQUFjLEVBQUM7SUFDcEIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUczRCxFQUFFLENBQUMsMkJBQTJCLEVBQUMsR0FBRyxFQUFFO1FBQ2hDLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLDJCQUEyQixDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ2pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0lBR0gsRUFBRSxDQUFDLHlCQUF5QixFQUFDLEdBQUcsRUFBRTtRQUM5QixZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUM3RCxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztJQUtILEVBQUUsQ0FBQyxnQkFBZ0IsRUFBQztRQUNoQixZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLDR0R0FBNHRHLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQy93RyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFBO0lBSXZGLENBQUMsQ0FBQyxDQUFDO0lBR0gsRUFBRSxDQUFDLGdCQUFnQixFQUFDO1FBQ2hCLFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxD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