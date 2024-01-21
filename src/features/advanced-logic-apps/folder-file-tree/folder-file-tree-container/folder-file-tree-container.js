import React, { useState, useEffect } from "react";

import styles from "./folder-file-tree-container.module.scss";
import FolderItem from "../folder-item/folder-item";
import FileItem from "../file-item/file-item";

const getFolderItem = () => {
  return {
    id: new Date().valueOf(),
    type: "folder",
    name: "",
    content: [],
  };
};

const getFileItem = () => {
  return {
    id: new Date().valueOf(),
    type: "file",
    name: "",
  };
};

export default function FolderFileTreeContainer(props) {
  const [itemName, setItemName] = useState("");
  const [directoryInfo, setDirectoryInfo] = useState([]);
  const [activeItem, setActiveItem] = useState({});

  useEffect(() => {
    const handleClickAnywhere = (event) => {
      let idList = ["folder-input", "add-folder-btn", "add-file-btn"];
      if (idList.includes(event.target.id)) {
        return;
      }
      setActiveItem({});
    };
    document.addEventListener("click", handleClickAnywhere, true);
    return () => {
      document.removeEventListener("click", handleClickAnywhere);
    };
  }, []);

  function handleFolderAdd(params) {
    if (!itemName) return;
    const newItem = getFolderItem();
    newItem.name = itemName;
    handleAddition(newItem);
  }

  function handleFileAdd(params) {
    if (!itemName) return;
    const newItem = getFileItem();
    newItem.name = itemName;
    handleAddition(newItem);
  }

  function handleAddition(item) {
    const dummy = [...directoryInfo];
    if (!activeItem.id) {
      dummy.push(item);
      setDirectoryInfo(dummy);
      return;
    }

    const itemStr = JSON.stringify(activeItem);
    let newItem = { ...activeItem };
    newItem.content.push(item);
    const newItemStr = JSON.stringify(newItem);

    const originalStr = JSON.stringify(dummy);
    let newObject = JSON.parse(originalStr.replace(itemStr, newItemStr));
    setDirectoryInfo(newObject);
  }

  function handleItemClick(item) {
    setActiveItem({ ...item });
  }

  function getFolderHtmlContent(item) {
    if (item.type == "file") {
      return (
        <FileItem
          name={item.name}
          isActive={activeItem == item.id}
          onClick={() => {}}
        ></FileItem>
      );
    } else {
      return (
        <FolderItem
          name={item.name}
          isActive={activeItem.id == item.id}
          onClick={() => handleItemClick(item)}
        >
          {item.content.map((item2) => (
            <div key={item2.id}>{getFolderHtmlContent(item2)}</div>
          ))}
        </FolderItem>
      );
    }
  }

  return (
    <main className={styles.folder_file_tree_container_container}>
      <input
        type="text"
        id="folder-input"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <button id="add-folder-btn" onClick={handleFolderAdd}>
        Add Folder
      </button>
      <button id="add-file-btn" onClick={handleFileAdd}>
        Add File
      </button>
      {directoryInfo.map((item) => {
        return <div key={item.id}>{getFolderHtmlContent(item)}</div>;
      })}
    </main>
  );
}
