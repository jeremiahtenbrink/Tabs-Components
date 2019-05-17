class Tabs {
  constructor(links) {
    links.forEach((link, index) => {
      const tabLink = new TabLink(link);
      if (index === 0) {
        Tabs.selectedTab = tabLink;
      }
    });
  }

  static changeSelectedTab(newSelectedTab) {
    Tabs.selectedTab.deselect();
    Tabs.selectedTab = newSelectedTab;
  }
}

class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    // this.element;
    this.element = element;
    // Get the custom data attribute on the Link
    // this.data;
    this.data = this.element.dataset.tab;
    // Using the custom data attribute get the associated Item element
    // this.itemElement;
    this.itemElement = document.querySelector(
      '.tabs-items div[data-tab="' + this.data + '"]',
    );
    // Using the Item element, create a new instance of the TabItem class
    // this.tabItem;
    this.tabItem = new TabItem(this.itemElement);
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener("click", () => this.select());
  }

  select() {
    debugger;
    Tabs.changeSelectedTab(this);
    // Add a class named "tabs-link-selected" to this link
    // this.element;
    this.element.classList.add("tabs-link-selected");

    // Call the select method on the item associated with this link
    this.tabItem.select();
  }

  deselect() {
    this.element.classList.remove("tabs-link-selected");
    this.tabItem.deselect();
  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    // this.element;
    this.element = element;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    // const items;

    const items = document.querySelectorAll(".tabs-item");

    // Add a class named "tabs-item-selected" to this element
    //this.element;
    this.element.classList.add("tabs-item-selected");
  }

  deselect() {
    this.element.classList.remove("tabs-item-selected");
  }
}

const links = document.querySelectorAll(".tabs-link");
new Tabs(links);
