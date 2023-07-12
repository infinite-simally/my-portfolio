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
    description: (
      <div style={{ marginTop: "10px" }}>
        <Text>
          <b>Frontend Developer:</b> Since August, 2019. Main stack includes
          (but is not limited to): React, Redux, TypeScript, Jest{" "}
        </Text>
        <Text>
          <b>Designer:</b> Have no commercial experience, but it is my soul
          passion
        </Text>
      </div>
    ),
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

  //HOBBIES
  hobbies: {
    title: "Hobbie",
    description: <div>Hobby</div>,
    icon: <HobbyIcon />,
  },
};

export default SectionData;
