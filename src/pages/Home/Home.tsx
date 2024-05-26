import { useEffect } from "react";
import sanityClient from "../../sanityClient";

const CATEGORY_GROQ = `
  *[_type == "category" && !(_id in path('drafts.**'))] {
    title,
    description
  }
`;

const AUTHOR_GROQ = `
  *[_type == "author" && !(_id in path('drafts.**'))] {
    name,
    slug,
    "imageUrl": image.asset->url,
    bio,
  }
`;

const POST_GROQ = `
  *[_type == "post" && !(_id in path('drafts.**'))] {
    title,
    slug,
    author -> {
      name,
      slug,
      "imageUrl": image.asset->url,
      bio,
    },
    "imageUrl": mainImage.asset->url,
    categories[] -> {
      title,
      description
    },
    body
  }
`;

export const Home = () => {
  const fetchData = async () => {
    try {
      const data = await sanityClient.fetch(POST_GROQ);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>HOME</h1>
      <p>bedziemy wyswietlac kategorie</p>
    </>
  );
};
