import olgaScreens from "@/public/images/olga-portfolio-project/project-screens.jpg";
import olgaTablet from "@/public/images/olga-portfolio-project/project-on-tablet.jpg";

import tastiesScreens from "@/public/images/tasties-project/project-screens.svg";
import tastiesPhone from "@/public/images/tasties-project/project-on-phone.svg";
import Image from "next/image";

export default function ResponsiveFixedImageWrapper({ slug }: { slug: string | string[] | undefined }) {
    const olgaProject = [olgaScreens, olgaTablet];
    const tastiesProject = [tastiesScreens, tastiesPhone];

    const selectProject = slug === 'olga-portfolio-project' ? olgaProject : tastiesProject;

    return selectProject.map((item, index) => {
        return <Image
            src={item}
            alt="Mountains static image"
            key={index}
        />
    });
}