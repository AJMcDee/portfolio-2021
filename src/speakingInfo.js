import hashnodePreview from "./img/speaking/hashnodePreview.png";
import hashnodePreviewPortrait from "./img/speaking/hashnodePreviewPortrait.png";
import oopPreview from "./img/speaking/oopLandscape.jpg";
import oopPreviewPortrait from "./img/speaking/oopPortrait.png";

const speakingInfo = {
  engagements: [
    {
      projectId: 1,
      title: "Hashnode Bootcamp 2020",
      projectLink: "https://youtu.be/zaBmd3yZ1Pc?t=167",
      imageLandscape: hashnodePreview,
      imagePortrait: hashnodePreviewPortrait,
      description: `Hashnode Bootcamp is an event aimed at getting more technical writers into blogging. In December 2020, 
        Anna presented the topic "Getting Started in Blogging: Writing Principles and Topic Selection".`,
    },
    {
      projectId: 2,
      title: "OOP Konferenz 2021",
      projectLink:
        "https://www.linkedin.com/feed/update/urn:li:activity:6765701988266078209/",
      imageLandscape: oopPreview,
      imagePortrait: oopPreviewPortrait,
      description: `In February 2021, Anna presented a 'Pecha Kucha' presentation at the German OOP 2021 (Software as Business) conference,
    exploring how opera singing developed both her technical and soft skills in preparation for a career
    in programming.`,
    },
  ],
};

export default speakingInfo;
