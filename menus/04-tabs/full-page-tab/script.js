class Tab {
  constructor(target) {
    this.target = target;

    this.target.addEventListener("click", this);
  }

  show() {
    this.target.classList.add("active");
    document.querySelector(this.target.dataset.target).classList.add("show");
  }

  clearTabs() {
    let sibling = this.target.parentNode.firstChild;

    while (sibling) {
      if (sibling.nodeType === 1 && sibling !== this.target) {
        sibling.classList.remove("active");

        document.querySelector(sibling.dataset.target).classList.remove("show");
      }
      sibling = sibling.nextSibling;
    }
  }

  handleEvent(event) {
    if ("click" !== event.type) return;

    this.clearTabs();

    this.show();
  }
}

const tabs = document.querySelectorAll('[data-toggle="tab"]');

for (const tab of tabs) {
  const tabTrigger = new Tab(tab);
}

document.querySelector("#tab-home").click();
