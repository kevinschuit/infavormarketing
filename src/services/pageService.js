import http from "./httpService";

const apiEndpoint = "/wordpress/wp-json/wp/v2/pages";

function pageUrl(slug) {
    return `${apiEndpoint}?slug=${slug}`;
}

export function getPages() {
    return http.get(apiEndpoint)
}

export function getPage(slug) {
    return http.get(pageUrl(slug))
}
