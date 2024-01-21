import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const ArticleApprove = () => {
    const [Article, setArticle] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/article')
            .then(res => res.json())
            .then(data => setArticle(data))
    }, [])

    const handleApprove = _id => {
        console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Approve it!"
        }).then((result) => {
            if (result.isConfirmed) {
                //   Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                //   });
                fetch(`http://localhost:5000/article/${_id}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ approval: 'approved' })
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Approved",
                                text: "Approved by Admin",
                                icon: "success"
                            });
                            const remaining = Article.filter(articles => articles._id !== _id);
                            const updated = Article.find(articles => articles._id === _id);
                            updated.approval = 'approved'
                            const newArticles = [updated, ...remaining];
                            setArticle(newArticles);
                        }
                    })
            }
        });


    }


    return (


        <div className='container-fluid'>

            <div className="row">
                <div className="col-md-6">
                    <div className="table-wrap">
                        <table className="table table-responsive-xl">
                            <thead>
                                <tr>
                                    <th>name</th>
                                    <th>post</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Article.map(article => (

                                    <React.Fragment key={article._id}>
                                        {article.approval === 'WaitingForApprove' && <>
                                            {
                                                article.approval === 'approved' ?
                                                    <> </> : <>
                                                        <tr>
                                                            <td>
                                                                <div className="pl-3">
                                                                    <span>{article.name}</span>
                                                                </div>
                                                            </td>
                                                            <td
                                                                dangerouslySetInnerHTML={{ __html: article.details }}
                                                            />
                                                            <td>
                                                                <button onClick={() => handleApprove(article._id)} type="submit" className='btn btn-warning'>Approve⇒</button>
                                                                <button className='btn btn-warning'>Delete</button>
                                                            </td>
                                                        </tr>
                                                    </>
                                            }
                                        </>}
                                    </React.Fragment>

                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ArticleApprove;