const DID = "did:plc:bw5mjfbdm62hve55psw3pum6";

const url = new URL(
  `https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=${DID}&limit=5&filter=posts_with_replies`,
);

const response = await fetch(url);
/** @type {import('@atproto/api').AppBskyFeedGetAuthorFeed.OutputSchema | null} */
const data = await response.json().catch(() => null);
const feed = data?.feed;

const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

/** @param {string} isoDate */
const getRelativeTime = (isoDate) => {
  const days = Math.round((new Date(isoDate).getTime() - Date.now()) / 86_400_000);
  if (Math.abs(days) < 7) return rtf.format(days, "day");
  return rtf.format(Math.round(days / 7), "week");
};

/** @param {string} input */
const capitalize = (input) => {
  return input.slice(0, 1).toUpperCase() + input.slice(1);
};

if (feed && feed.length > 0) {
  const thoughts = document.createElement("section");
  thoughts.id = "thoughts";
  document.body.appendChild(thoughts);

  const title = document.createElement("h4");
  title.textContent = "Thoughts";
  thoughts.appendChild(title);

  const ol = document.createElement("ol");
  thoughts.appendChild(ol);

  const structuredDataScript = document.querySelector('script[type="application/ld+json"]');

  /** @type {import('schema-dts').Graph} */
  const graph = JSON.parse(structuredDataScript.textContent);

  /** @type {import('schema-dts').ProfilePage | undefined} */
  const profilePage = graph["@graph"].find((g) => g["@type"] === "ProfilePage");

  for (const { post } of feed) {
    const isReply = "reply" in post.record;
    const isRepost = post.author.did !== DID;

    const li = document.createElement("li");

    const a = document.createElement("a");
    a.href = `https://bsky.app/profile/${post.author.handle}/post/${post.uri.split("/").pop()}`;
    a.rel = isRepost ? "external noopener" : "author external noopener";
    a.target = "_blank";

    const p = document.createElement("p");

    if (isReply || isRepost) {
      const i = document.createElement("i");
      i.textContent = isReply ? "Replied:" : "Reposted: ";
      p.replaceChildren(i, " ", post.record.text);
    } else {
      p.textContent = post.record.text;
    }

    const time = document.createElement("time");
    time.dateTime = post.record.createdAt;
    time.textContent = capitalize(getRelativeTime(post.record.createdAt));

    if (Array.isArray(profilePage?.hasPart) && !isRepost) {
      /** @type {import('schema-dts').BlogPosting} */
      const blogPosting = {
        "@type": "BlogPosting",
        "@id": "#BlogPosting#" + post.cid,
        headline: p.textContent.slice(0, 78) + "…",
        url: a.href,
        datePublished: time.dateTime,
        author: { "@id": "#Person" },
      };

      profilePage.hasPart.push(blogPosting);
    }

    a.appendChild(p);
    a.appendChild(time);

    li.appendChild(a);
    ol.appendChild(li);
  }

  if (profilePage) {
    structuredDataScript.textContent = JSON.stringify(graph);
  }
}
