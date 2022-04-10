import reactCSS from "reactcss";

export const styles = reactCSS({
  default: {
    righticons: {
      border: "none",
      width: `${window.innerWidth * 0.06}px`,
      height: `${window.innerHeight * 0.09}px`,
      background: "none",
      borderRadius: "0.1%",
      outline: "none",
      padding: "0.5%",
    },
    topicons: {
      border: "none",
      width: `${window.innerWidth * 0.073}px`,
      height: `${window.innerHeight * 0.09}px`,
      background: "none",
      borderRadius: "0.1%",
      outline: "none",
      padding: "0.5%",
    },
    picker: {
      border: "none",
      backgroundImage:
        "linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%)",
      width: `${window.innerWidth * 0.073 * 0.5}px`,
      height: `${window.innerWidth * 0.073 * 0.5}px`,
      borderRadius: "7%",
      outline: "none",
      filter: "blur(0.5px)",
      padding: "0.5%",
      marginTop:
        window.innerWidth <= 1024 //320
          ? `${window.innerHeight - window.innerHeight * 0.981}px`
          : `${window.innerHeight - window.innerHeight * 0.999}px`,
    },
  },
});
