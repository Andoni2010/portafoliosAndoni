function _siblings(elem) {
    var siblings = [],
      node = elem;
  
    while (node) {
      node = node.previousElementSibling;
  
      if (node) {
        siblings.push(node);
      }
    }
  
    return siblings;
  }
  
  document.addEventListener("click", function (item) {
    if (item.target.matches(".play-animation")) {
      var siblingsArray = [];
  
      siblingsArray = _siblings(item.target);
  
      siblingsArray.forEach(function (item) {
        var self = item;
  
        animationToggle(self, 500);
      });
    }
  });
  
  function additionalElems(progressElement, value, skillName) {
    var valueChild = document.createElement("span");
    valueChild.className = "progress-bar__value";
    valueChild.innerHTML = value + "%";
    progressElement.appendChild(valueChild);
  
    var barChild = document.createElement("div");
    barChild.className = "progress-bar__bar";
    progressElement.appendChild(barChild);
  
    var barInnerChild = document.createElement("div");
    barInnerChild.className = "progress-bar__bar-inner";
    barInnerChild.style.width = value + "%";
    barChild.appendChild(barInnerChild);
  
    var skillChild = document.createElement("span");
    skillChild.className = "progress-bar__skill";
    skillChild.innerHTML = skillName;
    progressElement.appendChild(skillChild);
  }
  
  var progressBar = document.querySelectorAll(".progress-bar");
  
  progressBar.forEach(function (item) {
    var self = item,
      barValue = self.getAttribute("data-value"),
      skillValue = self.getAttribute("data-skill"),
      effectNum = self.getAttribute("data-effect");
  
    additionalElems(self, barValue, skillValue);
  
    self.className += " progress-bar--" + effectNum;
  
    var valueElem = self.querySelector(".progress-bar__value");
  
    valueElem.className += " progress-bar__value--" + effectNum;
  
    var barElem = self.querySelector(".progress-bar__bar");
  
    barElem.className += " progress-bar__bar--" + effectNum;
  
    var barInnerElem = self.querySelector(".progress-bar__bar-inner");
  
    barInnerElem.className += " progress-bar__bar-inner--" + effectNum;
  
    var skillElem = self.querySelector(".progress-bar__skill");
  
    skillElem.className += " progress-bar__skill--" + effectNum;
  
    if (self.classList.contains("progress-bar--aligned-values")) {
      valueElem.style.left = barValue + "%";
      valueElem.classList.add("progress-bar__value--aligned-value");
    }
  
    if (self.classList.contains("progress-bar--no-overflow")) {
      barElem.classList.add("progress-bar__bar--no-overflow");
    }
  });
  
  function animationToggle(progressElement, delay) {
    var skillElem = progressElement.querySelector(".progress-bar__skill"),
      valueElem = progressElement.querySelector(".progress-bar__value"),
      skillBar = progressElement.querySelector(".progress-bar__bar-inner");
  
    skillElem.classList.remove("js-animated");
    valueElem.classList.remove("js-animated");
    skillBar.classList.remove("js-animated");
  
    setTimeout(function () {
      skillElem.classList.add("js-animated");
      valueElem.classList.add("js-animated");
      skillBar.classList.add("js-animated");
    }, delay);
  }
  
  function onloadAnimation() {
    progressBar.forEach(function (item) {
      animationToggle(item, 500);
    });
  }
  
  document.addEventListener("DOMContentLoaded", onloadAnimation());
  
