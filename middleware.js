export const config = {
  // Only run the middleware on the admin route
  matcher: '/admin'
};
 
export default function middleware(request) {
  const url = new URL(request.url);
  var url2;
  if (url.pathname === '/admin') {
    url2 = new URL('https://github.com/login/oauth/authorize?client_id=5c9c96cfd7f3827ab0d6');
  }
  return Response.redirect(url2);
}
