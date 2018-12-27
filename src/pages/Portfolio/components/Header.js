import posed from "react-pose";

const from = {
  opacity: 0,
  y: "-200%"
};

export default posed.header({
  from,
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      easing: "easeOut"
    }
  },
  exit: from
});
