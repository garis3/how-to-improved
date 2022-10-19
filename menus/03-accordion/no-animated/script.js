class Accordion {
  constructor(target) {
    const buttons = target.querySelectorAll("[data-toggle=collapse]");

    for (const button of buttons) {
      button.addEventListener("click", this);
    }
  }

  handleEvent(event) {
    if ("click" !== event.type) return;

    const collapse = document.querySelector(event.target.dataset.target);
    collapse.classList.toggle("show");

    if (collapse.classList.contains("show")) {
      event.target.classList.remove("collapsed");
      return;
    }
    event.target.classList.add("collapsed");
    return;
  }
}

const accordion = new Accordion(document.querySelector("#myAccordion"));
