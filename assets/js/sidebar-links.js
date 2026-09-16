document.addEventListener("DOMContentLoaded", function () {
  const emailAddress = "tomzhou@case.edu";
  const sidebarLinks = document.querySelectorAll(
    ".author__urls.social-icons li a"
  );

  sidebarLinks.forEach(function (link) {
    const label = link.querySelector(".label");
    if (!label) return;

    // Replace the email link with plain text.
    if (label.textContent.trim() === emailAddress) {
      const textElement = document.createElement("span");

      textElement.className = "author__email-text";
      textElement.innerHTML = link.innerHTML;

      link.replaceWith(textElement);
      return;
    }

    // Open all other sidebar links in a new tab.
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "nofollow noopener noreferrer me");
  });
});
