import Contentful from 'contentful';
import Credentials from '../keys/contentful.js';
const client = Contentful.createClient(Credentials);

export default () => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await client.getEntries();
      let links = [];
      let pages = [];
      let posts = [];
      let secondaryLink = [];

      data.items.forEach(item => {
        const type = item.sys.contentType.sys.id;
        switch (type) {
          case 'tabs':
            links.push(item.fields);
            break;
          case 'page':
            pages.push(item.fields);
            break;
          case 'blogPost':
            posts.push(item.fields);
            break;
          case 'about':
            secondaryLink = secondaryLink.concat(item.fields.links);
            break;
          default:
            break;
        }
      });

      links = links.concat(secondaryLink);

      let fixedLinks = [];
      links.forEach(link => {
        fixedLinks.push({
          name: link.name,
          href: typeof link.slug !== 'undefined' ? link.slug : link.url
        });
      });

      resolve({
        links: fixedLinks,
        pages: pages,
        posts: posts
      });
    } catch (err) {
      reject(err);
    }
  });
};
