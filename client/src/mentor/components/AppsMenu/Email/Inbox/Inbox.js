import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import InboxMessage from "./InboxMessage";
import { Dropdown } from "react-bootstrap";
import PageTitle from "../../../../layouts/PageTitle";
import Cookies from "js-cookie";
import { Row, Card, Col, Button, Modal, Container } from "react-bootstrap";

const Inbox = () => {
    const [showModal, setShowModal] = useState(false);
    const [reload, setReload] = useState(false);

    const [contents, setContents] = useState([]);
    const [basicModal, setBasicModal] = useState(false);
    useEffect(() => {
        fetch(`http://localhost:4000/getusers?role=zahtjev`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                processData(
                    data.filter(
                        (request) =>
                            request.mentor_id == Cookies.get("ID") &&
                            request.mentor_potvrden == false
                    )
                );
            });
    }, [reload]);

    const processData = (data) => {
        const usersData = [];
        data.forEach((object) => {
            const userData = {};
            for (const [key, value] of Object.entries(object)) {
                if (!key.endsWith("_id")) {
                    userData[key] = value;
                } else {
                    const keyName = key.replace("_id", "");
                    if (value) {
                        fetch(
                            `http://localhost:4000/getusers?role=${keyName}&id=${value}`
                        )
                            .then((response) => response.json())
                            .then((rawdata) => {
                                const [data] = rawdata;
                                userData[keyName] = data.ime;
                            })
                            .catch((error) => {
                                throw new Error(error);
                            });
                    } else {
                        userData[keyName] = value;
                    }
                }
            }
            usersData.push(userData);
        });

        console.log(usersData);
        setTimeout(() => setContents(usersData), 200);
    };

    return (
        <Fragment>
            <PageTitle activeMenu='Inbox' motherMenu='Email' />

            <div className='row'>
                <div className='col-lg-12'>
                    <div className='card'>
                        <div className='card-body'>
                            <div
                                style={{ paddingLeft: "0" }}
                                className='email-right-box ml-0 ml-sm-4 ml-sm-0'>
                                <div
                                    role='toolbar'
                                    className='toolbar ml-1 ml-sm-0'>
                                    <div className='btn-group mb-1 mr-1 ml-1'>
                                        <div className='custom-control custom-checkbox pl-2'>
                                            <input
                                                type='checkbox'
                                                className='custom-control-input'
                                                id='checkbox1'
                                            />
                                            <label
                                                className='custom-control-label'
                                                htmlFor='checkbox1'></label>
                                        </div>
                                    </div>
                                    <div className='btn-group mb-1'>
                                        <button
                                            className='btn btn-primary light px-3'
                                            type='button'>
                                            <i className='ti-reload'></i>
                                        </button>
                                    </div>
                                </div>
                                <div className='email-list mt-3'>
                                    {/** Single Message */}
                                    {contents.length > 0
                                        ? contents.map((content, index) => (
                                              <InboxMessage
                                                  key={index}
                                                  content={content}
                                                  reload={reload}
                                                  setReload={
                                                      setReload
                                                  }></InboxMessage>
                                          ))
                                        : "No requests"}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Inbox;
