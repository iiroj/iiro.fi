import posed from "react-pose";

const from = {
  opacity: 0
};

export default posed.aside({
  from,
  enter: {
    opacity: 1
  },
  exit: from
});
