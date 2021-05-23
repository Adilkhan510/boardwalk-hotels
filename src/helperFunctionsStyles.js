//The gist of setting helper functions is that we can simply change the font/color or any other attribute in one location instead of multiple different places//

export const setColor = {
  primaryColor: "#af9a7d",
  mainWhite: "#fff",
  mainBlack: "#222",
  mainGrey: "#ececec",
  lightGrey: "#f7f7f7",
};

export const setFont = {
  mainFont: "font-family : 'Lato', sans-serif",
  slanted: "font-family : 'Lato', sans-serif;",
};

export const setFlex = ({ x = "center", y = "center" } = {}) => {
  return `display: flex; align-items:${y}; justify-content: ${x}`;
};

export const setBackground = ({
  img = "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
} = {}) => {
  return `
  background: url(${img}) center/cover fixed
    no-repeat;
  `;
};

export const setRem = (pixels = 16) => {
  return `${pixels / 16}rem`;
};
