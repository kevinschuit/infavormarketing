import http from "./httpService";

const apiEndpoint = `${process.env.PUBLIC_URL}/wordpress/wp-json/wp/v2/posts`;

function pageUrl(id) {
    return `${apiEndpoint}/${id}`;
}

export function getPosts() {
    return http.get(apiEndpoint)
}

export function getPost(id) {
    return http.get(pageUrl(id))
}