class d {
  constructor(t) {
    this.triggerButton = t, this.originalButton = document.querySelector(".js-open-search"), this.targetElement = document.getElementById(this.triggerButton.getAttribute("aria-controls")), this.searchInput = this.targetElement.querySelector(".js-search-input"), this.pressed = this.triggerButton.getAttribute("aria-expanded") === "true";
  }
  init() {
    this.controls();
  }
  controls() {
    this.triggerButton.addEventListener("click", this.showHide.bind(this), !1);
  }
  showHide() {
    this.pressed ? (this.targetElement.hidden = !0, this.originalButton.hidden = !1, this.originalButton.focus()) : (this.targetElement.hidden = !1, this.originalButton.hidden = !0, this.searchInput.focus());
  }
}
const r = d, u = (n) => ({
  all: n,
  first: n[0],
  last: n[n.length - 1],
  length: n.length
}), l = (n, t) => {
  const e = [];
  for (let i = 0; i < t.length; i += 1)
    e.push([].slice.call(document.querySelectorAll(`#${n} ${t[i]}`)));
  const s = [].concat(...e);
  return u(s);
}, c = (n, t) => {
  const { activeElement: e } = document, s = t;
  return n.keyCode !== 9 ? !1 : (s.length === 1 ? n.preventDefault() : n.shiftKey && e === s.first ? (s.last.focus(), n.preventDefault()) : !n.shiftKey && e === s.last && (s.first.focus(), n.preventDefault()), !0);
}, b = () => {
  const n = document.createElement("fakeelement"), t = {
    transition: "transitionend",
    OTransition: "oTransitionEnd",
    MozTransition: "transitionend",
    WebkitTransition: "webkitTransitionEnd"
  }, e = Object.keys(t).filter((s) => n.style[s] !== void 0);
  return t[e[0]];
}, h = (n) => `${n === void 0 ? "nsw" : n}-${Math.random().toString(36).substr(2, 16)}`;
class v {
  constructor() {
    this.openNavButton = document.querySelector(".js-open-nav"), this.closeNavButtons = document.querySelectorAll(".js-close-nav"), this.openSubNavButtons = document.querySelectorAll(".js-open-sub-nav"), this.closeSubNavButtons = document.querySelectorAll(".js-close-sub-nav"), this.mainNavElement = document.getElementById("main-nav"), this.isMegaMenuElement = !!document.querySelector(".js-mega-menu"), this.transitionEvent = b(), this.mobileToggleMainNavEvent = (t) => this.mobileToggleMainNav(t), this.mobileToggleSubNavEvent = () => this.closeSubNav(), this.mobileShowMainTransitionEndEvent = (t) => this.mobileShowMainNav(t), this.mobileHideMainTransitionEndEvent = (t) => this.mobileHideMainNav(t), this.showSubNavTransitionEndEvent = (t) => this.showSubNav(t), this.mobileTrapTabKeyEvent = (t) => this.mobileMainNavTrapTabs(t), this.mobileSubNavTrapTabKeyEvent = (t) => this.trapkeyEventStuff(t), this.desktopButtonClickEvent = (t) => this.buttonClickDesktop(t), this.desktopButtonKeydownEvent = (t) => this.buttonKeydownDesktop(t), this.checkFocusEvent = (t) => this.checkIfContainsFocus(t), this.escapeCloseEvent = (t) => this.escapeClose(t), this.openSubNavElements = [], this.breakpoint = window.matchMedia("(min-width: 62em)"), this.body = document.body;
  }
  init() {
    this.mainNavElement && (this.setUpMobileControls(), this.responsiveCheck(this.breakpoint), this.breakpoint.addListener((t) => this.responsiveCheck(t)));
  }
  responsiveCheck(t) {
    let e = [];
    t.matches ? (e = [].slice.call(this.mainNavElement.querySelectorAll("ul > li")), this.body.classList.remove("main-nav-active")) : e = [].slice.call(this.mainNavElement.querySelectorAll("li")), this.tearDownNavControls(), this.setUpNavControls(e);
  }
  tearDownNavControls() {
    this.isMegaMenuElement && [].slice.call(this.mainNavElement.querySelectorAll("li")).forEach((e) => {
      const s = e.querySelector("[id^=sub-nav-]"), i = e.querySelector("a");
      s && (i.removeAttribute("role"), i.removeAttribute("aria-expanded"), i.removeAttribute("aria-controls"), i.removeEventListener("click", this.desktopButtonClickEvent, !1), i.removeEventListener("keydown", this.desktopButtonKeydownEvent, !1));
    });
  }
  setUpMobileControls() {
    this.openNavButton.addEventListener("click", this.mobileToggleMainNavEvent, !1), this.closeNavButtons.forEach((t) => {
      t.addEventListener("click", this.mobileToggleMainNavEvent, !1);
    }), this.closeSubNavButtons.forEach((t) => {
      t.addEventListener("click", this.mobileToggleSubNavEvent, !1);
    });
  }
  mobileMainNavTrapTabs(t) {
    const e = l(this.mainNavElement.id, ["> div button", "> ul > li > a"]);
    c(t, e);
  }
  setUpNavControls(t) {
    this.isMegaMenuElement && t.forEach((e) => {
      const s = e.querySelector("[id^=sub-nav-]"), i = e.querySelector("a");
      s && (i.setAttribute("role", "button"), i.setAttribute("aria-expanded", "false"), i.setAttribute("aria-controls", s.id), i.addEventListener("click", this.desktopButtonClickEvent, !1), i.addEventListener("keydown", this.desktopButtonKeydownEvent, !1), document.addEventListener("keydown", this.escapeCloseEvent, !1));
    });
  }
  mobileShowMainNav({ propertyName: t }) {
    !t !== "transform" && (l(this.mainNavElement.id, ["> div button", "> ul > li > a"]).all[1].focus(), this.mainNavElement.classList.add("active"), this.mainNavElement.classList.remove("activating"), this.mainNavElement.removeEventListener(this.transitionEvent, this.mobileShowMainTransitionEndEvent, !1), this.mainNavElement.addEventListener("keydown", this.mobileTrapTabKeyEvent, !1));
  }
  mobileHideMainNav({ propertyName: t }) {
    if (!t !== "transform") {
      for (this.mainNavElement.classList.remove("active"), this.mainNavElement.classList.remove("closing"); this.openSubNavElements.length > 0; ) {
        const { submenu: e } = this.whichSubNavLatest();
        e.removeEventListener("keydown", this.mobileSubNavTrapTabKeyEvent, !1), e.classList.remove("active"), e.classList.remove("closing"), this.openSubNavElements.pop();
      }
      this.mainNavElement.removeEventListener(this.transitionEvent, this.mobileHideMainTransitionEndEvent, !1), this.mainNavElement.removeEventListener("keydown", this.mobileTrapTabKeyEvent, !1);
    }
  }
  mobileToggleMainNav(t) {
    const { currentTarget: e } = t;
    e.getAttribute("aria-expanded") === "true" ? (this.body.classList.remove("main-nav-active"), this.openNavButton.focus(), this.mainNavElement.classList.add("closing"), this.mainNavElement.addEventListener(this.transitionEvent, this.mobileHideMainTransitionEndEvent, !1)) : (this.body.classList.add("main-nav-active"), this.mainNavElement.classList.add("activating"), this.mainNavElement.addEventListener(this.transitionEvent, this.mobileShowMainTransitionEndEvent, !1));
  }
  buttonClickDesktop(t) {
    this.saveElements(t), this.toggleSubNavDesktop(), t.preventDefault();
  }
  buttonKeydownDesktop(t) {
    (t.key === " " || t.key === "Enter" || t.key === "Spacebar") && (this.saveElements(t), this.toggleSubNavDesktop(), t.preventDefault());
  }
  escapeClose(t) {
    if (t.key === "Escape") {
      const { link: e } = this.whichSubNavLatest();
      e.getAttribute("aria-expanded") === "true" && (this.toggleSubNavDesktop(!0), t.preventDefault(), e.focus());
    }
  }
  saveElements(t) {
    const { currentTarget: e } = t, s = {
      submenu: document.getElementById(e.getAttribute("aria-controls")),
      link: e,
      linkParent: e.parentNode
    };
    this.openSubNavElements.push(s);
  }
  showSubNav({ propertyName: t }) {
    const { submenu: e } = this.whichSubNavLatest();
    !t !== "transform" && (l(e.id, ["> div button", "> .nsw-main-nav__title a", "> ul > li > a"]).all[2].focus(), e.removeEventListener(this.transitionEvent, this.showSubNavTransitionEndEvent, !1));
  }
  closeSubNav() {
    const { submenu: t, link: e } = this.whichSubNavLatest();
    this.breakpoint.matches ? (e.setAttribute("aria-expanded", !1), e.classList.remove("active"), this.mainNavElement.removeEventListener("focus", this.checkFocusEvent, !0), this.mainNavElement.removeEventListener("click", this.checkFocusEvent, !0)) : (e.focus(), t.removeEventListener("keydown", this.mobileSubNavTrapTabKeyEvent, !1)), t.classList.remove("active"), this.openSubNavElements.pop();
  }
  openSubNav() {
    const { submenu: t, link: e } = this.whichSubNavLatest();
    this.breakpoint.matches ? (e.setAttribute("aria-expanded", !0), e.classList.add("active"), this.mainNavElement.addEventListener("focus", this.checkFocusEvent, !0), this.mainNavElement.addEventListener("click", this.checkFocusEvent, !0)) : (t.addEventListener("keydown", this.mobileSubNavTrapTabKeyEvent, !1), t.addEventListener(this.transitionEvent, this.showSubNavTransitionEndEvent, !1)), t.classList.add("active");
  }
  toggleSubNavDesktop() {
    const { link: t } = this.whichSubNavLatest();
    t.getAttribute("aria-expanded") === "true" ? this.closeSubNav() : this.openSubNav();
  }
  checkIfContainsFocus(t) {
    const { linkParent: e } = this.whichSubNavLatest(), s = e.contains(t.target), i = t.target.getAttribute("role");
    !s && i && this.toggleSubNavDesktop();
  }
  whichSubNavLatest() {
    const t = this.openSubNavElements.length - 1;
    return this.openSubNavElements[t];
  }
  trapkeyEventStuff(t) {
    const { submenu: e } = this.whichSubNavLatest(), s = l(e.id, ["> div button", "> ul > li > a"]);
    c(t, s);
  }
}
const m = v;
function E({ textContent: n }) {
  const t = document.createDocumentFragment(), e = document.createElement("button"), s = h("accordion");
  return e.textContent = n, e.setAttribute("type", "button"), e.setAttribute("aria-expanded", "false"), e.setAttribute("aria-controls", s), e.classList.add("nsw-accordion__button"), e.insertAdjacentHTML("beforeend", `
  <span class="material-icons nsw-material-icons" focusable="false" aria-hidden="true">keyboard_arrow_down</span>
  `), t.appendChild(e), t;
}
class p {
  constructor(t) {
    const [e, s] = Array.from(t.querySelectorAll(".nsw-accordion__toggle button"));
    this.accordionHeadingClass = ".nsw-accordion__title", this.accordion = t, this.headings = t.querySelectorAll(this.accordionHeadingClass), this.expandAllBtn = e, this.collapseAllBtn = s, this.buttons = [], this.content = [], this.toggleEvent = (i) => this.toggle(i), this.expandAllEvent = (i) => this.expandAll(i), this.collapseAllEvent = (i) => this.collapseAll(i);
  }
  init() {
    this.setUpDom(), this.controls();
  }
  setUpDom() {
    this.accordion.classList.add("ready"), this.collapseAllBtn && (this.collapseAllBtn.disabled = !0), this.headings.forEach((t) => {
      const e = t, s = t.nextElementSibling, i = E(t);
      e.textContent = "", e.appendChild(i);
      const a = e.getElementsByTagName("button")[0];
      s.id = a.getAttribute("aria-controls"), s.hidden = !0, this.content.push(s), this.buttons.push(a);
    });
  }
  controls() {
    this.buttons.forEach((t) => {
      t.addEventListener("click", this.toggleEvent, !1);
    }), this.expandAllBtn && this.collapseAllBtn && (this.expandAllBtn.addEventListener("click", this.expandAllEvent, !1), this.collapseAllBtn.addEventListener("click", this.collapseAllEvent, !1));
  }
  getTargetContent(t) {
    const e = this.buttons.indexOf(t);
    return this.content[e];
  }
  setAccordionState(t, e) {
    const s = this.getTargetContent(t);
    e === "open" ? (t.classList.add("active"), t.setAttribute("aria-expanded", "true"), s.hidden = !1) : e === "close" && (t.classList.remove("active"), t.setAttribute("aria-expanded", "false"), s.hidden = !0);
  }
  toggle(t) {
    const { currentTarget: e } = t;
    this.getTargetContent(e).hidden ? this.setAccordionState(e, "open") : this.setAccordionState(e, "close"), this.expandAllBtn && this.collapseAllBtn && (this.expandAllBtn.disabled = this.content.every((a) => a.hidden === !1), this.collapseAllBtn.disabled = this.content.every((a) => a.hidden === !0));
  }
  expandAll() {
    this.buttons.forEach((t) => {
      this.setAccordionState(t, "open");
    }), this.expandAllBtn.disabled = !0, this.collapseAllBtn.disabled = !1;
  }
  collapseAll() {
    this.buttons.forEach((t) => {
      this.setAccordionState(t, "close");
    }), this.expandAllBtn.disabled = !1, this.collapseAllBtn.disabled = !0;
  }
}
const f = p;
class g {
  constructor(t) {
    this.filters = t, this.openButton = t.querySelector(".nsw-filters__controls button"), this.closeButtons = t.querySelectorAll(".nsw-filters__back button"), this.all = t.querySelectorAll(".nsw-filters__all"), this.allBlocks = Array.prototype.slice.call(this.all), this.showMoreButtons = Array.prototype.slice.call(t.querySelectorAll(".nsw-filters__more")), this.showEvent = (e) => this.showFilters(e), this.hideEvent = (e) => this.hideFilters(e), this.showMoreEvent = (e) => this.showMore(e), this.body = document.body;
  }
  init() {
    this.controls();
  }
  controls() {
    this.openButton.addEventListener("click", this.showEvent, !1), this.closeButtons.forEach((t) => {
      t.addEventListener("click", this.hideEvent, !1);
    }), this.all.forEach((t) => {
      t.nextElementSibling.addEventListener("click", this.showMoreEvent, !1);
    });
  }
  showFilters(t) {
    t.preventDefault(), this.filters.classList.add("active"), this.body.classList.add("filters-open");
  }
  hideFilters(t) {
    t.preventDefault(), this.filters.classList.remove("active"), this.body.classList.remove("filters-open");
  }
  showMore(t) {
    t.preventDefault();
    const e = t.target, s = this.showMoreButtons.indexOf(e);
    this.allBlocks[s].classList.remove("hidden"), e.classList.add("hidden");
  }
}
class k {
  constructor(t, e) {
    this.tablistClass = ".nsw-tabs__list", this.tablistItemClass = "li", this.tablistLinkClass = "a", this.tab = t, this.showTab = e, this.tabList = t.querySelector(this.tablistClass), this.tabItems = this.tabList.querySelectorAll(this.tablistItemClass), this.allowedKeys = [35, 36, 37, 39, 40], this.tabLinks = [], this.tabPanel = [], this.selectedTab = null, this.clickTabEvent = (s) => this.clickTab(s), this.arrowKeysEvent = (s) => this.arrowKeys(s);
  }
  init() {
    this.setUpDom(), this.controls(), this.setInitalTab();
  }
  setUpDom() {
    const t = document.createElement("div");
    t.classList.add("nsw-tabs__list-wrapper"), this.tab.prepend(t), t.prepend(this.tabList), this.tabList.setAttribute("role", "tablist"), this.tabItems.forEach((e) => {
      const s = e, i = e.querySelector(this.tablistLinkClass), a = this.tab.querySelector(i.hash), o = h("tab");
      s.setAttribute("role", "presentation"), this.enhanceTabLink(i, o), this.enhanceTabPanel(a, o);
    });
  }
  enhanceTabLink(t, e) {
    t.setAttribute("role", "tab"), t.setAttribute("id", e), t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), this.tabLinks.push(t);
  }
  enhanceTabPanel(t, e) {
    const s = t;
    s.setAttribute("role", "tabpanel"), s.setAttribute("role", "tabpanel"), s.setAttribute("aria-labelledBy", e), s.setAttribute("tabindex", "0"), s.hidden = !0, this.tabPanel.push(s);
  }
  setInitalTab() {
    const {
      tabLinks: t,
      tabPanel: e,
      showTab: s
    } = this, i = s === void 0 ? 0 : s, a = t[i];
    a.classList.add("active"), a.removeAttribute("tabindex"), a.setAttribute("aria-selected", !0), e[i].hidden = !1, this.selectedTab = a;
  }
  clickTab(t) {
    t.preventDefault(), this.switchTabs(t.currentTarget);
  }
  switchTabs(t) {
    const e = t;
    if (e !== this.selectedTab) {
      e.focus(), e.removeAttribute("tabindex"), e.setAttribute("aria-selected", !0), e.classList.add("active"), this.selectedTab.setAttribute("aria-selected", !1), this.selectedTab.setAttribute("tabindex", "-1"), this.selectedTab.classList.remove("active");
      const s = this.tabLinks.indexOf(e), i = this.tabLinks.indexOf(this.selectedTab);
      this.tabPanel[s].hidden = !1, this.tabPanel[i].hidden = !0, this.selectedTab = e, e.classList.contains("js-tabs-fixed") || this.selectedTab.scrollIntoView();
    }
  }
  arrowKeys({ which: t }) {
    const e = this.tabLinks.length - 1;
    let s = this.tabLinks.indexOf(this.selectedTab), i = !1;
    if (this.allowedKeys.includes(t)) {
      switch (t) {
        case 35:
          s = e;
          break;
        case 36:
          s = 0;
          break;
        case 37:
          s = s === 0 ? -1 : s -= 1;
          break;
        case 39:
          s = s === e ? -1 : s += 1;
          break;
        case 40:
          i = !0;
          break;
      }
      s > -1 && (i ? this.tabPanel[s].focus() : this.switchTabs(this.tabLinks[s]));
    }
  }
  controls() {
    this.tabLinks.forEach((t) => {
      t.addEventListener("click", this.clickTabEvent, !1), t.addEventListener("keydown", this.arrowKeysEvent, !1);
    });
  }
}
const y = k;
class S {
  constructor(t) {
    this.messageElement = t, this.closeButton = t.querySelector(".js-close-alert"), this.closeMessageEvent = (e) => this.closeMessage(e);
  }
  init() {
    this.controls();
  }
  controls() {
    this.closeButton.addEventListener("click", this.closeMessageEvent, !1);
  }
  closeMessage() {
    this.messageElement.hidden = !0;
  }
}
const A = S;
window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach);
Element.prototype.closest || (Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest = function(t) {
  const e = this;
  let s = this;
  if (!document.documentElement.contains(e))
    return null;
  do {
    if (s.matches(t))
      return s;
    s = s.parentElement;
  } while (s !== null);
  return null;
});
function L() {
  const n = document.querySelectorAll(".js-open-search"), t = document.querySelectorAll(".js-close-search"), e = document.querySelectorAll(".js-accordion"), s = document.querySelectorAll(".js-filters"), i = document.querySelectorAll(".js-tabs"), a = document.querySelectorAll(".js-global-alert");
  n.forEach((o) => {
    new r(o).init();
  }), t.forEach((o) => {
    new r(o).init();
  }), new m().init(), e.forEach((o) => {
    new f(o).init();
  }), s && s.forEach((o) => {
    new g(o).init();
  }), i && i.forEach((o) => {
    new y(o).init();
  }), a && a.forEach((o) => {
    new A(o).init();
  });
}
export {
  f as Accordion,
  A as GlobalAlert,
  m as Navigation,
  r as SiteSearch,
  y as Tabs,
  L as initSite
};
