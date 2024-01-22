"use client";

import * as React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Menu as BaseMenu } from "@mui/base/Menu";
import { MenuButton as BaseMenuButton } from "@mui/base/MenuButton";
import { MenuItem as BaseMenuItem } from "@mui/base/MenuItem";
import { Dropdown } from "@mui/base/Dropdown";
import { useTheme } from "@mui/system";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function useIsDarkMode() {
  const theme = useTheme();
  return theme.palette.mode === "dark";
}

export default function MenuSimple({ options, setStatus }) {
  const isDarkMode = useIsDarkMode();
  const [property, setProperty] = useState(options[0]);

  const createHandleMenuClick = (menuItem) => {
    return () => {
      setProperty(menuItem);
      //setStatus(menuItem);
      console.log(`Clicked on ${menuItem}`);
    };
  };

  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      <Dropdown>
        <MenuButton>
          {property} <ArrowDropDownIcon sx={{ color: "#EB9F60" }} />
        </MenuButton>
        <Menu>
          {options.map((element) => (
            <MenuItem onClick={createHandleMenuClick(element)}>
              {element}
            </MenuItem>
          ))}
        </Menu>
      </Dropdown>
    </div>
  );
}

const resolveSlotProps = (fn, args) =>
  typeof fn === "function" ? fn(args) : fn;

const Menu = React.forwardRef((props, ref) => {
  const isDarkMode = useIsDarkMode();

  return (
    <BaseMenu
      ref={ref}
      {...props}
      slotProps={{
        ...props.slotProps,
        root: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(
            props.slotProps?.root,
            ownerState
          );
          return {
            ...resolvedSlotProps,
            className: clsx(
              `${isDarkMode ? "dark" : ""} z-10`,
              resolvedSlotProps?.className
            ),
          };
        },
        listbox: (ownerState) => {
          const resolvedSlotProps = resolveSlotProps(
            props.slotProps?.listbox,
            ownerState
          );
          return {
            ...resolvedSlotProps,
            className: clsx(
              "bg-white text-sm box-border p-1.5 my-3 mx-0 rounded-xl overflow-auto outline-0 bg-white dark:bg-slate-900 border border-solid border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-300 min-w-listbox shadow-md dark:shadow-slate-900",
              resolvedSlotProps?.className
            ),
          };
          run;
        },
      }}
    />
  );
});

Menu.propTypes = {
  /**
   * The props used for each slot inside the Menu.
   * @default {}
   */
  slotProps: PropTypes.shape({
    listbox: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    root: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  }),
};

const MenuButton = React.forwardRef((props, ref) => {
  const { className, ...other } = props;
  return (
    <BaseMenuButton
      ref={ref}
      className={clsx(
        "cursor-pointer w-40 text- font-sans box-border rounded-full drop-shadow-lg px-3 py-1 bg-white dark:bg-slate-900 border border-solid border-orange-400 dark:border-orange-400 text-slate-900 dark:text-slate-200 hover:bg-slate-50 hover:dark:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 focus-visible:shadow-[0_0_0_4px_#ddd6fe] dark:focus-visible:shadow-[0_0_0_4px_#a78bfa] focus-visible:outline-none shadow-sm active:shadow-none",
        className
      )}
      {...other}
    />
  );
});

MenuButton.propTypes = {
  className: PropTypes.string,
};

const MenuItem = React.forwardRef((props, ref) => {
  const { className, ...other } = props;
  return (
    <BaseMenuItem
      ref={ref}
      className={clsx(
        " bg-white list-none p-2 rounded-lg cursor-default select-none last-of-type:border-b-0 focus-visible:shadow-outline-purple focus-visible:outline-0 focus-visible:bg-slate-100 focus-visible:dark:bg-slate-800 focus-visible-text-slate-900 focus-visible:dark:text-slate-300 disabled:text-slate-400 disabled:dark:text-slate-700 disabled:hover:text-slate-400 disabled:hover:dark:text-slate-700 hover:bg-purple-50 hover:dark:bg-purple-950 hover:text-slate-900 hover:dark:text-slate-300",
        className
      )}
      {...other}
    />
  );
});

MenuItem.propTypes = {
  className: PropTypes.string,
};
