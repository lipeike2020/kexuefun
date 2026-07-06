(function () {
  "use strict";

  var articles = window.KEXUE_ARTICLES || [];
  var categories = window.KEXUE_CATEGORIES || [];
  var page = document.body.dataset.page || "";

  function headerHtml() {
    return (
      '<header class="site-header">' +
      '<div class="container header-inner">' +
      '<a class="logo" href="index.html" aria-label="kexue.fun 首页">kexue<span>.fun</span></a>' +
      '<nav class="desktop-nav" aria-label="主导航">' +
      navLink("index.html", "首页", "home") +
      navLink("science.html", "科普知识", "science") +
      navLink("about.html", "关于我们", "about") +
      navLink("https://lipeike2020.github.io/unicorn-growth-park/", "独角兽乐园", "unicorn") +
      "</nav>" +
      '<button id="menu-button" class="menu-button" type="button" aria-expanded="false" aria-label="打开菜单">菜单</button>' +
      "</div>" +
      '<nav id="mobile-nav" class="mobile-nav" aria-label="移动端主导航" hidden>' +
      navLink("index.html", "首页", "home") +
      navLink("science.html", "科普知识", "science") +
      navLink("about.html", "关于我们", "about") +
      navLink("https://lipeike2020.github.io/unicorn-growth-park/", "独角兽乐园", "unicorn") +
      "</nav>" +
      "</header>"
    );
  }

  function navLink(href, label, key) {
    return (
      '<a href="' +
      href +
      '" class="' +
      (page === key ? "active" : "") +
      '">' +
      label +
      "</a>"
    );
  }
  

  function footerHtml() {
    return (
      '<footer class="site-footer"><div class="container footer-inner">' +
      '<div><a class="logo footer-logo" href="index.html">kexue<span>.fun</span></a>' +
      "<p>把好奇心，变成每天的新发现。</p></div>" +
      '<div class="footer-links"><a href="science.html">科普知识</a><a href="about.html">关于我们</a></div>' +
      "<p>© 2026 kexue.fun 儿童科普教育</p>" +
      "</div></footer>"
    );
  }

  function articleCard(article) {
    return (
      '<article class="science-card">' +
      '<a class="card-image" href="article.html?slug=' +
      encodeURIComponent(article.slug) +
      '"><img src="' +
      article.image +
      '" alt="' +
      article.imageAlt +
      '" loading="lazy"></a>' +
      '<div class="card-body"><span class="eyebrow" style="color:' +
      article.color +
      '">' +
      article.category +
      "</span><h3><a href=\"article.html?slug=" +
      encodeURIComponent(article.slug) +
      '">' +
      article.title +
      "</a></h3><p>" +
      article.summary +
      '</p><div class="card-meta"><span>' +
      article.age +
      "</span><span>" +
      article.readingTime +
      '阅读</span></div><a class="text-link" href="article.html?slug=' +
      encodeURIComponent(article.slug) +
      '">阅读文章 →</a></div></article>'
    );
  }

  function mountSharedLayout() {
    var header = document.getElementById("site-header");
    var footer = document.getElementById("site-footer");
    if (header) header.innerHTML = headerHtml();
    if (footer) footer.innerHTML = footerHtml();

    var button = document.getElementById("menu-button");
    var mobileNav = document.getElementById("mobile-nav");
    if (button && mobileNav) {
      button.addEventListener("click", function () {
        var open = button.getAttribute("aria-expanded") === "true";
        button.setAttribute("aria-expanded", String(!open));
        button.setAttribute("aria-label", open ? "打开菜单" : "关闭菜单");
        button.textContent = open ? "菜单" : "关闭";
        button.classList.toggle("open", !open);
        mobileNav.hidden = open;
