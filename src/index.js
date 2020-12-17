// listen click in canvas  to copy a said attribute to said attribute on the target


window.addEventListener("load", () => {
  window.selected2 = function selected2({
    sourceDocument,
    destDocument,
    wrap,
    newValueCB,
    elementSelector,
    targetSelector,
    source,
    destination,
    type = "post",
    eventType = "click",
  }) {

    sourceDocument.addEventListener(eventType, (e) => {
      let element = e.target;
      if (e.target.matches(elementSelector) && element.hasAttribute(source)) {
        let targets = destDocument.querySelectorAll(targetSelector);
        targets.forEach((target) => {
          let value = element.getAttribute(source);
          if (wrap) value = wrap.replace("$1", value);
          else if (newValueCB) value = newValueCB(element, target, value)
          target.setAttribute(destination, value);
        });
      }

      if (type === "cut") element.removeAttribute(source);
    });

  };
});
