import BlogDetailsCard from '@/components/ui/BlogDetailsCard';
import { IBlog } from '@/types';
import React from 'react';

export const generateStaticParams =async () => {
    const res = await fetch('http://localhost:5000/blogs');
    const blogs = await res.json();

    return blogs.slice(0,3).map((blog: IBlog) => ({
        blogId : blog.id
    }))
}


const BlogDetailsPage = async ({
    params
}: {
    params: Promise<{ blogId: string }>
}) => {
    const { blogId } = await params;
    const res = await fetch(`http://localhost:5000/blogs/${blogId}`);
    const blog = await res.json();

    // console.log(blog);

    return (
        <div>
            <BlogDetailsCard key={blog.id} blog={blog} />
        </div>
    );
};

export default BlogDetailsPage;