// Redirige www.amape.mx → amape.mx y sirve el sitio estático.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === 'www.amape.mx') {
      url.hostname = 'amape.mx';
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  }
};
