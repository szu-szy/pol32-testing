import sanityClient from "@sanity/client";

// tworzymy klienta z apomoca ktorego bedziemy komunikowac sie z nasza baza w chmurza
export default sanityClient({
  projectId: "5wc9lp3m",
  dataset: "production",
  apiVersion: "2021-08-31",
  token:
    "skaQWg9XRUsDbeQEFZajHgKLKe1LCCNN470YtJ1HkspDS5BnlBpM5ggR8iFTVejSaOiImTNsI0vlAq2aFkHxcUFvVAkOV4Qr2GxC5HFLjPzZzyFV9YQ2Nm7ikG0ygj346f5ZJ66AE7ib7NC5RF5iVooJUZxeHcfyeJrSOASN5vnhIRJ05Nej",
  useCdn: false,
  ignoreBrowserTokenWarning: true,
});
