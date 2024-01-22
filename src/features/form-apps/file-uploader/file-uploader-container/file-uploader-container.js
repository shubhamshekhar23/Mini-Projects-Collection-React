import React, { useState, useEffect } from "react";

import styles from "./file-uploader-container.module.scss";

export default function FileUploaderContainer(props) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {}, []);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);

      const reader = new FileReader();

      reader.onloadend = () => {
        setPreview(reader.result);
      };

      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <main className={styles.file_uploader_container_container}>
      <section className={styles.file_uploader}>
        {!preview && <div className={styles.non_preview}></div>}
        {preview && (
          <div className={styles.preview_file}>
            {file.type.startsWith("image/") && (
              <img src={preview} alt="Preview" />
            )}
            {/* {file.type.startsWith("video/") && (
              <video controls>
                <source src={preview} type={file.type} />
                Your browser does not support the video tag.
              </video>
            )}
            {file.type.startsWith("audio/") && (
              <audio controls>
                <source src={preview} type={file.type} />
                Your browser does not support the audio tag.
              </audio>
            )} */}
            {file.type === "application/pdf" && (
              <embed
                src={preview}
                type="application/pdf"
                width="600"
                height="400"
              />
            )}
          </div>
        )}
        <input
          type="file"
          id="files"
          accept="image/*,video/*,audio/*,.pdf,.txt"
          onChange={handleFileChange}
        />
        <label htmlFor="files">Select file.. {file?.name}</label>
      </section>
    </main>
  );
}
