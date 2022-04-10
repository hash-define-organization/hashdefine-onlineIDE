export const download = () => {
  var canvas = document.getElementById("canvas");
  var url = canvas.toDataURL("image/png");
  fetch(url).then((response) => {
    response.blob().then((blob) => {
      let url = window.URL.createObjectURL(blob);
      let a = document.createElement("a");
      a.href = url;
      a.download = "image.png";
      a.click();
    });
  });
};
