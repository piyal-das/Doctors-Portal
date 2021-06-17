import React from 'react';
import './Blogs.css'
import image from '../../../images/Ellipse 1.png'
import BlogDetails from '../BlogDetails/BlogDetails';
import deviShetty from '../../../images/devi-shetty.jpg'
import daniel from '../../../images/dr-mike.jpg'

const Blogs = () => {

    const blog = [
        {
            name: 'Dr. Devi shetyy',
            date: new Intl.DateTimeFormat(['ban', 'id']).format(new Date(Date.UTC(2021, 4, 11, 3, 23, 16, 738))),
            title: 'Check at least a doctor in a year for your teeth',
            description: 'It is a long established fact that by the readable content of a lot layout , The point of using Lorem a more-or-less normal distribute to using Content here, content',
            img: deviShetty,
        },
        {
            name: 'Dr. Caudi',
            date:  new Intl.DateTimeFormat(['ban', 'id']).format(new Date(Date.UTC(2021, 3, 25, 3, 23, 16, 738))),
            title: 'Two time brush in a day can keep you healthy',
            description: 'It is a long established fact that by the readable content of a lot layout , The point of using Lorem a more-or-less normal distribute to using Content here, content',
            img: image,
        },
        {
            name: 'Dr. Daniel christian',
            date:  new Intl.DateTimeFormat(['ban', 'id']).format(new Date(Date.UTC(2021, 2, 20, 3, 23, 16, 738))),
            title: 'The tooth cancer is taking a challenge',
            description: 'It is a long established fact that by the readable content of a lot layout , The point of using Lorem a more-or-less normal distribute to using Content here, content',
            img: daniel,
        },
    ]
    return (
        <section className="blogs my-5">
        <div className="container">
            <div className="section-header text-center">
                 <h5 className="text-brand">OUR BLOG</h5>
                 <h2 className='font-weight-bold'>From Our Blog News</h2>
            </div>
            <div className="card-deck mt-5">
                 {
                     blog.map(blog => <BlogDetails blog={blog} key={blog.title}/>)
                 }
            </div>
        </div>
    </section>
        
       
    );
};

export default Blogs;