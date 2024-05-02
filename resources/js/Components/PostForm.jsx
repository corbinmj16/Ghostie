import { DashContext } from "@/Contexts";
import { useForm } from "@inertiajs/react";
import { useContext } from "react";
import PrimaryButton from "./PrimaryButton";

export default function PostForm() {
    const { show } = useContext(DashContext);
    const { data, setData, post, processing, errors, reset } = useForm({
        body: "",
        show_id: show.id,
    });

    function submit(e) {
        e.preventDefault();

        post("/post", {
            preserveScroll: true,
            preserveState: false,
            onSuccess: () => reset("body"),
        });
    }

    return (
        <form onSubmit={submit}>
            <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                    <label htmlFor="comment" className="sr-only">
                        Your Post
                    </label>
                    <textarea
                        id="comment"
                        rows={2}
                        className="w-full max-h-[100px] px-0 text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                        placeholder="Post something..."
                        required
                        onChange={(e) => setData("body", e.target.value)}
                        value={data.body}
                    />
                </div>

                <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                    <PrimaryButton type="submit" disabled={processing}>
                        {processing ? "Sending..." : "Post"}
                    </PrimaryButton>

                    {errors.body && (
                        <p className="text-red-500">{errors.body}</p>
                    )}
                </div>
            </div>
        </form>
    );
}
