// Компактный интерфейс.
user_pref("browser.uidensity", 1);
user_pref("browser.compactmode.show", true);
user_pref("browser.toolbars.bookmarks.visibility", "never");
user_pref("sidebar.visibility", "hide-on-close");

// Пустая стартовая страница и новая вкладка.
user_pref("browser.startup.page", 0);
user_pref("browser.startup.homepage", "about:blank");
user_pref("browser.newtabpage.enabled", false);

// Без Firefox Sync и встроенного хранения паролей.
user_pref("identity.fxaccounts.enabled", false);
user_pref("signon.rememberSignons", false);

// Приватность и отключение необязательной отправки данных.
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("privacy.globalprivacycontrol.enabled", true);
user_pref("browser.discovery.enabled", false);
