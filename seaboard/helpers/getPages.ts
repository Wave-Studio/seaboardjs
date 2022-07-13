import fs from "fs";
import path from "path";
import matter from "gray-matter";

const getPosts = () => {
  const pages: string[] = [];
  const r: {
    slug: string,
    data: unknown,
  }[] = [];
  
  const recursiveCrawl = (dir: string) => {
    for (const file of fs.readdirSync(dir)) {
      const filePath = path.join(dir, file);
      const directory = fs.lstatSync(filePath).isDirectory();
      if (directory) {
        recursiveCrawl(filePath);
      } else {
        for (const ext of ["md", "mdx"]) {
          if (file.toLowerCase().endsWith(`.${ext}`)) {
            pages.push(filePath);
            // ./docs/myPost.mdx
            // ./docs/help/me.md
            const fileContents = fs.readFileSync(path.join(filePath), "utf8");
            const { data } = matter(fileContents);
            r.push({
              slug: removeStuff(filePath),
              data,
            })
          }
        }
      }
    }
  };

  recursiveCrawl("./docs");

  

  return r;
};

export default getPosts;

function removeStuff(input: string): string {
  input = input.replace("docs\\", "");
  input = input.replace(/.mdx|.md/g, "");
  while(input.includes("\\")) {
    input = input.replace("\\", "/")
  }
  return input
}