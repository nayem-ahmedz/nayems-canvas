import FeaturedPosts from "@/comps/home/FeaturedPosts";
import Hero from "@/comps/home/Hero";
import Newsletter from "@/comps/home/Newsletter";
import Vision from "@/comps/home/Vision";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedPosts />
      <Vision />
      <Newsletter />
    </>
  );
}
