import { Box, BoxProps, styled, SvgIcon } from "@mui/material";
import "./index.css";

interface CircleIconProps {
  icon: React.FunctionComponent;
}

const CircleIconLarge = (props: CircleIconProps) => {
  const StyledBox = styled(({ className, ...props }: BoxProps) => (
    <Box {...props} className={className} />
  ))({
    backgroundColor: "rgb(44, 46, 58, 1)",
    borderRadius: "50%",
  });

  return (
    <StyledBox className="circle-icon-small">
      <SvgIcon component={props.icon} className="inner-icon-small" />
    </StyledBox>
  );
};

export default CircleIconLarge;