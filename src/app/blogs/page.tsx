import BlogCard from "@/components/ui/BlogCard";
import { IBlog } from "@/types";

export const metadata = {
    title : "Blogs | NexaBlog"
}


const BlogsPage =async () => {

    const res = await fetch('http://localhost:5000/blogs',{
        cache: 'no-store'
    });
    const blogs = await res.json();


    return (
        <div className="mx-auto w-[90%]">
            <h1 className="text-3xl text-center my-5 font-bold">
                Explore All Blogs From <span className="text-teal-600">NexaBlog</span>
            </h1>
            <p className="text-center text-gray-400 w-2/5 mx-auto">
                <i>
                    Dive into the fascinating world of quantum computing, where unlocking
                    unprecedented computational power.
                </i>
            </p>

            <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    blogs?.map((blog : IBlog) => <BlogCard blog={blog} key={blog.id} />)
                }
            </div>
        </div>
    );
};

export default BlogsPage;