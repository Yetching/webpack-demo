import _ from "lodash";

const Mycomponent = () => {
  const ele = document.createElement("div");

  ele.innerText = _.join(["hello", "webpack"], "-");

  ele.style.cssText = "color: #008c8c";

  return ele;
};

document.body.appendChild(Mycomponent());
