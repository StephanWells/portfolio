import {
  TooltipProps,
  Tooltip,
  tooltipClasses,
  styled,
  Link,
  SvgIcon,
  Typography,
} from "@mui/material";
import { ReactComponent as LinkIcon } from "../../assets/ui-icon/link.svg";
import "./index.css";

interface LinkButtonProps {
  href: string;
  tooltip: string;
  caption: string;
}

const LinkButton = (props: LinkButtonProps) => {
  const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
    },
  }));

  return (
    <StyledTooltip title={props.tooltip} placement="top" color="primary">
      <Link
        color={"primary"}
        display="inline"
        href={props.href}
        target={"_blank"}
        underline="hover"
      >
        <Typography
          className="link-caption"
          color={"primary"}
          display="inline"
          component="span"
        >
          <SvgIcon className="link-icon" component={LinkIcon} />
          <b>{props.caption}</b>
        </Typography>
      </Link>
    </StyledTooltip>
  );
};

export default LinkButton;
