import * as Icons from "assets/icons";

export const useIcons = (name: string | string[]) => {
  let SelectedIcons;

  if (Array.isArray(name)) {
    SelectedIcons = name.reduce((acc, currVal) => {
      const icon = Icons[currVal as keyof typeof Icons];
      return { ...acc, [currVal]: icon };
    }, {});
  } else {
    SelectedIcons = Icons[name as keyof typeof Icons];
  }

  return SelectedIcons as any;
};
