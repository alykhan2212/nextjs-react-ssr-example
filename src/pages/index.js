import { createClient } from 'contentful';
import Posts from '../components/Posts';

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: "posts" })

  return {
    props: {
      posts: res.items,
    }
  }
}

const Index = ({ posts  }) => {
  console.log(posts)
  return (
    <div>
      {
        posts.map(post => (
          <Posts key={post.sys.id} data={post} />
        ))

      }
    </div>
  );
};

export default Index;
