const SCREENS = {
  mobile: 600,
  tablet: 900,
  desktop: 1200,
};

export const DEVICE = {
  mobile: `screen and (max-width: ${SCREENS.mobile - 1}px)`,
  tablet: `screen and (min-width: ${SCREENS.mobile}px) and (max-width: ${SCREENS.tablet}px)`,
  tablet_max: `(max-width: ${SCREENS.tablet}px)`,
  desktop: `screen and (min-width: ${SCREENS.desktop}px)`,
  desktop_max: `screen and (max-width: ${SCREENS.desktop}px)`,
};
