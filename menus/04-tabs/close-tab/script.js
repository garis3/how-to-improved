class Tab {
  constructor(tab) {
    this.tab = tab;
    this.tab.addEventListener("click", this);

    this.btnClose = document.querySelector(
      `${this.tab.dataset.target} .btn-close`
    );
    this.btnClose.addEventListener("click", this);
  }

  show() {
    this.tab.classList.add("active");
    document.querySelector(this.tab.dataset.target).classList.add("show");
  }

  hide() {
    this.tab.classList.remove("active");
    document.querySelector(this.tab.dataset.target).classList.remove("show");
  }

  clearTabs() {
    let sibling = this.tab.parentNode.firstChild;

    while (sibling) {
      if (sibling.nodeType === 1 && sibling !== this.tab) {
        sibling.classList.remove("active");

        document.querySelector(sibling.dataset.target).classList.remove("show");
      }
      sibling = sibling.nextSibling;
    }
  }

  handleEvent(event) {
    if ("click" !== event.type) return;

    if (event.target === this.tab) {
      this.clearTabs();
      this.show();
      return;
    }

    if (event.target === this.btnClose) {
      this.hide();
      return;
    }
  }
}

const tabs = document.querySelectorAll('[data-toggle="tab"]');

for (const tab of tabs) {
  const tabTrigger = new Tab(tab);
}

document.querySelector("#tab-london").click();
