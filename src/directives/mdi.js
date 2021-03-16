const mdi = {
  mounted(el) {
    var value = el.innerText || el.outerText;
    var tmp = "";
    if (!el.classList.value.includes("mdi")) {
      tmp += "mdi";
    }
    value.split(" ").forEach(e => {
      if (
        !el.classList.value.includes(e) &&
        !tmp.includes(e) &&
        e.length > 0 &&
        e != " "
      ) {
        tmp += " " + e;
      }
    });
    if (tmp.length > 0) {
      el.classList.value = tmp + " " + el.classList.value;
      el.innerHTML = "";
    }
    console.log(el.classList);
  }
};

export default mdi;
