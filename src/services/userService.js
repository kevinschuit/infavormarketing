import http from "./httpService";

const apiEndpoint = "wordpress/wp-json/wp/v2/users";

function pageUrl(id) {
    return `${apiEndpoint}/${id}`;
}

export function getUsers() {
    return http.get(apiEndpoint)
}

export function getUser(id) {
    return http.get(pageUrl(id))
}