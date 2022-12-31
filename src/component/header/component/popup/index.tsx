import {
  Box,
  ClickAwayListener,
  MenuItem,
  Popper,
  Slide,
  SvgIcon,
} from "@mui/material";
import { useRef } from "react";
import { ReactComponent as CodeIcon } from "../../../../assets/ui-icon/code.svg";
import { ReactComponent as MusicIcon } from "../../../../assets/ui-icon/music.svg";
import { ReactComponent as VideoIcon } from "../../../../assets/ui-icon/video.svg";
import { projectTypeColours } from "../../../../constants/uiConstants";

interface PopupProps {
  anchorEl: (EventTarget & Element) | null;
  handleClose: () => void;
  handleMenuClick: (value: number) => void;
  setIndicatorColor: (value: string) => void;
}

const Popup = (props: PopupProps) => {
  const containerRef = useRef(null);

  return (
    <ClickAwayListener onClickAway={props.handleClose}>
      <Popper
        open={!!props.anchorEl}
        anchorEl={props.anchorEl}
        transition
        sx={{ overflow: "hidden" }}
      >
        {({ TransitionProps }) => (
          <Slide
            {...TransitionProps}
            container={containerRef.current}
            direction="down"
          >
            <Box
              className="navbar-menu"
              sx={{
                boxShadow: "4px 6px 10px #121212",
                padding: "5px",
                backgroundColor: "#2c2e2e",
              }}
              overflow="hidden"
            >
              <MenuItem
                onClick={() => {
                  props.handleMenuClick(1.1);
                  props.setIndicatorColor(projectTypeColours.code);
                }}
              >
                <SvgIcon
                  className="navbar-menuicon"
                  component={CodeIcon}
                  fontSize={"inherit"}
                  sx={{ color: projectTypeColours.code }}
                />
                Coding
              </MenuItem>
              <MenuItem
                onClick={() => {
                  props.handleMenuClick(1.2);
                  props.setIndicatorColor(projectTypeColours.music);
                }}
              >
                <SvgIcon
                  className="navbar-menuicon"
                  component={MusicIcon}
                  fontSize={"inherit"}
                  sx={{ "padding-top": "3px", color: projectTypeColours.music }}
                />
                Music
              </MenuItem>
              <MenuItem
                onClick={() => {
                  props.handleMenuClick(1.3);
                  props.setIndicatorColor(projectTypeColours.video);
                }}
              >
                <SvgIcon
                  className="navbar-menuicon"
                  component={VideoIcon}
                  fontSize={"inherit"}
                  sx={{ "padding-top": "3px", color: projectTypeColours.video }}
                />
                Video
              </MenuItem>
            </Box>
          </Slide>
        )}
      </Popper>
    </ClickAwayListener>
  );
};

export default Popup;
