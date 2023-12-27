import React from 'react';
import articleimg from '../img/articleimg.svg';

const ArticleCreate = () => {
    return (
        <div>
            <div className='row'>
                <div className='col-md-6'><img src={articleimg} alt="" /></div>
                <div className='col-md-6'></div>
            </div>
        </div>
    );
};

export default ArticleCreate;