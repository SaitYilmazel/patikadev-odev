const ul = document.querySelector("#list");
const input = document.querySelector("#task");

function setLocalStorage(data) {
  window.localStorage.setItem("toDoList", JSON.stringify(data));
}

function getLocalStorage() {
  return JSON.parse(window.localStorage.getItem("toDoList"));
}

function removeLocalStorage(removeItem) {
  return getLocalStorage().filter((item) => item.value != removeItem);
}

function newElement() {
  let same = getLocalStorage().some((item) => input.value === item.value);

  if (input.value.trim().length === 0) {
    $(".error").toast("show");
  } else if (same == true) {
    $(".error2").toast("show");
  } else {
    $(".success").toast("show");
    const createLi = document.createElement("li");
    const closeButton = document.createElement("span");

    createLi.appendChild(document.createTextNode(input.value));
    createLi.setAttribute("onclick", "onClick(event)");
    ul.appendChild(createLi);

    closeButton.textContent = "X";
    closeButton.classList.add("close");
    closeButton.setAttribute("onclick", "onRemove(event)");
    createLi.append(closeButton);

    const toDoList = [];
    const getList = document.querySelectorAll("li");

    getList.forEach((item, index) => {
      toDoList[index] = {
        id: index,
        status: item.classList.contains("checked") ? true : false,
        value: item.firstChild.textContent,
      };
    });

    setLocalStorage(toDoList);
  }
}

function onClick(prop) {
  let statusData = getLocalStorage();
  let [{ id }] = getLocalStorage().filter(
    (item) => item.value == prop.srcElement.firstChild.textContent
  );
  if (prop.srcElement.classList.value != "checked") {
    prop.srcElement.classList.add("checked");
    statusData[id].status = true;
    setLocalStorage(statusData);
  } else {
    prop.srcElement.classList.remove("checked");
    statusData[id].status = false;
    setLocalStorage(statusData);
  }
}

function onRemove(prop) {
  let filtered = removeLocalStorage(
    prop.srcElement.parentElement.firstChild.textContent
  );
  prop.srcElement.parentElement.remove();
  setLocalStorage(filtered);
}

getLocalStorage().forEach((item) => {
  const createLi = document.createElement("li");
  const closeButton = document.createElement("span");

  item.status == true
    ? createLi.classList.add("checked")
    : createLi.classList.remove("checked");
  createLi.appendChild(document.createTextNode(item.value));
  createLi.setAttribute("onclick", "onClick(event)");
  ul.appendChild(createLi);

  closeButton.textContent = "X";
  closeButton.classList.add("close");
  closeButton.setAttribute("onclick", "onRemove(event)");
  createLi.append(closeButton);
});
