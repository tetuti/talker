exports.getSlug = string => {
    return string
        .replace(/\s/g, '-')
        .replace(/å|ä/gi, 'a')
        .replace(/ö/gi, 'o')
}
