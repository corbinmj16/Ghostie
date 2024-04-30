import CommentForm from "./CommentForm";

export default function Post({ post }) {
    return (
        <article className="flex flex-col bg-white rounded-lg px-4 py-5">
            <div className="flex">
                <div className="flex justify-center flex-col bg-blue-100 w-10 h-10 rounded-full text-center">
                    <p>CJ</p>
                </div>
                <div className="flex-1 ml-2">
                    <p>{post.user.name}</p>
                </div>
            </div>

            <p className="text-base mt-2">{post.body}</p>

            <section className="border-t border-gray-100 pt-5 mt-5">
                <p>Comments</p>

                <CommentForm />

                {post.comments?.map((comment) => (
                    <p key={comment.id}>{comment.body}</p>
                ))}
            </section>
        </article>
    );
}
