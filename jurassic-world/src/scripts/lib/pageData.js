
export function getPageData(slug) {
	return window.SITE_DATA.pages.filter((page) => {
	  return page.slug === slug;
	})[0];
}