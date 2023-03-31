type Data = {
  shortenurl: {
    shorturl: string,
    shorturlalt: string,
  },
};

(async () => {
  const url = new URL("https://meta.wikimedia.org/w/api.php");
  url.searchParams.set("origin", location.origin);

  const res = await fetch(url, {
    method: "POST",
    mode: "cors",
    referrer: location.origin,
    credentials: "include",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: new URLSearchParams({
      action: "shortenurl",
      format: "json",
      url: location.href,
    }).toString(),
  });
  const data = await res.json() as Data;

  prompt("", data.shortenurl.shorturl);
})();
