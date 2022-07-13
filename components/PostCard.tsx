import Link from "next/link";

function PostCard(props: { title: string, description: string, slug: string }) {
  return (
    <div className="my-4 py-4 border-b">
      <h2 className="font-bold text-2xl my-4">{props.title}</h2>
      <p className="mt-4 italic">{props.description}</p>

      <Link href="/[slug]" as={`/${props.slug}`}>
        <a className="text-blue-500 mt-4 mb-2 block">Read more</a>
      </Link>
    </div>
  );
}

export default PostCard;
