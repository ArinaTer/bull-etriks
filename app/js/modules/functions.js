import { Modal, Tab } from "bootstrap";

export function isWebp() {
  function testWebP(callback) {
    let webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src =
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }
  testWebP(function (support) {
    let classname = support === true ? "webp" : "no-webp";
    document.documentElement.classList.add(classname);
  });
}

// sign-in modal
(() => {
  const MODAL_ID = "signInModal";
  const modalToggles = document.querySelectorAll(
    `[data-modal-id="${MODAL_ID}"]`
  );
  const modalInstance = Modal.getOrCreateInstance(
    document.getElementById(MODAL_ID)
  );

  modalToggles.forEach((element) => {
    element.addEventListener("click", (e) => {
      const currentTab = e.target.getAttribute("href");
      const tabToggle = document.querySelector(
        `[data-bs-target="${currentTab}"]`
      );
      const tabInstance = Tab.getOrCreateInstance(tabToggle);

      modalInstance.show();
      tabInstance.show();
    });
  });
})();
