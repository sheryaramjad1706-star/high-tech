
import SlidingGateHerosection from "../../components/Sliding-Gate-Motor/SlidingGateHero.jsx";
import SlidinggateexpertisSection from "../../components/Sliding-Gate-Motor/Slidinggateexperties.jsx";
import  SlidingGateDetailsSection from "../../components/Sliding-Gate-Motor/Slidinggatedetials.jsx";
import SlidingGateAssistanceSection from "../../components/Sliding-Gate-Motor/Slidinggateassistance.jsx";
export const metadata = {
  title: "Sliding Gate Motors | High Tech Engineering",
  description:
    "Automatic sliding gate motors and gate automation solutions by High Tech Engineering.",
};

export default function SlidingGateMotorsPage() {
  return (
    <main>
      <SlidingGateHerosection />
      <SlidinggateexpertisSection/>
      <SlidingGateDetailsSection/>
      <SlidingGateAssistanceSection/>
    </main>
  );
}
