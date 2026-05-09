/**
 * @typedef {object} BskyFeedResponse
 * @property {{
 *   post: {
 *     author: {
 *       handle: string,
 *       displayName: string
 *     },
 *     record: {
 *       text: string,
 *       createdAt: string
 *     },
 *     uri: string
 *   }
 * }[]} feed
 */

const url = new URL(
  `https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=iiro.fi&limit=5&filter=posts_no_replies`,
);

const response = await fetch(url);
/** @type {BskyFeedResponse | null} */
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

  for (const { post } of feed) {
    const li = document.createElement("li");

    const a = document.createElement("a");
    a.href = `https://bsky.app/profile/${post.author.handle}/post/${post.uri.split("/").pop()}`;
    a.rel = "author noopener";
    a.target = "_blank";

    const p = document.createElement("p");
    p.textContent = post.record.text;

    const time = document.createElement("time");
    time.dateTime = post.record.createdAt;
    time.textContent = capitalize(getRelativeTime(post.record.createdAt));

    a.replaceChildren(time, p);
    li.replaceChildren(a);
    ol.appendChild(li);
  }
}
