// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/

let bgContEl = document.getElementById("bgBookmark");
let siteNameEl = document.getElementById("siteNameInput");
let siteUrlEl = document.getElementById("siteUrlInput");
let nameErrmMsg = document.getElementById("siteNameErrMsg");
let urlErrMsg = document.getElementById("siteUrlErrMsg");
let btnEl = document.getElementById("submitBtn");
let formEl = document.getElementById("bookmarkForm");


siteNameEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        nameErrmMsg.textContent = "Required*";
    } else {
        nameErrmMsg.textContent = "";
    }
});
siteUrlEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        urlErrMsg.textContent = "Required*";
    } else {
        urlErrMsg.textContent = "";
    }
});


function validateSiteOnSubmit() {
    if (siteNameEl.value === "" && siteUrlEl.value === "") {
        nameErrmMsg.textContent = "Required*";
        urlErrMsg.textContent = "Required*";
    } else if (siteNameEl.value === "") {
        nameErrmMsg.textContent = "Required*";
    } else if (siteUrlEl.value === "") {
        urlErrMsg.textContent = "Required*";
    } else {
        nameErrmMsg.textContent = "";
        urlErrMsg.textContent = "";
    }
}

btnEl.addEventListener("click", function(event) {
    if (siteNameEl.value !== "" && siteUrlEl.value !== "") {
        let bookmarkList = document.getElementById("bookmarksList");
        //  let bookmarkListConEl = document.createElement("div");
        //bookmarkListConEl.classList.add("bookmark-container", "mr-3", "mb-2", "mt-2", "pb-3");
        let bookmarkItem = document.createElement("li");
        bookmarkItem.classList.add("bookmark-container", "mb-2", "ml-1", "mr-4", "mt-2");
        let itemSite = document.createElement("h1");
        let itemSiteUrl = document.createElement("a");
        itemSite.textContent = siteNameEl.value;
        itemSite.classList.add("sites", "mt-2");
        itemSiteUrl.href = siteUrlEl.value;
        itemSiteUrl.target = "_blank";
        itemSiteUrl.textContent = siteUrlEl.value;
        itemSiteUrl.classList.add("url");

        bookmarkItem.appendChild(itemSite);
        bookmarkItem.appendChild(itemSiteUrl);
        bookmarkList.appendChild(bookmarkItem);
        // bookmarkListConEl.appendChild(bookmarkItem);
        bgContEl.appendChild(bookmarkList);
        console.log(bgContEl);
    }
});


formEl.addEventListener("submit", function(event) {
    event.preventDefault();
    validateSiteOnSubmit();

});