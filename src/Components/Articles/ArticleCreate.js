import React from 'react';
import articleimg from '../img/articleimg.svg';
import './Articles.css';

const ArticleCreate = () => {
    return (
        <div className='m-5 p-5'>
            <div className="row">

                <div className="col-md-6">
                    <img src={articleimg} alt="" className='img-fluid' />
                </div>
                <div className="col-md-6">
                    {/* 30% width column */}
                    <div className='left-part'>
                        <form>


                        <h5 className='form-h5'>Create Articles</h5>


                        <div class="form-floating title">
                            <input class="form-control" type="text" />
                            <label className='upperCaseHeader' for="floatingTextarea">Title</label>
                        </div>
                        <div class="form-floating ">
                            <textarea class="form-control" name="" id="" cols="5" rows="5"></textarea>
                            <label className='upperCaseHeader' for="floatingTextarea">Details</label>
                        </div>
                        <div>
                            <button className='article-btn'>Create</button>
                        </div>
                        </form>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default ArticleCreate;