/**
 * Returns if the user is authenticated
 *
 * @returns {boolean}
 */
export const isAuthenticated = () => {
  // Check if there is a XSRF-COOKIE token present
  const xsrfToken = document.cookie.match(/XSRF-TOKEN=([^;]*)/)

  return !!xsrfToken
}
