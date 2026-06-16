// Тонкие вкладки и поисковая строка
user_pref("browser.uidensity", 1);

// Отключаем Pocket
user_pref("extensions.pocket.api", "");
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.pocket.site", "");
user_pref("extensions.pocket.oAuthConsumerKey", "");

// Отключаем анимацию открытия видео на фуллскрин и подсказку "нажмите esc.."
user_pref("full-screen-api.transition-duration.enter", "0");
user_pref("full-screen-api.transition-duration.leave", "0");
user_pref("full-screen-api.warning.timeout", 0);

// Просим сайты не отслеживать Вас
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.donottrackheader.enabled", true);

// Отключаем телеметрию и отправку отчетов
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
user_pref("datareporting.healthreport.infoURL", "");
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.policy.firstRunURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.tabs.crashReporting.email", false);
user_pref("browser.tabs.crashReporting.emailMe", false);
user_pref("breakpad.reportURL", "");
user_pref("security.ssl.errorReporting.automatic", false);
user_pref("toolkit.crashreporter.infoURL", "");
user_pref("network.allow-experiments", false);
user_pref("dom.ipc.plugins.reportCrashURL", false);
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);

// === Nova / Proton UI (Дизайн) ===
user_pref("browser.nova.enabled", true);
user_pref("browser.newtabpage.activity-stream.nova.enabled", true);
user_pref("browser.urlbar.quicksuggest.ampTopPickUseNovaIconSize", true);

// === Компактный режим и поддержка пользовательских стилей (Aesthetics) ===
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("browser.compactmode.show", true);
user_pref("browser.fullscreen.autohide", true);

// === Тонкие современные полосы прокрутки (Modern Scrollbars) ===
user_pref("widget.non-native-theme.enabled", true);
user_pref("widget.non-native-theme.scrollbar.style", 5);
user_pref("widget.non-native-theme.scrollbar.size.override", 12);
user_pref("widget.gtk.overlay-scrollbars.enabled", true);

// === Очистка интерфейса от рекламы и спонсорского контента ===
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredCheckboxes", false);
user_pref("browser.preferences.moreFromMozilla", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("browser.discovery.enabled", false);
