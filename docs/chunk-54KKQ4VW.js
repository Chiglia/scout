import{b as j,c as $,e as xt,f,g as R,h as kt,j as Tt,k as Ct}from"./chunk-3NTMFGZG.js";import{n as tt,o as nt}from"./chunk-IPPWUYJA.js";import{$a as x,A as k,E as d,Fa as ct,Ga as O,I as B,Ib as ft,J as I,Ja as X,Kb as mt,L as F,M as A,Mb as vt,N as l,Pa as T,Q as P,Sa as v,Ta as bt,Vb as yt,W as o,Wb as _t,X as p,Xb as Z,Y as b,Ya as q,Yb as y,Z as w,Za as pt,_a as G,ba as D,ca as E,da as S,dc as U,ga as lt,gb as gt,ia as s,ib as Y,j as M,ja as Q,k as C,ka as L,kb as ht,l as z,la as H,m,na as g,oa as h,p as dt,qa as st,sa as ut,ta as c,u as V,ua as _,va as N,wa as W,x as at}from"./chunk-7QS4CDF3.js";var Bt=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var jt=`
    ${Bt}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,$t={root:({instance:t})=>{let i=typeof t.value=="function"?t.value():t.value,n=typeof t.size=="function"?t.size():t.size,r=typeof t.badgeSize=="function"?t.badgeSize():t.badgeSize,e=typeof t.severity=="function"?t.severity():t.severity;return["p-badge p-component",{"p-badge-circle":mt(i)&&String(i).length===1,"p-badge-dot":ft(i),"p-badge-sm":n==="small"||r==="small","p-badge-lg":n==="large"||r==="large","p-badge-xl":n==="xlarge"||r==="xlarge","p-badge-info":e==="info","p-badge-success":e==="success","p-badge-warn":e==="warn","p-badge-danger":e==="danger","p-badge-secondary":e==="secondary","p-badge-contrast":e==="contrast"}]}},It=(()=>{class t extends U{name="badge";style=jt;classes=$t;static \u0275fac=(()=>{let n;return function(e){return(n||(n=k(t)))(e||t)}})();static \u0275prov=M({token:t,factory:t.\u0275fac})}return t})();var Pt=new z("BADGE_INSTANCE");var et=(()=>{class t extends ${componentName="Badge";$pcBadge=m(Pt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=m(f,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass=T();badgeSize=T();size=T();severity=T();value=T();badgeDisabled=T(!1,{transform:v});_componentStyle=m(It);get dataP(){return this.cn({circle:this.value()!=null&&String(this.value()).length===1,empty:this.value()==null,disabled:this.badgeDisabled(),[this.severity()]:this.severity(),[this.size()]:this.size()})}static \u0275fac=(()=>{let n;return function(e){return(n||(n=k(t)))(e||t)}})();static \u0275cmp=B({type:t,selectors:[["p-badge"]],hostVars:5,hostBindings:function(r,e){r&2&&(P("data-p",e.dataP),c(e.cn(e.cx("root"),e.styleClass())),st("display",e.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[O([It,{provide:Pt,useExisting:t},{provide:j,useExisting:t}]),F([f]),A],decls:1,vars:1,template:function(r,e){r&1&&_(0),r&2&&N(e.value())},dependencies:[x,y,R],encapsulation:2,changeDetection:0})}return t})(),wt=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=I({type:t});static \u0275inj=C({imports:[et,y,y]})}return t})();var Dt=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\xA0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var Qt=["content"],Ht=["loadingicon"],qt=["icon"],Gt=["*"],Mt=(t,i)=>({class:t,pt:i});function Zt(t,i){t&1&&S(0)}function Jt(t,i){if(t&1&&w(0,"span",7),t&2){let n=s(3);c(n.cn(n.cx("loadingIcon"),"pi-spin",n.loadingIcon||(n.buttonProps==null?null:n.buttonProps.loadingIcon))),o("pBind",n.ptm("loadingIcon")),P("aria-hidden",!0)}}function Kt(t,i){if(t&1&&(dt(),w(0,"svg",8)),t&2){let n=s(3);c(n.cn(n.cx("loadingIcon"),n.cx("spinnerIcon"))),o("pBind",n.ptm("loadingIcon"))("spin",!0),P("aria-hidden",!0)}}function Wt(t,i){if(t&1&&(D(0),l(1,Jt,1,4,"span",3)(2,Kt,1,5,"svg",6),E()),t&2){let n=s(2);d(),o("ngIf",n.loadingIcon||(n.buttonProps==null?null:n.buttonProps.loadingIcon)),d(),o("ngIf",!(n.loadingIcon||n.buttonProps!=null&&n.buttonProps.loadingIcon))}}function Xt(t,i){}function Yt(t,i){if(t&1&&l(0,Xt,0,0,"ng-template",9),t&2){let n=s(2);o("ngIf",n.loadingIconTemplate||n._loadingIconTemplate)}}function tn(t,i){if(t&1&&(D(0),l(1,Wt,3,2,"ng-container",2)(2,Yt,1,1,null,5),E()),t&2){let n=s();d(),o("ngIf",!n.loadingIconTemplate&&!n._loadingIconTemplate),d(),o("ngTemplateOutlet",n.loadingIconTemplate||n._loadingIconTemplate)("ngTemplateOutletContext",X(3,Mt,n.cx("loadingIcon"),n.ptm("loadingIcon")))}}function nn(t,i){if(t&1&&w(0,"span",7),t&2){let n=s(2);c(n.cn(n.cx("icon"),n.icon||(n.buttonProps==null?null:n.buttonProps.icon))),o("pBind",n.ptm("icon")),P("data-p",n.dataIconP)}}function en(t,i){}function on(t,i){if(t&1&&l(0,en,0,0,"ng-template",9),t&2){let n=s(2);o("ngIf",!n.icon&&(n.iconTemplate||n._iconTemplate))}}function rn(t,i){if(t&1&&(D(0),l(1,nn,1,4,"span",3)(2,on,1,1,null,5),E()),t&2){let n=s();d(),o("ngIf",(n.icon||(n.buttonProps==null?null:n.buttonProps.icon))&&!n.iconTemplate&&!n._iconTemplate),d(),o("ngTemplateOutlet",n.iconTemplate||n._iconTemplate)("ngTemplateOutletContext",X(3,Mt,n.cx("icon"),n.ptm("icon")))}}function dn(t,i){if(t&1&&(p(0,"span",7),_(1),b()),t&2){let n=s();c(n.cx("label")),o("pBind",n.ptm("label")),P("aria-hidden",(n.icon||(n.buttonProps==null?null:n.buttonProps.icon))&&!(n.label||n.buttonProps!=null&&n.buttonProps.label))("data-p",n.dataLabelP),d(),N(n.label||(n.buttonProps==null?null:n.buttonProps.label))}}function an(t,i){if(t&1&&w(0,"p-badge",10),t&2){let n=s();o("value",n.badge||(n.buttonProps==null?null:n.buttonProps.badge))("severity",n.badgeSeverity||(n.buttonProps==null?null:n.buttonProps.badgeSeverity))("pt",n.ptm("pcBadge"))("unstyled",n.unstyled())}}var ln={root:({instance:t})=>["p-button p-component",{"p-button-icon-only":t.hasIcon&&!t.label&&!t.buttonProps?.label&&!t.badge,"p-button-vertical":(t.iconPos==="top"||t.iconPos==="bottom")&&t.label,"p-button-loading":t.loading||t.buttonProps?.loading,"p-button-link":t.link||t.buttonProps?.link,[`p-button-${t.severity||t.buttonProps?.severity}`]:t.severity||t.buttonProps?.severity,"p-button-raised":t.raised||t.buttonProps?.raised,"p-button-rounded":t.rounded||t.buttonProps?.rounded,"p-button-text":t.text||t.variant==="text"||t.buttonProps?.text||t.buttonProps?.variant==="text","p-button-outlined":t.outlined||t.variant==="outlined"||t.buttonProps?.outlined||t.buttonProps?.variant==="outlined","p-button-sm":t.size==="small"||t.buttonProps?.size==="small","p-button-lg":t.size==="large"||t.buttonProps?.size==="large","p-button-plain":t.plain||t.buttonProps?.plain,"p-button-fluid":t.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos||t.buttonProps?.iconPos}`]:t.label||t.buttonProps?.label,"p-button-icon-left":(t.iconPos==="left"||t.buttonProps?.iconPos==="left")&&t.label||t.buttonProps?.label,"p-button-icon-right":(t.iconPos==="right"||t.buttonProps?.iconPos==="right")&&t.label||t.buttonProps?.label,"p-button-icon-top":(t.iconPos==="top"||t.buttonProps?.iconPos==="top")&&t.label||t.buttonProps?.label,"p-button-icon-bottom":(t.iconPos==="bottom"||t.buttonProps?.iconPos==="bottom")&&t.label||t.buttonProps?.label},t.icon,t.buttonProps?.icon],spinnerIcon:({instance:t})=>Object.entries(t.cx("icon")).filter(([,i])=>!!i).reduce((i,[n])=>i+` ${n}`,"p-button-loading-icon"),label:"p-button-label"},Et=(()=>{class t extends U{name="button";style=Dt;classes=ln;static \u0275fac=(()=>{let n;return function(e){return(n||(n=k(t)))(e||t)}})();static \u0275prov=M({token:t,factory:t.\u0275fac})}return t})();var Nt=new z("BUTTON_INSTANCE");var ot=(()=>{class t extends ${componentName="Button";hostName="";$pcButton=m(Nt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=m(f,{self:!0});_componentStyle=m(Et);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}type="button";badge;disabled;raised=!1;rounded=!1;text=!1;plain=!1;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;iconPos="left";icon;label;loading=!1;loadingIcon;severity;buttonProps;fluid=T(void 0,{transform:v});onClick=new V;onFocus=new V;onBlur=new V;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=m(kt,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}get hasIcon(){return this.icon||this.buttonProps?.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate}_contentTemplate;_iconTemplate;_loadingIconTemplate;onAfterContentInit(){this.templates?.forEach(n=>{switch(n.getType()){case"content":this._contentTemplate=n.template;break;case"icon":this._iconTemplate=n.template;break;case"loadingicon":this._loadingIconTemplate=n.template;break;default:this._contentTemplate=n.template;break}})}get dataP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge,loading:this.loading,fluid:this.hasFluid,rounded:this.rounded,raised:this.raised,outlined:this.outlined||this.variant==="outlined",text:this.text||this.variant==="text",link:this.link,vertical:(this.iconPos==="top"||this.iconPos==="bottom")&&this.label})}get dataIconP(){return this.cn({[this.iconPos]:this.iconPos,[this.size]:this.size})}get dataLabelP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge})}static \u0275fac=(()=>{let n;return function(e){return(n||(n=k(t)))(e||t)}})();static \u0275cmp=B({type:t,selectors:[["p-button"]],contentQueries:function(r,e,u){if(r&1&&H(u,Qt,5)(u,Ht,5)(u,qt,5)(u,Z,4),r&2){let a;g(a=h())&&(e.contentTemplate=a.first),g(a=h())&&(e.loadingIconTemplate=a.first),g(a=h())&&(e.iconTemplate=a.first),g(a=h())&&(e.templates=a)}},inputs:{hostName:"hostName",type:"type",badge:"badge",disabled:[2,"disabled","disabled",v],raised:[2,"raised","raised",v],rounded:[2,"rounded","rounded",v],text:[2,"text","text",v],plain:[2,"plain","plain",v],outlined:[2,"outlined","outlined",v],link:[2,"link","link",v],tabindex:[2,"tabindex","tabindex",bt],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",v],iconPos:"iconPos",icon:"icon",label:"label",loading:[2,"loading","loading",v],loadingIcon:"loadingIcon",severity:"severity",buttonProps:"buttonProps",fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[O([Et,{provide:Nt,useExisting:t},{provide:j,useExisting:t}]),F([f]),A],ngContentSelectors:Gt,decls:7,vars:17,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus","pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"value","severity","pt","unstyled",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","pBind","spin",4,"ngIf"],[3,"pBind"],["data-p-icon","spinner",3,"pBind","spin"],[3,"ngIf"],[3,"value","severity","pt","unstyled"]],template:function(r,e){r&1&&(Q(),p(0,"button",0),lt("click",function(a){return e.onClick.emit(a)})("focus",function(a){return e.onFocus.emit(a)})("blur",function(a){return e.onBlur.emit(a)}),L(1),l(2,Zt,1,0,"ng-container",1)(3,tn,3,6,"ng-container",2)(4,rn,3,6,"ng-container",2)(5,dn,2,6,"span",3)(6,an,1,4,"p-badge",4),b()),r&2&&(c(e.cn(e.cx("root"),e.styleClass,e.buttonProps==null?null:e.buttonProps.styleClass)),o("ngStyle",e.style||(e.buttonProps==null?null:e.buttonProps.style))("disabled",e.disabled||e.loading||(e.buttonProps==null?null:e.buttonProps.disabled))("pAutoFocus",e.autofocus||(e.buttonProps==null?null:e.buttonProps.autofocus))("pBind",e.ptm("root")),P("type",e.type||(e.buttonProps==null?null:e.buttonProps.type))("aria-label",e.ariaLabel||(e.buttonProps==null?null:e.buttonProps.ariaLabel))("tabindex",e.tabindex||(e.buttonProps==null?null:e.buttonProps.tabindex))("data-p",e.dataP)("data-p-disabled",e.disabled||e.loading||(e.buttonProps==null?null:e.buttonProps.disabled))("data-p-severity",e.severity||(e.buttonProps==null?null:e.buttonProps.severity)),d(2),o("ngTemplateOutlet",e.contentTemplate||e._contentTemplate),d(),o("ngIf",e.loading||(e.buttonProps==null?null:e.buttonProps.loading)),d(),o("ngIf",!(e.loading||e.buttonProps!=null&&e.buttonProps.loading)),d(),o("ngIf",!e.contentTemplate&&!e._contentTemplate&&(e.label||(e.buttonProps==null?null:e.buttonProps.label))),d(),o("ngIf",!e.contentTemplate&&!e._contentTemplate&&(e.badge||(e.buttonProps==null?null:e.buttonProps.badge))))},dependencies:[x,q,G,pt,Ct,xt,Tt,wt,et,y,f],encapsulation:2,changeDetection:0})}return t})(),it=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=I({type:t});static \u0275inj=C({imports:[x,ot,y,y]})}return t})();var zt=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`;var un=["header"],cn=["title"],bn=["subtitle"],pn=["content"],gn=["footer"],hn=["*",[["p-header"]],[["p-footer"]]],fn=["*","p-header","p-footer"];function mn(t,i){t&1&&S(0)}function vn(t,i){if(t&1&&(p(0,"div",1),L(1,1),l(2,mn,1,0,"ng-container",2),b()),t&2){let n=s();c(n.cx("header")),o("pBind",n.ptm("header")),d(2),o("ngTemplateOutlet",n.headerTemplate||n._headerTemplate)}}function yn(t,i){if(t&1&&(D(0),_(1),E()),t&2){let n=s(2);d(),N(n.header)}}function _n(t,i){t&1&&S(0)}function xn(t,i){if(t&1&&(p(0,"div",1),l(1,yn,2,1,"ng-container",3)(2,_n,1,0,"ng-container",2),b()),t&2){let n=s();c(n.cx("title")),o("pBind",n.ptm("title")),d(),o("ngIf",n.header&&!n._titleTemplate&&!n.titleTemplate),d(),o("ngTemplateOutlet",n.titleTemplate||n._titleTemplate)}}function kn(t,i){if(t&1&&(D(0),_(1),E()),t&2){let n=s(2);d(),N(n.subheader)}}function Tn(t,i){t&1&&S(0)}function Cn(t,i){if(t&1&&(p(0,"div",1),l(1,kn,2,1,"ng-container",3)(2,Tn,1,0,"ng-container",2),b()),t&2){let n=s();c(n.cx("subtitle")),o("pBind",n.ptm("subtitle")),d(),o("ngIf",n.subheader&&!n._subtitleTemplate&&!n.subtitleTemplate),d(),o("ngTemplateOutlet",n.subtitleTemplate||n._subtitleTemplate)}}function Bn(t,i){t&1&&S(0)}function In(t,i){t&1&&S(0)}function Pn(t,i){if(t&1&&(p(0,"div",1),L(1,2),l(2,In,1,0,"ng-container",2),b()),t&2){let n=s();c(n.cx("footer")),o("pBind",n.ptm("footer")),d(2),o("ngTemplateOutlet",n.footerTemplate||n._footerTemplate)}}var Sn=`
    ${zt}

    .p-card {
        display: block;
    }
`,wn={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},Ft=(()=>{class t extends U{name="card";style=Sn;classes=wn;static \u0275fac=(()=>{let n;return function(e){return(n||(n=k(t)))(e||t)}})();static \u0275prov=M({token:t,factory:t.\u0275fac})}return t})();var At=new z("CARD_INSTANCE"),Dn=(()=>{class t extends ${componentName="Card";$pcCard=m(At,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=m(f,{self:!0});_componentStyle=m(Ft);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}header;subheader;set style(n){vt(this._style(),n)||(this._style.set(n),this.el?.nativeElement&&n&&Object.keys(n).forEach(r=>{this.el.nativeElement.style[r]=n[r]}))}get style(){return this._style()}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=at(null);getBlockableElement(){return this.el.nativeElement}templates;onAfterContentInit(){this.templates.forEach(n=>{switch(n.getType()){case"header":this._headerTemplate=n.template;break;case"title":this._titleTemplate=n.template;break;case"subtitle":this._subtitleTemplate=n.template;break;case"content":this._contentTemplate=n.template;break;case"footer":this._footerTemplate=n.template;break;default:this._contentTemplate=n.template;break}})}static \u0275fac=(()=>{let n;return function(e){return(n||(n=k(t)))(e||t)}})();static \u0275cmp=B({type:t,selectors:[["p-card"]],contentQueries:function(r,e,u){if(r&1&&H(u,yt,5)(u,_t,5)(u,un,4)(u,cn,4)(u,bn,4)(u,pn,4)(u,gn,4)(u,Z,4),r&2){let a;g(a=h())&&(e.headerFacet=a.first),g(a=h())&&(e.footerFacet=a.first),g(a=h())&&(e.headerTemplate=a.first),g(a=h())&&(e.titleTemplate=a.first),g(a=h())&&(e.subtitleTemplate=a.first),g(a=h())&&(e.contentTemplate=a.first),g(a=h())&&(e.footerTemplate=a.first),g(a=h())&&(e.templates=a)}},hostVars:4,hostBindings:function(r,e){r&2&&(ut(e._style()),c(e.cn(e.cx("root"),e.styleClass)))},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[O([Ft,{provide:At,useExisting:t},{provide:j,useExisting:t}]),F([f]),A],ngContentSelectors:fn,decls:8,vars:11,consts:[[3,"pBind","class",4,"ngIf"],[3,"pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"]],template:function(r,e){r&1&&(Q(hn),l(0,vn,3,4,"div",0),p(1,"div",1),l(2,xn,3,5,"div",0)(3,Cn,3,5,"div",0),p(4,"div",1),L(5),l(6,Bn,1,0,"ng-container",2),b(),l(7,Pn,3,4,"div",0),b()),r&2&&(o("ngIf",e.headerFacet||e.headerTemplate||e._headerTemplate),d(),c(e.cx("body")),o("pBind",e.ptm("body")),d(),o("ngIf",e.header||e.titleTemplate||e._titleTemplate),d(),o("ngIf",e.subheader||e.subtitleTemplate||e._subtitleTemplate),d(),c(e.cx("content")),o("pBind",e.ptm("content")),d(2),o("ngTemplateOutlet",e.contentTemplate||e._contentTemplate),d(),o("ngIf",e.footerFacet||e.footerTemplate||e._footerTemplate))},dependencies:[x,q,G,y,R,f],encapsulation:2,changeDetection:0})}return t})(),rt=(()=>{class t{static \u0275fac=function(r){return new(r||t)};static \u0275mod=I({type:t});static \u0275inj=C({imports:[Dn,y,R,y,R]})}return t})();var K=class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=I({type:t});static \u0275inj=C({imports:[x,tt,nt,Y,it,rt,x,tt,nt,Y,it,rt]})};function En(t,i){if(t&1&&(p(0,"div",1)(1,"h1",2),_(2,"404"),b(),p(3,"p",3),_(4),b(),p(5,"p",4),_(6),b(),w(7,"p-button",5),b()),t&2){let n=i.$implicit;d(4),W(" ",n("errors.pageNotFound.title")," "),d(2),W(" ",n("errors.pageNotFound.description")," "),d(),o("label",ct(n("common.backToHome")))}}var Lt=class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=B({type:t,selectors:[["app-page-not-found"]],decls:1,vars:0,consts:[["class","flex flex-col items-center justify-center min-h-[80vh] px-4 text-center",4,"transloco"],[1,"flex","flex-col","items-center","justify-center","min-h-[80vh]","px-4","text-center"],[1,"text-9xl","font-black","text-primary/20","select-none"],[1,"text-2xl","md:text-3xl","font-bold","mt-4","text-surface-900","dark:text-surface-0"],[1,"text-surface-600","dark:text-surface-400","mt-2","mb-8","max-w-md"],["routerLink","/","icon","pi pi-home","severity","primary",3,"label"]],template:function(n,r){n&1&&l(0,En,8,4,"div",0)},dependencies:[K,gt,ot,ht],encapsulation:2})};export{Lt as PageNotFound};
