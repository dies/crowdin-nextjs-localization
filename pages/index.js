import { useRouter } from "next/router";
import Link from "next/link";
import Post from "./../components/post";

// Note: A content you probably will be fetching elsewhere from a Headless CMS
// If you use i18n lib, fetching UI strings will be also way more elegant
import estonianContent from "./../content/ee/content.json";
import estonianStrings from "./../content/ee/strings.json";

import englishContent from "./../content/en-US/content.json";
import englishStrings from "./../content/en-US/strings.json";

import frenchContent from "./../content/fr/content.json";
import frenchStrings from "./../content/fr/strings.json";

function MainPage() {
  const { locale, locales, asPath } = useRouter();

  let content = {}, strings = {};

  switch (locale) {
    case "fr":
      content = frenchContent;
      strings = frenchStrings;
      break;

    case "ee":
      content = estonianContent;
      strings = estonianStrings;
      break;

    default:
    case "en-US":
      content = englishContent;
      strings = englishStrings;
      break;
  }

  return (
    <div>
      <main style={{ margin: '0 auto', maxWidth: '400px' }}>
        <div style={{ textAlign: 'center' }}>
          <br />
          {locales.map((localeCode, i) => {
            return (
              <span key={i} >
                <Link href={asPath} locale={localeCode}>
                  {strings.languages[localeCode]}
                </Link>
                &nbsp;&nbsp;
              </span>
            );
          })}
        </div>
        <div>
          <h1>{strings.header}</h1>
          <hr />
          <div>
            {
              content.data.map((entry, i) => {
                return <Post key={i} entry={entry} readMoreLabel={strings.read_more} />;
              })
            }
          </div>
        </div>
      </main >
    </div >
  );
}

export default MainPage;
