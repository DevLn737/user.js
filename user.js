// Enable Project Nova modern interface design
user_pref("browser.nova.enabled", true);
user_pref("browser.newtabpage.activity-stream.nova.enabled", true);
user_pref("browser.urlbar.quicksuggest.ampTopPickUseNovaIconSize", true);
// Set compact UI density (0 = normal, 1 = compact, 2 = touch)
user_pref("browser.uidensity", 1);
// Enable custom stylesheets support (userChrome.css / userContent.css)
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
// Show the "Compact Mode" option in UI Customize menu
user_pref("browser.compactmode.show", true);
// Automatically hide toolbars (tabs and URL bar) in fullscreen mode
user_pref("browser.fullscreen.autohide", true);
// Disable fullscreen enter/leave animations for faster transition
user_pref("full-screen-api.transition-duration.enter", "0");
user_pref("full-screen-api.transition-duration.leave", "0");
// Disable the annoying "Press Esc to exit fullscreen" warning message
user_pref("full-screen-api.warning.timeout", 0);
// Enable the modern non-native theme for scrollbars
user_pref("widget.non-native-theme.enabled", true);
// Set scrollbar style to Windows 11 rounded style (5)
user_pref("widget.non-native-theme.scrollbar.style", 5);
// Set the scrollbar thickness to a clean 12px
user_pref("widget.non-native-theme.scrollbar.size.override", 12);
// Enable auto-hiding overlay scrollbars on Linux (GTK)
user_pref("widget.gtk.overlay-scrollbars.enabled", true);
// Disable disk cache to force RAM-only caching (speeds up load times and improves SSD lifespan)
user_pref("browser.cache.disk.enable", false);
// Force media cache to load in RAM instead of disk
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);
// Set maximum RAM cache size for media files to 64MB
user_pref("media.memory_cache_max_size", 65536);
// Save session state to disk every 60 seconds (default is 15s; reduces disk write overhead)
user_pref("browser.sessionstore.interval", 60000);
// Disable speculative pre-connections to save network resources and improve privacy
user_pref("network.http.speculative-parallel-limit", 0);
// Disable DNS prefetching of links to prevent background DNS requests
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
// Disable speculative loading when hovering over the address bar dropdown
user_pref("browser.urlbar.speculativeConnect.enabled", false);
// Disable speculative loading of bookmark links
user_pref("browser.places.speculativeConnect.enabled", false);




// Enable strict tracking protection (blocks trackers, cryptominers, fingerprinters)
user_pref("browser.contentblocking.category", "strict");
// Inform websites not to track your browsing (Do Not Track header)
user_pref("privacy.donottrackheader.enabled", true);
// Enable general tracking protection features
user_pref("privacy.trackingprotection.enabled", true);
// Enable Global Privacy Control (GPC) to signal opt-out of data sale/sharing
user_pref("privacy.globalprivacycontrol.enabled", true);
// Change geolocation server from Google to a privacy-respecting alternative (BeaconDB)
user_pref("geo.provider.network.url", "https://beacondb.net/v1/geolocate");
// Disable Mozilla Normandy (remote management and silent feature rollouts)
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
// Disable Mozilla Shield/Studies (opt-out of experimental feature testing)
user_pref("app.shield.optoutstudies.enabled", false);
// Disable all built-in telemetry archiving and ping reporting
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.cachedClientID", "");
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.hybridContent.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.previousBuildID", "");
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.server_owner", "");
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
// Disable Firefox data reporting policies and health uploads
user_pref("datareporting.healthreport.infoURL", "");
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.policy.firstRunURL", "");
// Disable sending automatic crash reports to Mozilla
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.tabs.crashReporting.email", false);
user_pref("browser.tabs.crashReporting.emailMe", false);
user_pref("breakpad.reportURL", "");
user_pref("security.ssl.errorReporting.automatic", false);
user_pref("toolkit.crashreporter.infoURL", "");
user_pref("dom.ipc.plugins.reportCrashURL", false);
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
// Disable experimental features and system studies
user_pref("network.allow-experiments", false);
// Completely disable Pocket integration
user_pref("extensions.pocket.api", "");
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.pocket.site", "");
user_pref("extensions.pocket.oAuthConsumerKey", "");
// Disable sponsored content, tiles, and stories on the New Tab page
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredCheckboxes", false);
// Disable recommendations for addons on the addons management page
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
// Disable sponsored content discovery features
user_pref("browser.discovery.enabled", false);
// Disable "More from Mozilla" section in the browser settings
user_pref("browser.preferences.moreFromMozilla", false);
// Completely disable Firefox's built-in AI/ML features, sidebars, and smart tab grouping
user_pref("browser.ai.control.default", "blocked");
user_pref("browser.ml.enable", false);
user_pref("browser.ml.chat.enabled", false);
user_pref("browser.ml.chat.menu", false);
user_pref("browser.tabs.groups.smart.enabled", false);
user_pref("browser.ml.linkPreview.enabled", false);
