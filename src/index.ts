// The talks moved to https://baggiponte.com/talks/, decks included: every old URL goes to the same path there.
export function destination(url: URL) {
  return `https://baggiponte.com/talks${url.pathname}${url.search}`;
}

export default {
  fetch(request: Request) {
    return Response.redirect(destination(new URL(request.url)), 301);
  },
};
