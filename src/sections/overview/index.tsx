import { Box, Container, Grow } from "@mui/material";
import { ReactComponent as IntroductionIcon } from "../../assets/circle-icon/introduction.svg";
import { ReactComponent as TestimonialsIcon } from "../../assets/circle-icon/testimonials.svg";
import ContentCard from "../../component/content-card";
import { tabState } from "../../definitions/tab-state";
import "./index.css";
import Introduction from "./introduction";
import Skills from "./skills";
import Testimonials from "./testimonials";

interface OverviewProps {
  tabState: tabState;
}

const Overview = (props: OverviewProps) => {
  return (
    <Container maxWidth={"md"} className="overview-container">
      <Grow
        in={props.tabState.value === 0}
        style={{ transformOrigin: "50% 0 0" }}
        timeout={600}
      >
        <Box>
          <ContentCard
            icon={IntroductionIcon}
            headerText="Introduction"
            animationDelay={300}
          >
            <Introduction />
          </ContentCard>
        </Box>
      </Grow>
      <Grow
        in={props.tabState.value === 0}
        style={{ transformOrigin: "50% 0 0" }}
        timeout={600}
      >
        <Box>
          <ContentCard animationDelay={400} transparent>
            <Skills />
          </ContentCard>
        </Box>
      </Grow>
      <Grow
        in={props.tabState.value === 0}
        style={{ transformOrigin: "50% 0 0", transitionDelay: "100ms" }}
        timeout={600}
      >
        <Box>
          <ContentCard
            icon={TestimonialsIcon}
            headerText="Testimonials"
            animationDelay={500}
          >
            <Testimonials />
          </ContentCard>
        </Box>
      </Grow>
    </Container>
  );
};

export default Overview;
