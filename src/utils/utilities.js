export const getImageUrl = name => new URL(`../assets/${name}`,  import.meta.url).href;
export const pictureNameCleanup = name =>  name.toLowerCase().replaceAll(" ", "").replaceAll("-", "");