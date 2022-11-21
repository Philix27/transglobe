import { Landing } from "../comps/globalComps/Landing";
import Objectives from "../comps/globalComps/objectives";

export default function Home() {
  return (
    <>
      <Landing
        title="Transglobe Exchange"
        imgUrl="images/dark.jpg"
        subtitle="We help you wire funds across the globe."
      />
      <Objectives />
    </>
  );
}
