import React from 'react';

export function generateMeta(data) {
    let metadata = []
    data.forEach(meta => {
        if (meta.name) {
            metadata.push(<meta name={meta.name} content={meta.content} />);
        }
        if (meta.property) {
            metadata.push(<meta property={meta.property} content={meta.content} />);
            if (meta.property === 'og:title') metadata.push(<title>{meta.content}</title>);
        }
    })
    return metadata;
}