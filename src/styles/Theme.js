const black = '#000000';
const lightBlue = '#d7e5f7';
const white = '#FFFFFF';
const darkBlue = '#19448a'

const themeLight = {
  background: lightBlue,
  body: black
};

const themeDark = {
  background: darkBlue,
  body: white
};

const theme = mode => (mode === "dark" ? themeDark : themeLight);

export default theme;

