import http from "./httpService";


const apiEndpoint = `${process.env.PUBLIC_URL}/wordpress/wp-json/wp/v2/media`;

function mediaUrl(id) {
    return `${apiEndpoint}/${id}`;
}

/* Available sizes for the getImage function:
    full
    large
    medium
    medium_large
    post-thumbnail
    thumbnail
*/

export async function getImage(id, size) {
    const { data } = await http.get(mediaUrl(id))
    const imgUrl = data.media_details.sizes[size].source_url;
    return imgUrl;
}