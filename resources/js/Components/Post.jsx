import { useForm, usePage } from "@inertiajs/react";
import CommentBubble from "./CommentBubble";
import CommentForm from "./CommentForm";
import PrimaryButton from "./PrimaryButton";

export default function Post({ post }) {
    const { auth } = usePage().props;
    const { delete: destroy } = useForm({
        post: post.id,
    });

    function deletePost(e) {
        e.preventDefault();

        destroy(`post/${post.id}`, {
            preserveScroll: true,
            preserveState: false,
        });
    }

    return (
        <article className="flex flex-col bg-white rounded-lg px-4 py-5">
            <div className="flex">
                <div className="flex justify-center flex-col bg-blue-100 w-8 h-8 rounded-full text-center">
                    <p>CJ</p>
                </div>
                <div className="flex-1 ml-2">
                    <p>{post.user.name}</p>
                </div>
            </div>

            <p className="text-base mt-2">{post.body}</p>

            {post.user_id === auth.user.id && (
                <form onSubmit={deletePost}>
                    <PrimaryButton type="submit">Delete</PrimaryButton>
                </form>
            )}

            <section className="border-t border-gray-100 pt-5 mt-5 pl-10">
                <p>Comments</p>

                <CommentForm postId={post.id} />

                {post.comments?.map((comment) => (
                    <CommentBubble comment={comment} key={comment.id} />
                ))}
            </section>
        </article>
    );
}
