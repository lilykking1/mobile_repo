export const getContainerWidth = (width: number) => {
  if (!width) {
    return undefined;
  }

  return { width };
};

export const getTextColor = (color: string) => ({ color });
