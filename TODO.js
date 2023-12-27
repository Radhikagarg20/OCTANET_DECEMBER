const addTask = () => {
  const title = getById("todo-title");
  const desc = getById("todo-desc");
  const response = getById("response");

  if (isEmpty(title.value) || isEmpty(desc.value)) {
    showAndHide(response, "Fill out all fields!");
  } else {
    saveToLocalStorage(title.value, desc.value);
    reloadPage();
  }
};

const closeEditModal = () => hideElement("editModal");

const saveChanges = () => {
  const title = getKeyFromLocalStorage(editIndex);
  const newData = getById("editInput").value;

  if (isNotEmpty(newData)) {
    saveToLocalStorage(title, newData);
    closeEditModal();
    reloadPage();
  }
};

