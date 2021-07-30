import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';

import './ContactList.css'
const ContactList = () => {
    return (
        <section>
            <Navbar></Navbar>
            <div className="container-fluid pt-5" style={{ marginTop: '100px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h5 className="pb-2">All Contact lists</h5>
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>Otto</td>
                                        <td>
                                            <button type="button" className="btn btn-warning">
                                            <i class="fas fa-edit"></i>
                                            </button>
                                             &nbsp;
                                             <button type="button" className="btn btn-danger">
                                             <i class="far fa-trash-alt"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    );
};

export default ContactList;