import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import HowItWorks from "@/components/HowItWorks";
import Statistics from "@/components/Statistics";

export default function Home() {
  return (
    <div>
      <Banner/>
      <Statistics/>
      <HowItWorks/>
      <Categories/>
    </div>
  );
}
