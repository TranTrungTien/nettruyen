import Link from "next/link";
import { chunk } from "lodash";
import { Utils } from "@/utils";
import { Constants } from "@/constants";

export default function MainNav() {
  return (
    <div className="Module Module-144">
      <div className="ModuleContent">
        <ul className="nav navbar-nav main-menu">
          <li>
            <Link target="_self" href={Constants.Routes.nettruyen.index}>
              <i className="fa fa-home hidden-xs"></i>
              <span className="visible-xs">Trang chủ</span>
            </Link>
          </li>
          <li>
            <Link target="_self" href={Constants.Routes.nettruyen.following}>
              Theo dõi
            </Link>
          </li>
          <li>
            <Link
              target="_self"
              href={`${Constants.Routes.nettruyen.search}?order[followedCount]=desc#results`}
            >
              Hot
            </Link>
          </li>
          <li>
            <Link
              target="_self"
              href={`${Constants.Routes.nettruyen.search}?order[rating]=desc#results`}
            >
              Yêu thích
            </Link>
          </li>
          <li>
            <Link
              target="_self"
              href={`${Constants.Routes.nettruyen.search}?order[createdAt]=desc#results`}
            >
              Mới cập nhật
            </Link>
          </li>
          <li>
            <Link target="_self" href={Constants.Routes.nettruyen.history}>
              Lịch sử
            </Link>
          </li>
          <li className="dropdown hidden md:block">
            <Link
              className="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-expanded="false"
              target="_self"
              href={Constants.Routes.nettruyen.search}
            >
              Thể loại <i className="fa fa-caret-down"></i>
            </Link>
            <ul className="dropdown-menu megamenu">
              <li>
                <div className="clearfix">
                  {chunk(Constants.Nettruyen.tags, 13).map((col) => (
                    <div className="col-sm-3" key={col[0].id}>
                      <ul className="nav">
                        {col.map((tag) => (
                          <li key={tag.id}>
                            <Link
                              title={Utils.Mangadex.transLocalizedStr(
                                tag.attributes.description,
                              )}
                              data-title={Utils.Mangadex.transLocalizedStr(
                                tag.attributes.description,
                              )}
                              href={`${Constants.Routes.nettruyen.search}?includedTags=${tag.id}#results`}
                            >
                              {Utils.Mangadex.transLocalizedStr(
                                tag.attributes.name,
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div className="col-sm-12 hidden-xs">
                    <p className="tip"></p>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <Link target="_self" href={Constants.Routes.nettruyen.search}>
              Tìm truyện
            </Link>
          </li>
          <li>
            <Link
              target="_self"
              href={`${Constants.Routes.nettruyen.search}?publicationDemographic=josei&publicationDemographic=shoujo#results`}
            >
              Con gái
            </Link>
          </li>
          <li>
            <Link
              target="_self"
              href={`${Constants.Routes.nettruyen.search}?publicationDemographic=seinen&publicationDemographic=shounen#results`}
            >
              Con trai
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
