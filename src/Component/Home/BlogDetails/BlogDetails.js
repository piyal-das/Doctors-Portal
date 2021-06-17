import React from 'react';

const BlogDetails = (props) => {
    const {title, description, name, img , date} = props.blog;
    return (
        <div className="card shadow-sm">
            <div className="card-header d-flex  align-items-center">
                <img className="mx-3 rounded-circle" src={img} alt="" width="60"/>
                <div>
                    <h6 className="text-primary">{name}</h6>
                    <p className="m-0">{date}</p>
                </div>
            </div>
            <div className="card-body">
                <h5>{title}</h5>
                <p className="card-text text-secondary mt-4">{description}</p>
            </div>
            
       </div>
    );
};

export default BlogDetails;