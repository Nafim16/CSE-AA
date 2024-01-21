import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const NewsApprove = () => {

    const [News, setNews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/news')
            .then(res => res.json())
            .then(data => setNews(data))
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
                fetch(`http://localhost:5000/news/${_id}`, {
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
                                {News.map(news => (

                                    <React.Fragment key={news._id}>
                                        {news.approval === 'WaitingForApprove' && <>
                                            <tr>
                                                <td>
                                                    <div className="pl-3">
                                                        <span>{news.name}</span>
                                                    </div>
                                                </td>
                                                <td
                                                    dangerouslySetInnerHTML={{ __html: news.post }}
                                                />
                                                <td>
                                                    <button onClick={() => handleApprove(news._id)} type="submit" className='btn btn-warning'>Approve⇒</button>
                                                    <button className='btn btn-warning'>Delete</button>
                                                </td>
                                            </tr>
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

export default NewsApprove;