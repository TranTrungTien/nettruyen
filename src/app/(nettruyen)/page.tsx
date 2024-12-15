import FeaturedTitles from "@/components/nettruyen/home/featured-titles";
import NewUpdates from "@/components/nettruyen/home/new-updated-titles";
import ReadingHistory from "@/components/nettruyen/home/reading-history";
import TopTitles from "@/components/nettruyen/home/top-titles";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-[40px]">
      <FeaturedTitles />
      <div className="grid gap-[40px] lg:grid-cols-[2fr_1fr]">
        <div>
          <NewUpdates />
        </div>
        <div className="flex flex-col gap-[20px]">
          <ReadingHistory />
          <TopTitles />
        </div>
      </div>
    </div>
  );
}
