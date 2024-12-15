import TopTitles from "@/components/nettruyen/home/top-titles";
import Manga from "@/components/nettruyen/manga/manga";

export default function TruyenTranh({
  params,
}: {
  params: { mangaId: string };
}) {
  return (
    <div className="grid gap-[40px] lg:grid-cols-[2fr_1fr]">
      <div>
        <Manga mangaId={params.mangaId} />
      </div>
      <div>
        <TopTitles />
      </div>
    </div>
  );
}
