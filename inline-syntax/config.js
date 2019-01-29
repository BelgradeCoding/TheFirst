let colors = {
  light: {
    varFunction: "#475DCA",
    return: "#8800C8",
    "=": "gray",
    number: "green",
    "console.log": "#DB4054",
    string: "#F9A778",
    resOfStr: "black"
  },
  dark: {
    varFunction: "red",
    return: "#C586C0",
    "=": "gray",
    number: "green",
    "console.log": "#4EC9B0",
    string: "orange",
    resOfStr: "white"
  }
};
let theme;

let loadTheme = option => {
  if (option === "light") {
    theme = colors.light;
  } else if (option === "dark") {
    theme = colors.dark;
  }
};

loadTheme("light");
