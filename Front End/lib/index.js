export function scrollFunction(currentScrollTop) {
    const header = document.getElementsByTagName("header")
    const body = document.getElementsByTagName("body")
    if (currentScrollTop > 0) {
        header.style.position = "fixed";
        header.style.backgroundColor = "#7D44AA";
    } else {

    }
}

export function getScrollTop() {
    return document.body.scrollTop || document.documentElement.scrollTop
}