// actions.js
export const setLogoImage = (path) => ({
  type: 'SET_LOGO_IMAGE',
  payload: path,
});

export const setMenu = (menuList) => ({
  type: 'SET_MENU',
  payload: menuList,
});

export const updateDate = (dateObject) => ({
  type: 'UPDATE_DATE',
  payload: dateObject,
});
