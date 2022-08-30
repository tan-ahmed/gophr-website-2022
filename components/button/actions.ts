export const isFullWidth = (widthState: boolean) => {
  const style = "w-full justify-center";
  if (widthState) return style;
  return false;
};

export const setButtonVariant = (style: string) => {
  let classes = "";
  const defaultStyle =
    "border border-transparent bg-green-500 px-4 py-2 uppercase text-white shadow-sm hover:bg-green-600 focus:outline-none rounded-0 rounded-none"
  switch (style) {
    case "contained":
      classes = defaultStyle;
      break;
    case "outlined":
      classes =
        "border bg-green-500 px-4 py-2 uppercase text-green shadow-sm hover:bg-green-500 hover:text-white focus:outline-none ";
      break;
    case "text":
      classes =
        "px-4 py-2 uppercase text-green-500 shadow-sm hover:bg-green-500 hover:text-white focus:outline-none ";
      break;
    default:
      classes = defaultStyle;
      break;
  }
  return classes;
};

export const setButtonSize = (textSize: string) => {
  let classes = "";
  const defaultSize = "text-base px-4 py-2";
  switch (textSize) {
    case "sm":
      classes = "text-sm px-2 py-2";
      break;
    case "md":
      classes = defaultSize;
      break;
    case "lg":
      classes = "text-lg px-4 py-2";
      break;
    default:
      classes = defaultSize;
      break;
  }
  return classes;
};
