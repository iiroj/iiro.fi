export const Avatar = () => (
  <picture>
    <source
      srcSet="/static/profile-96.webp  1x, /static/profile-192.webp 2x, /static/profile-288.webp 3x"
      type="image/webp"
    />
    <img
      alt="Iiro Jäppinen"
      decoding="async"
      height="96px"
      loading="eager"
      src="/static/profile-96.jpg"
      srcSet="/static/profile-96.jpg  1x, /static/profile-192.jpg 2x, /static/profile-288.jpg 3x"
      width="96px"
    />
  </picture>
);
