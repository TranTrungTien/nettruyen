import { MangadexApi } from "@/api";
import { Constants } from "@/constants";

const IMAGE_RESIZE_URL = "https://resizer.f-ck.me";

export class UrlUtils {
  getSearchNettruyenUrl(
    options: MangadexApi.Manga.GetSearchMangaRequestOptions,
  ) {
    const queryString = MangadexApi.Utils.buildQueryStringFromOptions(options);
    return `${Constants.Routes.nettruyen.search}${queryString.replaceAll("[]", "")}#results`;
  }

  getResizeImgUrl(url: string, queryParams?: string) {
    return `${IMAGE_RESIZE_URL}/?url=${url}&${queryParams ?? ""}`;
  }
}
