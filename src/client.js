import SanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
export const client = SanityClient({
  projectId: "n3qshbph",
  dataset: "production",
  apiVersion: "2022-10-30",
  useCdn: true,
  token:
    "skQZmbKPhh8gmWBO15AdRHtWPB6vThtZiWL7kNrSfrrhWjaYDholdRvVjygrfJS4GJGCvlVDuwJqOYBJ8l1G7rcPoTSGQn6W1vkqx4JI2SuljTTs2fct6QXBEUL9ygVy57LLGecieu7erg1F9or6QPm4VjYXLU13TC9s5a6bd9LhZxh1Nzwm",
});
const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
