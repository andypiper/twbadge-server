/** Write contents of the textarea to the clipboard when clicking "Copy" */
copy.onclick = function() {
  navigator.clipboard
    .writeText(out.value)
    .then(() => {
      log("Text copied.");
    })
    .catch(log);
};
