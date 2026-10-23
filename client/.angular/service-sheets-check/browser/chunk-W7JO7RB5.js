import {
  Injectable,
  PrimeNG,
  TranslocoService,
  getBrowserLang,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-KBN2KVTI.js";

// src/app/services/language-service.ts
var LanguageService = class _LanguageService {
  translocoService = inject(TranslocoService);
  primeng = inject(PrimeNG);
  availableLangs = ["it", "en"];
  fallbackLang = "it";
  constructor() {
    this.init();
  }
  init() {
    const lang = this.determineLanguage();
    this.setLanguage(lang);
  }
  determineLanguage() {
    const savedLang = localStorage.getItem("user-lang");
    if (savedLang && this.availableLangs.includes(savedLang)) {
      return savedLang;
    }
    const browserLang = getBrowserLang() || "";
    if (this.availableLangs.includes(browserLang)) {
      return browserLang;
    }
    return this.fallbackLang;
  }
  setLanguage(lang) {
    if (!this.availableLangs.includes(lang))
      return;
    localStorage.setItem("user-lang", lang);
    this.translocoService.setActiveLang(lang);
    document.documentElement.lang = lang;
    this.syncPrimeNG(lang);
  }
  syncPrimeNG(lang) {
    this.translocoService.selectTranslation(lang).subscribe((labels) => {
      if (labels["primeng"]) {
        this.primeng.setTranslation(labels["primeng"]);
      }
    });
  }
  get currentLang() {
    return this.translocoService.getActiveLang();
  }
  static \u0275fac = function LanguageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LanguageService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LanguageService, factory: _LanguageService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LanguageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  LanguageService
};
//# sourceMappingURL=chunk-W7JO7RB5.js.map
