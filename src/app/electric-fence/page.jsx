import Hero from "../../components/ElectricFence/Hero";
import ElectricFenceServicesSection from "../../components/ElectricFence/Electricfenceservices.jsx";
import ElectricFenceWireSection from "../../components/ElectricFence/Electricfencewire.jsx";
import WhyChooseHighTechSection from "../../components/ElectricFence/Whychoosehightech.jsx";
import ElectricFencingComponentSection from "../../components/ElectricFence/Electricfencingcomponents.jsx";
export default function ElectricFence() {
  return (
    <>
      <Hero />
      <ElectricFenceServicesSection/>
      <ElectricFenceWireSection/>
      <WhyChooseHighTechSection/>
      <ElectricFencingComponentSection/>
    </>
  );
}