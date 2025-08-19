class Element {
  constructor(tag, className, textContent) {
    this.tag = tag;
    this.className = className;
    this.textContent = textContent;
  }

  create() {
    const el = document.createElement(this.tag);
    el.textContent = this.textContent;

    if (this.className !== null) {
      el.classList.add(this.className);
    }

    return el;
  }
}

class Image extends Element {
  constructor(className, imageSource) {
    super();
    this.className = className;
    this.imageSource = imageSource
  }

  create() {
    let el = document.createElement("img");

    if (this.className !== null) {
      el.classList.add(this.className);
    }

    el.src = this.imageSource;

    return el;
  }
}

export { Element, Image };
