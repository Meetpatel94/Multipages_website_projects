let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname) {
    for (tablinks of tablinks) {
        tablinks.classList.remove("active-link");
    }
    for (tabcontents of tabcontents) {
        tabcontents.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementsById(tabname).classList.add("active-tab");
}
