(function () {
	var path = (window.location.pathname || '').replace(/\\/g, '/');
	var links = document.querySelectorAll('.docs-sidebar a[href], .docs-nav a[href]');
	links.forEach(function (link) {
		var href = link.getAttribute('href');
		if (!href || href === '#' || href.indexOf('http') === 0) {
			return;
		}
		var resolved = link.href.replace(/\\/g, '/');
		if (resolved === window.location.href || path.endsWith('/' + href) || path.endsWith(href.replace(/^\.\.\//, ''))) {
			link.setAttribute('aria-current', 'page');
		}
	});
})();
