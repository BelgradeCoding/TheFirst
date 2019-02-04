let config = {
  image: {
    lineHeight: 20,
    font:"1.1rem Inconsolata"
  }
}

let colors = {
  light: {
    varFunction: "#0000ff",
    return: "#0000ff",
    "=": "gray",
    number: "green",
    "console.log": "#0000ff",
    string: "#800000",
    resOfStr: "#222222",
    varNames: "#222222"
  },
  dark: {
    varFunction: "#F8C307",
    return: "#F8C307",
    "=": "gray",
    number: "#7EEF7C",
    "console.log": "#E83607",
    string: "#F7A70D",
    resOfStr: "#9cdcfe"
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
