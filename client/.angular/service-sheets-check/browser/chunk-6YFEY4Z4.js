import {
  LanguageService
} from "./chunk-W7JO7RB5.js";
import {
  ClanDataService,
  CompatibilityService,
  DAYS_METADATA
} from "./chunk-ZK2UNXUK.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-7FVI2AUE.js";
import {
  CommonModule,
  Component,
  Injectable,
  Input,
  NgClass,
  Output,
  RouterLink,
  TranslocoDirective,
  TranslocoService,
  __spreadProps,
  __spreadValues,
  computed,
  inject,
  input,
  output,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-KBN2KVTI.js";

// src/app/components/top-bar/top-bar.ts
function TopBarComponent_header_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "header", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 6);
    \u0275\u0275element(6, "path", 7)(7, "circle", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(8, "div")(9, "span", 9);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 10);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "nav", 11)(14, "button", 12);
    \u0275\u0275listener("click", function TopBarComponent_header_0_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.tabChange.emit("dashboard"));
    });
    \u0275\u0275element(15, "i", 13);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 12);
    \u0275\u0275listener("click", function TopBarComponent_header_0_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.tabChange.emit("members"));
    });
    \u0275\u0275element(18, "i", 14);
    \u0275\u0275text(19);
    \u0275\u0275elementStart(20, "span", 15);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "button", 12);
    \u0275\u0275listener("click", function TopBarComponent_header_0_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.tabChange.emit("services"));
    });
    \u0275\u0275element(23, "i", 16);
    \u0275\u0275text(24);
    \u0275\u0275elementStart(25, "span", 15);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "button", 12);
    \u0275\u0275listener("click", function TopBarComponent_header_0_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.tabChange.emit("matrix"));
    });
    \u0275\u0275element(28, "i", 17);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 12);
    \u0275\u0275listener("click", function TopBarComponent_header_0_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.tabChange.emit("schedule"));
    });
    \u0275\u0275element(31, "i", 18);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 19)(34, "a", 20);
    \u0275\u0275element(35, "i", 21);
    \u0275\u0275elementStart(36, "span", 22);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "button", 23);
    \u0275\u0275listener("click", function TopBarComponent_header_0_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openImport.emit());
    });
    \u0275\u0275element(39, "i", 24);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 25);
    \u0275\u0275listener("click", function TopBarComponent_header_0_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openWhatsApp.emit());
    });
    \u0275\u0275element(42, "i", 26);
    \u0275\u0275elementStart(43, "span", 27);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 28)(46, "button", 29);
    \u0275\u0275listener("click", function TopBarComponent_header_0_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setLanguage("it"));
    });
    \u0275\u0275text(47, " IT ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 29);
    \u0275\u0275listener("click", function TopBarComponent_header_0_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setLanguage("en"));
    });
    \u0275\u0275text(49, " EN ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(50, "div", 30)(51, "button", 31);
    \u0275\u0275listener("click", function TopBarComponent_header_0_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.tabChange.emit("dashboard"));
    });
    \u0275\u0275text(52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "button", 31);
    \u0275\u0275listener("click", function TopBarComponent_header_0_Template_button_click_53_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.tabChange.emit("members"));
    });
    \u0275\u0275text(54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "button", 31);
    \u0275\u0275listener("click", function TopBarComponent_header_0_Template_button_click_55_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.tabChange.emit("services"));
    });
    \u0275\u0275text(56);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "button", 31);
    \u0275\u0275listener("click", function TopBarComponent_header_0_Template_button_click_57_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.tabChange.emit("matrix"));
    });
    \u0275\u0275text(58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "button", 31);
    \u0275\u0275listener("click", function TopBarComponent_header_0_Template_button_click_59_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.tabChange.emit("schedule"));
    });
    \u0275\u0275text(60);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(t_r3("app.title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("app.subtitle"));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.activeTab() === "dashboard" ? "bg-white text-slate-900 font-semibold shadow-xs" : "text-slate-600 hover:text-slate-900 font-medium");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("app.nav.dashboard"), " ");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.activeTab() === "members" ? "bg-white text-slate-900 font-semibold shadow-xs" : "text-slate-600 hover:text-slate-900 font-medium");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("app.nav.members"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.clanData.members().length);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.activeTab() === "services" ? "bg-white text-slate-900 font-semibold shadow-xs" : "text-slate-600 hover:text-slate-900 font-medium");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("app.nav.services"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.clanData.services().length);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.activeTab() === "matrix" ? "bg-blue-600 text-white font-semibold shadow-xs" : "text-slate-600 hover:text-slate-900 font-medium");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("app.nav.matrix"), " ");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.activeTab() === "schedule" ? "bg-white text-slate-900 font-semibold shadow-xs" : "text-slate-600 hover:text-slate-900 font-medium");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("app.nav.schedule"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275attribute("title", t_r3("sheets.title"))("aria-label", t_r3("sheets.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("sheets.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("app.actions.importData"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("app.actions.exportWhatsApp"));
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.currentLang === "it" ? "bg-white text-slate-900 shadow-2xs font-bold" : "text-slate-500 hover:text-slate-800");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.currentLang === "en" ? "bg-white text-slate-900 shadow-2xs font-bold" : "text-slate-500 hover:text-slate-800");
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.activeTab() === "dashboard" ? "text-blue-600 font-bold border-b-2 border-blue-600" : "text-slate-600");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("app.nav.dashboard"), " ");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.activeTab() === "members" ? "text-blue-600 font-bold border-b-2 border-blue-600" : "text-slate-600");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", t_r3("app.nav.members"), " (", ctx_r1.clanData.members().length, ") ");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.activeTab() === "services" ? "text-blue-600 font-bold border-b-2 border-blue-600" : "text-slate-600");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", t_r3("app.nav.services"), " (", ctx_r1.clanData.services().length, ") ");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.activeTab() === "matrix" ? "text-blue-600 font-bold border-b-2 border-blue-600" : "text-slate-600");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("app.nav.matrix"), " ");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.activeTab() === "schedule" ? "text-blue-600 font-bold border-b-2 border-blue-600" : "text-slate-600");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r3("app.nav.schedule"), " ");
  }
}
var TopBarComponent = class _TopBarComponent {
  clanData = inject(ClanDataService);
  langService = inject(LanguageService);
  activeTab = input.required(...ngDevMode ? [{ debugName: "activeTab" }] : (
    /* istanbul ignore next */
    []
  ));
  tabChange = output();
  openImport = output();
  openWhatsApp = output();
  autoAssign = output();
  openReset = output();
  setLanguage(lang) {
    this.langService.setLanguage(lang);
  }
  get currentLang() {
    return this.langService.currentLang;
  }
  static \u0275fac = function TopBarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TopBarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TopBarComponent, selectors: [["app-top-bar"]], inputs: { activeTab: [1, "activeTab"] }, outputs: { tabChange: "tabChange", openImport: "openImport", openWhatsApp: "openWhatsApp", autoAssign: "autoAssign", openReset: "openReset" }, decls: 1, vars: 0, consts: [["class", "bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs", 4, "transloco"], [1, "bg-white", "border-b", "border-slate-200", "sticky", "top-0", "z-30", "shadow-xs"], [1, "max-w-7xl", "mx-auto", "px-4", "sm:px-6", "lg:px-8"], [1, "flex", "items-center", "justify-between", "h-16"], [1, "flex", "items-center", "gap-3"], [1, "w-10", "h-10", "rounded-xl", "bg-amber-600", "text-white", "flex", "items-center", "justify-center", "font-bold", "shadow-xs"], ["viewBox", "0 0 24 24", "fill", "currentColor", 1, "w-6", "h-6"], ["d", "M12 2C11.5 5 9.5 8 7 9C8.5 10 9.5 11.5 10 13C8 12.5 5.5 13 4 15C6 16.5 8.5 15.5 10.5 14C10.8 16 10.5 18.5 9 20C11 19.5 11.8 17.5 12 15C12.2 17.5 13 19.5 15 20C13.5 18.5 13.2 16 13.5 14C15.5 15.5 18 16.5 20 15C18.5 13 16 12.5 14 13C14.5 11.5 15.5 10 17 9C14.5 8 12.5 5 12 2Z"], ["cx", "12", "cy", "21.5", "r", "1"], [1, "text-lg", "font-bold", "tracking-tight", "text-slate-900", "block", "leading-tight"], [1, "text-xs", "text-slate-500", "font-medium", "hidden", "sm:block"], [1, "hidden", "md:flex", "items-center", "gap-1", "bg-slate-100", "p-1", "rounded-xl"], ["type", "button", 1, "px-3.5", "py-1.5", "text-xs", "rounded-lg", "transition-colors", "whitespace-nowrap", "cursor-pointer", "flex", "items-center", "gap-1.5", 3, "click"], [1, "pi", "pi-th-large", "text-xs"], [1, "pi", "pi-users", "text-xs"], [1, "px-1.5", "py-0.2", "text-[10px]", "rounded-full", "bg-slate-200", "text-slate-700", "font-mono"], [1, "pi", "pi-heart", "text-xs"], [1, "pi", "pi-check-circle", "text-xs"], [1, "pi", "pi-calendar", "text-xs"], [1, "flex", "items-center", "gap-2"], ["routerLink", "/service-sheets", 1, "inline-flex", "items-center", "gap-1.5", "px-3", "py-1.5", "text-xs", "font-medium", "text-slate-700", "bg-white", "border", "border-slate-300", "rounded-lg", "hover:bg-slate-50"], ["aria-hidden", "true", 1, "pi", "pi-print"], [1, "hidden", "xl:inline"], ["type", "button", 1, "hidden", "sm:inline-flex", "items-center", "gap-1.5", "px-3", "py-1.5", "text-xs", "font-medium", "text-slate-700", "bg-white", "border", "border-slate-300", "rounded-lg", "hover:bg-slate-50", "transition-colors", "shadow-2xs", "cursor-pointer", 3, "click"], [1, "pi", "pi-file-import", "text-xs", "text-blue-600"], ["type", "button", 1, "inline-flex", "items-center", "gap-1.5", "px-3", "py-1.5", "text-xs", "font-medium", "text-emerald-700", "bg-emerald-50", "border", "border-emerald-200", "rounded-lg", "hover:bg-emerald-100", "transition-colors", "shadow-2xs", "cursor-pointer", 3, "click"], [1, "pi", "pi-whatsapp", "text-xs", "text-emerald-600"], [1, "hidden", "md:inline"], [1, "flex", "items-center", "border", "border-slate-200", "rounded-lg", "p-0.5", "bg-slate-50", "text-xs", "font-medium"], ["type", "button", 1, "px-2", "py-1", "rounded", "transition-colors", "cursor-pointer", 3, "click"], [1, "flex", "md:hidden", "items-center", "justify-between", "border-t", "border-slate-100", "py-2", "overflow-x-auto", "gap-2"], ["type", "button", 1, "px-2", "py-1", "text-xs", "whitespace-nowrap", "cursor-pointer", 3, "click"]], template: function TopBarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, TopBarComponent_header_0_Template, 61, 45, "header", 0);
    }
  }, dependencies: [CommonModule, RouterLink, TranslocoDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TopBarComponent, [{
    type: Component,
    args: [{ selector: "app-top-bar", standalone: true, imports: [CommonModule, RouterLink, TranslocoDirective], template: `<header class="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs" *transloco="let t">\r
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">\r
    <div class="flex items-center justify-between h-16">\r
      <div class="flex items-center gap-3">\r
        <div\r
          class="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold shadow-xs"\r
        >\r
          <svg class="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">\r
            <path\r
              d="M12 2C11.5 5 9.5 8 7 9C8.5 10 9.5 11.5 10 13C8 12.5 5.5 13 4 15C6 16.5 8.5 15.5 10.5 14C10.8 16 10.5 18.5 9 20C11 19.5 11.8 17.5 12 15C12.2 17.5 13 19.5 15 20C13.5 18.5 13.2 16 13.5 14C15.5 15.5 18 16.5 20 15C18.5 13 16 12.5 14 13C14.5 11.5 15.5 10 17 9C14.5 8 12.5 5 12 2Z"\r
            />\r
            <circle cx="12" cy="21.5" r="1" />\r
          </svg>\r
        </div>\r
        <div>\r
          <span class="text-lg font-bold tracking-tight text-slate-900 block leading-tight">{{\r
            t('app.title')\r
          }}</span>\r
          <span class="text-xs text-slate-500 font-medium hidden sm:block">{{\r
            t('app.subtitle')\r
          }}</span>\r
        </div>\r
      </div>\r
\r
      <nav class="hidden md:flex items-center gap-1 bg-slate-100 p-1 rounded-xl">\r
        <button\r
          type="button"\r
          (click)="tabChange.emit('dashboard')"\r
          [class]="\r
            activeTab() === 'dashboard'\r
              ? 'bg-white text-slate-900 font-semibold shadow-xs'\r
              : 'text-slate-600 hover:text-slate-900 font-medium'\r
          "\r
          class="px-3.5 py-1.5 text-xs rounded-lg transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5"\r
        >\r
          <i class="pi pi-th-large text-xs"></i> {{ t('app.nav.dashboard') }}\r
        </button>\r
        <button\r
          type="button"\r
          (click)="tabChange.emit('members')"\r
          [class]="\r
            activeTab() === 'members'\r
              ? 'bg-white text-slate-900 font-semibold shadow-xs'\r
              : 'text-slate-600 hover:text-slate-900 font-medium'\r
          "\r
          class="px-3.5 py-1.5 text-xs rounded-lg transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5"\r
        >\r
          <i class="pi pi-users text-xs"></i> {{ t('app.nav.members') }}\r
          <span\r
            class="px-1.5 py-0.2 text-[10px] rounded-full bg-slate-200 text-slate-700 font-mono"\r
            >{{ clanData.members().length }}</span\r
          >\r
        </button>\r
        <button\r
          type="button"\r
          (click)="tabChange.emit('services')"\r
          [class]="\r
            activeTab() === 'services'\r
              ? 'bg-white text-slate-900 font-semibold shadow-xs'\r
              : 'text-slate-600 hover:text-slate-900 font-medium'\r
          "\r
          class="px-3.5 py-1.5 text-xs rounded-lg transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5"\r
        >\r
          <i class="pi pi-heart text-xs"></i> {{ t('app.nav.services') }}\r
          <span\r
            class="px-1.5 py-0.2 text-[10px] rounded-full bg-slate-200 text-slate-700 font-mono"\r
            >{{ clanData.services().length }}</span\r
          >\r
        </button>\r
        <button\r
          type="button"\r
          (click)="tabChange.emit('matrix')"\r
          [class]="\r
            activeTab() === 'matrix'\r
              ? 'bg-blue-600 text-white font-semibold shadow-xs'\r
              : 'text-slate-600 hover:text-slate-900 font-medium'\r
          "\r
          class="px-3.5 py-1.5 text-xs rounded-lg transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5"\r
        >\r
          <i class="pi pi-check-circle text-xs"></i> {{ t('app.nav.matrix') }}\r
        </button>\r
        <button\r
          type="button"\r
          (click)="tabChange.emit('schedule')"\r
          [class]="\r
            activeTab() === 'schedule'\r
              ? 'bg-white text-slate-900 font-semibold shadow-xs'\r
              : 'text-slate-600 hover:text-slate-900 font-medium'\r
          "\r
          class="px-3.5 py-1.5 text-xs rounded-lg transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5"\r
        >\r
          <i class="pi pi-calendar text-xs"></i> {{ t('app.nav.schedule') }}\r
        </button>\r
      </nav>\r
\r
      <div class="flex items-center gap-2">\r
        <a routerLink="/service-sheets" [attr.title]="t('sheets.title')" [attr.aria-label]="t('sheets.title')"\r
          class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50">\r
          <i class="pi pi-print" aria-hidden="true"></i><span class="hidden xl:inline">{{ t('sheets.title') }}</span>\r
        </a>\r
        <button\r
          type="button"\r
          (click)="openImport.emit()"\r
          class="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors shadow-2xs cursor-pointer"\r
        >\r
          <i class="pi pi-file-import text-xs text-blue-600"></i> {{ t('app.actions.importData') }}\r
        </button>\r
        <button\r
          type="button"\r
          (click)="openWhatsApp.emit()"\r
          class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg hover:bg-emerald-100 transition-colors shadow-2xs cursor-pointer"\r
        >\r
          <i class="pi pi-whatsapp text-xs text-emerald-600"></i>\r
          <span class="hidden md:inline">{{ t('app.actions.exportWhatsApp') }}</span>\r
        </button>\r
        <div\r
          class="flex items-center border border-slate-200 rounded-lg p-0.5 bg-slate-50 text-xs font-medium"\r
        >\r
          <button\r
            type="button"\r
            (click)="setLanguage('it')"\r
            [class]="\r
              currentLang === 'it'\r
                ? 'bg-white text-slate-900 shadow-2xs font-bold'\r
                : 'text-slate-500 hover:text-slate-800'\r
            "\r
            class="px-2 py-1 rounded transition-colors cursor-pointer"\r
          >\r
            IT\r
          </button>\r
          <button\r
            type="button"\r
            (click)="setLanguage('en')"\r
            [class]="\r
              currentLang === 'en'\r
                ? 'bg-white text-slate-900 shadow-2xs font-bold'\r
                : 'text-slate-500 hover:text-slate-800'\r
            "\r
            class="px-2 py-1 rounded transition-colors cursor-pointer"\r
          >\r
            EN\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Mobile Sub-bar -->\r
    <div\r
      class="flex md:hidden items-center justify-between border-t border-slate-100 py-2 overflow-x-auto gap-2"\r
    >\r
      <button\r
        type="button"\r
        (click)="tabChange.emit('dashboard')"\r
        [class]="\r
          activeTab() === 'dashboard'\r
            ? 'text-blue-600 font-bold border-b-2 border-blue-600'\r
            : 'text-slate-600'\r
        "\r
        class="px-2 py-1 text-xs whitespace-nowrap cursor-pointer"\r
      >\r
        {{ t('app.nav.dashboard') }}\r
      </button>\r
      <button\r
        type="button"\r
        (click)="tabChange.emit('members')"\r
        [class]="\r
          activeTab() === 'members'\r
            ? 'text-blue-600 font-bold border-b-2 border-blue-600'\r
            : 'text-slate-600'\r
        "\r
        class="px-2 py-1 text-xs whitespace-nowrap cursor-pointer"\r
      >\r
        {{ t('app.nav.members') }} ({{ clanData.members().length }})\r
      </button>\r
      <button\r
        type="button"\r
        (click)="tabChange.emit('services')"\r
        [class]="\r
          activeTab() === 'services'\r
            ? 'text-blue-600 font-bold border-b-2 border-blue-600'\r
            : 'text-slate-600'\r
        "\r
        class="px-2 py-1 text-xs whitespace-nowrap cursor-pointer"\r
      >\r
        {{ t('app.nav.services') }} ({{ clanData.services().length }})\r
      </button>\r
      <button\r
        type="button"\r
        (click)="tabChange.emit('matrix')"\r
        [class]="\r
          activeTab() === 'matrix'\r
            ? 'text-blue-600 font-bold border-b-2 border-blue-600'\r
            : 'text-slate-600'\r
        "\r
        class="px-2 py-1 text-xs whitespace-nowrap cursor-pointer"\r
      >\r
        {{ t('app.nav.matrix') }}\r
      </button>\r
      <button\r
        type="button"\r
        (click)="tabChange.emit('schedule')"\r
        [class]="\r
          activeTab() === 'schedule'\r
            ? 'text-blue-600 font-bold border-b-2 border-blue-600'\r
            : 'text-slate-600'\r
        "\r
        class="px-2 py-1 text-xs whitespace-nowrap cursor-pointer"\r
      >\r
        {{ t('app.nav.schedule') }}\r
      </button>\r
    </div>\r
  </div>\r
</header>\r
` }]
  }], null, { activeTab: [{ type: Input, args: [{ isSignal: true, alias: "activeTab", required: true }] }], tabChange: [{ type: Output, args: ["tabChange"] }], openImport: [{ type: Output, args: ["openImport"] }], openWhatsApp: [{ type: Output, args: ["openWhatsApp"] }], autoAssign: [{ type: Output, args: ["autoAssign"] }], openReset: [{ type: Output, args: ["openReset"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TopBarComponent, { className: "TopBarComponent", filePath: "app/components/top-bar/top-bar.ts", lineNumber: 16 });
})();

// src/app/components/dashboard-view/dashboard-view.ts
var _c0 = (a0) => ({ count: a0 });
var _forTrack0 = ($index, $item) => $item.id;
function DashboardViewComponent_div_0_For_68_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const slot_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate3(" ", ctx_r1.getDayShort(slot_r3.day), " ", slot_r3.startTime, "-", slot_r3.endTime, " ");
  }
}
function DashboardViewComponent_div_0_For_68_Conditional_14_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const scout_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", scout_r4.name, " ", scout_r4.surname, " ");
  }
}
function DashboardViewComponent_div_0_For_68_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "span", 48);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, DashboardViewComponent_div_0_For_68_Conditional_14_For_4_Template, 2, 2, "span", 49, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const assigned_r5 = \u0275\u0275readContextLet(0);
    const t_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("dashboard.assignedTag"));
    \u0275\u0275advance();
    \u0275\u0275repeater(assigned_r5);
  }
}
function DashboardViewComponent_div_0_For_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "div", 33)(2, "div", 40)(3, "span", 41);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 42);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 43)(8, "span", 44);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 45);
    \u0275\u0275text(11, "\xB7");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(12, DashboardViewComponent_div_0_For_68_For_13_Template, 2, 3, "span", 46, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(14, DashboardViewComponent_div_0_For_68_Conditional_14_Template, 5, 1, "div", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const srv_r7 = ctx.$implicit;
    const t_r6 = \u0275\u0275nextContext().$implicit;
    const assigned_r8 = \u0275\u0275storeLet(\u0275\u0275nextContext().getAssignedScouts(srv_r7.id));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(srv_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", assigned_r8.length, " ", t_r6("services.scoutsCount"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(srv_r7.organization);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(srv_r7.scheduleSlots);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(assigned_r8.length > 0 ? 14 : -1);
  }
}
function DashboardViewComponent_div_0_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r6("dashboard.emptyServices"), " ");
  }
}
function DashboardViewComponent_div_0_For_81_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const assignedService_r9 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(assignedService_r9.name);
  }
}
function DashboardViewComponent_div_0_For_81_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r6("dashboard.unassigned"));
  }
}
function DashboardViewComponent_div_0_For_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "div", 36)(2, "div", 50)(3, "div", 51);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "span", 52);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 44);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div");
    \u0275\u0275conditionalCreate(11, DashboardViewComponent_div_0_For_81_Conditional_11_Template, 2, 1, "span", 53)(12, DashboardViewComponent_div_0_For_81_Conditional_12_Template, 2, 1, "span", 54);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r10 = ctx.$implicit;
    const t_r6 = \u0275\u0275nextContext().$implicit;
    const assignedService_r11 = \u0275\u0275storeLet(\u0275\u0275nextContext().getService(m_r10.assignedServiceId));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", m_r10.name.charAt(0), "", m_r10.surname.charAt(0), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", m_r10.name, " ", m_r10.surname);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", m_r10.commitments.length, " ", t_r6("dashboard.commitmentsCount"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(assignedService_r11 ? 11 : 12);
  }
}
function DashboardViewComponent_div_0_Conditional_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r6("dashboard.emptyMembers"), " ");
  }
}
function DashboardViewComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "span", 4);
    \u0275\u0275element(4, "i", 5);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h1", 6);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 7);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 8)(11, "button", 9);
    \u0275\u0275listener("click", function DashboardViewComponent_div_0_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToMatrix.emit());
    });
    \u0275\u0275element(12, "i", 10);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 11);
    \u0275\u0275listener("click", function DashboardViewComponent_div_0_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openImport.emit());
    });
    \u0275\u0275element(15, "i", 12);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 13);
    \u0275\u0275listener("click", function DashboardViewComponent_div_0_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.autoAssign.emit());
    });
    \u0275\u0275element(18, "i", 14);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(20, "div", 15)(21, "div", 16)(22, "span", 17);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 18);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 19);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 16)(29, "span", 17);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span", 18);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 19);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 16)(36, "span", 17);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 20);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span", 21);
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 16)(43, "span", 17);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span", 22);
    \u0275\u0275text(46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span", 23);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 16)(50, "span", 17);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "span", 24);
    \u0275\u0275text(53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "span", 25);
    \u0275\u0275text(55);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(56, "div", 26)(57, "div", 27)(58, "div", 28)(59, "div")(60, "h3", 29);
    \u0275\u0275text(61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "p", 30);
    \u0275\u0275text(63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "button", 31);
    \u0275\u0275listener("click", function DashboardViewComponent_div_0_Template_button_click_64_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToServices.emit());
    });
    \u0275\u0275text(65);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 32);
    \u0275\u0275repeaterCreate(67, DashboardViewComponent_div_0_For_68_Template, 15, 6, "div", 33, _forTrack0);
    \u0275\u0275conditionalCreate(69, DashboardViewComponent_div_0_Conditional_69_Template, 2, 1, "div", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 27)(71, "div", 28)(72, "div")(73, "h3", 29);
    \u0275\u0275text(74);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "p", 30);
    \u0275\u0275text(76);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "button", 31);
    \u0275\u0275listener("click", function DashboardViewComponent_div_0_Template_button_click_77_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToMembers.emit());
    });
    \u0275\u0275text(78);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "div", 35);
    \u0275\u0275repeaterCreate(80, DashboardViewComponent_div_0_For_81_Template, 13, 8, "div", 36, _forTrack0);
    \u0275\u0275conditionalCreate(82, DashboardViewComponent_div_0_Conditional_82_Template, 2, 1, "div", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "div", 37)(84, "span", 30);
    \u0275\u0275text(85);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "button", 38);
    \u0275\u0275listener("click", function DashboardViewComponent_div_0_Template_button_click_86_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAddMember.emit());
    });
    \u0275\u0275element(87, "i", 39);
    \u0275\u0275text(88);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const t_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", t_r6("app.yearBadge"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r6("dashboard.heroTitle"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("dashboard.heroSubtitle"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r6("dashboard.exploreMatrix"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r6("dashboard.importCommitments"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r6("dashboard.launchAutoAssign"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r6("stats.members"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.clanData.statistics().totalMembers);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("dashboard.roversAndScolte"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r6("stats.services"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.clanData.statistics().totalServices);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("dashboard.availableEntities"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r6("stats.assigned"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.clanData.statistics().assignedCount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("dashboard.withActiveService"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r6("stats.unassigned"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.clanData.statistics().unassignedCount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("dashboard.awaitingPlacement"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r6("stats.compatibilityRate"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.clanData.statistics().averageCompatibilityRate, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("dashboard.averageFeasibility"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", t_r6("dashboard.servicesCoverage"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("dashboard.servicesCoverageSub"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r6("dashboard.seeAll"), " \u2192 ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.clanData.services());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.clanData.services().length === 0 ? 69 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r6("dashboard.membersStatus"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("dashboard.membersStatusSub"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r6("dashboard.manage"), " \u2192 ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.clanData.members());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.clanData.members().length === 0 ? 82 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r6("dashboard.totalCount", \u0275\u0275pureFunction1(31, _c0, ctx_r1.clanData.members().length)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r6("dashboard.addNewBoy"), " ");
  }
}
var DashboardViewComponent = class _DashboardViewComponent {
  clanData = inject(ClanDataService);
  goToMatrix = output();
  goToMembers = output();
  goToServices = output();
  openImport = output();
  autoAssign = output();
  openAddMember = output();
  getAssignedScouts(serviceId) {
    return this.clanData.members().filter((m) => m.assignedServiceId === serviceId);
  }
  getService(serviceId) {
    if (!serviceId)
      return void 0;
    return this.clanData.services().find((s) => s.id === serviceId);
  }
  getDayShort(day) {
    return DAYS_METADATA.find((d) => d.id === day)?.shortIt || day;
  }
  static \u0275fac = function DashboardViewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardViewComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardViewComponent, selectors: [["app-dashboard-view"]], outputs: { goToMatrix: "goToMatrix", goToMembers: "goToMembers", goToServices: "goToServices", openImport: "openImport", autoAssign: "autoAssign", openAddMember: "openAddMember" }, decls: 1, vars: 0, consts: [["class", "space-y-6", 4, "transloco"], [1, "space-y-6"], [1, "bg-gradient-to-r", "from-amber-700", "via-amber-800", "to-amber-900", "text-white", "rounded-2xl", "p-6", "sm:p-8", "shadow-sm"], [1, "max-w-3xl"], [1, "inline-flex", "items-center", "gap-1.5", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-medium", "bg-amber-600/50", "text-amber-100", "mb-3", "border", "border-amber-500/30"], [1, "pi", "pi-compass", "text-xs"], [1, "text-2xl", "sm:text-3xl", "font-bold", "tracking-tight", "mb-2"], [1, "text-amber-100", "text-sm", "leading-relaxed", "mb-6"], [1, "flex", "flex-wrap", "items-center", "gap-3"], ["type", "button", 1, "px-4", "py-2", "text-xs", "font-semibold", "bg-white", "text-amber-950", "rounded-xl", "hover:bg-amber-50", "transition-colors", "shadow-sm", "cursor-pointer", "flex", "items-center", "gap-2", 3, "click"], [1, "pi", "pi-check-circle", "text-blue-600"], ["type", "button", 1, "px-4", "py-2", "text-xs", "font-medium", "bg-amber-800/80", "hover:bg-amber-700/80", "text-white", "rounded-xl", "border", "border-amber-600/50", "transition-colors", "cursor-pointer", "flex", "items-center", "gap-2", 3, "click"], [1, "pi", "pi-file-import"], ["type", "button", 1, "px-4", "py-2", "text-xs", "font-bold", "bg-amber-500", "hover:bg-amber-400", "text-amber-950", "rounded-xl", "transition-colors", "cursor-pointer", "flex", "items-center", "gap-2", 3, "click"], [1, "pi", "pi-sparkles"], [1, "grid", "grid-cols-2", "md:grid-cols-3", "lg:grid-cols-5", "gap-4"], [1, "bg-white", "p-4", "rounded-xl", "border", "border-slate-200", "shadow-2xs"], [1, "text-xs", "text-slate-500", "font-medium", "block", "mb-1"], [1, "text-2xl", "font-bold", "text-slate-900", "font-mono", "tabular-nums"], [1, "text-[11px]", "text-slate-400", "block", "mt-1"], [1, "text-2xl", "font-bold", "text-emerald-600", "font-mono", "tabular-nums"], [1, "text-[11px]", "text-emerald-600/80", "block", "mt-1"], [1, "text-2xl", "font-bold", "text-amber-600", "font-mono", "tabular-nums"], [1, "text-[11px]", "text-amber-600/80", "block", "mt-1"], [1, "text-2xl", "font-bold", "text-blue-600", "font-mono", "tabular-nums"], [1, "text-[11px]", "text-blue-600/80", "block", "mt-1"], [1, "grid", "grid-cols-1", "lg:grid-cols-2", "gap-6"], [1, "bg-white", "p-5", "rounded-xl", "border", "border-slate-200", "shadow-2xs"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "text-sm", "font-semibold", "text-slate-900"], [1, "text-xs", "text-slate-500"], ["type", "button", 1, "text-xs", "text-blue-600", "hover:text-blue-800", "font-medium", "cursor-pointer", 3, "click"], [1, "space-y-3", "max-h-[380px]", "overflow-y-auto", "pr-1"], [1, "p-3", "rounded-lg", "border", "border-slate-100", "bg-slate-50/50"], [1, "p-6", "text-center", "text-slate-400", "text-xs", "italic"], [1, "space-y-2", "max-h-[380px]", "overflow-y-auto", "pr-1"], [1, "flex", "items-center", "justify-between", "p-2.5", "rounded-lg", "border", "border-slate-100", "hover:bg-slate-50"], [1, "mt-4", "pt-3", "border-t", "border-slate-100", "flex", "items-center", "justify-between"], ["type", "button", 1, "text-xs", "font-medium", "text-blue-600", "hover:text-blue-800", "cursor-pointer", "flex", "items-center", "gap-1", 3, "click"], [1, "pi", "pi-plus", "text-xs"], [1, "flex", "items-center", "justify-between", "mb-1.5"], [1, "font-medium", "text-xs", "text-slate-900"], [1, "text-xs", "font-mono", "font-semibold", "px-2", "py-0.5", "rounded-full", "bg-slate-100", "text-slate-700"], [1, "flex", "flex-wrap", "items-center", "gap-1.5", "text-xs", "text-slate-600"], [1, "text-[11px]", "text-slate-500"], [1, "text-slate-300"], [1, "text-[11px]", "bg-white", "border", "border-slate-200", "px-1.5", "py-0.5", "rounded", "text-slate-700"], [1, "mt-2", "pt-2", "border-t", "border-slate-200/60", "flex", "flex-wrap", "items-center", "gap-1.5"], [1, "text-[10px]", "uppercase", "font-bold", "text-slate-400"], [1, "text-[11px]", "bg-blue-50", "text-blue-700", "border", "border-blue-200", "px-2", "py-0.5", "rounded-md", "font-medium"], [1, "flex", "items-center", "gap-2.5"], [1, "w-8", "h-8", "rounded-full", "bg-slate-200", "text-slate-700", "font-bold", "text-xs", "flex", "items-center", "justify-center"], [1, "font-medium", "text-xs", "text-slate-900", "block"], [1, "text-[11px]", "bg-emerald-50", "text-emerald-700", "border", "border-emerald-200", "px-2", "py-0.5", "rounded-md", "font-medium"], [1, "text-[11px]", "bg-amber-50", "text-amber-700", "border", "border-amber-200", "px-2", "py-0.5", "rounded-md", "font-medium"]], template: function DashboardViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, DashboardViewComponent_div_0_Template, 89, 33, "div", 0);
    }
  }, dependencies: [CommonModule, TranslocoDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardViewComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard-view", standalone: true, imports: [CommonModule, TranslocoDirective], template: `<div class="space-y-6" *transloco="let t">\r
  <!-- Hero Banner -->\r
  <div\r
    class="bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 text-white rounded-2xl p-6 sm:p-8 shadow-sm"\r
  >\r
    <div class="max-w-3xl">\r
      <span\r
        class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-600/50 text-amber-100 mb-3 border border-amber-500/30"\r
      >\r
        <i class="pi pi-compass text-xs"></i> {{ t('app.yearBadge') }}\r
      </span>\r
      <h1 class="text-2xl sm:text-3xl font-bold tracking-tight mb-2">\r
        {{ t('dashboard.heroTitle') }}\r
      </h1>\r
      <p class="text-amber-100 text-sm leading-relaxed mb-6">{{ t('dashboard.heroSubtitle') }}</p>\r
\r
      <div class="flex flex-wrap items-center gap-3">\r
        <button\r
          type="button"\r
          (click)="goToMatrix.emit()"\r
          class="px-4 py-2 text-xs font-semibold bg-white text-amber-950 rounded-xl hover:bg-amber-50 transition-colors shadow-sm cursor-pointer flex items-center gap-2"\r
        >\r
          <i class="pi pi-check-circle text-blue-600"></i> {{ t('dashboard.exploreMatrix') }}\r
        </button>\r
        <button\r
          type="button"\r
          (click)="openImport.emit()"\r
          class="px-4 py-2 text-xs font-medium bg-amber-800/80 hover:bg-amber-700/80 text-white rounded-xl border border-amber-600/50 transition-colors cursor-pointer flex items-center gap-2"\r
        >\r
          <i class="pi pi-file-import"></i> {{ t('dashboard.importCommitments') }}\r
        </button>\r
        <button\r
          type="button"\r
          (click)="autoAssign.emit()"\r
          class="px-4 py-2 text-xs font-bold bg-amber-500 hover:bg-amber-400 text-amber-950 rounded-xl transition-colors cursor-pointer flex items-center gap-2"\r
        >\r
          <i class="pi pi-sparkles"></i> {{ t('dashboard.launchAutoAssign') }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- KPI Metrics Grid -->\r
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">\r
    <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">\r
      <span class="text-xs text-slate-500 font-medium block mb-1">{{ t('stats.members') }}</span>\r
      <span class="text-2xl font-bold text-slate-900 font-mono tabular-nums">{{\r
        clanData.statistics().totalMembers\r
      }}</span>\r
      <span class="text-[11px] text-slate-400 block mt-1">{{\r
        t('dashboard.roversAndScolte')\r
      }}</span>\r
    </div>\r
    <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">\r
      <span class="text-xs text-slate-500 font-medium block mb-1">{{ t('stats.services') }}</span>\r
      <span class="text-2xl font-bold text-slate-900 font-mono tabular-nums">{{\r
        clanData.statistics().totalServices\r
      }}</span>\r
      <span class="text-[11px] text-slate-400 block mt-1">{{\r
        t('dashboard.availableEntities')\r
      }}</span>\r
    </div>\r
    <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">\r
      <span class="text-xs text-slate-500 font-medium block mb-1">{{ t('stats.assigned') }}</span>\r
      <span class="text-2xl font-bold text-emerald-600 font-mono tabular-nums">{{\r
        clanData.statistics().assignedCount\r
      }}</span>\r
      <span class="text-[11px] text-emerald-600/80 block mt-1">{{\r
        t('dashboard.withActiveService')\r
      }}</span>\r
    </div>\r
    <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">\r
      <span class="text-xs text-slate-500 font-medium block mb-1">{{ t('stats.unassigned') }}</span>\r
      <span class="text-2xl font-bold text-amber-600 font-mono tabular-nums">{{\r
        clanData.statistics().unassignedCount\r
      }}</span>\r
      <span class="text-[11px] text-amber-600/80 block mt-1">{{\r
        t('dashboard.awaitingPlacement')\r
      }}</span>\r
    </div>\r
    <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">\r
      <span class="text-xs text-slate-500 font-medium block mb-1">{{\r
        t('stats.compatibilityRate')\r
      }}</span>\r
      <span class="text-2xl font-bold text-blue-600 font-mono tabular-nums"\r
        >{{ clanData.statistics().averageCompatibilityRate }}%</span\r
      >\r
      <span class="text-[11px] text-blue-600/80 block mt-1">{{\r
        t('dashboard.averageFeasibility')\r
      }}</span>\r
    </div>\r
  </div>\r
\r
  <!-- Coverage & Status Cards -->\r
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">\r
    <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">\r
      <div class="flex items-center justify-between mb-4">\r
        <div>\r
          <h3 class="text-sm font-semibold text-slate-900">\r
            {{ t('dashboard.servicesCoverage') }}\r
          </h3>\r
          <p class="text-xs text-slate-500">{{ t('dashboard.servicesCoverageSub') }}</p>\r
        </div>\r
        <button\r
          type="button"\r
          (click)="goToServices.emit()"\r
          class="text-xs text-blue-600 hover:text-blue-800 font-medium cursor-pointer"\r
        >\r
          {{ t('dashboard.seeAll') }} &rarr;\r
        </button>\r
      </div>\r
\r
      <div class="space-y-3 max-h-[380px] overflow-y-auto pr-1">\r
        @for (srv of clanData.services(); track srv.id) {\r
          @let assigned = getAssignedScouts(srv.id);\r
          <div class="p-3 rounded-lg border border-slate-100 bg-slate-50/50">\r
            <div class="flex items-center justify-between mb-1.5">\r
              <span class="font-medium text-xs text-slate-900">{{ srv.name }}</span>\r
              <span\r
                class="text-xs font-mono font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700"\r
              >\r
                {{ assigned.length }} {{ t('services.scoutsCount') }}\r
              </span>\r
            </div>\r
            <div class="flex flex-wrap items-center gap-1.5 text-xs text-slate-600">\r
              <span class="text-[11px] text-slate-500">{{ srv.organization }}</span>\r
              <span class="text-slate-300">\xB7</span>\r
              @for (slot of srv.scheduleSlots; track $index) {\r
                <span\r
                  class="text-[11px] bg-white border border-slate-200 px-1.5 py-0.5 rounded text-slate-700"\r
                >\r
                  {{ getDayShort(slot.day) }} {{ slot.startTime }}-{{ slot.endTime }}\r
                </span>\r
              }\r
            </div>\r
            @if (assigned.length > 0) {\r
              <div\r
                class="mt-2 pt-2 border-t border-slate-200/60 flex flex-wrap items-center gap-1.5"\r
              >\r
                <span class="text-[10px] uppercase font-bold text-slate-400">{{\r
                  t('dashboard.assignedTag')\r
                }}</span>\r
                @for (scout of assigned; track scout.id) {\r
                  <span\r
                    class="text-[11px] bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded-md font-medium"\r
                  >\r
                    {{ scout.name }} {{ scout.surname }}\r
                  </span>\r
                }\r
              </div>\r
            }\r
          </div>\r
        }\r
        @if (clanData.services().length === 0) {\r
          <div class="p-6 text-center text-slate-400 text-xs italic">\r
            {{ t('dashboard.emptyServices') }}\r
          </div>\r
        }\r
      </div>\r
    </div>\r
\r
    <!-- Clan Roster Status -->\r
    <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">\r
      <div class="flex items-center justify-between mb-4">\r
        <div>\r
          <h3 class="text-sm font-semibold text-slate-900">{{ t('dashboard.membersStatus') }}</h3>\r
          <p class="text-xs text-slate-500">{{ t('dashboard.membersStatusSub') }}</p>\r
        </div>\r
        <button\r
          type="button"\r
          (click)="goToMembers.emit()"\r
          class="text-xs text-blue-600 hover:text-blue-800 font-medium cursor-pointer"\r
        >\r
          {{ t('dashboard.manage') }} &rarr;\r
        </button>\r
      </div>\r
\r
      <div class="space-y-2 max-h-[380px] overflow-y-auto pr-1">\r
        @for (m of clanData.members(); track m.id) {\r
          @let assignedService = getService(m.assignedServiceId);\r
          <div\r
            class="flex items-center justify-between p-2.5 rounded-lg border border-slate-100 hover:bg-slate-50"\r
          >\r
            <div class="flex items-center gap-2.5">\r
              <div\r
                class="w-8 h-8 rounded-full bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center"\r
              >\r
                {{ m.name.charAt(0) }}{{ m.surname.charAt(0) }}\r
              </div>\r
              <div>\r
                <span class="font-medium text-xs text-slate-900 block"\r
                  >{{ m.name }} {{ m.surname }}</span\r
                >\r
                <span class="text-[11px] text-slate-500"\r
                  >{{ m.commitments.length }} {{ t('dashboard.commitmentsCount') }}</span\r
                >\r
              </div>\r
            </div>\r
            <div>\r
              @if (assignedService) {\r
                <span\r
                  class="text-[11px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-md font-medium"\r
                  >{{ assignedService.name }}</span\r
                >\r
              } @else {\r
                <span\r
                  class="text-[11px] bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded-md font-medium"\r
                  >{{ t('dashboard.unassigned') }}</span\r
                >\r
              }\r
            </div>\r
          </div>\r
        }\r
        @if (clanData.members().length === 0) {\r
          <div class="p-6 text-center text-slate-400 text-xs italic">\r
            {{ t('dashboard.emptyMembers') }}\r
          </div>\r
        }\r
      </div>\r
\r
      <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">\r
        <span class="text-xs text-slate-500">{{\r
          t('dashboard.totalCount', { count: clanData.members().length })\r
        }}</span>\r
        <button\r
          type="button"\r
          (click)="openAddMember.emit()"\r
          class="text-xs font-medium text-blue-600 hover:text-blue-800 cursor-pointer flex items-center gap-1"\r
        >\r
          <i class="pi pi-plus text-xs"></i> {{ t('dashboard.addNewBoy') }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
` }]
  }], null, { goToMatrix: [{ type: Output, args: ["goToMatrix"] }], goToMembers: [{ type: Output, args: ["goToMembers"] }], goToServices: [{ type: Output, args: ["goToServices"] }], openImport: [{ type: Output, args: ["openImport"] }], autoAssign: [{ type: Output, args: ["autoAssign"] }], openAddMember: [{ type: Output, args: ["openAddMember"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardViewComponent, { className: "DashboardViewComponent", filePath: "app/components/dashboard-view/dashboard-view.ts", lineNumber: 14 });
})();

// src/app/components/members-view/member-detail.ts
var _c02 = (a0) => ({ name: a0 });
var _forTrack02 = ($index, $item) => $item.service.id;
var _forTrack1 = ($index, $item) => $item.id;
function MemberDetailComponent_div_0_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275element(1, "i", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const serv_r3 = ctx;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", serv_r3.name, " (", serv_r3.organization, ")");
  }
}
function MemberDetailComponent_div_0_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("members.notAssigned"));
  }
}
function MemberDetailComponent_div_0_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function MemberDetailComponent_div_0_Conditional_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.unassign());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("members.removeAssignment"), " ");
  }
}
function MemberDetailComponent_div_0_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function MemberDetailComponent_div_0_Conditional_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToMatrix.emit());
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("members.findService"), " \u2192 ");
  }
}
function MemberDetailComponent_div_0_Conditional_30_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 36)(1, "td", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 38);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 34)(6, "button", 39);
    \u0275\u0275listener("click", function MemberDetailComponent_div_0_Conditional_30_For_12_Template_button_click_6_listener() {
      const c_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeCommitment(c_r8.id));
    });
    \u0275\u0275element(7, "i", 40);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getDayLabel(c_r8.day));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", c_r8.startTime, " - ", c_r8.endTime, " ");
  }
}
function MemberDetailComponent_div_0_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "table", 31)(2, "thead", 32)(3, "tr")(4, "th", 33);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 33);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 34);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "tbody", 35);
    \u0275\u0275repeaterCreate(11, MemberDetailComponent_div_0_Conditional_30_For_12_Template, 8, 3, "tr", 36, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r4("commitments.day"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("commitments.time"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("commitments.actions"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.member().commitments);
  }
}
function MemberDetailComponent_div_0_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "p", 41);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4("members.noCommitments"));
  }
}
function MemberDetailComponent_div_0_For_37_Conditional_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r4("members.assigned"));
  }
}
function MemberDetailComponent_div_0_For_37_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function MemberDetailComponent_div_0_For_37_Conditional_6_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const item_r10 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.assign(item_r10.service.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r4 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r4("members.assign"), " ");
  }
}
function MemberDetailComponent_div_0_For_37_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MemberDetailComponent_div_0_For_37_Conditional_6_Conditional_0_Template, 2, 1, "span", 44)(1, MemberDetailComponent_div_0_For_37_Conditional_6_Conditional_1_Template, 2, 1, "button", 45);
  }
  if (rf & 2) {
    const item_r10 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.member().assignedServiceId === item_r10.service.id ? 0 : 1);
  }
}
function MemberDetailComponent_div_0_For_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div")(2, "span", 42);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 43);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, MemberDetailComponent_div_0_For_37_Conditional_6_Template, 2, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const t_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngClass", item_r10.result.isCompatible ? "border-emerald-200 bg-emerald-50/30" : "border-slate-200 bg-slate-50/40 opacity-70");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r10.service.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", item_r10.result.isCompatible ? "text-emerald-700 font-medium" : "text-red-600 font-medium");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r10.result.isCompatible ? t_r4("members.compatible") : t_r4("members.scheduleConflict"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r10.result.isCompatible ? 6 : -1);
  }
}
function MemberDetailComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "h3", 5);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 6)(9, "button", 7);
    \u0275\u0275listener("click", function MemberDetailComponent_div_0_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.edit.emit(ctx_r1.member()));
    });
    \u0275\u0275element(10, "i", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 9);
    \u0275\u0275listener("click", function MemberDetailComponent_div_0_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.delete.emit(ctx_r1.member().id));
    });
    \u0275\u0275element(12, "i", 10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 11)(14, "div")(15, "span", 12);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(17, MemberDetailComponent_div_0_Conditional_17_Template, 3, 2, "span", 13)(18, MemberDetailComponent_div_0_Conditional_18_Template, 2, 1, "span", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div");
    \u0275\u0275conditionalCreate(20, MemberDetailComponent_div_0_Conditional_20_Template, 2, 1, "button", 15)(21, MemberDetailComponent_div_0_Conditional_21_Template, 2, 1, "button", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div")(23, "div", 17)(24, "h4", 18);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 19)(27, "button", 20);
    \u0275\u0275listener("click", function MemberDetailComponent_div_0_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addCommitment.emit());
    });
    \u0275\u0275element(28, "i", 21);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(30, MemberDetailComponent_div_0_Conditional_30_Template, 13, 3, "div", 22)(31, MemberDetailComponent_div_0_Conditional_31_Template, 3, 1, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 24)(33, "h4", 25);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 26);
    \u0275\u0275repeaterCreate(36, MemberDetailComponent_div_0_For_37_Template, 7, 5, "div", 27, _forTrack02);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const t_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", ctx_r1.member().name.charAt(0), "", ctx_r1.member().surname.charAt(0), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r1.member().name, " ", ctx_r1.member().surname, " ");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(t_r4("members.assignedService"));
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_5_0 = ctx_r1.assignedService()) ? 17 : 18, tmp_5_0);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.member().assignedServiceId ? 20 : 21);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", t_r4("members.weeklyCommitments"), " (", ctx_r1.member().commitments.length, ") ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r4("members.addCommitment"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.member().commitments.length > 0 ? 30 : 31);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r4("members.compatibleServicesWith", \u0275\u0275pureFunction1(12, _c02, ctx_r1.member().name)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.compatibleServices());
  }
}
var MemberDetailComponent = class _MemberDetailComponent {
  clanData = inject(ClanDataService);
  compatService = inject(CompatibilityService);
  transloco = inject(TranslocoService);
  member = input.required(...ngDevMode ? [{ debugName: "member" }] : (
    /* istanbul ignore next */
    []
  ));
  edit = output();
  delete = output();
  addCommitment = output();
  goToMatrix = output();
  assignedService = computed(() => {
    const sId = this.member().assignedServiceId;
    if (!sId)
      return void 0;
    return this.clanData.services().find((s) => s.id === sId);
  }, ...ngDevMode ? [{ debugName: "assignedService" }] : (
    /* istanbul ignore next */
    []
  ));
  compatibleServices = computed(() => {
    const m = this.member();
    const buffer = this.clanData.bufferMinutes();
    return this.clanData.services().map((service) => ({
      service,
      result: this.compatService.check(m, service, buffer)
    }));
  }, ...ngDevMode ? [{ debugName: "compatibleServices" }] : (
    /* istanbul ignore next */
    []
  ));
  getDayLabel(day) {
    return this.transloco.translate(`days.${day}`) || day;
  }
  assign(serviceId) {
    this.clanData.assignMember(this.member().id, serviceId);
  }
  unassign() {
    this.clanData.assignMember(this.member().id, void 0);
  }
  removeCommitment(cId) {
    this.clanData.removeCommitment(this.member().id, cId);
  }
  static \u0275fac = function MemberDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MemberDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MemberDetailComponent, selectors: [["app-member-detail"]], inputs: { member: [1, "member"] }, outputs: { edit: "edit", delete: "delete", addCommitment: "addCommitment", goToMatrix: "goToMatrix" }, decls: 1, vars: 0, consts: [["class", "space-y-5", 4, "transloco"], [1, "space-y-5"], [1, "flex", "flex-wrap", "items-start", "justify-between", "gap-3", "border-b", "border-slate-100", "pb-4"], [1, "flex", "items-center", "gap-3"], [1, "w-12", "h-12", "rounded-xl", "bg-amber-600", "text-white", "font-bold", "text-base", "flex", "items-center", "justify-center"], [1, "text-base", "font-bold", "text-slate-900", "leading-snug"], [1, "flex", "items-center", "gap-2"], ["type", "button", 1, "p-1.5", "text-xs", "text-slate-600", "border", "border-slate-200", "rounded-lg", "hover:bg-slate-50", "cursor-pointer", 3, "click"], [1, "pi", "pi-pencil"], ["type", "button", 1, "p-1.5", "text-xs", "text-red-600", "border", "border-red-200", "rounded-lg", "hover:bg-red-50", "cursor-pointer", 3, "click"], [1, "pi", "pi-trash"], [1, "p-3.5", "rounded-xl", "border", "border-slate-200", "bg-slate-50/70", "flex", "flex-wrap", "items-center", "justify-between", "gap-3"], [1, "text-[11px]", "font-semibold", "text-slate-500", "uppercase", "tracking-wider", "block"], [1, "font-bold", "text-sm", "text-emerald-700", "flex", "items-center", "gap-1.5", "mt-0.5"], [1, "text-xs", "text-amber-700", "font-medium", "block", "mt-0.5"], ["type", "button", 1, "px-2.5", "py-1", "text-xs", "font-medium", "text-red-600", "border", "border-red-200", "bg-white", "rounded-lg", "hover:bg-red-50", "cursor-pointer"], ["type", "button", 1, "px-3", "py-1", "text-xs", "font-semibold", "text-white", "bg-blue-600", "hover:bg-blue-700", "rounded-lg", "cursor-pointer"], [1, "flex", "flex-wrap", "items-center", "justify-between", "gap-2", "mb-3"], [1, "text-xs", "font-bold", "uppercase", "tracking-wider", "text-slate-700"], [1, "flex", "flex-wrap", "items-center", "gap-2"], ["type", "button", 1, "px-2.5", "py-1", "text-xs", "font-medium", "text-blue-600", "bg-blue-50", "border", "border-blue-200", "rounded-lg", "hover:bg-blue-100", "cursor-pointer", "flex", "items-center", "gap-1", 3, "click"], [1, "pi", "pi-plus", "text-xs"], [1, "overflow-x-auto", "border", "border-slate-200", "rounded-lg"], [1, "p-6", "text-center", "border", "border-dashed", "border-slate-200", "rounded-xl", "bg-slate-50/50"], [1, "pt-3", "border-t", "border-slate-100"], [1, "text-xs", "font-bold", "uppercase", "tracking-wider", "text-slate-700", "mb-2"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-2"], [1, "p-2.5", "rounded-lg", "border", "text-xs", "flex", "items-center", "justify-between", 3, "ngClass"], [1, "pi", "pi-heart", "text-xs"], ["type", "button", 1, "px-2.5", "py-1", "text-xs", "font-medium", "text-red-600", "border", "border-red-200", "bg-white", "rounded-lg", "hover:bg-red-50", "cursor-pointer", 3, "click"], ["type", "button", 1, "px-3", "py-1", "text-xs", "font-semibold", "text-white", "bg-blue-600", "hover:bg-blue-700", "rounded-lg", "cursor-pointer", 3, "click"], [1, "w-full", "text-xs", "text-left"], [1, "bg-slate-50", "text-slate-500", "font-semibold", "border-b", "border-slate-200"], [1, "py-2", "px-3"], [1, "py-2", "px-3", "text-right"], [1, "divide-y", "divide-slate-100"], [1, "hover:bg-slate-50/50"], [1, "py-2", "px-3", "font-semibold", "text-slate-800"], [1, "py-2", "px-3", "font-mono", "text-slate-700"], ["type", "button", 1, "text-red-500", "hover:text-red-700", "p-1", "cursor-pointer", 3, "click"], [1, "pi", "pi-times", "text-xs"], [1, "text-xs", "text-slate-500"], [1, "font-semibold", "block", "text-slate-900"], [1, "text-[11px]", 3, "ngClass"], [1, "text-[10px]", "bg-emerald-600", "text-white", "font-bold", "px-2", "py-0.5", "rounded"], ["type", "button", 1, "text-[11px]", "font-medium", "text-blue-700", "bg-white", "border", "border-blue-200", "px-2", "py-1", "rounded", "hover:bg-blue-50", "cursor-pointer"], ["type", "button", 1, "text-[11px]", "font-medium", "text-blue-700", "bg-white", "border", "border-blue-200", "px-2", "py-1", "rounded", "hover:bg-blue-50", "cursor-pointer", 3, "click"]], template: function MemberDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, MemberDetailComponent_div_0_Template, 38, 14, "div", 0);
    }
  }, dependencies: [CommonModule, NgClass, TranslocoDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MemberDetailComponent, [{
    type: Component,
    args: [{ selector: "app-member-detail", standalone: true, imports: [CommonModule, TranslocoDirective], template: `<div class="space-y-5" *transloco="let t">\r
  <div class="flex flex-wrap items-start justify-between gap-3 border-b border-slate-100 pb-4">\r
    <div class="flex items-center gap-3">\r
      <div\r
        class="w-12 h-12 rounded-xl bg-amber-600 text-white font-bold text-base flex items-center justify-center"\r
      >\r
        {{ member().name.charAt(0) }}{{ member().surname.charAt(0) }}\r
      </div>\r
      <div>\r
        <h3 class="text-base font-bold text-slate-900 leading-snug">\r
          {{ member().name }} {{ member().surname }}\r
        </h3>\r
      </div>\r
    </div>\r
    <div class="flex items-center gap-2">\r
      <button\r
        type="button"\r
        (click)="edit.emit(member())"\r
        class="p-1.5 text-xs text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 cursor-pointer"\r
      >\r
        <i class="pi pi-pencil"></i>\r
      </button>\r
      <button\r
        type="button"\r
        (click)="delete.emit(member().id)"\r
        class="p-1.5 text-xs text-red-600 border border-red-200 rounded-lg hover:bg-red-50 cursor-pointer"\r
      >\r
        <i class="pi pi-trash"></i>\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Assigned Service Box -->\r
  <div\r
    class="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 flex flex-wrap items-center justify-between gap-3"\r
  >\r
    <div>\r
      <span class="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">{{\r
        t('members.assignedService')\r
      }}</span>\r
      @if (assignedService(); as serv) {\r
        <span class="font-bold text-sm text-emerald-700 flex items-center gap-1.5 mt-0.5"\r
          ><i class="pi pi-heart text-xs"></i> {{ serv.name }} ({{ serv.organization }})</span\r
        >\r
      } @else {\r
        <span class="text-xs text-amber-700 font-medium block mt-0.5">{{\r
          t('members.notAssigned')\r
        }}</span>\r
      }\r
    </div>\r
    <div>\r
      @if (member().assignedServiceId) {\r
        <button\r
          type="button"\r
          (click)="unassign()"\r
          class="px-2.5 py-1 text-xs font-medium text-red-600 border border-red-200 bg-white rounded-lg hover:bg-red-50 cursor-pointer"\r
        >\r
          {{ t('members.removeAssignment') }}\r
        </button>\r
      } @else {\r
        <button\r
          type="button"\r
          (click)="goToMatrix.emit()"\r
          class="px-3 py-1 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg cursor-pointer"\r
        >\r
          {{ t('members.findService') }} &rarr;\r
        </button>\r
      }\r
    </div>\r
  </div>\r
\r
  <!-- Commitments List -->\r
  <div>\r
    <div class="flex flex-wrap items-center justify-between gap-2 mb-3">\r
      <h4 class="text-xs font-bold uppercase tracking-wider text-slate-700">\r
        {{ t('members.weeklyCommitments') }} ({{ member().commitments.length }})\r
      </h4>\r
      <div class="flex flex-wrap items-center gap-2">\r
        <button\r
          type="button"\r
          (click)="addCommitment.emit()"\r
          class="px-2.5 py-1 text-xs font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 cursor-pointer flex items-center gap-1"\r
        >\r
          <i class="pi pi-plus text-xs"></i> {{ t('members.addCommitment') }}\r
        </button>\r
      </div>\r
    </div>\r
\r
    @if (member().commitments.length > 0) {\r
      <div class="overflow-x-auto border border-slate-200 rounded-lg">\r
        <table class="w-full text-xs text-left">\r
          <thead class="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">\r
            <tr>\r
              <th class="py-2 px-3">{{ t('commitments.day') }}</th>\r
              <th class="py-2 px-3">{{ t('commitments.time') }}</th>\r
              <th class="py-2 px-3 text-right">{{ t('commitments.actions') }}</th>\r
            </tr>\r
          </thead>\r
          <tbody class="divide-y divide-slate-100">\r
            @for (c of member().commitments; track c.id) {\r
              <tr class="hover:bg-slate-50/50">\r
                <td class="py-2 px-3 font-semibold text-slate-800">{{ getDayLabel(c.day) }}</td>\r
                <td class="py-2 px-3 font-mono text-slate-700">\r
                  {{ c.startTime }} - {{ c.endTime }}\r
                </td>\r
                <td class="py-2 px-3 text-right">\r
                  <button\r
                    type="button"\r
                    (click)="removeCommitment(c.id)"\r
                    class="text-red-500 hover:text-red-700 p-1 cursor-pointer"\r
                  >\r
                    <i class="pi pi-times text-xs"></i>\r
                  </button>\r
                </td>\r
              </tr>\r
            }\r
          </tbody>\r
        </table>\r
      </div>\r
    } @else {\r
      <div class="p-6 text-center border border-dashed border-slate-200 rounded-xl bg-slate-50/50">\r
        <p class="text-xs text-slate-500">{{ t('members.noCommitments') }}</p>\r
      </div>\r
    }\r
  </div>\r
\r
  <!-- Compatible Services Preview -->\r
  <div class="pt-3 border-t border-slate-100">\r
    <h4 class="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">\r
      {{ t('members.compatibleServicesWith', { name: member().name }) }}\r
    </h4>\r
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">\r
      @for (item of compatibleServices(); track item.service.id) {\r
        <div\r
          class="p-2.5 rounded-lg border text-xs flex items-center justify-between"\r
          [ngClass]="\r
            item.result.isCompatible\r
              ? 'border-emerald-200 bg-emerald-50/30'\r
              : 'border-slate-200 bg-slate-50/40 opacity-70'\r
          "\r
        >\r
          <div>\r
            <span class="font-semibold block text-slate-900">{{ item.service.name }}</span>\r
            <span\r
              class="text-[11px]"\r
              [ngClass]="\r
                item.result.isCompatible\r
                  ? 'text-emerald-700 font-medium'\r
                  : 'text-red-600 font-medium'\r
              "\r
            >\r
              {{\r
                item.result.isCompatible ? t('members.compatible') : t('members.scheduleConflict')\r
              }}\r
            </span>\r
          </div>\r
          @if (item.result.isCompatible) {\r
            @if (member().assignedServiceId === item.service.id) {\r
              <span class="text-[10px] bg-emerald-600 text-white font-bold px-2 py-0.5 rounded">{{\r
                t('members.assigned')\r
              }}</span>\r
            } @else {\r
              <button\r
                type="button"\r
                (click)="assign(item.service.id)"\r
                class="text-[11px] font-medium text-blue-700 bg-white border border-blue-200 px-2 py-1 rounded hover:bg-blue-50 cursor-pointer"\r
              >\r
                {{ t('members.assign') }}\r
              </button>\r
            }\r
          }\r
        </div>\r
      }\r
    </div>\r
  </div>\r
</div>\r
` }]
  }], null, { member: [{ type: Input, args: [{ isSignal: true, alias: "member", required: true }] }], edit: [{ type: Output, args: ["edit"] }], delete: [{ type: Output, args: ["delete"] }], addCommitment: [{ type: Output, args: ["addCommitment"] }], goToMatrix: [{ type: Output, args: ["goToMatrix"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MemberDetailComponent, { className: "MemberDetailComponent", filePath: "app/components/members-view/member-detail.ts", lineNumber: 14 });
})();

// src/app/components/members-view/members-view.ts
var _forTrack03 = ($index, $item) => $item.id;
function MembersViewComponent_div_0_For_33_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const assignedService_r5 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(assignedService_r5.name);
  }
}
function MembersViewComponent_div_0_For_33_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(t_r6("members.notAssigned"));
  }
}
function MembersViewComponent_div_0_For_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "div", 28);
    \u0275\u0275listener("click", function MembersViewComponent_div_0_For_33_Template_div_click_1_listener() {
      const m_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectedMemberId.set(m_r4.id));
    });
    \u0275\u0275elementStart(2, "div", 29)(3, "div", 30);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "div", 31)(7, "span", 32);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 33);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 34);
    \u0275\u0275conditionalCreate(12, MembersViewComponent_div_0_For_33_Conditional_12_Template, 2, 1, "span", 35)(13, MembersViewComponent_div_0_For_33_Conditional_13_Template, 2, 1, "span", 36);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r4 = ctx.$implicit;
    const t_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    const isSelected_r7 = ctx_r1.selectedMemberId() === m_r4.id;
    const assignedService_r8 = \u0275\u0275storeLet(ctx_r1.getService(m_r4.assignedServiceId));
    \u0275\u0275advance();
    \u0275\u0275classMap(isSelected_r7 ? "border-blue-500 bg-blue-50/50 shadow-2xs" : "border-slate-200 hover:border-slate-300 bg-white");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(isSelected_r7 ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-700");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", m_r4.name.charAt(0), "", m_r4.surname.charAt(0), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", m_r4.name, " ", m_r4.surname);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", m_r4.commitments.length, " ", t_r6("members.commitmentsCount"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(assignedService_r8 ? 12 : 13);
  }
}
function MembersViewComponent_div_0_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r6("members.noSelectedMember"), " ");
  }
}
function MembersViewComponent_div_0_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-member-detail", 37);
    \u0275\u0275listener("edit", function MembersViewComponent_div_0_Conditional_36_Template_app_member_detail_edit_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEditMember.emit($event));
    })("delete", function MembersViewComponent_div_0_Conditional_36_Template_app_member_detail_delete_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteMember($event));
    })("addCommitment", function MembersViewComponent_div_0_Conditional_36_Template_app_member_detail_addCommitment_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openAddCommitment.emit());
    })("goToMatrix", function MembersViewComponent_div_0_Conditional_36_Template_app_member_detail_goToMatrix_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToMatrix.emit());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("member", ctx);
  }
}
function MembersViewComponent_div_0_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r6("members.noSelectedMember"), " ");
  }
}
function MembersViewComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div")(3, "h2", 3);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 4);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 5)(8, "button", 6);
    \u0275\u0275listener("click", function MembersViewComponent_div_0_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.invertAllCommitments());
    });
    \u0275\u0275element(9, "i", 7);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 8);
    \u0275\u0275listener("click", function MembersViewComponent_div_0_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openImport.emit());
    });
    \u0275\u0275element(12, "i", 9);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 10);
    \u0275\u0275listener("click", function MembersViewComponent_div_0_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAddMember.emit());
    });
    \u0275\u0275element(15, "i", 11);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 12)(18, "div", 13)(19, "div", 14)(20, "div", 15);
    \u0275\u0275element(21, "i", 16);
    \u0275\u0275elementStart(22, "input", 17);
    \u0275\u0275listener("ngModelChange", function MembersViewComponent_div_0_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.searchQuery.set($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div")(24, "select", 18);
    \u0275\u0275listener("ngModelChange", function MembersViewComponent_div_0_Template_select_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.assignedFilter.set($event));
    });
    \u0275\u0275elementStart(25, "option", 19);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option", 20);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "option", 21);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(31, "div", 22);
    \u0275\u0275repeaterCreate(32, MembersViewComponent_div_0_For_33_Template, 14, 12, "div", 23, _forTrack03);
    \u0275\u0275conditionalCreate(34, MembersViewComponent_div_0_Conditional_34_Template, 2, 1, "div", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 25);
    \u0275\u0275conditionalCreate(36, MembersViewComponent_div_0_Conditional_36_Template, 1, 1, "app-member-detail", 26)(37, MembersViewComponent_div_0_Conditional_37_Template, 2, 1, "div", 27);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_16_0;
    const t_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r6("members.title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("members.subtitle"));
    \u0275\u0275advance(2);
    \u0275\u0275property("title", t_r6("members.invertAllTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r6("members.invertAll"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r6("dashboard.importCommitments"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r6("members.addMember"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", ctx_r1.searchQuery())("placeholder", t_r6("members.searchPlaceholder"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.assignedFilter());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("members.filterAssigned"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("members.assignedOnly"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r6("members.unassignedOnly"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.filteredMembers());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.filteredMembers().length === 0 ? 34 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_16_0 = ctx_r1.selectedMember()) ? 36 : 37, tmp_16_0);
  }
}
var MembersViewComponent = class _MembersViewComponent {
  clanData = inject(ClanDataService);
  transloco = inject(TranslocoService);
  openAddMember = output();
  openEditMember = output();
  openImport = output();
  openAddCommitment = output();
  goToMatrix = output();
  searchQuery = signal("", ...ngDevMode ? [{ debugName: "searchQuery" }] : (
    /* istanbul ignore next */
    []
  ));
  assignedFilter = signal("all", ...ngDevMode ? [{ debugName: "assignedFilter" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedMemberId = signal(null, ...ngDevMode ? [{ debugName: "selectedMemberId" }] : (
    /* istanbul ignore next */
    []
  ));
  filteredMembers = computed(() => {
    const list = this.clanData.members();
    const q = this.searchQuery().toLowerCase().trim();
    const assignedF = this.assignedFilter();
    return list.filter((m) => {
      const matchQ = !q || `${m.name} ${m.surname}`.toLowerCase().includes(q);
      const matchAssigned = assignedF === "all" ? true : assignedF === "assigned" ? !!m.assignedServiceId : !m.assignedServiceId;
      return matchQ && matchAssigned;
    });
  }, ...ngDevMode ? [{ debugName: "filteredMembers" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedMember = computed(() => {
    const id = this.selectedMemberId();
    if (!id)
      return this.clanData.members()[0] || null;
    return this.clanData.members().find((m) => m.id === id) || null;
  }, ...ngDevMode ? [{ debugName: "selectedMember" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    const first = this.clanData.members()[0];
    if (first)
      this.selectedMemberId.set(first.id);
  }
  getService(serviceId) {
    if (!serviceId)
      return void 0;
    return this.clanData.services().find((s) => s.id === serviceId);
  }
  invertAllCommitments() {
    this.clanData.invertAllMembersCommitments();
  }
  deleteMember(id) {
    const m = this.clanData.members().find((item) => item.id === id);
    if (!m)
      return;
    const confirmMsg = this.transloco.translate("members.deleteConfirm", { name: `${m.name} ${m.surname}` });
    if (confirm(confirmMsg)) {
      this.clanData.deleteMember(id);
      const remaining = this.clanData.members()[0];
      this.selectedMemberId.set(remaining ? remaining.id : null);
    }
  }
  static \u0275fac = function MembersViewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MembersViewComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MembersViewComponent, selectors: [["app-members-view"]], outputs: { openAddMember: "openAddMember", openEditMember: "openEditMember", openImport: "openImport", openAddCommitment: "openAddCommitment", goToMatrix: "goToMatrix" }, decls: 1, vars: 0, consts: [["class", "space-y-6", 4, "transloco"], [1, "space-y-6"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "justify-between", "gap-4", "bg-white", "p-4", "rounded-xl", "border", "border-slate-200", "shadow-2xs"], [1, "text-base", "font-bold", "text-slate-900"], [1, "text-xs", "text-slate-500"], [1, "flex", "items-center", "gap-2"], ["type", "button", 1, "px-3", "py-1.5", "text-xs", "font-medium", "text-emerald-700", "bg-emerald-50", "border", "border-emerald-200", "rounded-lg", "hover:bg-emerald-100", "shadow-2xs", "cursor-pointer", "flex", "items-center", "gap-1.5", 3, "click", "title"], [1, "pi", "pi-sync", "text-xs"], ["type", "button", 1, "px-3", "py-1.5", "text-xs", "font-medium", "text-slate-700", "bg-white", "border", "border-slate-300", "rounded-lg", "hover:bg-slate-50", "shadow-2xs", "cursor-pointer", "flex", "items-center", "gap-1.5", 3, "click"], [1, "pi", "pi-upload", "text-blue-600", "text-xs"], ["type", "button", 1, "px-3.5", "py-1.5", "text-xs", "font-semibold", "text-white", "bg-blue-600", "hover:bg-blue-700", "rounded-lg", "shadow-2xs", "cursor-pointer", "flex", "items-center", "gap-1.5", 3, "click"], [1, "pi", "pi-plus", "text-xs"], [1, "grid", "grid-cols-1", "lg:grid-cols-12", "gap-6", "items-start"], [1, "lg:col-span-5", "bg-white", "p-4", "rounded-xl", "border", "border-slate-200", "shadow-2xs", "space-y-3"], [1, "space-y-2"], [1, "relative"], [1, "pi", "pi-search", "absolute", "left-3", "top-2.5", "text-slate-400", "text-xs"], ["type", "text", 1, "w-full", "pl-8", "pr-3", "py-1.5", "text-xs", "bg-slate-50", "border", "border-slate-200", "rounded-lg", "focus:outline-none", "focus:border-blue-500", "focus:bg-white", 3, "ngModelChange", "ngModel", "placeholder"], [1, "w-full", "py-1", "px-2", "text-xs", "bg-slate-50", "border", "border-slate-200", "rounded-lg", "text-slate-700", 3, "ngModelChange", "ngModel"], ["value", "all"], ["value", "assigned"], ["value", "unassigned"], [1, "space-y-2", "max-h-[560px]", "overflow-y-auto", "pr-1"], [1, "p-3", "rounded-lg", "border", "cursor-pointer", "transition-all", "flex", "items-center", "justify-between", 3, "class"], [1, "p-6", "text-center", "text-slate-400", "text-xs", "italic"], [1, "lg:col-span-7", "bg-white", "p-5", "rounded-xl", "border", "border-slate-200", "shadow-2xs"], [3, "member"], [1, "p-8", "text-center", "text-slate-400", "text-xs"], [1, "p-3", "rounded-lg", "border", "cursor-pointer", "transition-all", "flex", "items-center", "justify-between", 3, "click"], [1, "flex", "items-center", "gap-2.5"], [1, "w-8", "h-8", "rounded-full", "font-bold", "text-xs", "flex", "items-center", "justify-center"], [1, "flex", "items-center", "gap-1.5"], [1, "font-semibold", "text-xs", "text-slate-900"], [1, "text-[11px]", "text-slate-500", "block"], [1, "text-right"], [1, "text-[10px]", "bg-emerald-100", "text-emerald-800", "font-semibold", "px-2", "py-0.5", "rounded-full", "inline-block"], [1, "text-[10px]", "bg-amber-100", "text-amber-800", "font-semibold", "px-2", "py-0.5", "rounded-full", "inline-block"], [3, "edit", "delete", "addCommitment", "goToMatrix", "member"]], template: function MembersViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, MembersViewComponent_div_0_Template, 38, 14, "div", 0);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, TranslocoDirective, MemberDetailComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MembersViewComponent, [{
    type: Component,
    args: [{ selector: "app-members-view", standalone: true, imports: [CommonModule, FormsModule, TranslocoDirective, MemberDetailComponent], template: `<div class="space-y-6" *transloco="let t">\r
  <div\r
    class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-2xs"\r
  >\r
    <div>\r
      <h2 class="text-base font-bold text-slate-900">{{ t('members.title') }}</h2>\r
      <p class="text-xs text-slate-500">{{ t('members.subtitle') }}</p>\r
    </div>\r
    <div class="flex items-center gap-2">\r
      <button\r
        type="button"\r
        (click)="invertAllCommitments()"\r
        [title]="t('members.invertAllTitle')"\r
        class="px-3 py-1.5 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg hover:bg-emerald-100 shadow-2xs cursor-pointer flex items-center gap-1.5"\r
      >\r
        <i class="pi pi-sync text-xs"></i> {{ t('members.invertAll') }}\r
      </button>\r
      <button\r
        type="button"\r
        (click)="openImport.emit()"\r
        class="px-3 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 shadow-2xs cursor-pointer flex items-center gap-1.5"\r
      >\r
        <i class="pi pi-upload text-blue-600 text-xs"></i> {{ t('dashboard.importCommitments') }}\r
      </button>\r
      <button\r
        type="button"\r
        (click)="openAddMember.emit()"\r
        class="px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-2xs cursor-pointer flex items-center gap-1.5"\r
      >\r
        <i class="pi pi-plus text-xs"></i> {{ t('members.addMember') }}\r
      </button>\r
    </div>\r
  </div>\r
\r
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">\r
    <div class="lg:col-span-5 bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-3">\r
      <div class="space-y-2">\r
        <div class="relative">\r
          <i class="pi pi-search absolute left-3 top-2.5 text-slate-400 text-xs"></i>\r
          <input\r
            type="text"\r
            [ngModel]="searchQuery()"\r
            (ngModelChange)="searchQuery.set($event)"\r
            [placeholder]="t('members.searchPlaceholder')"\r
            class="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white"\r
          />\r
        </div>\r
        <div>\r
          <select\r
            [ngModel]="assignedFilter()"\r
            (ngModelChange)="assignedFilter.set($event)"\r
            class="w-full py-1 px-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-700"\r
          >\r
            <option value="all">{{ t('members.filterAssigned') }}</option>\r
            <option value="assigned">{{ t('members.assignedOnly') }}</option>\r
            <option value="unassigned">{{ t('members.unassignedOnly') }}</option>\r
          </select>\r
        </div>\r
      </div>\r
\r
      <div class="space-y-2 max-h-[560px] overflow-y-auto pr-1">\r
        @for (m of filteredMembers(); track m.id) {\r
          @let isSelected = selectedMemberId() === m.id;\r
          @let assignedService = getService(m.assignedServiceId);\r
          <div\r
            (click)="selectedMemberId.set(m.id)"\r
            [class]="\r
              isSelected\r
                ? 'border-blue-500 bg-blue-50/50 shadow-2xs'\r
                : 'border-slate-200 hover:border-slate-300 bg-white'\r
            "\r
            class="p-3 rounded-lg border cursor-pointer transition-all flex items-center justify-between"\r
          >\r
            <div class="flex items-center gap-2.5">\r
              <div\r
                [class]="isSelected ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-700'"\r
                class="w-8 h-8 rounded-full font-bold text-xs flex items-center justify-center"\r
              >\r
                {{ m.name.charAt(0) }}{{ m.surname.charAt(0) }}\r
              </div>\r
              <div>\r
                <div class="flex items-center gap-1.5">\r
                  <span class="font-semibold text-xs text-slate-900"\r
                    >{{ m.name }} {{ m.surname }}</span\r
                  >\r
                </div>\r
                <span class="text-[11px] text-slate-500 block"\r
                  >{{ m.commitments.length }} {{ t('members.commitmentsCount') }}</span\r
                >\r
              </div>\r
            </div>\r
            <div class="text-right">\r
              @if (assignedService) {\r
                <span\r
                  class="text-[10px] bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5 rounded-full inline-block"\r
                  >{{ assignedService.name }}</span\r
                >\r
              } @else {\r
                <span\r
                  class="text-[10px] bg-amber-100 text-amber-800 font-semibold px-2 py-0.5 rounded-full inline-block"\r
                  >{{ t('members.notAssigned') }}</span\r
                >\r
              }\r
            </div>\r
          </div>\r
        }\r
        @if (filteredMembers().length === 0) {\r
          <div class="p-6 text-center text-slate-400 text-xs italic">\r
            {{ t('members.noSelectedMember') }}\r
          </div>\r
        }\r
      </div>\r
    </div>\r
\r
    <!-- Right Inspector (7 cols) -->\r
    <div class="lg:col-span-7 bg-white p-5 rounded-xl border border-slate-200 shadow-2xs">\r
      @if (selectedMember(); as mem) {\r
        <app-member-detail\r
          [member]="mem"\r
          (edit)="openEditMember.emit($event)"\r
          (delete)="deleteMember($event)"\r
          (addCommitment)="openAddCommitment.emit()"\r
          (goToMatrix)="goToMatrix.emit()"\r
        />\r
      } @else {\r
        <div class="p-8 text-center text-slate-400 text-xs">\r
          {{ t('members.noSelectedMember') }}\r
        </div>\r
      }\r
    </div>\r
  </div>\r
</div>\r
` }]
  }], () => [], { openAddMember: [{ type: Output, args: ["openAddMember"] }], openEditMember: [{ type: Output, args: ["openEditMember"] }], openImport: [{ type: Output, args: ["openImport"] }], openAddCommitment: [{ type: Output, args: ["openAddCommitment"] }], goToMatrix: [{ type: Output, args: ["goToMatrix"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MembersViewComponent, { className: "MembersViewComponent", filePath: "app/components/members-view/members-view.ts", lineNumber: 15 });
})();

// src/app/components/services-view/services-view.ts
var _forTrack04 = ($index, $item) => $item.id;
function ServicesViewComponent_div_0_For_38_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const srv_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(srv_r4.description);
  }
}
function ServicesViewComponent_div_0_For_38_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275element(1, "i", 50);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const srv_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", srv_r4.contactPerson, " ", srv_r4.contactPhone ? "(" + srv_r4.contactPhone + ")" : "");
  }
}
function ServicesViewComponent_div_0_For_38_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275element(1, "i", 51);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const slot_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", ctx_r1.getDayLabel(slot_r5.day), " ", slot_r5.startTime, " - ", slot_r5.endTime, " ");
  }
}
function ServicesViewComponent_div_0_For_38_Conditional_34_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52)(1, "span", 53);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 54);
    \u0275\u0275listener("click", function ServicesViewComponent_div_0_For_38_Conditional_34_For_2_Template_button_click_3_listener() {
      const scout_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.unassignScout(scout_r7.id));
    });
    \u0275\u0275text(4, "Rimuovi");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const scout_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", scout_r7.name, " ", scout_r7.surname);
  }
}
function ServicesViewComponent_div_0_For_38_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275repeaterCreate(1, ServicesViewComponent_div_0_For_38_Conditional_34_For_2_Template, 5, 2, "div", 52, _forTrack04);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const assigned_r8 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275repeater(assigned_r8);
  }
}
function ServicesViewComponent_div_0_For_38_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1, "Nessun ragazzo ancora assegnato");
    \u0275\u0275elementEnd();
  }
}
function ServicesViewComponent_div_0_For_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "div", 23)(2, "div", 24)(3, "div", 25)(4, "span", 26);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 27)(7, "button", 28);
    \u0275\u0275listener("click", function ServicesViewComponent_div_0_For_38_Template_button_click_7_listener() {
      const srv_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEditService.emit(srv_r4));
    });
    \u0275\u0275element(8, "i", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 30);
    \u0275\u0275listener("click", function ServicesViewComponent_div_0_For_38_Template_button_click_9_listener() {
      const srv_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteService(srv_r4.id));
    });
    \u0275\u0275element(10, "i", 31);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "h3", 32);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 33);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, ServicesViewComponent_div_0_For_38_Conditional_15_Template, 2, 1, "p", 34);
    \u0275\u0275elementStart(16, "div", 35)(17, "div", 36);
    \u0275\u0275element(18, "i", 37);
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(21, ServicesViewComponent_div_0_For_38_Conditional_21_Template, 4, 2, "div", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 38)(23, "span", 39);
    \u0275\u0275text(24, "Orari Richiesti:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 40);
    \u0275\u0275repeaterCreate(26, ServicesViewComponent_div_0_For_38_For_27_Template, 3, 3, "span", 41, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div")(29, "div", 42)(30, "span", 43);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 44);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(34, ServicesViewComponent_div_0_For_38_Conditional_34_Template, 3, 0, "div", 45)(35, ServicesViewComponent_div_0_For_38_Conditional_35_Template, 2, 0, "span", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 47)(37, "button", 48);
    \u0275\u0275listener("click", function ServicesViewComponent_div_0_For_38_Template_button_click_37_listener() {
      const srv_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectServiceForMatrix.emit(srv_r4.id));
    });
    \u0275\u0275element(38, "i", 49);
    \u0275\u0275text(39, " Vedi ragazzi compatibili \u2192 ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const srv_r4 = ctx.$implicit;
    const t_r9 = \u0275\u0275nextContext().$implicit;
    const assigned_r10 = \u0275\u0275storeLet(\u0275\u0275nextContext().getAssignedScouts(srv_r4.id));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", srv_r4.category, " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(srv_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(srv_r4.organization);
    \u0275\u0275advance();
    \u0275\u0275conditional(srv_r4.description ? 15 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(srv_r4.location);
    \u0275\u0275advance();
    \u0275\u0275conditional(srv_r4.contactPerson ? 21 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(srv_r4.scheduleSlots);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r9("services.assignedScouts"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", assigned_r10.length, " ", t_r9("services.scoutsCount"), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(assigned_r10.length > 0 ? 34 : 35);
  }
}
function ServicesViewComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div")(3, "h2", 3);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 4);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 5);
    \u0275\u0275listener("click", function ServicesViewComponent_div_0_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAddService.emit());
    });
    \u0275\u0275element(8, "i", 6);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 7)(11, "div", 8);
    \u0275\u0275element(12, "i", 9);
    \u0275\u0275elementStart(13, "input", 10);
    \u0275\u0275listener("ngModelChange", function ServicesViewComponent_div_0_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.searchQuery.set($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 11)(15, "label", 4);
    \u0275\u0275text(16, "Categoria:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "select", 12);
    \u0275\u0275listener("ngModelChange", function ServicesViewComponent_div_0_Template_select_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.categoryFilter.set($event));
    });
    \u0275\u0275elementStart(18, "option", 13);
    \u0275\u0275text(19, "Tutte le categorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 14);
    \u0275\u0275text(21, "Infanzia / Doposcuola");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 15);
    \u0275\u0275text(23, "Anziani");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 16);
    \u0275\u0275text(25, "Povert\xE0 / Cucine");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 17);
    \u0275\u0275text(27, "Disabilit\xE0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "option", 18);
    \u0275\u0275text(29, "Salute / Pronto Soccorso");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "option", 19);
    \u0275\u0275text(31, "Ambiente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "option", 20);
    \u0275\u0275text(33, "Comunit\xE0 / Parrocchia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "option", 21);
    \u0275\u0275text(35, "Altro");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(36, "div", 22);
    \u0275\u0275repeaterCreate(37, ServicesViewComponent_div_0_For_38_Template, 40, 11, "div", 23, _forTrack04);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r9("services.title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r9("services.subtitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r9("services.addService"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.searchQuery());
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.categoryFilter());
    \u0275\u0275advance(20);
    \u0275\u0275repeater(ctx_r1.filteredServices());
  }
}
var ServicesViewComponent = class _ServicesViewComponent {
  clanData = inject(ClanDataService);
  openAddService = output();
  openEditService = output();
  selectServiceForMatrix = output();
  searchQuery = signal("", ...ngDevMode ? [{ debugName: "searchQuery" }] : (
    /* istanbul ignore next */
    []
  ));
  categoryFilter = signal("all", ...ngDevMode ? [{ debugName: "categoryFilter" }] : (
    /* istanbul ignore next */
    []
  ));
  filteredServices = computed(() => {
    const list = this.clanData.services();
    const q = this.searchQuery().toLowerCase().trim();
    const cat = this.categoryFilter();
    return list.filter((s) => {
      const matchQ = !q || `${s.name} ${s.organization} ${s.location}`.toLowerCase().includes(q);
      const matchCat = cat === "all" || s.category === cat;
      return matchQ && matchCat;
    });
  }, ...ngDevMode ? [{ debugName: "filteredServices" }] : (
    /* istanbul ignore next */
    []
  ));
  getAssignedScouts(serviceId) {
    return this.clanData.members().filter((m) => m.assignedServiceId === serviceId);
  }
  getDayLabel(day) {
    return DAYS_METADATA.find((d) => d.id === day)?.labelIt || day;
  }
  deleteService(id) {
    const s = this.clanData.services().find((item) => item.id === id);
    if (!s)
      return;
    if (confirm(`Eliminare il servizio "${s.name}"?`)) {
      this.clanData.deleteService(id);
    }
  }
  unassignScout(memberId) {
    this.clanData.assignMember(memberId, void 0);
  }
  static \u0275fac = function ServicesViewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ServicesViewComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServicesViewComponent, selectors: [["app-services-view"]], outputs: { openAddService: "openAddService", openEditService: "openEditService", selectServiceForMatrix: "selectServiceForMatrix" }, decls: 1, vars: 0, consts: [["class", "space-y-6", 4, "transloco"], [1, "space-y-6"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "justify-between", "gap-4", "bg-white", "p-4", "rounded-xl", "border", "border-slate-200", "shadow-2xs"], [1, "text-base", "font-bold", "text-slate-900"], [1, "text-xs", "text-slate-500"], ["type", "button", 1, "px-3.5", "py-1.5", "text-xs", "font-semibold", "text-white", "bg-blue-600", "hover:bg-blue-700", "rounded-lg", "shadow-2xs", "cursor-pointer", "flex", "items-center", "gap-1.5", 3, "click"], [1, "pi", "pi-plus", "text-xs"], [1, "flex", "flex-wrap", "items-center", "gap-3", "bg-white", "p-3", "rounded-xl", "border", "border-slate-200", "shadow-2xs"], [1, "relative", "flex-1", "min-w-[200px]"], [1, "pi", "pi-search", "absolute", "left-3", "top-2.5", "text-slate-400", "text-xs"], ["type", "text", "placeholder", "Cerca per nome servizio, ente o luogo...", 1, "w-full", "pl-8", "pr-3", "py-1.5", "text-xs", "bg-slate-50", "border", "border-slate-200", "rounded-lg", "focus:outline-none", "focus:border-blue-500", "focus:bg-white", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "gap-2"], [1, "py-1", "px-2.5", "text-xs", "bg-slate-50", "border", "border-slate-200", "rounded-lg", "text-slate-700", 3, "ngModelChange", "ngModel"], ["value", "all"], ["value", "children"], ["value", "elderly"], ["value", "poverty"], ["value", "disability"], ["value", "health"], ["value", "environment"], ["value", "parish"], ["value", "other"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-5"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "shadow-2xs", "hover:shadow-xs", "transition-shadow", "flex", "flex-col", "justify-between", "overflow-hidden"], [1, "p-5"], [1, "flex", "items-start", "justify-between", "gap-2", "mb-2"], [1, "text-[10px]", "uppercase", "font-bold", "tracking-wider", "px-2", "py-0.5", "rounded-md", "bg-slate-100", "text-slate-700"], [1, "flex", "items-center", "gap-1"], ["type", "button", 1, "text-slate-400", "hover:text-slate-700", "p-1", "cursor-pointer", 3, "click"], [1, "pi", "pi-pencil", "text-xs"], ["type", "button", 1, "text-red-400", "hover:text-red-700", "p-1", "cursor-pointer", 3, "click"], [1, "pi", "pi-trash", "text-xs"], [1, "font-bold", "text-sm", "text-slate-900", "leading-snug", "mb-1"], [1, "text-xs", "font-medium", "text-slate-600", "block", "mb-2"], [1, "text-xs", "text-slate-500", "line-clamp-2", "mb-3"], [1, "space-y-1", "text-xs", "text-slate-500", "mb-4", "pt-2", "border-t", "border-slate-100"], [1, "flex", "items-center", "gap-1.5"], [1, "pi", "pi-map-marker", "text-slate-400", "text-xs"], [1, "mb-4"], [1, "text-[11px]", "font-bold", "uppercase", "tracking-wider", "text-slate-400", "block", "mb-1.5"], [1, "flex", "flex-wrap", "gap-1.5"], [1, "inline-flex", "items-center", "gap-1", "text-xs", "font-semibold", "px-2", "py-1", "rounded", "bg-slate-100", "text-slate-800", "border", "border-slate-200"], [1, "flex", "items-center", "justify-between", "text-xs", "mb-1.5"], [1, "font-bold", "uppercase", "tracking-wider", "text-slate-400", "text-[11px]"], [1, "font-mono", "font-bold", "text-xs", "text-slate-700"], [1, "space-y-1.5"], [1, "text-xs", "text-slate-400", "italic", "block"], [1, "bg-slate-50", "p-3", "px-5", "border-t", "border-slate-100", "flex", "items-center", "justify-between"], ["type", "button", 1, "text-xs", "font-semibold", "text-blue-600", "hover:text-blue-800", "cursor-pointer", "flex", "items-center", "gap-1", 3, "click"], [1, "pi", "pi-search", "text-xs"], [1, "pi", "pi-user", "text-slate-400", "text-xs"], [1, "pi", "pi-clock", "text-[10px]", "text-slate-500"], [1, "flex", "items-center", "justify-between", "p-1.5", "px-2.5", "rounded", "bg-emerald-50/60", "border", "border-emerald-200", "text-xs"], [1, "font-semibold", "text-emerald-900"], ["type", "button", 1, "text-red-500", "hover:text-red-700", "text-[11px]", "cursor-pointer", 3, "click"]], template: function ServicesViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ServicesViewComponent_div_0_Template, 39, 5, "div", 0);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, TranslocoDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServicesViewComponent, [{
    type: Component,
    args: [{ selector: "app-services-view", standalone: true, imports: [CommonModule, FormsModule, TranslocoDirective], template: `<div class="space-y-6" *transloco="let t">\r
  <!-- Header Bar -->\r
  <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">\r
    <div>\r
      <h2 class="text-base font-bold text-slate-900">{{ t('services.title') }}</h2>\r
      <p class="text-xs text-slate-500">{{ t('services.subtitle') }}</p>\r
    </div>\r
    <button type="button" (click)="openAddService.emit()" class="px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-2xs cursor-pointer flex items-center gap-1.5">\r
      <i class="pi pi-plus text-xs"></i> {{ t('services.addService') }}\r
    </button>\r
  </div>\r
\r
  <!-- Filters -->\r
  <div class="flex flex-wrap items-center gap-3 bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">\r
    <div class="relative flex-1 min-w-[200px]">\r
      <i class="pi pi-search absolute left-3 top-2.5 text-slate-400 text-xs"></i>\r
      <input\r
        type="text"\r
        [ngModel]="searchQuery()"\r
        (ngModelChange)="searchQuery.set($event)"\r
        placeholder="Cerca per nome servizio, ente o luogo..."\r
        class="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:bg-white"\r
      />\r
    </div>\r
    <div class="flex items-center gap-2">\r
      <label class="text-xs text-slate-500">Categoria:</label>\r
      <select [ngModel]="categoryFilter()" (ngModelChange)="categoryFilter.set($event)" class="py-1 px-2.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-700">\r
        <option value="all">Tutte le categorie</option>\r
        <option value="children">Infanzia / Doposcuola</option>\r
        <option value="elderly">Anziani</option>\r
        <option value="poverty">Povert\xE0 / Cucine</option>\r
        <option value="disability">Disabilit\xE0</option>\r
        <option value="health">Salute / Pronto Soccorso</option>\r
        <option value="environment">Ambiente</option>\r
        <option value="parish">Comunit\xE0 / Parrocchia</option>\r
        <option value="other">Altro</option>\r
      </select>\r
    </div>\r
  </div>\r
\r
  <!-- Services Grid -->\r
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">\r
    @for (srv of filteredServices(); track srv.id) {\r
      @let assigned = getAssignedScouts(srv.id);\r
      <div class="bg-white rounded-xl border border-slate-200 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between overflow-hidden">\r
        <div class="p-5">\r
          <div class="flex items-start justify-between gap-2 mb-2">\r
            <span class="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">\r
              {{ srv.category }}\r
            </span>\r
            <div class="flex items-center gap-1">\r
              <button type="button" (click)="openEditService.emit(srv)" class="text-slate-400 hover:text-slate-700 p-1 cursor-pointer"><i class="pi pi-pencil text-xs"></i></button>\r
              <button type="button" (click)="deleteService(srv.id)" class="text-red-400 hover:text-red-700 p-1 cursor-pointer"><i class="pi pi-trash text-xs"></i></button>\r
            </div>\r
          </div>\r
\r
          <h3 class="font-bold text-sm text-slate-900 leading-snug mb-1">{{ srv.name }}</h3>\r
          <span class="text-xs font-medium text-slate-600 block mb-2">{{ srv.organization }}</span>\r
          @if (srv.description) {\r
            <p class="text-xs text-slate-500 line-clamp-2 mb-3">{{ srv.description }}</p>\r
          }\r
\r
          <div class="space-y-1 text-xs text-slate-500 mb-4 pt-2 border-t border-slate-100">\r
            <div class="flex items-center gap-1.5">\r
              <i class="pi pi-map-marker text-slate-400 text-xs"></i>\r
              <span>{{ srv.location }}</span>\r
            </div>\r
            @if (srv.contactPerson) {\r
              <div class="flex items-center gap-1.5">\r
                <i class="pi pi-user text-slate-400 text-xs"></i>\r
                <span>{{ srv.contactPerson }} {{ srv.contactPhone ? '(' + srv.contactPhone + ')' : '' }}</span>\r
              </div>\r
            }\r
          </div>\r
\r
          <div class="mb-4">\r
            <span class="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">Orari Richiesti:</span>\r
            <div class="flex flex-wrap gap-1.5">\r
              @for (slot of srv.scheduleSlots; track $index) {\r
                <span class="inline-flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded bg-slate-100 text-slate-800 border border-slate-200">\r
                  <i class="pi pi-clock text-[10px] text-slate-500"></i>\r
                  {{ getDayLabel(slot.day) }} {{ slot.startTime }} - {{ slot.endTime }}\r
                </span>\r
              }\r
            </div>\r
          </div>\r
\r
          <div>\r
            <div class="flex items-center justify-between text-xs mb-1.5">\r
              <span class="font-bold uppercase tracking-wider text-slate-400 text-[11px]">{{ t('services.assignedScouts') }}</span>\r
              <span class="font-mono font-bold text-xs text-slate-700">\r
                {{ assigned.length }} {{ t('services.scoutsCount') }}\r
              </span>\r
            </div>\r
            @if (assigned.length > 0) {\r
              <div class="space-y-1.5">\r
                @for (scout of assigned; track scout.id) {\r
                  <div class="flex items-center justify-between p-1.5 px-2.5 rounded bg-emerald-50/60 border border-emerald-200 text-xs">\r
                    <span class="font-semibold text-emerald-900">{{ scout.name }} {{ scout.surname }}</span>\r
                    <button type="button" (click)="unassignScout(scout.id)" class="text-red-500 hover:text-red-700 text-[11px] cursor-pointer">Rimuovi</button>\r
                  </div>\r
                }\r
              </div>\r
            } @else {\r
              <span class="text-xs text-slate-400 italic block">Nessun ragazzo ancora assegnato</span>\r
            }\r
          </div>\r
        </div>\r
\r
        <div class="bg-slate-50 p-3 px-5 border-t border-slate-100 flex items-center justify-between">\r
          <button type="button" (click)="selectServiceForMatrix.emit(srv.id)" class="text-xs font-semibold text-blue-600 hover:text-blue-800 cursor-pointer flex items-center gap-1">\r
            <i class="pi pi-search text-xs"></i> Vedi ragazzi compatibili &rarr;\r
          </button>\r
        </div>\r
      </div>\r
    }\r
  </div>\r
</div>\r
` }]
  }], null, { openAddService: [{ type: Output, args: ["openAddService"] }], openEditService: [{ type: Output, args: ["openEditService"] }], selectServiceForMatrix: [{ type: Output, args: ["selectServiceForMatrix"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServicesViewComponent, { className: "ServicesViewComponent", filePath: "app/components/services-view/services-view.ts", lineNumber: 15 });
})();

// src/app/services/export.service.ts
var ExportService = class _ExportService {
  generateWhatsAppSummary(members, services, bufferMinutes) {
    let text = `\u269C\uFE0F *ASSEGNAZIONE SERVIZI CLAN* \u269C\uFE0F
`;
    text += `_Verificata con buffer spostamenti di ${bufferMinutes} min_

`;
    services.forEach((service) => {
      const assigned = members.filter((m) => m.assignedServiceId === service.id);
      const slotsStr = service.scheduleSlots.map((slot) => {
        const dayLabel = DAYS_METADATA.find((d) => d.id === slot.day)?.labelIt || slot.day;
        return `${dayLabel} ${slot.startTime}-${slot.endTime}`;
      }).join(", ");
      text += `\u{1F4CC} *${service.name}* (${service.organization})
`;
      text += `\u{1F552} Orario: ${slotsStr}
`;
      text += `\u{1F4CD} Luogo: ${service.location}
`;
      if (assigned.length > 0) {
        text += `\u{1F449} Rover assegnati:
`;
        assigned.forEach((s) => {
          text += `   \u2022 ${s.name} ${s.surname}
`;
        });
      } else {
        text += `\u26A0\uFE0F _Nessun ragazzo ancora assegnato_
`;
      }
      text += `
`;
    });
    const unassigned = members.filter((m) => !m.assignedServiceId);
    if (unassigned.length > 0) {
      text += `\u23F3 *Ragazzi ancora senza servizio (${unassigned.length}):*
`;
      unassigned.forEach((u) => {
        text += `\u2022 ${u.name} ${u.surname}
`;
      });
      text += `
`;
    }
    text += `Buona Strada! \u{1F3D5}\uFE0F`;
    return text;
  }
  copyToClipboard(text) {
    return navigator.clipboard.writeText(text);
  }
  triggerPrint() {
    window.print();
  }
  static \u0275fac = function ExportService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExportService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExportService, factory: _ExportService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExportService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/components/matrix-view/matrix-grid.ts
var _forTrack05 = ($index, $item) => $item.id;
function MatrixGridComponent_For_23_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const slot_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate3(" ", ctx_r1.getDayShort(slot_r1.day), " ", slot_r1.startTime, "-", slot_r1.endTime, " ");
  }
}
function MatrixGridComponent_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "th", 14)(1, "span", 17);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span", 18);
    \u0275\u0275repeaterCreate(4, MatrixGridComponent_For_23_For_5_Template, 1, 3, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const srv_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275domProperty("title", srv_r3.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(srv_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(srv_r3.scheduleSlots);
  }
}
function MatrixGridComponent_For_26_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "span", 20);
  }
}
function MatrixGridComponent_For_26_For_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 22)(1, "span", 25);
    \u0275\u0275text(2, "Assegnato");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "button", 26);
    \u0275\u0275domListener("click", function MatrixGridComponent_For_26_For_7_Conditional_2_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const mem_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.unassignScout(mem_r5.id));
    });
    \u0275\u0275text(4, "Rimuovi");
    \u0275\u0275domElementEnd()();
  }
}
function MatrixGridComponent_For_26_For_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 27);
    \u0275\u0275domListener("click", function MatrixGridComponent_For_26_For_7_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const srv_r7 = \u0275\u0275nextContext().$implicit;
      const mem_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.assignScout(mem_r5.id, srv_r7.id));
    });
    \u0275\u0275domElement(1, "i", 28);
    \u0275\u0275domElementEnd();
  }
}
function MatrixGridComponent_For_26_For_7_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 24);
    \u0275\u0275domElement(1, "i", 29);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const compat_r8 = \u0275\u0275readContextLet(0);
    \u0275\u0275domProperty("title", (compat_r8.conflicts[0] == null ? null : compat_r8.conflicts[0].reason) || "Conflitto");
  }
}
function MatrixGridComponent_For_26_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275domElementStart(1, "td", 21);
    \u0275\u0275conditionalCreate(2, MatrixGridComponent_For_26_For_7_Conditional_2_Template, 5, 0, "div", 22)(3, MatrixGridComponent_For_26_For_7_Conditional_3_Template, 2, 0, "button", 23)(4, MatrixGridComponent_For_26_For_7_Conditional_4_Template, 2, 1, "div", 24);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const srv_r7 = ctx.$implicit;
    const mem_r5 = \u0275\u0275nextContext().$implicit;
    const compat_r9 = \u0275\u0275storeLet(\u0275\u0275nextContext().checkCompat(mem_r5, srv_r7));
    const isAssignedHere_r10 = mem_r5.assignedServiceId === srv_r7.id;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(isAssignedHere_r10 ? 2 : compat_r9.isCompatible ? 3 : 4);
  }
}
function MatrixGridComponent_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr", 16)(1, "td", 19)(2, "div")(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(5, MatrixGridComponent_For_26_Conditional_5_Template, 1, 0, "span", 20);
    \u0275\u0275domElementEnd();
    \u0275\u0275repeaterCreate(6, MatrixGridComponent_For_26_For_7_Template, 5, 2, "td", 21, _forTrack05);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const mem_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", mem_r5.name, " ", mem_r5.surname);
    \u0275\u0275advance();
    \u0275\u0275conditional(mem_r5.assignedServiceId ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.clanData.services());
  }
}
var MatrixGridComponent = class _MatrixGridComponent {
  clanData = inject(ClanDataService);
  compatService = inject(CompatibilityService);
  checkCompat(m, s) {
    return this.compatService.check(m, s, this.clanData.bufferMinutes());
  }
  assignScout(memberId, serviceId) {
    this.clanData.assignMember(memberId, serviceId);
  }
  unassignScout(memberId) {
    this.clanData.assignMember(memberId, void 0);
  }
  getDayShort(day) {
    return DAYS_METADATA.find((d) => d.id === day)?.shortIt || day;
  }
  static \u0275fac = function MatrixGridComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatrixGridComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MatrixGridComponent, selectors: [["app-matrix-grid"]], decls: 27, vars: 1, consts: [[1, "bg-white", "rounded-xl", "border", "border-slate-200", "shadow-2xs", "overflow-hidden"], [1, "p-3", "bg-slate-50", "border-b", "border-slate-200", "flex", "flex-wrap", "items-center", "justify-between", "gap-3", "text-xs"], [1, "flex", "items-center", "gap-4"], [1, "flex", "items-center", "gap-1.5", "text-emerald-700", "font-semibold"], [1, "w-3.5", "h-3.5", "rounded-full", "bg-emerald-500", "inline-block"], [1, "flex", "items-center", "gap-1.5", "text-red-600", "font-semibold"], [1, "w-3.5", "h-3.5", "rounded-full", "bg-red-400", "inline-block"], [1, "flex", "items-center", "gap-1.5", "text-blue-700", "font-semibold"], [1, "w-3.5", "h-3.5", "rounded-full", "bg-blue-600", "inline-block"], [1, "text-slate-500", "text-[11px]"], [1, "overflow-x-auto"], [1, "w-full", "text-xs", "text-left", "border-collapse"], [1, "bg-slate-100", "text-slate-700", "font-bold", "border-b", "border-slate-200"], [1, "py-3", "px-4", "min-w-[180px]", "sticky", "left-0", "bg-slate-100", "z-10", "border-r", "border-slate-200", "shadow-xs"], [1, "py-3", "px-3", "min-w-[140px]", "text-center", "border-r", "border-slate-200", "last:border-r-0"], [1, "divide-y", "divide-slate-100"], [1, "hover:bg-slate-50/80", "transition-colors"], [1, "block", "font-bold", "text-slate-900", "truncate", 3, "title"], [1, "text-[10px]", "text-slate-500", "font-normal", "block"], [1, "py-2.5", "px-4", "font-semibold", "text-slate-900", "sticky", "left-0", "bg-white", "hover:bg-slate-50", "z-10", "border-r", "border-slate-200", "shadow-xs", "flex", "items-center", "justify-between"], [1, "w-2", "h-2", "rounded-full", "bg-blue-600"], [1, "py-2.5", "px-2", "text-center", "border-r", "border-slate-100", "last:border-r-0"], [1, "inline-flex", "flex-col", "items-center"], ["type", "button", "title", "Libero! Clicca per assegnare", 1, "w-7", "h-7", "rounded-lg", "bg-emerald-100", "hover:bg-emerald-200", "text-emerald-800", "inline-flex", "items-center", "justify-center", "font-bold", "text-xs", "cursor-pointer"], [1, "w-7", "h-7", "rounded-lg", "bg-red-50", "text-red-500", "inline-flex", "items-center", "justify-center", "font-bold", "text-xs", "cursor-help", "border", "border-red-100", 3, "title"], [1, "px-2", "py-0.5", "text-[10px]", "font-bold", "bg-blue-600", "text-white", "rounded-md"], ["type", "button", 1, "matrix-print-hide", "text-[9px]", "text-red-500", "hover:underline", "mt-0.5", "cursor-pointer", 3, "click"], ["type", "button", "title", "Libero! Clicca per assegnare", 1, "w-7", "h-7", "rounded-lg", "bg-emerald-100", "hover:bg-emerald-200", "text-emerald-800", "inline-flex", "items-center", "justify-center", "font-bold", "text-xs", "cursor-pointer", 3, "click"], [1, "pi", "pi-check"], [1, "pi", "pi-times"]], template: function MatrixGridComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275domElement(4, "span", 4);
      \u0275\u0275text(5, " Compatibile ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "span", 5);
      \u0275\u0275domElement(7, "span", 6);
      \u0275\u0275text(8, " Incompatibile ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(9, "span", 7);
      \u0275\u0275domElement(10, "span", 8);
      \u0275\u0275text(11, " Assegnato ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(12, "span", 9);
      \u0275\u0275text(13, "Buffer: ");
      \u0275\u0275domElementStart(14, "strong");
      \u0275\u0275text(15);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(16, "div", 10)(17, "table", 11)(18, "thead", 12)(19, "tr")(20, "th", 13);
      \u0275\u0275text(21, "Rover");
      \u0275\u0275domElementEnd();
      \u0275\u0275repeaterCreate(22, MatrixGridComponent_For_23_Template, 6, 2, "th", 14, _forTrack05);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(24, "tbody", 15);
      \u0275\u0275repeaterCreate(25, MatrixGridComponent_For_26_Template, 8, 3, "tr", 16, _forTrack05);
      \u0275\u0275domElementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275textInterpolate1("", ctx.clanData.bufferMinutes(), " min");
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.clanData.services());
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.clanData.members());
    }
  }, dependencies: [CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatrixGridComponent, [{
    type: Component,
    args: [{ selector: "app-matrix-grid", standalone: true, imports: [CommonModule], template: `<div class="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">\r
  <div class="p-3 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">\r
    <div class="flex items-center gap-4">\r
      <span class="flex items-center gap-1.5 text-emerald-700 font-semibold">\r
        <span class="w-3.5 h-3.5 rounded-full bg-emerald-500 inline-block"></span> Compatibile\r
      </span>\r
      <span class="flex items-center gap-1.5 text-red-600 font-semibold">\r
        <span class="w-3.5 h-3.5 rounded-full bg-red-400 inline-block"></span> Incompatibile\r
      </span>\r
      <span class="flex items-center gap-1.5 text-blue-700 font-semibold">\r
        <span class="w-3.5 h-3.5 rounded-full bg-blue-600 inline-block"></span> Assegnato\r
      </span>\r
    </div>\r
    <span class="text-slate-500 text-[11px]">Buffer: <strong>{{ clanData.bufferMinutes() }} min</strong></span>\r
  </div>\r
\r
  <div class="overflow-x-auto">\r
    <table class="w-full text-xs text-left border-collapse">\r
      <thead class="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">\r
        <tr>\r
          <th class="py-3 px-4 min-w-[180px] sticky left-0 bg-slate-100 z-10 border-r border-slate-200 shadow-xs">Rover</th>\r
          @for (srv of clanData.services(); track srv.id) {\r
            <th class="py-3 px-3 min-w-[140px] text-center border-r border-slate-200 last:border-r-0">\r
              <span class="block font-bold text-slate-900 truncate" [title]="srv.name">{{ srv.name }}</span>\r
              <span class="text-[10px] text-slate-500 font-normal block">\r
                @for (slot of srv.scheduleSlots; track $index) {\r
                  {{ getDayShort(slot.day) }} {{ slot.startTime }}-{{ slot.endTime }} \r
                }\r
              </span>\r
            </th>\r
          }\r
        </tr>\r
      </thead>\r
      <tbody class="divide-y divide-slate-100">\r
        @for (mem of clanData.members(); track mem.id) {\r
          <tr class="hover:bg-slate-50/80 transition-colors">\r
            <td class="py-2.5 px-4 font-semibold text-slate-900 sticky left-0 bg-white hover:bg-slate-50 z-10 border-r border-slate-200 shadow-xs flex items-center justify-between">\r
              <div>\r
                <span>{{ mem.name }} {{ mem.surname }}</span>\r
              </div>\r
              @if (mem.assignedServiceId) { <span class="w-2 h-2 rounded-full bg-blue-600"></span> }\r
            </td>\r
            @for (srv of clanData.services(); track srv.id) {\r
              @let compat = checkCompat(mem, srv);\r
              @let isAssignedHere = mem.assignedServiceId === srv.id;\r
              <td class="py-2.5 px-2 text-center border-r border-slate-100 last:border-r-0">\r
                @if (isAssignedHere) {\r
                  <div class="inline-flex flex-col items-center">\r
                    <span class="px-2 py-0.5 text-[10px] font-bold bg-blue-600 text-white rounded-md">Assegnato</span>\r
                    <button type="button" (click)="unassignScout(mem.id)" class="matrix-print-hide text-[9px] text-red-500 hover:underline mt-0.5 cursor-pointer">Rimuovi</button>\r
                  </div>\r
                } @else if (compat.isCompatible) {\r
                  <button type="button" (click)="assignScout(mem.id, srv.id)" class="w-7 h-7 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-800 inline-flex items-center justify-center font-bold text-xs cursor-pointer" title="Libero! Clicca per assegnare">\r
                    <i class="pi pi-check"></i>\r
                  </button>\r
                } @else {\r
                  <div class="w-7 h-7 rounded-lg bg-red-50 text-red-500 inline-flex items-center justify-center font-bold text-xs cursor-help border border-red-100" [title]="compat.conflicts[0]?.reason || 'Conflitto'">\r
                    <i class="pi pi-times"></i>\r
                  </div>\r
                }\r
              </td>\r
            }\r
          </tr>\r
        }\r
      </tbody>\r
    </table>\r
  </div>\r
</div>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MatrixGridComponent, { className: "MatrixGridComponent", filePath: "app/components/matrix-view/matrix-grid.ts", lineNumber: 14 });
})();

// src/app/components/matrix-view/matrix-view.ts
var _forTrack06 = ($index, $item) => $item.id;
var _forTrack12 = ($index, $item) => $item.service.id;
var _forTrack2 = ($index, $item) => $item.member.id;
function MatrixViewComponent_div_0_Conditional_22_For_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1, "Assegnato");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r1.selectedMemberId() === m_r4.id ? "bg-blue-700 text-white" : "bg-emerald-100 text-emerald-800 font-semibold");
  }
}
function MatrixViewComponent_div_0_Conditional_22_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function MatrixViewComponent_div_0_Conditional_22_For_6_Template_button_click_0_listener() {
      const m_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectedMemberId.set(m_r4.id));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, MatrixViewComponent_div_0_Conditional_22_For_6_Conditional_3_Template, 2, 1, "span", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.selectedMemberId() === m_r4.id ? "bg-blue-600 text-white font-semibold" : "bg-slate-50 hover:bg-slate-100 text-slate-800");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", m_r4.name, " ", m_r4.surname);
    \u0275\u0275advance();
    \u0275\u0275conditional(m_r4.assignedServiceId ? 3 : -1);
  }
}
function MatrixViewComponent_div_0_Conditional_22_Conditional_8_For_10_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1, "Assegnato");
    \u0275\u0275elementEnd();
  }
}
function MatrixViewComponent_div_0_Conditional_22_Conditional_8_For_10_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function MatrixViewComponent_div_0_Conditional_22_Conditional_8_For_10_Conditional_0_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const item_r6 = \u0275\u0275nextContext(2).$implicit;
      const mem_r7 = \u0275\u0275nextContext();
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.assignScout(mem_r7.id, item_r6.service.id));
    });
    \u0275\u0275text(1, "Assegna");
    \u0275\u0275elementEnd();
  }
}
function MatrixViewComponent_div_0_Conditional_22_Conditional_8_For_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div")(2, "span", 27);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 28);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, MatrixViewComponent_div_0_Conditional_22_Conditional_8_For_10_Conditional_0_Conditional_6_Template, 2, 0, "span", 29)(7, MatrixViewComponent_div_0_Conditional_22_Conditional_8_For_10_Conditional_0_Conditional_7_Template, 2, 0, "button", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext().$implicit;
    const mem_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r6.service.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.service.organization);
    \u0275\u0275advance();
    \u0275\u0275conditional(mem_r7.assignedServiceId === item_r6.service.id ? 6 : 7);
  }
}
function MatrixViewComponent_div_0_Conditional_22_Conditional_8_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MatrixViewComponent_div_0_Conditional_22_Conditional_8_For_10_Conditional_0_Template, 8, 3, "div", 26);
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275conditional(item_r6.result.isCompatible ? 0 : -1);
  }
}
function MatrixViewComponent_div_0_Conditional_22_Conditional_8_For_15_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "span", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 33);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r8.service.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u2022 ", item_r8.result.conflicts[0] == null ? null : item_r8.result.conflicts[0].reason);
  }
}
function MatrixViewComponent_div_0_Conditional_22_Conditional_8_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MatrixViewComponent_div_0_Conditional_22_Conditional_8_For_15_Conditional_0_Template, 5, 2, "div", 32);
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    \u0275\u0275conditional(!item_r8.result.isCompatible ? 0 : -1);
  }
}
function MatrixViewComponent_div_0_Conditional_22_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "h3", 3);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 4);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 22)(6, "div", 23)(7, "h4", 24);
    \u0275\u0275text(8, "Servizi Compatibili");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(9, MatrixViewComponent_div_0_Conditional_22_Conditional_8_For_10_Template, 1, 1, null, null, _forTrack12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 23)(12, "h4", 25);
    \u0275\u0275text(13, "Servizi Incompatibili");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(14, MatrixViewComponent_div_0_Conditional_22_Conditional_8_For_15_Template, 1, 1, null, null, _forTrack12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const mem_r7 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", mem_r7.name, " ", mem_r7.surname);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", mem_r7.commitments.length, " impegni registrati");
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.selectedMemberCompatibility());
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.selectedMemberCompatibility());
  }
}
function MatrixViewComponent_div_0_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "span", 15);
    \u0275\u0275text(3, "Seleziona Scout:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 16);
    \u0275\u0275repeaterCreate(5, MatrixViewComponent_div_0_Conditional_22_For_6_Template, 4, 5, "button", 17, _forTrack06);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 18);
    \u0275\u0275conditionalCreate(8, MatrixViewComponent_div_0_Conditional_22_Conditional_8_Template, 16, 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.clanData.members());
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_4_0 = ctx_r1.selectedMember()) ? 8 : -1, tmp_4_0);
  }
}
function MatrixViewComponent_div_0_Conditional_23_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function MatrixViewComponent_div_0_Conditional_23_For_6_Template_button_click_0_listener() {
      const s_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectedServiceId.set(s_r10.id));
    });
    \u0275\u0275elementStart(1, "span", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 35);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r10 = ctx.$implicit;
    const t_r11 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    const assigned_r12 = ctx_r1.getAssignedScouts(s_r10.id);
    \u0275\u0275classMap(ctx_r1.selectedServiceId() === s_r10.id ? "bg-blue-600 text-white font-semibold" : "bg-slate-50 hover:bg-slate-100 text-slate-800");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r10.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r1.selectedServiceId() === s_r10.id ? "bg-blue-700 text-white" : "bg-slate-200 text-slate-700");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", assigned_r12.length, " ", t_r11("services.scoutsCount"), " ");
  }
}
function MatrixViewComponent_div_0_Conditional_23_Conditional_8_For_10_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1, "Assegnato qui");
    \u0275\u0275elementEnd();
  }
}
function MatrixViewComponent_div_0_Conditional_23_Conditional_8_For_10_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function MatrixViewComponent_div_0_Conditional_23_Conditional_8_For_10_Conditional_0_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const item_r14 = \u0275\u0275nextContext(2).$implicit;
      const serv_r15 = \u0275\u0275nextContext();
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.assignScout(item_r14.member.id, serv_r15.id));
    });
    \u0275\u0275text(1, "Assegna");
    \u0275\u0275elementEnd();
  }
}
function MatrixViewComponent_div_0_Conditional_23_Conditional_8_For_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div")(2, "span", 27);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(4, MatrixViewComponent_div_0_Conditional_23_Conditional_8_For_10_Conditional_0_Conditional_4_Template, 2, 0, "span", 29)(5, MatrixViewComponent_div_0_Conditional_23_Conditional_8_For_10_Conditional_0_Conditional_5_Template, 2, 0, "button", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", item_r14.member.name, " ", item_r14.member.surname);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r14.isAssigned ? 4 : 5);
  }
}
function MatrixViewComponent_div_0_Conditional_23_Conditional_8_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MatrixViewComponent_div_0_Conditional_23_Conditional_8_For_10_Conditional_0_Template, 6, 3, "div", 26);
  }
  if (rf & 2) {
    const item_r14 = ctx.$implicit;
    \u0275\u0275conditional(item_r14.result.isCompatible ? 0 : -1);
  }
}
function MatrixViewComponent_div_0_Conditional_23_Conditional_8_For_15_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "span", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 33);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", item_r16.member.name, " ", item_r16.member.surname);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u2022 ", item_r16.result.conflicts[0] == null ? null : item_r16.result.conflicts[0].reason);
  }
}
function MatrixViewComponent_div_0_Conditional_23_Conditional_8_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, MatrixViewComponent_div_0_Conditional_23_Conditional_8_For_15_Conditional_0_Template, 5, 3, "div", 32);
  }
  if (rf & 2) {
    const item_r16 = ctx.$implicit;
    \u0275\u0275conditional(!item_r16.result.isCompatible ? 0 : -1);
  }
}
function MatrixViewComponent_div_0_Conditional_23_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "h3", 3);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 36);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 22)(6, "div", 23)(7, "h4", 24);
    \u0275\u0275text(8, "Ragazzi Liberi e Compatibili");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(9, MatrixViewComponent_div_0_Conditional_23_Conditional_8_For_10_Template, 1, 1, null, null, _forTrack2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 23)(12, "h4", 25);
    \u0275\u0275text(13, "Ragazzi con Conflitti");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(14, MatrixViewComponent_div_0_Conditional_23_Conditional_8_For_15_Template, 1, 1, null, null, _forTrack2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const serv_r15 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(serv_r15.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", serv_r15.organization, " \xB7 ", serv_r15.location);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.selectedServiceCompatibility());
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.selectedServiceCompatibility());
  }
}
function MatrixViewComponent_div_0_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "span", 15);
    \u0275\u0275text(3, "Seleziona Servizio:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 16);
    \u0275\u0275repeaterCreate(5, MatrixViewComponent_div_0_Conditional_23_For_6_Template, 5, 6, "button", 17, _forTrack06);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 18);
    \u0275\u0275conditionalCreate(8, MatrixViewComponent_div_0_Conditional_23_Conditional_8_Template, 16, 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.clanData.services());
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_4_0 = ctx_r1.selectedService()) ? 8 : -1, tmp_4_0);
  }
}
function MatrixViewComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div")(3, "h2", 3);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 4);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "button", 7);
    \u0275\u0275listener("click", function MatrixViewComponent_div_0_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.matrixSubView.set("grid"));
    });
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 7);
    \u0275\u0275listener("click", function MatrixViewComponent_div_0_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.matrixSubView.set("byMember"));
    });
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 7);
    \u0275\u0275listener("click", function MatrixViewComponent_div_0_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.matrixSubView.set("byService"));
    });
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "button", 8);
    \u0275\u0275listener("click", function MatrixViewComponent_div_0_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.autoAssign.emit());
    });
    \u0275\u0275element(16, "i", 9);
    \u0275\u0275text(17, " Ottimizza Assegnazioni ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 10);
    \u0275\u0275listener("click", function MatrixViewComponent_div_0_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.print());
    });
    \u0275\u0275element(19, "i", 11);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(21, "app-matrix-grid", 12);
    \u0275\u0275conditionalCreate(22, MatrixViewComponent_div_0_Conditional_22_Template, 9, 1, "div", 13);
    \u0275\u0275conditionalCreate(23, MatrixViewComponent_div_0_Conditional_23_Template, 9, 1, "div", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r11("matrix.title"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r11("matrix.subtitle"));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.matrixSubView() === "grid" ? "bg-white text-slate-900 shadow-2xs font-bold" : "text-slate-600");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r11("matrix.matrixView"), " ");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.matrixSubView() === "byMember" ? "bg-white text-slate-900 shadow-2xs font-bold" : "text-slate-600");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r11("matrix.scoutView"), " ");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.matrixSubView() === "byService" ? "bg-white text-slate-900 shadow-2xs font-bold" : "text-slate-600");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r11("matrix.serviceView"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", t_r11("matrix.printPdf"), " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("matrix-print-grid-hidden", ctx_r1.matrixSubView() !== "grid");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.matrixSubView() === "byMember" ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.matrixSubView() === "byService" ? 23 : -1);
  }
}
var MatrixViewComponent = class _MatrixViewComponent {
  clanData = inject(ClanDataService);
  compatService = inject(CompatibilityService);
  exportService = inject(ExportService);
  initialServiceId = input(null, ...ngDevMode ? [{ debugName: "initialServiceId" }] : (
    /* istanbul ignore next */
    []
  ));
  autoAssign = output();
  matrixSubView = signal("grid", ...ngDevMode ? [{ debugName: "matrixSubView" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedMemberId = signal(null, ...ngDevMode ? [{ debugName: "selectedMemberId" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedServiceId = signal(null, ...ngDevMode ? [{ debugName: "selectedServiceId" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedMember = computed(() => {
    const id = this.selectedMemberId();
    if (!id)
      return this.clanData.members()[0] || null;
    return this.clanData.members().find((m) => m.id === id) || null;
  }, ...ngDevMode ? [{ debugName: "selectedMember" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedService = computed(() => {
    const id = this.selectedServiceId() || this.initialServiceId();
    if (!id)
      return this.clanData.services()[0] || null;
    return this.clanData.services().find((s) => s.id === id) || null;
  }, ...ngDevMode ? [{ debugName: "selectedService" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedMemberCompatibility = computed(() => {
    const m = this.selectedMember();
    if (!m)
      return [];
    const buffer = this.clanData.bufferMinutes();
    return this.clanData.services().map((service) => ({
      service,
      result: this.compatService.check(m, service, buffer)
    }));
  }, ...ngDevMode ? [{ debugName: "selectedMemberCompatibility" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedServiceCompatibility = computed(() => {
    const s = this.selectedService();
    if (!s)
      return [];
    const buffer = this.clanData.bufferMinutes();
    return this.clanData.members().map((member) => ({
      member,
      result: this.compatService.check(member, s, buffer),
      isAssigned: member.assignedServiceId === s.id
    }));
  }, ...ngDevMode ? [{ debugName: "selectedServiceCompatibility" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    const firstM = this.clanData.members()[0];
    if (firstM)
      this.selectedMemberId.set(firstM.id);
    const firstS = this.clanData.services()[0];
    if (firstS)
      this.selectedServiceId.set(firstS.id);
  }
  assignScout(memberId, serviceId) {
    this.clanData.assignMember(memberId, serviceId);
  }
  print() {
    this.exportService.triggerPrint();
  }
  getAssignedScouts(serviceId) {
    return this.clanData.members().filter((m) => m.assignedServiceId === serviceId);
  }
  static \u0275fac = function MatrixViewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatrixViewComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MatrixViewComponent, selectors: [["app-matrix-view"]], inputs: { initialServiceId: [1, "initialServiceId"] }, outputs: { autoAssign: "autoAssign" }, decls: 1, vars: 0, consts: [["class", "matrix-print-area space-y-6", 4, "transloco"], [1, "matrix-print-area", "space-y-6"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "justify-between", "gap-4", "bg-white", "p-4", "rounded-xl", "border", "border-slate-200", "shadow-2xs"], [1, "text-base", "font-bold", "text-slate-900"], [1, "text-xs", "text-slate-500"], [1, "matrix-screen-only", "flex", "items-center", "gap-2"], [1, "flex", "items-center", "bg-slate-100", "p-1", "rounded-lg", "text-xs", "font-medium"], ["type", "button", 1, "px-3", "py-1", "rounded-md", "cursor-pointer", 3, "click"], ["type", "button", 1, "px-3.5", "py-1.5", "text-xs", "font-semibold", "text-white", "bg-blue-600", "hover:bg-blue-700", "rounded-lg", "shadow-2xs", "cursor-pointer", "flex", "items-center", "gap-1.5", 3, "click"], [1, "pi", "pi-sparkles", "text-xs"], ["type", "button", 1, "px-3.5", "py-1.5", "text-xs", "font-medium", "text-slate-700", "bg-white", "border", "border-slate-300", "rounded-lg", "hover:bg-slate-50", "shadow-2xs", "cursor-pointer", "flex", "items-center", "gap-1.5", 3, "click"], [1, "pi", "pi-print", "text-xs"], [1, "matrix-print-grid"], [1, "matrix-screen-details", "grid", "grid-cols-1", "lg:grid-cols-12", "gap-6", "items-start"], [1, "lg:col-span-4", "bg-white", "p-4", "rounded-xl", "border", "border-slate-200", "shadow-2xs", "space-y-2"], [1, "text-xs", "font-bold", "uppercase", "tracking-wider", "text-slate-500", "block", "mb-2"], [1, "space-y-1.5", "max-h-[550px]", "overflow-y-auto", "pr-1"], ["type", "button", 1, "w-full", "text-left", "p-2.5", "rounded-lg", "text-xs", "cursor-pointer", "flex", "items-center", "justify-between", 3, "class"], [1, "lg:col-span-8", "bg-white", "p-5", "rounded-xl", "border", "border-slate-200", "shadow-2xs", "space-y-6"], ["type", "button", 1, "w-full", "text-left", "p-2.5", "rounded-lg", "text-xs", "cursor-pointer", "flex", "items-center", "justify-between", 3, "click"], [1, "text-[10px]", "px-1.5", "py-0.2", "rounded", 3, "ngClass"], [1, "border-b", "border-slate-100", "pb-4"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4"], [1, "space-y-2"], [1, "font-bold", "text-xs", "uppercase", "tracking-wider", "text-emerald-700"], [1, "font-bold", "text-xs", "uppercase", "tracking-wider", "text-red-600"], [1, "p-3", "rounded-lg", "border", "border-emerald-200", "bg-emerald-50/40", "text-xs", "flex", "justify-between", "items-center"], [1, "font-bold", "text-slate-900", "block"], [1, "text-[11px]", "text-slate-500", "block"], [1, "px-2", "py-0.5", "rounded", "text-[10px]", "font-bold", "bg-blue-600", "text-white"], ["type", "button", 1, "px-2.5", "py-1", "text-xs", "font-semibold", "text-white", "bg-emerald-600", "hover:bg-emerald-700", "rounded-md", "cursor-pointer"], ["type", "button", 1, "px-2.5", "py-1", "text-xs", "font-semibold", "text-white", "bg-emerald-600", "hover:bg-emerald-700", "rounded-md", "cursor-pointer", 3, "click"], [1, "p-3", "rounded-lg", "border", "border-red-200", "bg-red-50/30", "text-xs", "space-y-1"], [1, "text-[11px]", "text-red-700", "block"], [1, "truncate", "pr-2"], [1, "text-[10px]", "px-1.5", "py-0.2", "rounded", "font-mono", "shrink-0", 3, "ngClass"], [1, "text-xs", "text-slate-500", "block"]], template: function MatrixViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, MatrixViewComponent_div_0_Template, 24, 16, "div", 0);
    }
  }, dependencies: [CommonModule, NgClass, TranslocoDirective, MatrixGridComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatrixViewComponent, [{
    type: Component,
    args: [{ selector: "app-matrix-view", standalone: true, imports: [CommonModule, TranslocoDirective, MatrixGridComponent], template: `<div class="matrix-print-area space-y-6" *transloco="let t">\r
  <!-- Top Bar -->\r
  <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-2xs">\r
    <div>\r
      <h2 class="text-base font-bold text-slate-900">{{ t('matrix.title') }}</h2>\r
      <p class="text-xs text-slate-500">{{ t('matrix.subtitle') }}</p>\r
    </div>\r
    <div class="matrix-screen-only flex items-center gap-2">\r
      <div class="flex items-center bg-slate-100 p-1 rounded-lg text-xs font-medium">\r
        <button type="button" (click)="matrixSubView.set('grid')" [class]="matrixSubView() === 'grid' ? 'bg-white text-slate-900 shadow-2xs font-bold' : 'text-slate-600'" class="px-3 py-1 rounded-md cursor-pointer">\r
          {{ t('matrix.matrixView') }}\r
        </button>\r
        <button type="button" (click)="matrixSubView.set('byMember')" [class]="matrixSubView() === 'byMember' ? 'bg-white text-slate-900 shadow-2xs font-bold' : 'text-slate-600'" class="px-3 py-1 rounded-md cursor-pointer">\r
          {{ t('matrix.scoutView') }}\r
        </button>\r
        <button type="button" (click)="matrixSubView.set('byService')" [class]="matrixSubView() === 'byService' ? 'bg-white text-slate-900 shadow-2xs font-bold' : 'text-slate-600'" class="px-3 py-1 rounded-md cursor-pointer">\r
          {{ t('matrix.serviceView') }}\r
        </button>\r
      </div>\r
      <button type="button" (click)="autoAssign.emit()" class="px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-2xs cursor-pointer flex items-center gap-1.5">\r
        <i class="pi pi-sparkles text-xs"></i> Ottimizza Assegnazioni\r
      </button>\r
      <button type="button" (click)="print()" class="px-3.5 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 shadow-2xs cursor-pointer flex items-center gap-1.5">\r
        <i class="pi pi-print text-xs"></i> {{ t('matrix.printPdf') }}\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- SUB-VIEW 1: 2D GRID TABLE -->\r
  <app-matrix-grid\r
    class="matrix-print-grid"\r
    [class.matrix-print-grid-hidden]="matrixSubView() !== 'grid'"\r
  />\r
\r
  <!-- SUB-VIEW 2: BY MEMBER -->\r
  @if (matrixSubView() === 'byMember') {\r
    <div class="matrix-screen-details grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">\r
      <div class="lg:col-span-4 bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-2">\r
        <span class="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">Seleziona Scout:</span>\r
        <div class="space-y-1.5 max-h-[550px] overflow-y-auto pr-1">\r
          @for (m of clanData.members(); track m.id) {\r
            <button type="button" (click)="selectedMemberId.set(m.id)" [class]="selectedMemberId() === m.id ? 'bg-blue-600 text-white font-semibold' : 'bg-slate-50 hover:bg-slate-100 text-slate-800'" class="w-full text-left p-2.5 rounded-lg text-xs cursor-pointer flex items-center justify-between">\r
              <span>{{ m.name }} {{ m.surname }}</span>\r
              @if (m.assignedServiceId) {\r
                <span class="text-[10px] px-1.5 py-0.2 rounded" [ngClass]="selectedMemberId() === m.id ? 'bg-blue-700 text-white' : 'bg-emerald-100 text-emerald-800 font-semibold'">Assegnato</span>\r
              }\r
            </button>\r
          }\r
        </div>\r
      </div>\r
\r
      <div class="lg:col-span-8 bg-white p-5 rounded-xl border border-slate-200 shadow-2xs space-y-6">\r
        @if (selectedMember(); as mem) {\r
          <div class="border-b border-slate-100 pb-4">\r
            <h3 class="text-base font-bold text-slate-900">{{ mem.name }} {{ mem.surname }}</h3>\r
            <span class="text-xs text-slate-500">{{ mem.commitments.length }} impegni registrati</span>\r
          </div>\r
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">\r
            <div class="space-y-2">\r
              <h4 class="font-bold text-xs uppercase tracking-wider text-emerald-700">Servizi Compatibili</h4>\r
              @for (item of selectedMemberCompatibility(); track item.service.id) {\r
                @if (item.result.isCompatible) {\r
                  <div class="p-3 rounded-lg border border-emerald-200 bg-emerald-50/40 text-xs flex justify-between items-center">\r
                    <div>\r
                      <span class="font-bold text-slate-900 block">{{ item.service.name }}</span>\r
                      <span class="text-[11px] text-slate-500 block">{{ item.service.organization }}</span>\r
                    </div>\r
                    @if (mem.assignedServiceId === item.service.id) {\r
                      <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-600 text-white">Assegnato</span>\r
                    } @else {\r
                      <button type="button" (click)="assignScout(mem.id, item.service.id)" class="px-2.5 py-1 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-md cursor-pointer">Assegna</button>\r
                    }\r
                  </div>\r
                }\r
              }\r
            </div>\r
            <div class="space-y-2">\r
              <h4 class="font-bold text-xs uppercase tracking-wider text-red-600">Servizi Incompatibili</h4>\r
              @for (item of selectedMemberCompatibility(); track item.service.id) {\r
                @if (!item.result.isCompatible) {\r
                  <div class="p-3 rounded-lg border border-red-200 bg-red-50/30 text-xs space-y-1">\r
                    <span class="font-bold text-slate-900 block">{{ item.service.name }}</span>\r
                    <span class="text-[11px] text-red-700 block">\u2022 {{ item.result.conflicts[0]?.reason }}</span>\r
                  </div>\r
                }\r
              }\r
            </div>\r
          </div>\r
        }\r
      </div>\r
    </div>\r
  }\r
\r
  <!-- SUB-VIEW 3: BY SERVICE -->\r
  @if (matrixSubView() === 'byService') {\r
    <div class="matrix-screen-details grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">\r
      <div class="lg:col-span-4 bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-2">\r
        <span class="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">Seleziona Servizio:</span>\r
        <div class="space-y-1.5 max-h-[550px] overflow-y-auto pr-1">\r
          @for (s of clanData.services(); track s.id) {\r
            @let assigned = getAssignedScouts(s.id);\r
            <button type="button" (click)="selectedServiceId.set(s.id)" [class]="selectedServiceId() === s.id ? 'bg-blue-600 text-white font-semibold' : 'bg-slate-50 hover:bg-slate-100 text-slate-800'" class="w-full text-left p-2.5 rounded-lg text-xs cursor-pointer flex items-center justify-between">\r
              <span class="truncate pr-2">{{ s.name }}</span>\r
              <span class="text-[10px] px-1.5 py-0.2 rounded font-mono shrink-0" [ngClass]="selectedServiceId() === s.id ? 'bg-blue-700 text-white' : 'bg-slate-200 text-slate-700'">\r
                {{ assigned.length }} {{ t('services.scoutsCount') }}\r
              </span>\r
            </button>\r
          }\r
        </div>\r
      </div>\r
\r
      <div class="lg:col-span-8 bg-white p-5 rounded-xl border border-slate-200 shadow-2xs space-y-6">\r
        @if (selectedService(); as serv) {\r
          <div class="border-b border-slate-100 pb-4">\r
            <h3 class="text-base font-bold text-slate-900">{{ serv.name }}</h3>\r
            <span class="text-xs text-slate-500 block">{{ serv.organization }} \xB7 {{ serv.location }}</span>\r
          </div>\r
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">\r
            <div class="space-y-2">\r
              <h4 class="font-bold text-xs uppercase tracking-wider text-emerald-700">Ragazzi Liberi e Compatibili</h4>\r
              @for (item of selectedServiceCompatibility(); track item.member.id) {\r
                @if (item.result.isCompatible) {\r
                  <div class="p-3 rounded-lg border border-emerald-200 bg-emerald-50/40 text-xs flex justify-between items-center">\r
                    <div>\r
                      <span class="font-bold text-slate-900 block">{{ item.member.name }} {{ item.member.surname }}</span>\r
                    </div>\r
                    @if (item.isAssigned) {\r
                      <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-600 text-white">Assegnato qui</span>\r
                    } @else {\r
                      <button type="button" (click)="assignScout(item.member.id, serv.id)" class="px-2.5 py-1 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-md cursor-pointer">Assegna</button>\r
                    }\r
                  </div>\r
                }\r
              }\r
            </div>\r
            <div class="space-y-2">\r
              <h4 class="font-bold text-xs uppercase tracking-wider text-red-600">Ragazzi con Conflitti</h4>\r
              @for (item of selectedServiceCompatibility(); track item.member.id) {\r
                @if (!item.result.isCompatible) {\r
                  <div class="p-3 rounded-lg border border-red-200 bg-red-50/30 text-xs space-y-1">\r
                    <span class="font-bold text-slate-900 block">{{ item.member.name }} {{ item.member.surname }}</span>\r
                    <span class="text-[11px] text-red-700 block">\u2022 {{ item.result.conflicts[0]?.reason }}</span>\r
                  </div>\r
                }\r
              }\r
            </div>\r
          </div>\r
        }\r
      </div>\r
    </div>\r
  }\r
</div>\r
` }]
  }], () => [], { initialServiceId: [{ type: Input, args: [{ isSignal: true, alias: "initialServiceId", required: false }] }], autoAssign: [{ type: Output, args: ["autoAssign"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MatrixViewComponent, { className: "MatrixViewComponent", filePath: "app/components/matrix-view/matrix-view.ts", lineNumber: 18 });
})();

// src/app/components/schedule-view/schedule-view.ts
var _forTrack07 = ($index, $item) => $item.dayInfo.id;
var _forTrack13 = ($index, $item) => $item.service.id + $item.slot.startTime;
var _forTrack22 = ($index, $item) => $item.id;
function ScheduleViewComponent_div_0_For_12_For_8_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const scout_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", scout_r3.name, " ", scout_r3.surname, " ");
  }
}
function ScheduleViewComponent_div_0_For_12_For_8_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275repeaterCreate(1, ScheduleViewComponent_div_0_For_12_For_8_Conditional_10_For_2_Template, 2, 2, "span", 22, _forTrack22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(item_r4.assigned);
  }
}
function ScheduleViewComponent_div_0_For_12_For_8_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1, "Nessun ragazzo");
    \u0275\u0275elementEnd();
  }
}
function ScheduleViewComponent_div_0_For_12_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "span", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 16);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 17);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 18)(8, "span", 19);
    \u0275\u0275text(9, "Scout presenti:");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, ScheduleViewComponent_div_0_For_12_For_8_Conditional_10_Template, 3, 0, "div", 20)(11, ScheduleViewComponent_div_0_For_12_For_8_Conditional_11_Template, 2, 0, "span", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", item_r4.slot.startTime, " - ", item_r4.slot.endTime);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.service.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.service.location);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(item_r4.assigned.length > 0 ? 10 : 11);
  }
}
function ScheduleViewComponent_div_0_For_12_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1, " Nessun servizio ");
    \u0275\u0275elementEnd();
  }
}
function ScheduleViewComponent_div_0_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "span", 10);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 11);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 12);
    \u0275\u0275repeaterCreate(7, ScheduleViewComponent_div_0_For_12_For_8_Template, 12, 5, "div", 13, _forTrack13);
    \u0275\u0275conditionalCreate(9, ScheduleViewComponent_div_0_For_12_Conditional_9_Template, 2, 0, "div", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const g_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.getDayTitle(g_r5.dayInfo));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", g_r5.items.length, " turni attivi");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(g_r5.items);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(g_r5.items.length === 0 ? 9 : -1);
  }
}
function ScheduleViewComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div")(3, "h2", 3);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 4);
    \u0275\u0275text(6, " Quadro orario generale delle attivit\xE0 e dei servizi dal luned\xEC alla domenica ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 5);
    \u0275\u0275listener("click", function ScheduleViewComponent_div_0_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.print());
    });
    \u0275\u0275element(8, "i", 6);
    \u0275\u0275text(9, " Stampa / Salva PDF ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 7);
    \u0275\u0275repeaterCreate(11, ScheduleViewComponent_div_0_For_12_Template, 10, 3, "div", 8, _forTrack07);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const t_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", t_r6("app.nav.schedule"), " del Clan");
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r1.weeklySchedule());
  }
}
var ScheduleViewComponent = class _ScheduleViewComponent {
  clanData = inject(ClanDataService);
  exportService = inject(ExportService);
  langService = inject(LanguageService);
  days = DAYS_METADATA;
  weeklySchedule = computed(() => {
    const services = this.clanData.services();
    const members = this.clanData.members();
    return this.days.map((dayInfo) => {
      const items = [];
      services.forEach((serv) => {
        serv.scheduleSlots.filter((s) => s.day === dayInfo.id).forEach((slot) => {
          items.push({
            service: serv,
            slot,
            assigned: members.filter((m) => m.assignedServiceId === serv.id)
          });
        });
      });
      items.sort((a, b) => a.slot.startTime.localeCompare(b.slot.startTime));
      return { dayInfo, items };
    });
  }, ...ngDevMode ? [{ debugName: "weeklySchedule" }] : (
    /* istanbul ignore next */
    []
  ));
  print() {
    this.exportService.triggerPrint();
  }
  getDayTitle(d) {
    return this.langService.currentLang === "it" ? d.labelIt : d.labelEn;
  }
  static \u0275fac = function ScheduleViewComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ScheduleViewComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheduleViewComponent, selectors: [["app-schedule-view"]], decls: 1, vars: 0, consts: [["class", "space-y-6", 4, "transloco"], [1, "space-y-6"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "justify-between", "gap-4", "bg-white", "p-4", "rounded-xl", "border", "border-slate-200", "shadow-2xs"], [1, "text-base", "font-bold", "text-slate-900"], [1, "text-xs", "text-slate-500"], ["type", "button", 1, "px-3.5", "py-1.5", "text-xs", "font-medium", "text-slate-700", "bg-white", "border", "border-slate-300", "rounded-lg", "hover:bg-slate-50", "shadow-2xs", "cursor-pointer", "flex", "items-center", "gap-1.5", 3, "click"], [1, "pi", "pi-print", "text-xs"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-7", "gap-4", "items-start"], [1, "bg-white", "rounded-xl", "border", "border-slate-200", "shadow-2xs", "overflow-hidden", "flex", "flex-col", "min-h-[300px]"], [1, "bg-slate-100", "p-2.5", "text-center", "border-b", "border-slate-200"], [1, "font-bold", "text-xs", "text-slate-800", "uppercase", "tracking-wider", "block"], [1, "text-[10px]", "text-slate-500"], [1, "p-2", "space-y-2", "flex-1"], [1, "p-2.5", "rounded-lg", "border", "border-slate-200", "bg-slate-50/70", "hover:bg-slate-50", "transition-colors", "text-xs", "space-y-1.5"], [1, "h-full", "flex", "items-center", "justify-center", "p-4", "text-center", "text-slate-400", "text-xs", "italic"], [1, "font-mono", "font-bold", "text-[11px]", "text-blue-700", "block"], [1, "font-bold", "text-slate-900", "block", "leading-tight"], [1, "text-[11px]", "text-slate-500", "block", "truncate"], [1, "pt-1.5", "border-t", "border-slate-200/60"], [1, "text-[10px]", "font-bold", "uppercase", "text-slate-400", "block", "mb-1"], [1, "space-y-0.5"], [1, "text-[10px]", "text-amber-600", "italic", "block"], [1, "inline-block", "text-[11px]", "font-medium", "text-emerald-800", "bg-emerald-50", "px-1.5", "py-0.2", "rounded", "border", "border-emerald-200"]], template: function ScheduleViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ScheduleViewComponent_div_0_Template, 13, 1, "div", 0);
    }
  }, dependencies: [CommonModule, TranslocoDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduleViewComponent, [{
    type: Component,
    args: [{ selector: "app-schedule-view", standalone: true, imports: [CommonModule, TranslocoDirective], template: `<div class="space-y-6" *transloco="let t">\r
  <div\r
    class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-2xs"\r
  >\r
    <div>\r
      <h2 class="text-base font-bold text-slate-900">{{ t('app.nav.schedule') }} del Clan</h2>\r
      <p class="text-xs text-slate-500">\r
        Quadro orario generale delle attivit\xE0 e dei servizi dal luned\xEC alla domenica\r
      </p>\r
    </div>\r
    <button\r
      type="button"\r
      (click)="print()"\r
      class="px-3.5 py-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 shadow-2xs cursor-pointer flex items-center gap-1.5"\r
    >\r
      <i class="pi pi-print text-xs"></i> Stampa / Salva PDF\r
    </button>\r
  </div>\r
\r
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4 items-start">\r
    @for (g of weeklySchedule(); track g.dayInfo.id) {\r
      <div\r
        class="bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden flex flex-col min-h-[300px]"\r
      >\r
        <div class="bg-slate-100 p-2.5 text-center border-b border-slate-200">\r
          <span class="font-bold text-xs text-slate-800 uppercase tracking-wider block">{{\r
            getDayTitle(g.dayInfo)\r
          }}</span>\r
          <span class="text-[10px] text-slate-500">{{ g.items.length }} turni attivi</span>\r
        </div>\r
\r
        <div class="p-2 space-y-2 flex-1">\r
          @for (item of g.items; track item.service.id + item.slot.startTime) {\r
            <div\r
              class="p-2.5 rounded-lg border border-slate-200 bg-slate-50/70 hover:bg-slate-50 transition-colors text-xs space-y-1.5"\r
            >\r
              <span class="font-mono font-bold text-[11px] text-blue-700 block"\r
                >{{ item.slot.startTime }} - {{ item.slot.endTime }}</span\r
              >\r
              <span class="font-bold text-slate-900 block leading-tight">{{\r
                item.service.name\r
              }}</span>\r
              <span class="text-[11px] text-slate-500 block truncate">{{\r
                item.service.location\r
              }}</span>\r
\r
              <div class="pt-1.5 border-t border-slate-200/60">\r
                <span class="text-[10px] font-bold uppercase text-slate-400 block mb-1"\r
                  >Scout presenti:</span\r
                >\r
                @if (item.assigned.length > 0) {\r
                  <div class="space-y-0.5">\r
                    @for (scout of item.assigned; track scout.id) {\r
                      <span\r
                        class="inline-block text-[11px] font-medium text-emerald-800 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200"\r
                      >\r
                        {{ scout.name }} {{ scout.surname }}\r
                      </span>\r
                    }\r
                  </div>\r
                } @else {\r
                  <span class="text-[10px] text-amber-600 italic block">Nessun ragazzo</span>\r
                }\r
              </div>\r
            </div>\r
          }\r
\r
          @if (g.items.length === 0) {\r
            <div\r
              class="h-full flex items-center justify-center p-4 text-center text-slate-400 text-xs italic"\r
            >\r
              Nessun servizio\r
            </div>\r
          }\r
        </div>\r
      </div>\r
    }\r
  </div>\r
</div>\r
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheduleViewComponent, { className: "ScheduleViewComponent", filePath: "app/components/schedule-view/schedule-view.ts", lineNumber: 16 });
})();

// src/app/components/modals/member-modal.ts
function MemberModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h3", 4);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 5);
    \u0275\u0275listener("click", function MemberModalComponent_div_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275element(6, "i", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 7)(8, "div", 8)(9, "div")(10, "label", 9);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function MemberModalComponent_div_0_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formData.name, $event) || (ctx_r1.formData.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div")(14, "label", 9);
    \u0275\u0275text(15, "Cognome");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function MemberModalComponent_div_0_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formData.surname, $event) || (ctx_r1.formData.surname = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div")(18, "label", 9);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "textarea", 12);
    \u0275\u0275twoWayListener("ngModelChange", function MemberModalComponent_div_0_Template_textarea_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formData.notes, $event) || (ctx_r1.formData.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 13)(22, "button", 14);
    \u0275\u0275listener("click", function MemberModalComponent_div_0_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 15);
    \u0275\u0275listener("click", function MemberModalComponent_div_0_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formData.id ? t_r3("members.editMember") : t_r3("members.addMember"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", t_r3("commitments.name"), " *");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formData.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formData.surname);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("members.notes"));
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formData.notes);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("common.cancel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("common.save"), " ");
  }
}
var MemberModalComponent = class _MemberModalComponent {
  member = input(null, ...ngDevMode ? [{ debugName: "member" }] : (
    /* istanbul ignore next */
    []
  ));
  close = output();
  save = output();
  formData = {
    id: void 0,
    name: "",
    surname: "",
    notes: ""
  };
  ngOnInit() {
    const m = this.member();
    if (m) {
      this.formData = {
        id: m.id,
        name: m.name,
        surname: m.surname,
        notes: m.notes || ""
      };
    }
  }
  submit() {
    if (!this.formData.name.trim())
      return;
    this.save.emit(this.formData);
  }
  static \u0275fac = function MemberModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MemberModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MemberModalComponent, selectors: [["app-member-modal"]], inputs: { member: [1, "member"] }, outputs: { close: "close", save: "save" }, decls: 1, vars: 0, consts: [["class", "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs", 4, "transloco"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4", "bg-slate-900/60", "backdrop-blur-xs"], [1, "bg-white", "rounded-2xl", "max-w-lg", "w-full", "p-6", "shadow-2xl", "border", "border-slate-200", "space-y-4"], [1, "flex", "items-center", "justify-between", "border-b", "border-slate-100", "pb-3"], [1, "text-base", "font-bold", "text-slate-900"], ["type", "button", 1, "text-slate-400", "hover:text-slate-700", "cursor-pointer", 3, "click"], [1, "pi", "pi-times"], [1, "space-y-3", "text-xs"], [1, "grid", "grid-cols-2", "gap-3"], [1, "block", "font-medium", "text-slate-700", "mb-1"], ["type", "text", "placeholder", "es. Matteo", 1, "w-full", "p-2", "bg-slate-50", "border", "border-slate-300", "rounded-lg", "focus:outline-none", "focus:border-blue-500", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "es. Rossi", 1, "w-full", "p-2", "bg-slate-50", "border", "border-slate-300", "rounded-lg", "focus:outline-none", "focus:border-blue-500", 3, "ngModelChange", "ngModel"], ["rows", "2", "placeholder", "es. Automunito...", 1, "w-full", "p-2", "bg-slate-50", "border", "border-slate-300", "rounded-lg", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "justify-end", "gap-2", "pt-3", "border-t", "border-slate-100"], ["type", "button", 1, "px-4", "py-2", "text-xs", "font-medium", "text-slate-700", "hover:bg-slate-100", "rounded-lg", "cursor-pointer", 3, "click"], ["type", "button", 1, "px-4", "py-2", "text-xs", "font-semibold", "text-white", "bg-blue-600", "hover:bg-blue-700", "rounded-lg", "shadow-2xs", "cursor-pointer", 3, "click"]], template: function MemberModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, MemberModalComponent_div_0_Template, 26, 8, "div", 0);
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, TranslocoDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MemberModalComponent, [{
    type: Component,
    args: [{ selector: "app-member-modal", standalone: true, imports: [CommonModule, FormsModule, TranslocoDirective], template: `<div\r
  class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"\r
  *transloco="let t"\r
>\r
  <div\r
    class="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-4"\r
  >\r
    <div class="flex items-center justify-between border-b border-slate-100 pb-3">\r
      <h3 class="text-base font-bold text-slate-900">\r
        {{ formData.id ? t('members.editMember') : t('members.addMember') }}\r
      </h3>\r
      <button\r
        type="button"\r
        (click)="close.emit()"\r
        class="text-slate-400 hover:text-slate-700 cursor-pointer"\r
      >\r
        <i class="pi pi-times"></i>\r
      </button>\r
    </div>\r
\r
    <div class="space-y-3 text-xs">\r
      <div class="grid grid-cols-2 gap-3">\r
        <div>\r
          <label class="block font-medium text-slate-700 mb-1">{{ t('commitments.name') }} *</label>\r
          <input\r
            type="text"\r
            [(ngModel)]="formData.name"\r
            class="w-full p-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500"\r
            placeholder="es. Matteo"\r
          />\r
        </div>\r
        <div>\r
          <label class="block font-medium text-slate-700 mb-1">Cognome</label>\r
          <input\r
            type="text"\r
            [(ngModel)]="formData.surname"\r
            class="w-full p-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500"\r
            placeholder="es. Rossi"\r
          />\r
        </div>\r
      </div>\r
\r
      <div>\r
        <label class="block font-medium text-slate-700 mb-1">{{ t('members.notes') }}</label>\r
        <textarea\r
          rows="2"\r
          [(ngModel)]="formData.notes"\r
          class="w-full p-2 bg-slate-50 border border-slate-300 rounded-lg"\r
          placeholder="es. Automunito..."\r
        ></textarea>\r
      </div>\r
    </div>\r
\r
    <div class="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">\r
      <button\r
        type="button"\r
        (click)="close.emit()"\r
        class="px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-100 rounded-lg cursor-pointer"\r
      >\r
        {{ t('common.cancel') }}\r
      </button>\r
      <button\r
        type="button"\r
        (click)="submit()"\r
        class="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-2xs cursor-pointer"\r
      >\r
        {{ t('common.save') }}\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
` }]
  }], null, { member: [{ type: Input, args: [{ isSignal: true, alias: "member", required: false }] }], close: [{ type: Output, args: ["close"] }], save: [{ type: Output, args: ["save"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MemberModalComponent, { className: "MemberModalComponent", filePath: "app/components/modals/member-modal.ts", lineNumber: 13 });
})();

// src/app/components/modals/service-modal.ts
var _forTrack08 = ($index, $item) => $item.id;
function ServiceModalComponent_div_0_For_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "span", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 39);
    \u0275\u0275listener("click", function ServiceModalComponent_div_0_For_55_Template_button_click_3_listener() {
      const $index_r4 = \u0275\u0275restoreView(_r3).$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeSlot($index_r4));
    });
    \u0275\u0275element(4, "i", 40);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const slot_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", ctx_r1.getDayLabel(slot_r5.day), " ", slot_r5.startTime, " - ", slot_r5.endTime);
  }
}
function ServiceModalComponent_div_0_For_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", d_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.getDayLabel(d_r6.id));
  }
}
function ServiceModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h3", 4);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 5);
    \u0275\u0275listener("click", function ServiceModalComponent_div_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275element(6, "i", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 7)(8, "div")(9, "label", 8);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 9);
    \u0275\u0275twoWayListener("ngModelChange", function ServiceModalComponent_div_0_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formData.name, $event) || (ctx_r1.formData.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 10)(13, "div")(14, "label", 8);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 11);
    \u0275\u0275twoWayListener("ngModelChange", function ServiceModalComponent_div_0_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formData.organization, $event) || (ctx_r1.formData.organization = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div")(18, "label", 8);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "select", 12);
    \u0275\u0275twoWayListener("ngModelChange", function ServiceModalComponent_div_0_Template_select_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formData.category, $event) || (ctx_r1.formData.category = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(21, "option", 13);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "option", 14);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "option", 15);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "option", 16);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "option", 17);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "option", 18);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "option", 19);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "option", 20);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(37, "div")(38, "label", 8);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function ServiceModalComponent_div_0_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formData.location, $event) || (ctx_r1.formData.location = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 10)(42, "div")(43, "label", 8);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function ServiceModalComponent_div_0_Template_input_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formData.contactPerson, $event) || (ctx_r1.formData.contactPerson = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div")(47, "label", 8);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function ServiceModalComponent_div_0_Template_input_ngModelChange_49_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formData.contactPhone, $event) || (ctx_r1.formData.contactPhone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "div", 24)(51, "span", 25);
    \u0275\u0275text(52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 26);
    \u0275\u0275repeaterCreate(54, ServiceModalComponent_div_0_For_55_Template, 5, 3, "div", 27, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 28)(57, "div", 29)(58, "div")(59, "label", 30);
    \u0275\u0275text(60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "select", 31);
    \u0275\u0275twoWayListener("ngModelChange", function ServiceModalComponent_div_0_Template_select_ngModelChange_61_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newSlotDay, $event) || (ctx_r1.newSlotDay = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(62, ServiceModalComponent_div_0_For_63_Template, 2, 2, "option", 32, _forTrack08);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div")(65, "label", 30);
    \u0275\u0275text(66);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function ServiceModalComponent_div_0_Template_input_ngModelChange_67_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newSlotStart, $event) || (ctx_r1.newSlotStart = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "div")(69, "label", 30);
    \u0275\u0275text(70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function ServiceModalComponent_div_0_Template_input_ngModelChange_71_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newSlotEnd, $event) || (ctx_r1.newSlotEnd = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(72, "button", 34);
    \u0275\u0275listener("click", function ServiceModalComponent_div_0_Template_button_click_72_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addSlot());
    });
    \u0275\u0275text(73);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(74, "div", 35)(75, "button", 36);
    \u0275\u0275listener("click", function ServiceModalComponent_div_0_Template_button_click_75_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275text(76);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "button", 37);
    \u0275\u0275listener("click", function ServiceModalComponent_div_0_Template_button_click_77_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275text(78);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const t_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formData.id ? t_r7("services.editService") : t_r7("services.addService"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", t_r7("commitments.name"), " *");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formData.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r7("services.organization"));
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formData.organization);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r7("services.category"));
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formData.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r7("services.categories.children"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r7("services.categories.elderly"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r7("services.categories.poverty"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r7("services.categories.disability"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r7("services.categories.health"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r7("services.categories.environment"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r7("services.categories.parish"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r7("services.categories.other"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r7("services.location"));
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formData.location);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r7("services.contact"));
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formData.contactPerson);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r7("services.phone"));
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formData.contactPhone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r7("services.slotsRequired"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.formData.scheduleSlots);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r7("commitments.day"));
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newSlotDay);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.days);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r7("services.start"));
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newSlotStart);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r7("services.end"));
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newSlotEnd);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r7("services.addSlot"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r7("common.cancel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r7("common.save"), " ");
  }
}
var ServiceModalComponent = class _ServiceModalComponent {
  transloco = inject(TranslocoService);
  service = input(null, ...ngDevMode ? [{ debugName: "service" }] : (
    /* istanbul ignore next */
    []
  ));
  close = output();
  save = output();
  days = DAYS_METADATA;
  formData = {
    id: void 0,
    name: "",
    organization: "",
    category: "poverty",
    description: "",
    location: "",
    contactPerson: "",
    contactPhone: "",
    color: "#2563EB",
    scheduleSlots: []
  };
  newSlotDay = "monday";
  newSlotStart = "16:30";
  newSlotEnd = "18:30";
  ngOnInit() {
    const s = this.service();
    if (s) {
      this.formData = {
        id: s.id,
        name: s.name,
        organization: s.organization,
        category: s.category,
        description: s.description,
        location: s.location,
        contactPerson: s.contactPerson || "",
        contactPhone: s.contactPhone || "",
        color: s.color || "#2563EB",
        scheduleSlots: [...s.scheduleSlots]
      };
    } else {
      this.formData.scheduleSlots = [{ day: "tuesday", startTime: "16:30", endTime: "18:30" }];
    }
  }
  addSlot() {
    if (this.newSlotStart >= this.newSlotEnd)
      return;
    this.formData.scheduleSlots.push({
      day: this.newSlotDay,
      startTime: this.newSlotStart,
      endTime: this.newSlotEnd
    });
  }
  removeSlot(index) {
    this.formData.scheduleSlots.splice(index, 1);
  }
  submit() {
    if (!this.formData.name.trim() || this.formData.scheduleSlots.length === 0)
      return;
    this.save.emit(this.formData);
  }
  getDayLabel(d) {
    return this.transloco.translate(`days.${d}`) || d;
  }
  static \u0275fac = function ServiceModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ServiceModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServiceModalComponent, selectors: [["app-service-modal"]], inputs: { service: [1, "service"] }, outputs: { close: "close", save: "save" }, decls: 1, vars: 0, consts: [["class", "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs", 4, "transloco"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4", "bg-slate-900/60", "backdrop-blur-xs"], [1, "bg-white", "rounded-2xl", "max-w-xl", "w-full", "p-6", "shadow-2xl", "border", "border-slate-200", "space-y-4", "max-h-[90vh]", "overflow-y-auto"], [1, "flex", "items-center", "justify-between", "border-b", "border-slate-100", "pb-3"], [1, "text-base", "font-bold", "text-slate-900"], ["type", "button", 1, "text-slate-400", "hover:text-slate-700", "cursor-pointer", 3, "click"], [1, "pi", "pi-times"], [1, "space-y-3", "text-xs"], [1, "block", "font-medium", "text-slate-700", "mb-1"], ["type", "text", "placeholder", "es. Mensa dei Poveri Caritas", 1, "w-full", "p-2", "bg-slate-50", "border", "border-slate-300", "rounded-lg", "focus:outline-none", "focus:border-blue-500", 3, "ngModelChange", "ngModel"], [1, "grid", "grid-cols-2", "gap-3"], ["type", "text", "placeholder", "es. Caritas Diocesana", 1, "w-full", "p-2", "bg-slate-50", "border", "border-slate-300", "rounded-lg", 3, "ngModelChange", "ngModel"], [1, "w-full", "p-2", "bg-slate-50", "border", "border-slate-300", "rounded-lg", "text-slate-800", 3, "ngModelChange", "ngModel"], ["value", "children"], ["value", "elderly"], ["value", "poverty"], ["value", "disability"], ["value", "health"], ["value", "environment"], ["value", "parish"], ["value", "other"], ["type", "text", "placeholder", "es. Via Roma 10", 1, "w-full", "p-2", "bg-slate-50", "border", "border-slate-300", "rounded-lg", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Don Paolo", 1, "w-full", "p-2", "bg-slate-50", "border", "border-slate-300", "rounded-lg", 3, "ngModelChange", "ngModel"], ["type", "tel", "placeholder", "+39 02 123456", 1, "w-full", "p-2", "bg-slate-50", "border", "border-slate-300", "rounded-lg", 3, "ngModelChange", "ngModel"], [1, "pt-2", "border-t", "border-slate-100"], [1, "block", "font-bold", "text-slate-800", "mb-2"], [1, "space-y-1.5", "mb-3"], [1, "flex", "items-center", "justify-between", "p-2", "rounded-lg", "bg-slate-100", "border", "border-slate-200", "text-xs"], [1, "p-3", "rounded-xl", "bg-slate-50", "border", "border-slate-200", "space-y-2"], [1, "grid", "grid-cols-3", "gap-2"], [1, "text-[10px]", "text-slate-400", "block", "mb-0.5"], [1, "w-full", "p-1.5", "bg-white", "border", "border-slate-300", "rounded", "text-xs", 3, "ngModelChange", "ngModel"], [3, "value"], ["type", "time", 1, "w-full", "p-1.5", "bg-white", "border", "border-slate-300", "rounded", "text-xs", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "w-full", "py-1.5", "bg-white", "border", "border-slate-300", "hover:bg-slate-100", "rounded", "text-xs", "font-semibold", "text-slate-700", "cursor-pointer", 3, "click"], [1, "flex", "items-center", "justify-end", "gap-2", "pt-3", "border-t", "border-slate-100"], ["type", "button", 1, "px-4", "py-2", "text-xs", "font-medium", "text-slate-700", "hover:bg-slate-100", "rounded-lg", "cursor-pointer", 3, "click"], ["type", "button", 1, "px-4", "py-2", "text-xs", "font-semibold", "text-white", "bg-blue-600", "hover:bg-blue-700", "rounded-lg", "shadow-2xs", "cursor-pointer", 3, "click"], [1, "font-semibold", "text-slate-800"], ["type", "button", 1, "text-red-500", "hover:text-red-700", "p-1", "cursor-pointer", 3, "click"], [1, "pi", "pi-trash", "text-xs"]], template: function ServiceModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ServiceModalComponent_div_0_Template, 79, 31, "div", 0);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, TranslocoDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServiceModalComponent, [{
    type: Component,
    args: [{ selector: "app-service-modal", standalone: true, imports: [CommonModule, FormsModule, TranslocoDirective], template: `<div\r
  class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"\r
  *transloco="let t"\r
>\r
  <div\r
    class="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-slate-200 space-y-4 max-h-[90vh] overflow-y-auto"\r
  >\r
    <div class="flex items-center justify-between border-b border-slate-100 pb-3">\r
      <h3 class="text-base font-bold text-slate-900">\r
        {{ formData.id ? t('services.editService') : t('services.addService') }}\r
      </h3>\r
      <button\r
        type="button"\r
        (click)="close.emit()"\r
        class="text-slate-400 hover:text-slate-700 cursor-pointer"\r
      >\r
        <i class="pi pi-times"></i>\r
      </button>\r
    </div>\r
\r
    <div class="space-y-3 text-xs">\r
      <div>\r
        <label class="block font-medium text-slate-700 mb-1">{{ t('commitments.name') }} *</label>\r
        <input\r
          type="text"\r
          [(ngModel)]="formData.name"\r
          class="w-full p-2 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500"\r
          placeholder="es. Mensa dei Poveri Caritas"\r
        />\r
      </div>\r
\r
      <div class="grid grid-cols-2 gap-3">\r
        <div>\r
          <label class="block font-medium text-slate-700 mb-1">{{\r
            t('services.organization')\r
          }}</label>\r
          <input\r
            type="text"\r
            [(ngModel)]="formData.organization"\r
            class="w-full p-2 bg-slate-50 border border-slate-300 rounded-lg"\r
            placeholder="es. Caritas Diocesana"\r
          />\r
        </div>\r
        <div>\r
          <label class="block font-medium text-slate-700 mb-1">{{ t('services.category') }}</label>\r
          <select\r
            [(ngModel)]="formData.category"\r
            class="w-full p-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-800"\r
          >\r
            <option value="children">{{ t('services.categories.children') }}</option>\r
            <option value="elderly">{{ t('services.categories.elderly') }}</option>\r
            <option value="poverty">{{ t('services.categories.poverty') }}</option>\r
            <option value="disability">{{ t('services.categories.disability') }}</option>\r
            <option value="health">{{ t('services.categories.health') }}</option>\r
            <option value="environment">{{ t('services.categories.environment') }}</option>\r
            <option value="parish">{{ t('services.categories.parish') }}</option>\r
            <option value="other">{{ t('services.categories.other') }}</option>\r
          </select>\r
        </div>\r
      </div>\r
\r
      <div>\r
        <label class="block font-medium text-slate-700 mb-1">{{ t('services.location') }}</label>\r
        <input\r
          type="text"\r
          [(ngModel)]="formData.location"\r
          class="w-full p-2 bg-slate-50 border border-slate-300 rounded-lg"\r
          placeholder="es. Via Roma 10"\r
        />\r
      </div>\r
\r
      <div class="grid grid-cols-2 gap-3">\r
        <div>\r
          <label class="block font-medium text-slate-700 mb-1">{{ t('services.contact') }}</label>\r
          <input\r
            type="text"\r
            [(ngModel)]="formData.contactPerson"\r
            class="w-full p-2 bg-slate-50 border border-slate-300 rounded-lg"\r
            placeholder="Don Paolo"\r
          />\r
        </div>\r
        <div>\r
          <label class="block font-medium text-slate-700 mb-1">{{ t('services.phone') }}</label>\r
          <input\r
            type="tel"\r
            [(ngModel)]="formData.contactPhone"\r
            class="w-full p-2 bg-slate-50 border border-slate-300 rounded-lg"\r
            placeholder="+39 02 123456"\r
          />\r
        </div>\r
      </div>\r
\r
      <!-- Schedule Slots -->\r
      <div class="pt-2 border-t border-slate-100">\r
        <span class="block font-bold text-slate-800 mb-2">{{ t('services.slotsRequired') }}</span>\r
        <div class="space-y-1.5 mb-3">\r
          @for (slot of formData.scheduleSlots; track $index) {\r
            <div\r
              class="flex items-center justify-between p-2 rounded-lg bg-slate-100 border border-slate-200 text-xs"\r
            >\r
              <span class="font-semibold text-slate-800"\r
                >{{ getDayLabel(slot.day) }} {{ slot.startTime }} - {{ slot.endTime }}</span\r
              >\r
              <button\r
                type="button"\r
                (click)="removeSlot($index)"\r
                class="text-red-500 hover:text-red-700 p-1 cursor-pointer"\r
              >\r
                <i class="pi pi-trash text-xs"></i>\r
              </button>\r
            </div>\r
          }\r
        </div>\r
\r
        <div class="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-2">\r
          <div class="grid grid-cols-3 gap-2">\r
            <div>\r
              <label class="text-[10px] text-slate-400 block mb-0.5">{{\r
                t('commitments.day')\r
              }}</label>\r
              <select\r
                [(ngModel)]="newSlotDay"\r
                class="w-full p-1.5 bg-white border border-slate-300 rounded text-xs"\r
              >\r
                @for (d of days; track d.id) {\r
                  <option [value]="d.id">{{ getDayLabel(d.id) }}</option>\r
                }\r
              </select>\r
            </div>\r
            <div>\r
              <label class="text-[10px] text-slate-400 block mb-0.5">{{\r
                t('services.start')\r
              }}</label>\r
              <input\r
                type="time"\r
                [(ngModel)]="newSlotStart"\r
                class="w-full p-1.5 bg-white border border-slate-300 rounded text-xs"\r
              />\r
            </div>\r
            <div>\r
              <label class="text-[10px] text-slate-400 block mb-0.5">{{ t('services.end') }}</label>\r
              <input\r
                type="time"\r
                [(ngModel)]="newSlotEnd"\r
                class="w-full p-1.5 bg-white border border-slate-300 rounded text-xs"\r
              />\r
            </div>\r
          </div>\r
          <button\r
            type="button"\r
            (click)="addSlot()"\r
            class="w-full py-1.5 bg-white border border-slate-300 hover:bg-slate-100 rounded text-xs font-semibold text-slate-700 cursor-pointer"\r
          >\r
            {{ t('services.addSlot') }}\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">\r
      <button\r
        type="button"\r
        (click)="close.emit()"\r
        class="px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-100 rounded-lg cursor-pointer"\r
      >\r
        {{ t('common.cancel') }}\r
      </button>\r
      <button\r
        type="button"\r
        (click)="submit()"\r
        class="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-2xs cursor-pointer"\r
      >\r
        {{ t('common.save') }}\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
` }]
  }], null, { service: [{ type: Input, args: [{ isSignal: true, alias: "service", required: false }] }], close: [{ type: Output, args: ["close"] }], save: [{ type: Output, args: ["save"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServiceModalComponent, { className: "ServiceModalComponent", filePath: "app/components/modals/service-modal.ts", lineNumber: 14 });
})();

// src/app/components/modals/commitment-modal.ts
var _c03 = (a0) => ({ name: a0 });
function CommitmentModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h3", 4);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 5);
    \u0275\u0275listener("click", function CommitmentModalComponent_div_0_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275element(6, "i", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 7)(8, "div")(9, "label", 8);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 9);
    \u0275\u0275twoWayListener("ngModelChange", function CommitmentModalComponent_div_0_Template_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formData.day, $event) || (ctx_r1.formData.day = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(12, "option", 10);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option", 11);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option", 12);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option", 13);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option", 14);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option", 15);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 16);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 17)(27, "div")(28, "label", 8);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function CommitmentModalComponent_div_0_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formData.startTime, $event) || (ctx_r1.formData.startTime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div")(32, "label", 8);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function CommitmentModalComponent_div_0_Template_input_ngModelChange_34_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.formData.endTime, $event) || (ctx_r1.formData.endTime = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(35, "div", 19)(36, "button", 20);
    \u0275\u0275listener("click", function CommitmentModalComponent_div_0_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "button", 21);
    \u0275\u0275listener("click", function CommitmentModalComponent_div_0_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r3("commitments.title", \u0275\u0275pureFunction1(16, _c03, ctx_r1.scoutName())), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r3("commitments.day"));
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formData.day);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("days.monday"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("days.tuesday"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("days.wednesday"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("days.thursday"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("days.friday"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("days.saturday"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r3("days.sunday"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r3("commitments.start"));
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formData.startTime);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r3("commitments.end"));
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.formData.endTime);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("common.cancel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r3("common.save"), " ");
  }
}
var CommitmentModalComponent = class _CommitmentModalComponent {
  scoutName = input("", ...ngDevMode ? [{ debugName: "scoutName" }] : (
    /* istanbul ignore next */
    []
  ));
  close = output();
  save = output();
  formData = {
    day: "monday",
    startTime: "16:00",
    endTime: "18:00"
  };
  submit() {
    if (this.formData.startTime >= this.formData.endTime)
      return;
    this.save.emit(this.formData);
  }
  static \u0275fac = function CommitmentModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CommitmentModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CommitmentModalComponent, selectors: [["app-commitment-modal"]], inputs: { scoutName: [1, "scoutName"] }, outputs: { close: "close", save: "save" }, decls: 1, vars: 0, consts: [["class", "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs", 4, "transloco"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4", "bg-slate-900/60", "backdrop-blur-xs"], [1, "bg-white", "rounded-2xl", "max-w-md", "w-full", "p-6", "shadow-2xl", "border", "border-slate-200", "space-y-4"], [1, "flex", "items-center", "justify-between", "border-b", "border-slate-100", "pb-3"], [1, "text-base", "font-bold", "text-slate-900"], ["type", "button", 1, "text-slate-400", "hover:text-slate-700", "cursor-pointer", 3, "click"], [1, "pi", "pi-times"], [1, "space-y-3", "text-xs"], [1, "block", "font-medium", "text-slate-700", "mb-1"], [1, "w-full", "p-2", "bg-slate-50", "border", "border-slate-300", "rounded-lg", "text-slate-800", 3, "ngModelChange", "ngModel"], ["value", "monday"], ["value", "tuesday"], ["value", "wednesday"], ["value", "thursday"], ["value", "friday"], ["value", "saturday"], ["value", "sunday"], [1, "grid", "grid-cols-2", "gap-3"], ["type", "time", 1, "w-full", "p-2", "bg-slate-50", "border", "border-slate-300", "rounded-lg", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "justify-end", "gap-2", "pt-3", "border-t", "border-slate-100"], ["type", "button", 1, "px-4", "py-2", "text-xs", "font-medium", "text-slate-700", "hover:bg-slate-100", "rounded-lg", "cursor-pointer", 3, "click"], ["type", "button", 1, "px-4", "py-2", "text-xs", "font-semibold", "text-white", "bg-blue-600", "hover:bg-blue-700", "rounded-lg", "shadow-2xs", "cursor-pointer", 3, "click"]], template: function CommitmentModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, CommitmentModalComponent_div_0_Template, 40, 18, "div", 0);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgModel, TranslocoDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommitmentModalComponent, [{
    type: Component,
    args: [{ selector: "app-commitment-modal", standalone: true, imports: [CommonModule, FormsModule, TranslocoDirective], template: `<div\r
  class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"\r
  *transloco="let t"\r
>\r
  <div\r
    class="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-4"\r
  >\r
    <div class="flex items-center justify-between border-b border-slate-100 pb-3">\r
      <h3 class="text-base font-bold text-slate-900">\r
        {{ t('commitments.title', { name: scoutName() }) }}\r
      </h3>\r
      <button\r
        type="button"\r
        (click)="close.emit()"\r
        class="text-slate-400 hover:text-slate-700 cursor-pointer"\r
      >\r
        <i class="pi pi-times"></i>\r
      </button>\r
    </div>\r
\r
    <div class="space-y-3 text-xs">\r
      <div>\r
        <label class="block font-medium text-slate-700 mb-1">{{ t('commitments.day') }}</label>\r
        <select\r
          [(ngModel)]="formData.day"\r
          class="w-full p-2 bg-slate-50 border border-slate-300 rounded-lg text-slate-800"\r
        >\r
          <option value="monday">{{ t('days.monday') }}</option>\r
          <option value="tuesday">{{ t('days.tuesday') }}</option>\r
          <option value="wednesday">{{ t('days.wednesday') }}</option>\r
          <option value="thursday">{{ t('days.thursday') }}</option>\r
          <option value="friday">{{ t('days.friday') }}</option>\r
          <option value="saturday">{{ t('days.saturday') }}</option>\r
          <option value="sunday">{{ t('days.sunday') }}</option>\r
        </select>\r
      </div>\r
\r
      <div class="grid grid-cols-2 gap-3">\r
        <div>\r
          <label class="block font-medium text-slate-700 mb-1">{{ t('commitments.start') }}</label>\r
          <input\r
            type="time"\r
            [(ngModel)]="formData.startTime"\r
            class="w-full p-2 bg-slate-50 border border-slate-300 rounded-lg"\r
          />\r
        </div>\r
        <div>\r
          <label class="block font-medium text-slate-700 mb-1">{{ t('commitments.end') }}</label>\r
          <input\r
            type="time"\r
            [(ngModel)]="formData.endTime"\r
            class="w-full p-2 bg-slate-50 border border-slate-300 rounded-lg"\r
          />\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">\r
      <button\r
        type="button"\r
        (click)="close.emit()"\r
        class="px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-100 rounded-lg cursor-pointer"\r
      >\r
        {{ t('common.cancel') }}\r
      </button>\r
      <button\r
        type="button"\r
        (click)="submit()"\r
        class="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-2xs cursor-pointer"\r
      >\r
        {{ t('common.save') }}\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
` }]
  }], null, { scoutName: [{ type: Input, args: [{ isSignal: true, alias: "scoutName", required: false }] }], close: [{ type: Output, args: ["close"] }], save: [{ type: Output, args: ["save"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CommitmentModalComponent, { className: "CommitmentModalComponent", filePath: "app/components/modals/commitment-modal.ts", lineNumber: 13 });
})();

// src/app/components/modals/import-modal.ts
var _c04 = (a0, a1) => ({ commitments: a0, members: a1 });
function ImportModalComponent_div_0_Conditional_15_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const err_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(err_r3);
  }
}
function ImportModalComponent_div_0_Conditional_15_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 18);
    \u0275\u0275repeaterCreate(1, ImportModalComponent_div_0_Conditional_15_Conditional_3_For_2_Template, 2, 1, "li", 19, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const res_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(res_r4.errors);
  }
}
function ImportModalComponent_div_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ImportModalComponent_div_0_Conditional_15_Conditional_3_Template, 3, 0, "ul", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const res_r4 = ctx;
    const t_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngClass", res_r4.errors.length === 0 ? "bg-emerald-50 border-emerald-200 text-emerald-800" : "bg-red-50 border-red-200 text-red-800");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r5("import.result", \u0275\u0275pureFunction2(3, _c04, res_r4.importedCommitmentsCount, res_r4.importedMembersCount)));
    \u0275\u0275advance();
    \u0275\u0275conditional(res_r4.errors.length > 0 ? 3 : -1);
  }
}
function ImportModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4);
    \u0275\u0275element(4, "i", 5);
    \u0275\u0275elementStart(5, "h3", 6);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 7);
    \u0275\u0275listener("click", function ImportModalComponent_div_0_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275element(8, "i", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 9);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div")(12, "label", 10);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "textarea", 11);
    \u0275\u0275twoWayListener("ngModelChange", function ImportModalComponent_div_0_Template_textarea_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.csvText, $event) || (ctx_r1.csvText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(15, ImportModalComponent_div_0_Conditional_15_Template, 4, 6, "div", 12);
    \u0275\u0275elementStart(16, "div", 13)(17, "button", 14);
    \u0275\u0275listener("click", function ImportModalComponent_div_0_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadDemo.emit());
    });
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 4)(20, "button", 15);
    \u0275\u0275listener("click", function ImportModalComponent_div_0_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 16);
    \u0275\u0275listener("click", function ImportModalComponent_div_0_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.process());
    });
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const t_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r5("import.title"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r5("import.csvInstructions"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r5("import.pasteLabel"));
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.csvText);
    \u0275\u0275property("placeholder", t_r5("import.examplePlaceholder"));
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_7_0 = ctx_r1.importResult) ? 15 : -1, tmp_7_0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r5("import.loadDemoAlternative"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r5("common.close"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r5("import.btnProcess"), " ");
  }
}
var ImportModalComponent = class _ImportModalComponent {
  clanData = inject(ClanDataService);
  close = output();
  loadDemo = output();
  csvText = "";
  importResult = null;
  process() {
    if (!this.csvText.trim())
      return;
    this.importResult = this.clanData.importCsv(this.csvText);
    if (this.importResult.errors.length === 0)
      this.csvText = "";
  }
  static \u0275fac = function ImportModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ImportModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ImportModalComponent, selectors: [["app-import-modal"]], outputs: { close: "close", loadDemo: "loadDemo" }, decls: 1, vars: 0, consts: [["class", "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs", 4, "transloco"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4", "bg-slate-900/60", "backdrop-blur-xs"], [1, "bg-white", "rounded-2xl", "max-w-2xl", "w-full", "p-6", "shadow-2xl", "border", "border-slate-200", "space-y-4"], [1, "flex", "items-center", "justify-between", "border-b", "border-slate-100", "pb-3"], [1, "flex", "items-center", "gap-2"], [1, "pi", "pi-file-import", "text-blue-600", "text-base"], [1, "text-base", "font-bold", "text-slate-900"], ["type", "button", 1, "text-slate-400", "hover:text-slate-700", "cursor-pointer", 3, "click"], [1, "pi", "pi-times"], [1, "text-xs", "text-slate-600", "leading-relaxed"], [1, "block", "text-xs", "font-semibold", "text-slate-700", "mb-1"], ["rows", "7", 1, "w-full", "p-3", "font-mono", "text-xs", "bg-slate-50", "border", "border-slate-300", "rounded-xl", "focus:outline-none", "focus:border-blue-500", 3, "ngModelChange", "ngModel", "placeholder"], [1, "p-3", "rounded-xl", "border", "text-xs", 3, "ngClass"], [1, "flex", "items-center", "justify-between", "pt-3", "border-t", "border-slate-100"], ["type", "button", 1, "text-xs", "text-blue-600", "hover:text-blue-800", "font-medium", "cursor-pointer", 3, "click"], ["type", "button", 1, "px-4", "py-2", "text-xs", "font-medium", "text-slate-700", "hover:bg-slate-100", "rounded-lg", "cursor-pointer", 3, "click"], ["type", "button", 1, "px-4", "py-2", "text-xs", "font-semibold", "text-white", "bg-blue-600", "hover:bg-blue-700", "rounded-lg", "shadow-2xs", "cursor-pointer", 3, "click"], [1, "font-bold", "block"], [1, "list-disc", "pl-4", "mt-1", "space-y-0.5", "text-[11px]"], [1, "whitespace-pre-line"]], template: function ImportModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, ImportModalComponent_div_0_Template, 24, 9, "div", 0);
    }
  }, dependencies: [CommonModule, NgClass, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, TranslocoDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImportModalComponent, [{
    type: Component,
    args: [{ selector: "app-import-modal", standalone: true, imports: [CommonModule, FormsModule, TranslocoDirective], template: `<div\r
  class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"\r
  *transloco="let t"\r
>\r
  <div\r
    class="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-slate-200 space-y-4"\r
  >\r
    <div class="flex items-center justify-between border-b border-slate-100 pb-3">\r
      <div class="flex items-center gap-2">\r
        <i class="pi pi-file-import text-blue-600 text-base"></i>\r
        <h3 class="text-base font-bold text-slate-900">{{ t('import.title') }}</h3>\r
      </div>\r
      <button\r
        type="button"\r
        (click)="close.emit()"\r
        class="text-slate-400 hover:text-slate-700 cursor-pointer"\r
      >\r
        <i class="pi pi-times"></i>\r
      </button>\r
    </div>\r
\r
    <p class="text-xs text-slate-600 leading-relaxed">{{ t('import.csvInstructions') }}</p>\r
\r
    <div>\r
      <label class="block text-xs font-semibold text-slate-700 mb-1">{{\r
        t('import.pasteLabel')\r
      }}</label>\r
      <textarea\r
        rows="7"\r
        [(ngModel)]="csvText"\r
        [placeholder]="t('import.examplePlaceholder')"\r
        class="w-full p-3 font-mono text-xs bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:border-blue-500"\r
      ></textarea>\r
    </div>\r
\r
    @if (importResult; as res) {\r
      <div\r
        class="p-3 rounded-xl border text-xs"\r
        [ngClass]="\r
          res.errors.length === 0\r
            ? 'bg-emerald-50 border-emerald-200 text-emerald-800'\r
            : 'bg-red-50 border-red-200 text-red-800'\r
        "\r
      >\r
        <span class="font-bold block">{{\r
          t('import.result', {\r
            commitments: res.importedCommitmentsCount,\r
            members: res.importedMembersCount,\r
          })\r
        }}</span>\r
        @if (res.errors.length > 0) {\r
          <ul class="list-disc pl-4 mt-1 space-y-0.5 text-[11px]">\r
            @for (err of res.errors; track $index) {\r
              <li class="whitespace-pre-line">{{ err }}</li>\r
            }\r
          </ul>\r
        }\r
      </div>\r
    }\r
\r
    <div class="flex items-center justify-between pt-3 border-t border-slate-100">\r
      <button\r
        type="button"\r
        (click)="loadDemo.emit()"\r
        class="text-xs text-blue-600 hover:text-blue-800 font-medium cursor-pointer"\r
      >\r
        {{ t('import.loadDemoAlternative') }}\r
      </button>\r
      <div class="flex items-center gap-2">\r
        <button\r
          type="button"\r
          (click)="close.emit()"\r
          class="px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-100 rounded-lg cursor-pointer"\r
        >\r
          {{ t('common.close') }}\r
        </button>\r
        <button\r
          type="button"\r
          (click)="process()"\r
          class="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-2xs cursor-pointer"\r
        >\r
          {{ t('import.btnProcess') }}\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
` }]
  }], null, { close: [{ type: Output, args: ["close"] }], loadDemo: [{ type: Output, args: ["loadDemo"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ImportModalComponent, { className: "ImportModalComponent", filePath: "app/components/modals/import-modal.ts", lineNumber: 14 });
})();

// src/app/components/modals/whatsapp-modal.ts
function WhatsAppModalComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4);
    \u0275\u0275element(4, "i", 5);
    \u0275\u0275elementStart(5, "h3", 6);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 7);
    \u0275\u0275listener("click", function WhatsAppModalComponent_div_0_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275element(8, "i", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 9);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "textarea", 10);
    \u0275\u0275elementStart(12, "div", 11)(13, "button", 12);
    \u0275\u0275listener("click", function WhatsAppModalComponent_div_0_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 13);
    \u0275\u0275listener("click", function WhatsAppModalComponent_div_0_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.copy());
    });
    \u0275\u0275element(16, "i", 14);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(t_r3("modals.whatsAppTitle"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r3("modals.whatsAppSubtitle"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.text());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("common.close"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r3("modals.copyClipboard"), " ");
  }
}
var WhatsAppModalComponent = class _WhatsAppModalComponent {
  clanData = inject(ClanDataService);
  exportService = inject(ExportService);
  close = output();
  copied = output();
  text = computed(() => {
    return this.exportService.generateWhatsAppSummary(this.clanData.members(), this.clanData.services(), this.clanData.bufferMinutes());
  }, ...ngDevMode ? [{ debugName: "text" }] : (
    /* istanbul ignore next */
    []
  ));
  copy() {
    this.exportService.copyToClipboard(this.text()).then(() => {
      this.copied.emit();
    });
  }
  static \u0275fac = function WhatsAppModalComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WhatsAppModalComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WhatsAppModalComponent, selectors: [["app-whatsapp-modal"]], outputs: { close: "close", copied: "copied" }, decls: 1, vars: 0, consts: [["class", "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs", 4, "transloco"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4", "bg-slate-900/60", "backdrop-blur-xs"], [1, "bg-white", "rounded-2xl", "max-w-xl", "w-full", "p-6", "shadow-2xl", "border", "border-slate-200", "space-y-4"], [1, "flex", "items-center", "justify-between", "border-b", "border-slate-100", "pb-3"], [1, "flex", "items-center", "gap-2"], [1, "pi", "pi-whatsapp", "text-emerald-600", "text-lg"], [1, "text-base", "font-bold", "text-slate-900"], ["type", "button", 1, "text-slate-400", "hover:text-slate-700", "cursor-pointer", 3, "click"], [1, "pi", "pi-times"], [1, "text-xs", "text-slate-500"], ["readonly", "", "rows", "11", 1, "w-full", "p-3", "font-mono", "text-xs", "bg-slate-50", "border", "border-slate-300", "rounded-xl", "text-slate-800", 3, "value"], [1, "flex", "items-center", "justify-between", "pt-3", "border-t", "border-slate-100"], ["type", "button", 1, "px-4", "py-2", "text-xs", "font-medium", "text-slate-700", "hover:bg-slate-100", "rounded-lg", "cursor-pointer", 3, "click"], ["type", "button", 1, "px-4", "py-2", "text-xs", "font-semibold", "text-white", "bg-emerald-600", "hover:bg-emerald-700", "rounded-lg", "shadow-2xs", "cursor-pointer", "flex", "items-center", "gap-1.5", 3, "click"], [1, "pi", "pi-copy", "text-xs"]], template: function WhatsAppModalComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, WhatsAppModalComponent_div_0_Template, 18, 5, "div", 0);
    }
  }, dependencies: [CommonModule, TranslocoDirective], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WhatsAppModalComponent, [{
    type: Component,
    args: [{ selector: "app-whatsapp-modal", standalone: true, imports: [CommonModule, TranslocoDirective], template: `<div\r
  class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"\r
  *transloco="let t"\r
>\r
  <div\r
    class="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-slate-200 space-y-4"\r
  >\r
    <div class="flex items-center justify-between border-b border-slate-100 pb-3">\r
      <div class="flex items-center gap-2">\r
        <i class="pi pi-whatsapp text-emerald-600 text-lg"></i>\r
        <h3 class="text-base font-bold text-slate-900">{{ t('modals.whatsAppTitle') }}</h3>\r
      </div>\r
      <button\r
        type="button"\r
        (click)="close.emit()"\r
        class="text-slate-400 hover:text-slate-700 cursor-pointer"\r
      >\r
        <i class="pi pi-times"></i>\r
      </button>\r
    </div>\r
\r
    <p class="text-xs text-slate-500">\r
      {{ t('modals.whatsAppSubtitle') }}\r
    </p>\r
\r
    <textarea\r
      readonly\r
      rows="11"\r
      [value]="text()"\r
      class="w-full p-3 font-mono text-xs bg-slate-50 border border-slate-300 rounded-xl text-slate-800"\r
    ></textarea>\r
\r
    <div class="flex items-center justify-between pt-3 border-t border-slate-100">\r
      <button\r
        type="button"\r
        (click)="close.emit()"\r
        class="px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-100 rounded-lg cursor-pointer"\r
      >\r
        {{ t('common.close') }}\r
      </button>\r
      <button\r
        type="button"\r
        (click)="copy()"\r
        class="px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-2xs cursor-pointer flex items-center gap-1.5"\r
      >\r
        <i class="pi pi-copy text-xs"></i> {{ t('modals.copyClipboard') }}\r
      </button>\r
    </div>\r
  </div>\r
</div>\r
` }]
  }], null, { close: [{ type: Output, args: ["close"] }], copied: [{ type: Output, args: ["copied"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WhatsAppModalComponent, { className: "WhatsAppModalComponent", filePath: "app/components/modals/whatsapp-modal.ts", lineNumber: 13 });
})();

// src/app/pages/home/home.ts
function Home_div_0_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "i", 26);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 27);
    \u0275\u0275listener("click", function Home_div_0_Conditional_31_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toastMessage.set(null));
    });
    \u0275\u0275element(5, "i", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.toastMessage());
  }
}
function Home_div_0_Case_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-dashboard-view", 29);
    \u0275\u0275listener("goToMatrix", function Home_div_0_Case_33_Template_app_dashboard_view_goToMatrix_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.activeTab.set("matrix"));
    })("goToMembers", function Home_div_0_Case_33_Template_app_dashboard_view_goToMembers_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.activeTab.set("members"));
    })("goToServices", function Home_div_0_Case_33_Template_app_dashboard_view_goToServices_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.activeTab.set("services"));
    })("openImport", function Home_div_0_Case_33_Template_app_dashboard_view_openImport_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.isImportModalOpen.set(true));
    })("autoAssign", function Home_div_0_Case_33_Template_app_dashboard_view_autoAssign_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.runAutoAssign());
    })("openAddMember", function Home_div_0_Case_33_Template_app_dashboard_view_openAddMember_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openAddMember());
    });
    \u0275\u0275elementEnd();
  }
}
function Home_div_0_Case_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-members-view", 30);
    \u0275\u0275listener("openAddMember", function Home_div_0_Case_34_Template_app_members_view_openAddMember_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openAddMember());
    })("openEditMember", function Home_div_0_Case_34_Template_app_members_view_openEditMember_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEditMember($event));
    })("openImport", function Home_div_0_Case_34_Template_app_members_view_openImport_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.isImportModalOpen.set(true));
    })("openAddCommitment", function Home_div_0_Case_34_Template_app_members_view_openAddCommitment_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openCommitmentForCurrentScout());
    })("goToMatrix", function Home_div_0_Case_34_Template_app_members_view_goToMatrix_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.activeTab.set("matrix"));
    });
    \u0275\u0275elementEnd();
  }
}
function Home_div_0_Case_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-services-view", 31);
    \u0275\u0275listener("openAddService", function Home_div_0_Case_35_Template_app_services_view_openAddService_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openAddService());
    })("openEditService", function Home_div_0_Case_35_Template_app_services_view_openEditService_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openEditService($event));
    })("selectServiceForMatrix", function Home_div_0_Case_35_Template_app_services_view_selectServiceForMatrix_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectServiceForMatrix($event));
    });
    \u0275\u0275elementEnd();
  }
}
function Home_div_0_Case_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-matrix-view", 32);
    \u0275\u0275listener("autoAssign", function Home_div_0_Case_36_Template_app_matrix_view_autoAssign_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.runAutoAssign());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("initialServiceId", ctx_r1.matrixFocusServiceId());
  }
}
function Home_div_0_Case_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-schedule-view");
  }
}
function Home_div_0_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-member-modal", 33);
    \u0275\u0275listener("close", function Home_div_0_Conditional_38_Template_app_member_modal_close_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.isMemberModalOpen.set(false));
    })("save", function Home_div_0_Conditional_38_Template_app_member_modal_save_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveMember($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("member", ctx_r1.editingMember());
  }
}
function Home_div_0_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-service-modal", 34);
    \u0275\u0275listener("close", function Home_div_0_Conditional_39_Template_app_service_modal_close_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.isServiceModalOpen.set(false));
    })("save", function Home_div_0_Conditional_39_Template_app_service_modal_save_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveService($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("service", ctx_r1.editingService());
  }
}
function Home_div_0_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-commitment-modal", 35);
    \u0275\u0275listener("close", function Home_div_0_Conditional_40_Template_app_commitment_modal_close_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.isCommitmentModalOpen.set(false));
    })("save", function Home_div_0_Conditional_40_Template_app_commitment_modal_save_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveCommitment($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("scoutName", ((tmp_3_0 = ctx_r1.editingMember()) == null ? null : tmp_3_0.name) || "Scout");
  }
}
function Home_div_0_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-import-modal", 36);
    \u0275\u0275listener("close", function Home_div_0_Conditional_41_Template_app_import_modal_close_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.isImportModalOpen.set(false));
    })("loadDemo", function Home_div_0_Conditional_41_Template_app_import_modal_loadDemo_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.loadSample();
      return \u0275\u0275resetView(ctx_r1.isImportModalOpen.set(false));
    });
    \u0275\u0275elementEnd();
  }
}
function Home_div_0_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-whatsapp-modal", 37);
    \u0275\u0275listener("close", function Home_div_0_Conditional_42_Template_app_whatsapp_modal_close_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.isWhatsAppModalOpen.set(false));
    })("copied", function Home_div_0_Conditional_42_Template_app_whatsapp_modal_copied_0_listener() {
      \u0275\u0275restoreView(_r12);
      const t_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showToast(t_r13("toasts.copied")));
    });
    \u0275\u0275elementEnd();
  }
}
function Home_div_0_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 38)(2, "div", 39);
    \u0275\u0275element(3, "i", 40);
    \u0275\u0275elementStart(4, "h3", 41);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 42);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 43)(9, "button", 44);
    \u0275\u0275listener("click", function Home_div_0_Conditional_43_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.isConfirmResetOpen.set(false));
    });
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 45);
    \u0275\u0275listener("click", function Home_div_0_Conditional_43_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.confirmReset());
    });
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const t_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(t_r13("modals.resetTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r13("modals.resetDescription"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r13("common.cancel"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r13("modals.resetConfirm"), " ");
  }
}
function Home_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "app-top-bar", 2);
    \u0275\u0275listener("tabChange", function Home_div_0_Template_app_top_bar_tabChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.activeTab.set($event));
    })("openImport", function Home_div_0_Template_app_top_bar_openImport_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.isImportModalOpen.set(true));
    })("openWhatsApp", function Home_div_0_Template_app_top_bar_openWhatsApp_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.isWhatsAppModalOpen.set(true));
    })("autoAssign", function Home_div_0_Template_app_top_bar_autoAssign_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.runAutoAssign());
    })("openReset", function Home_div_0_Template_app_top_bar_openReset_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.isConfirmResetOpen.set(true));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "span", 6);
    \u0275\u0275element(6, "i", 7);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 8)(9, "button", 9);
    \u0275\u0275listener("click", function Home_div_0_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clanData.setBuffer(0));
    });
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 9);
    \u0275\u0275listener("click", function Home_div_0_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clanData.setBuffer(15));
    });
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 9);
    \u0275\u0275listener("click", function Home_div_0_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clanData.setBuffer(30));
    });
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 9);
    \u0275\u0275listener("click", function Home_div_0_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clanData.setBuffer(45));
    });
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 10)(18, "button", 11);
    \u0275\u0275listener("click", function Home_div_0_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.runAutoAssign());
    });
    \u0275\u0275element(19, "i", 12);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 13);
    \u0275\u0275listener("click", function Home_div_0_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadSampleMembers());
    });
    \u0275\u0275element(22, "i", 14);
    \u0275\u0275elementStart(23, "span", 15);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "button", 13);
    \u0275\u0275listener("click", function Home_div_0_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadSampleServices());
    });
    \u0275\u0275element(26, "i", 16);
    \u0275\u0275elementStart(27, "span", 15);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "button", 17);
    \u0275\u0275listener("click", function Home_div_0_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.isConfirmResetOpen.set(true));
    });
    \u0275\u0275element(30, "i", 18);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(31, Home_div_0_Conditional_31_Template, 6, 1, "div", 19);
    \u0275\u0275elementStart(32, "main", 20);
    \u0275\u0275conditionalCreate(33, Home_div_0_Case_33_Template, 1, 0, "app-dashboard-view")(34, Home_div_0_Case_34_Template, 1, 0, "app-members-view")(35, Home_div_0_Case_35_Template, 1, 0, "app-services-view")(36, Home_div_0_Case_36_Template, 1, 1, "app-matrix-view", 21)(37, Home_div_0_Case_37_Template, 1, 0, "app-schedule-view");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(38, Home_div_0_Conditional_38_Template, 1, 1, "app-member-modal", 22);
    \u0275\u0275conditionalCreate(39, Home_div_0_Conditional_39_Template, 1, 1, "app-service-modal", 23);
    \u0275\u0275conditionalCreate(40, Home_div_0_Conditional_40_Template, 1, 1, "app-commitment-modal", 24);
    \u0275\u0275conditionalCreate(41, Home_div_0_Conditional_41_Template, 1, 0, "app-import-modal");
    \u0275\u0275conditionalCreate(42, Home_div_0_Conditional_42_Template, 1, 0, "app-whatsapp-modal");
    \u0275\u0275conditionalCreate(43, Home_div_0_Conditional_43_Template, 13, 4, "div", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_20_0;
    const t_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("activeTab", ctx_r1.activeTab());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", t_r13("buffer.label"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.clanData.bufferMinutes() === 0 ? "bg-white text-slate-900 shadow-2xs font-semibold" : "text-slate-600");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r13("buffer.none"), " ");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.clanData.bufferMinutes() === 15 ? "bg-white text-slate-900 shadow-2xs font-semibold" : "text-slate-600");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r13("buffer.m15"), " ");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.clanData.bufferMinutes() === 30 ? "bg-white text-slate-900 shadow-2xs font-semibold" : "text-slate-600");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r13("buffer.m30"), " ");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.clanData.bufferMinutes() === 45 ? "bg-white text-slate-900 shadow-2xs font-semibold" : "text-slate-600");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", t_r13("buffer.m45"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", t_r13("app.actions.autoAssign"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("title", t_r13("app.actions.loadSampleMembers"));
    \u0275\u0275attribute("aria-label", t_r13("app.actions.loadSampleMembers"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r13("app.actions.loadSampleMembers"));
    \u0275\u0275advance();
    \u0275\u0275property("title", t_r13("app.actions.loadSampleServices"));
    \u0275\u0275attribute("aria-label", t_r13("app.actions.loadSampleServices"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r13("app.actions.loadSampleServices"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.toastMessage() ? 31 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_20_0 = ctx_r1.activeTab()) === "dashboard" ? 33 : tmp_20_0 === "members" ? 34 : tmp_20_0 === "services" ? 35 : tmp_20_0 === "matrix" ? 36 : tmp_20_0 === "schedule" ? 37 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.isMemberModalOpen() ? 38 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isServiceModalOpen() ? 39 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isCommitmentModalOpen() ? 40 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isImportModalOpen() ? 41 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isWhatsAppModalOpen() ? 42 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isConfirmResetOpen() ? 43 : -1);
  }
}
var Home = class _Home {
  clanData = inject(ClanDataService);
  transloco = inject(TranslocoService);
  activeTab = signal("dashboard", ...ngDevMode ? [{ debugName: "activeTab" }] : (
    /* istanbul ignore next */
    []
  ));
  toastMessage = signal(null, ...ngDevMode ? [{ debugName: "toastMessage" }] : (
    /* istanbul ignore next */
    []
  ));
  isMemberModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isMemberModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  isServiceModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isServiceModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  isCommitmentModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isCommitmentModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  isImportModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isImportModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  isWhatsAppModalOpen = signal(false, ...ngDevMode ? [{ debugName: "isWhatsAppModalOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  isConfirmResetOpen = signal(false, ...ngDevMode ? [{ debugName: "isConfirmResetOpen" }] : (
    /* istanbul ignore next */
    []
  ));
  editingMember = signal(null, ...ngDevMode ? [{ debugName: "editingMember" }] : (
    /* istanbul ignore next */
    []
  ));
  editingService = signal(null, ...ngDevMode ? [{ debugName: "editingService" }] : (
    /* istanbul ignore next */
    []
  ));
  matrixFocusServiceId = signal(null, ...ngDevMode ? [{ debugName: "matrixFocusServiceId" }] : (
    /* istanbul ignore next */
    []
  ));
  showToast(msg) {
    this.toastMessage.set(msg);
    setTimeout(() => {
      if (this.toastMessage() === msg)
        this.toastMessage.set(null);
    }, 3500);
  }
  openAddMember() {
    this.editingMember.set(null);
    this.isMemberModalOpen.set(true);
  }
  openEditMember(m) {
    this.editingMember.set(m);
    this.isMemberModalOpen.set(true);
  }
  saveMember(data) {
    if (data.id) {
      this.clanData.updateMember(data.id, data);
      this.showToast(this.transloco.translate("toasts.memberUpdated"));
    } else {
      this.clanData.addMember(__spreadProps(__spreadValues({}, data), { commitments: [] }));
      this.showToast(this.transloco.translate("toasts.memberAdded"));
    }
    this.isMemberModalOpen.set(false);
  }
  openAddService() {
    this.editingService.set(null);
    this.isServiceModalOpen.set(true);
  }
  openEditService(s) {
    this.editingService.set(s);
    this.isServiceModalOpen.set(true);
  }
  saveService(data) {
    if (data.id) {
      this.clanData.updateService(data.id, data);
      this.showToast(this.transloco.translate("toasts.serviceUpdated"));
    } else {
      this.clanData.addService(data);
      this.showToast(this.transloco.translate("toasts.serviceAdded"));
    }
    this.isServiceModalOpen.set(false);
  }
  saveCommitment(data) {
    const mem = this.editingMember();
    if (!mem)
      return;
    this.clanData.addCommitment(mem.id, data);
    this.isCommitmentModalOpen.set(false);
    this.showToast(this.transloco.translate("toasts.commitmentAdded"));
  }
  openCommitmentForCurrentScout() {
    const first = this.clanData.members()[0];
    if (first) {
      this.editingMember.set(first);
      this.isCommitmentModalOpen.set(true);
    }
  }
  selectServiceForMatrix(serviceId) {
    this.matrixFocusServiceId.set(serviceId);
    this.activeTab.set("matrix");
  }
  runAutoAssign() {
    const res = this.clanData.autoAssign();
    this.showToast(this.transloco.translate("toasts.autoAssignDone", { count: res.assignedCount }));
  }
  async loadSample() {
    await this.loadSampleData(this.clanData.loadSampleData(), "toasts.sampleLoaded");
  }
  async loadSampleMembers() {
    await this.loadSampleData(this.clanData.loadSampleMembers(), "toasts.sampleMembersLoaded");
  }
  async loadSampleServices() {
    await this.loadSampleData(this.clanData.loadSampleServices(), "toasts.sampleServicesLoaded");
  }
  async loadSampleData(load, successMessageKey) {
    try {
      await load;
      this.showToast(this.transloco.translate(successMessageKey));
    } catch (error) {
      console.error("Failed to load sample data:", error);
      this.showToast(this.transloco.translate("toasts.sampleLoadFailed"));
    }
  }
  confirmReset() {
    this.clanData.resetAll();
    this.isConfirmResetOpen.set(false);
    this.showToast(this.transloco.translate("toasts.resetDone"));
  }
  static \u0275fac = function Home_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Home)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Home, selectors: [["app-home"]], decls: 1, vars: 0, consts: [["class", "min-h-screen flex flex-col text-slate-900", 4, "transloco"], [1, "min-h-screen", "flex", "flex-col", "text-slate-900"], [3, "tabChange", "openImport", "openWhatsApp", "autoAssign", "openReset", "activeTab"], [1, "bg-white", "border-b", "border-slate-200", "py-2", "px-4", "sm:px-6", "lg:px-8"], [1, "max-w-7xl", "mx-auto", "flex", "flex-wrap", "items-center", "justify-between", "gap-3", "text-xs"], [1, "flex", "items-center", "gap-2"], [1, "text-slate-500", "font-medium", "flex", "items-center", "gap-1"], [1, "pi", "pi-car", "text-slate-400"], [1, "flex", "items-center", "bg-slate-100", "rounded-lg", "p-0.5"], ["type", "button", 1, "px-2.5", "py-1", "rounded", "text-xs", "cursor-pointer", 3, "click"], [1, "flex", "items-center", "gap-2", "ml-auto"], ["type", "button", 1, "inline-flex", "items-center", "gap-1.5", "px-3", "py-1.5", "text-xs", "font-semibold", "text-white", "bg-blue-600", "hover:bg-blue-700", "rounded-lg", "shadow-2xs", "cursor-pointer", 3, "click"], [1, "pi", "pi-sparkles", "text-xs"], ["type", "button", 1, "inline-flex", "items-center", "gap-1", "px-2.5", "py-1.5", "text-xs", "font-medium", "text-slate-600", "bg-slate-50", "border", "border-slate-200", "hover:bg-slate-100", "rounded-lg", "cursor-pointer", 3, "click", "title"], [1, "pi", "pi-users", "text-xs", "text-slate-500"], [1, "hidden", "sm:inline"], [1, "pi", "pi-briefcase", "text-xs", "text-slate-500"], ["type", "button", 1, "inline-flex", "items-center", "gap-1", "px-2", "py-1.5", "text-xs", "font-medium", "text-red-600", "hover:bg-red-50", "rounded-lg", "cursor-pointer", 3, "click"], [1, "pi", "pi-trash", "text-xs"], [1, "fixed", "bottom-6", "right-6", "z-50", "bg-slate-900", "text-white", "text-xs", "px-4", "py-3", "rounded-xl", "shadow-xl", "flex", "items-center", "gap-3", "border", "border-slate-700"], [1, "flex-1", "max-w-7xl", "w-full", "mx-auto", "px-4", "sm:px-6", "lg:px-8", "py-6"], [3, "initialServiceId"], [3, "member"], [3, "service"], [3, "scoutName"], [1, "fixed", "inset-0", "z-50", "flex", "items-center", "justify-center", "p-4", "bg-slate-900/60", "backdrop-blur-xs"], [1, "pi", "pi-info-circle", "text-blue-400", "text-sm"], ["type", "button", 1, "text-slate-400", "hover:text-white", "ml-2", 3, "click"], [1, "pi", "pi-times", "text-xs"], [3, "goToMatrix", "goToMembers", "goToServices", "openImport", "autoAssign", "openAddMember"], [3, "openAddMember", "openEditMember", "openImport", "openAddCommitment", "goToMatrix"], [3, "openAddService", "openEditService", "selectServiceForMatrix"], [3, "autoAssign", "initialServiceId"], [3, "close", "save", "member"], [3, "close", "save", "service"], [3, "close", "save", "scoutName"], [3, "close", "loadDemo"], [3, "close", "copied"], [1, "bg-white", "rounded-2xl", "max-w-md", "w-full", "p-6", "shadow-2xl", "border", "border-slate-200", "space-y-4"], [1, "flex", "items-center", "gap-3", "text-red-600"], [1, "pi", "pi-exclamation-triangle", "text-2xl"], [1, "text-base", "font-bold", "text-slate-900"], [1, "text-xs", "text-slate-600", "leading-relaxed"], [1, "flex", "items-center", "justify-end", "gap-2", "pt-3", "border-t", "border-slate-100"], ["type", "button", 1, "px-4", "py-2", "text-xs", "font-medium", "text-slate-700", "hover:bg-slate-100", "rounded-lg", "cursor-pointer", 3, "click"], ["type", "button", 1, "px-4", "py-2", "text-xs", "font-semibold", "text-white", "bg-red-600", "hover:bg-red-700", "rounded-lg", "shadow-2xs", "cursor-pointer", 3, "click"]], template: function Home_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, Home_div_0_Template, 44, 29, "div", 0);
    }
  }, dependencies: [
    CommonModule,
    TranslocoDirective,
    TopBarComponent,
    DashboardViewComponent,
    MembersViewComponent,
    ServicesViewComponent,
    MatrixViewComponent,
    ScheduleViewComponent,
    MemberModalComponent,
    ServiceModalComponent,
    CommitmentModalComponent,
    ImportModalComponent,
    WhatsAppModalComponent
  ], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n  background-color: #f8fafc;\n}\n/*# sourceMappingURL=home.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Home, [{
    type: Component,
    args: [{ selector: "app-home", standalone: true, imports: [
      CommonModule,
      TranslocoDirective,
      TopBarComponent,
      DashboardViewComponent,
      MembersViewComponent,
      ServicesViewComponent,
      MatrixViewComponent,
      ScheduleViewComponent,
      MemberModalComponent,
      ServiceModalComponent,
      CommitmentModalComponent,
      ImportModalComponent,
      WhatsAppModalComponent
    ], template: `<div class="min-h-screen flex flex-col text-slate-900" *transloco="let t">\r
  <!-- TOP BAR -->\r
  <app-top-bar\r
    [activeTab]="activeTab()"\r
    (tabChange)="activeTab.set($event)"\r
    (openImport)="isImportModalOpen.set(true)"\r
    (openWhatsApp)="isWhatsAppModalOpen.set(true)"\r
    (autoAssign)="runAutoAssign()"\r
    (openReset)="isConfirmResetOpen.set(true)"\r
  />\r
\r
  <!-- SUBHEADER BUFFER CONTROL BAR -->\r
  <div class="bg-white border-b border-slate-200 py-2 px-4 sm:px-6 lg:px-8">\r
    <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">\r
      <div class="flex items-center gap-2">\r
        <span class="text-slate-500 font-medium flex items-center gap-1">\r
          <i class="pi pi-car text-slate-400"></i> {{ t('buffer.label') }}\r
        </span>\r
        <div class="flex items-center bg-slate-100 rounded-lg p-0.5">\r
          <button\r
            type="button"\r
            (click)="clanData.setBuffer(0)"\r
            [class]="\r
              clanData.bufferMinutes() === 0\r
                ? 'bg-white text-slate-900 shadow-2xs font-semibold'\r
                : 'text-slate-600'\r
            "\r
            class="px-2.5 py-1 rounded text-xs cursor-pointer"\r
          >\r
            {{ t('buffer.none') }}\r
          </button>\r
          <button\r
            type="button"\r
            (click)="clanData.setBuffer(15)"\r
            [class]="\r
              clanData.bufferMinutes() === 15\r
                ? 'bg-white text-slate-900 shadow-2xs font-semibold'\r
                : 'text-slate-600'\r
            "\r
            class="px-2.5 py-1 rounded text-xs cursor-pointer"\r
          >\r
            {{ t('buffer.m15') }}\r
          </button>\r
          <button\r
            type="button"\r
            (click)="clanData.setBuffer(30)"\r
            [class]="\r
              clanData.bufferMinutes() === 30\r
                ? 'bg-white text-slate-900 shadow-2xs font-semibold'\r
                : 'text-slate-600'\r
            "\r
            class="px-2.5 py-1 rounded text-xs cursor-pointer"\r
          >\r
            {{ t('buffer.m30') }}\r
          </button>\r
          <button\r
            type="button"\r
            (click)="clanData.setBuffer(45)"\r
            [class]="\r
              clanData.bufferMinutes() === 45\r
                ? 'bg-white text-slate-900 shadow-2xs font-semibold'\r
                : 'text-slate-600'\r
            "\r
            class="px-2.5 py-1 rounded text-xs cursor-pointer"\r
          >\r
            {{ t('buffer.m45') }}\r
          </button>\r
        </div>\r
      </div>\r
\r
      <div class="flex items-center gap-2 ml-auto">\r
        <button\r
          type="button"\r
          (click)="runAutoAssign()"\r
          class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-2xs cursor-pointer"\r
        >\r
          <i class="pi pi-sparkles text-xs"></i> {{ t('app.actions.autoAssign') }}\r
        </button>\r
        <button\r
          type="button"\r
          (click)="loadSampleMembers()"\r
          [attr.aria-label]="t('app.actions.loadSampleMembers')"\r
          [title]="t('app.actions.loadSampleMembers')"\r
          class="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-slate-600 bg-slate-50 border border-slate-200 hover:bg-slate-100 rounded-lg cursor-pointer"\r
        >\r
          <i class="pi pi-users text-xs text-slate-500"></i>\r
          <span class="hidden sm:inline">{{ t('app.actions.loadSampleMembers') }}</span>\r
        </button>\r
        <button\r
          type="button"\r
          (click)="loadSampleServices()"\r
          [attr.aria-label]="t('app.actions.loadSampleServices')"\r
          [title]="t('app.actions.loadSampleServices')"\r
          class="inline-flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium text-slate-600 bg-slate-50 border border-slate-200 hover:bg-slate-100 rounded-lg cursor-pointer"\r
        >\r
          <i class="pi pi-briefcase text-xs text-slate-500"></i>\r
          <span class="hidden sm:inline">{{ t('app.actions.loadSampleServices') }}</span>\r
        </button>\r
        <button\r
          type="button"\r
          (click)="isConfirmResetOpen.set(true)"\r
          class="inline-flex items-center gap-1 px-2 py-1.5 text-xs font-medium text-red-600 hover:bg-red-50 rounded-lg cursor-pointer"\r
        >\r
          <i class="pi pi-trash text-xs"></i>\r
        </button>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- TOAST NOTIFICATION -->\r
  @if (toastMessage()) {\r
    <div\r
      class="fixed bottom-6 right-6 z-50 bg-slate-900 text-white text-xs px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 border border-slate-700"\r
    >\r
      <i class="pi pi-info-circle text-blue-400 text-sm"></i>\r
      <span>{{ toastMessage() }}</span>\r
      <button\r
        type="button"\r
        (click)="toastMessage.set(null)"\r
        class="text-slate-400 hover:text-white ml-2"\r
      >\r
        <i class="pi pi-times text-xs"></i>\r
      </button>\r
    </div>\r
  }\r
\r
  <!-- MAIN VIEWPORT CONTAINER -->\r
  <main class="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">\r
    @switch (activeTab()) {\r
      @case ('dashboard') {\r
        <app-dashboard-view\r
          (goToMatrix)="activeTab.set('matrix')"\r
          (goToMembers)="activeTab.set('members')"\r
          (goToServices)="activeTab.set('services')"\r
          (openImport)="isImportModalOpen.set(true)"\r
          (autoAssign)="runAutoAssign()"\r
          (openAddMember)="openAddMember()"\r
        />\r
      }\r
      @case ('members') {\r
        <app-members-view\r
          (openAddMember)="openAddMember()"\r
          (openEditMember)="openEditMember($event)"\r
          (openImport)="isImportModalOpen.set(true)"\r
          (openAddCommitment)="openCommitmentForCurrentScout()"\r
          (goToMatrix)="activeTab.set('matrix')"\r
        />\r
      }\r
      @case ('services') {\r
        <app-services-view\r
          (openAddService)="openAddService()"\r
          (openEditService)="openEditService($event)"\r
          (selectServiceForMatrix)="selectServiceForMatrix($event)"\r
        />\r
      }\r
      @case ('matrix') {\r
        <app-matrix-view\r
          [initialServiceId]="matrixFocusServiceId()"\r
          (autoAssign)="runAutoAssign()"\r
        />\r
      }\r
      @case ('schedule') {\r
        <app-schedule-view />\r
      }\r
    }\r
  </main>\r
\r
  <!-- DIALOGS & MODALS -->\r
  @if (isMemberModalOpen()) {\r
    <app-member-modal\r
      [member]="editingMember()"\r
      (close)="isMemberModalOpen.set(false)"\r
      (save)="saveMember($event)"\r
    />\r
  }\r
\r
  @if (isServiceModalOpen()) {\r
    <app-service-modal\r
      [service]="editingService()"\r
      (close)="isServiceModalOpen.set(false)"\r
      (save)="saveService($event)"\r
    />\r
  }\r
\r
  @if (isCommitmentModalOpen()) {\r
    <app-commitment-modal\r
      [scoutName]="editingMember()?.name || 'Scout'"\r
      (close)="isCommitmentModalOpen.set(false)"\r
      (save)="saveCommitment($event)"\r
    />\r
  }\r
\r
  @if (isImportModalOpen()) {\r
    <app-import-modal\r
      (close)="isImportModalOpen.set(false)"\r
      (loadDemo)="loadSample(); isImportModalOpen.set(false)"\r
    />\r
  }\r
\r
  @if (isWhatsAppModalOpen()) {\r
    <app-whatsapp-modal\r
      (close)="isWhatsAppModalOpen.set(false)"\r
      (copied)="showToast(t('toasts.copied'))"\r
    />\r
  }\r
\r
  @if (isConfirmResetOpen()) {\r
    <div\r
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs"\r
    >\r
      <div\r
        class="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 space-y-4"\r
      >\r
        <div class="flex items-center gap-3 text-red-600">\r
          <i class="pi pi-exclamation-triangle text-2xl"></i>\r
          <h3 class="text-base font-bold text-slate-900">{{ t('modals.resetTitle') }}</h3>\r
        </div>\r
        <p class="text-xs text-slate-600 leading-relaxed">{{ t('modals.resetDescription') }}</p>\r
        <div class="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">\r
          <button\r
            type="button"\r
            (click)="isConfirmResetOpen.set(false)"\r
            class="px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-100 rounded-lg cursor-pointer"\r
          >\r
            {{ t('common.cancel') }}\r
          </button>\r
          <button\r
            type="button"\r
            (click)="confirmReset()"\r
            class="px-4 py-2 text-xs font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-2xs cursor-pointer"\r
          >\r
            {{ t('modals.resetConfirm') }}\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  }\r
</div>\r
`, styles: ["/* angular:styles/component:css;444c74b3028356e571d9d852242880144bbdf54a876ddd5418f0e0222242c1ea;C:/workspaces/scout/client/src/app/pages/home/home.ts */\n:host {\n  display: block;\n  min-height: 100vh;\n  background-color: #f8fafc;\n}\n/*# sourceMappingURL=home.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Home, { className: "Home", filePath: "app/pages/home/home.ts", lineNumber: 45 });
})();
export {
  Home
};
//# sourceMappingURL=chunk-6YFEY4Z4.js.map
