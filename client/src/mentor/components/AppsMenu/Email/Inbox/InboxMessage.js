import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Card, Col, Button, Modal, Container } from "react-bootstrap";

const InboxMessage = ({
    content: { id, vrsta, student, firma },
    reload,
    setReload,
}) => {
    const extension =
        vrsta == "mentor"
            ? `želi da budete njegov mentor.`
            : `je zatražio praksu u firmi ${firma}.`;
    const message = `${student} ` + extension;
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const handleRequest = (decision) => {
        console.log("run");
        fetch(
            `http://localhost:4000/handlerequest?id=${id}&vrsta=${vrsta}&caller=mentor&decision=${decision}`
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setReload(!reload);
            })
            .catch((error) => console.log(error));
    };

    return (
        <div
            className='message'
            style={{
                marginBottom: "20px",
                pointerEvents: "none",
                zIndex: "1",
            }}>
            {/* Create modal */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Zahtjev</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>{student}</h4>
                    <p>
                        Prihvatili ste zahtjev za stručnu praksu{" "}
                        <b>{student}</b>.
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
                    <h4>{student}</h4>
                    <p>
                        Odbili ste zahtjev za stručnu praksu <b>{student}</b>.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setShowModal2(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
            <div>
                <div className='d-flex message-single'>
                    <div className='pl-1 align-self-center'>
                        <div className='custom-control custom-checkbox'>
                            <input
                                type='checkbox'
                                className='custom-control-input'
                                id={`checkbox0${id}`}
                            />
                            <label
                                className='custom-control-label'
                                htmlFor={`checkbox0${id}`}></label>
                        </div>
                    </div>
                    <div className='ml-2'>
                        <button className='border-0 bg-transparent align-middle p-0'>
                            <i className={"fa fa-star"} aria-hidden='true'></i>
                        </button>
                    </div>
                </div>

                <Link className='col-mail col-mail-2'>
                    <div
                        style={{ width: "min-content", zIndex: 1 }}
                        className='subject'>
                        {message}
                    </div>
                    <div
                        style={{
                            float: "right",
                            zIndex: "1000",
                            pointerEvents: "auto",
                            position: "relative",
                        }}>
                        <button
                            onClick={() => {
                                handleRequest("accepted");
                                setShowModal(true);
                            }}
                            className='btn btn-success'>
                            Prihvati
                        </button>
                        <button
                            onClick={() => {
                                handleRequest("rejected");
                                setShowModal2(true);
                            }}
                            className='btn btn-danger'>
                            Odbij
                        </button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default InboxMessage;
