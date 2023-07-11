import { CareerIcon, EducationIcon, HobbyIcon, InfoIcon } from "assets/icons";
import Text from "components/Text";

type SectionData = {
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
};

type Sections = {
  [key: string]: SectionData;
};

export const sectionsData: Sections = {
  career: {
    title: "Career",
    description: <div>Career</div>,
    icon: <CareerIcon />,
  },

  //EDUCATION
  education: {
    title: "Education",
    description: (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <Text>National Technical University of Ukraine</Text>

        <Text style={{ fontWeight: 200, fontSize: "0.85rem" }}>
          Bachelor degreee, Computer Science
        </Text>
      </div>
    ),
    icon: <EducationIcon />,
  },

  //ABOUT
  about: {
    title: "About",
    description: <div>About</div>,
    icon: <InfoIcon />,
  },

  //HOBBIE
  hobbie: {
    title: "Hobbie",
    description: <div>Hobby</div>,
    icon: <HobbyIcon />,
  },
};

export default SectionData;
