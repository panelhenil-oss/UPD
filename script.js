const NEW_LINK = "https://your-new-link-here.com";

document.getElementById("openLinkBtn").addEventListener("click", function () {
  window.open(NEW_LINK, "_blank", "noopener,noreferrer");
});
