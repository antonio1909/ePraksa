import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { handleAddRequestToDb } from "../../../../mylib";

import { Row, Card, Col, Button, Modal, Container } from "react-bootstrap";
const SingleJob = ({ content }) => {
    const [mentorId, setMentorId] = useState();
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [addCard, setAddCard] = useState(false);
    useEffect(() => {
        fetch(
            `http://localhost:4000/getusers?role=student&id=${Cookies.get(
                "ID"
            )}`
        )
            .then((response) => response.json())
            .then((data) => {
                const [destructured] = data;
                setMentorId(destructured.mentor_id);
            });
    }, []);

    const handleRequestoForCompany = (id) => {
        console.log("did run");
        const data = {
            vrsta: "firma",
            student_id: Cookies.get("ID"),
            firma_id: id,
            mentor_id: mentorId,
        };
        handleAddRequestToDb(data);
    };

    return (
        <div className='col-xl-4 col-md-6'>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Zahtjev</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>{content.ime}</h4>
                    <p>
                        Uspješno ste poslali zahtijev za stručnu praksu <b></b>.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setShowModal(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
            <Modal show={showModal2} onHide={() => setShowModal2(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Odbijen Zahtjev</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>{content.ime}</h4>
                    <p>
                        Niste poslali zahtijev za stručnu praksu <b></b>.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setShowModal2(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
            <Modal className='modal fade' show={addCard} onHide={setAddCard}>
                <div className='' role='document'>
                    <div className=''>
                        <form
                            style={{
                                height: "40vh",
                                "overflow-y": "scroll",
                            }}>
                            <div className='modal-header'>
                                <h4 className='modal-title fs-20'>
                                    Pošalji zahtjev
                                </h4>
                                <button
                                    type='button'
                                    className='btn-close'
                                    onClick={() => {
                                        setAddCard(false);
                                        setShowModal2(true);
                                    }}
                                    data-dismiss='modal'>
                                    <span>Close</span>
                                </button>
                            </div>
                            <div className='modal-body'>
                                <i className='flaticon-cancel-12 close'></i>
                                <div className='add-contact-box'>
                                    <div className='add-contact-content'>
                                        <h1>
                                            Jesi li siguran da želiš{" "}
                                            <b>{content.ime} </b>
                                            za stručnu praksu.
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className='modal-footer'>
                                <button
                                    type='submit'
                                    className='btn btn-primary'
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setAddCard(false);
                                        setShowModal(true);
                                        handleRequestoForCompany(content.id);
                                    }}>
                                    Da
                                </button>
                                <button
                                    type='button'
                                    onClick={() => {
                                        setAddCard(false);
                                        setShowModal2(true);
                                    }}
                                    className='btn btn-danger'>
                                    {" "}
                                    <i className='flaticon-delete-1'></i> Ne
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
            <div className='card shadow_1'>
                <div className='card-body'>
                    <div className='media mb-2'>
                        <div className='media-body'>
                            <p className='mb-1'></p>
                            <h4 className='fs-20 text-black'>{content.ime}</h4>
                        </div>
                        <img
                            className='mb-4'
                            width='80'
                            height='80'
                            viewBox='0 0 80 80'
                            fill='none'
                            src={content.slika}
                        />
                    </div>
                    <span className='text-primary font-w500 d-block mb-3'>
                        Tehnologije: {content.tehnologije}
                    </span>
                    <p className='fs-14'>Telefon: {content.telefon}</p>
                    <div className='d-flex align-items-center mt-4'>
                        <button
                            disabled={mentorId == undefined}
                            onClick={() => {
                                setAddCard(true);
                            }}
                            className='btn btn-primary light btn-rounded mr-auto'>
                            PRIJAVA
                        </button>
                        <span className='text-black font-w500'>
                            Adresa: {content.adresa}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleJob;
