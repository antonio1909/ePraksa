import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import InboxMessage from "./InboxMessage";
import { Dropdown } from "react-bootstrap";
import PageTitle from "../../../../layouts/PageTitle";

const Inbox = () => {
    const Messages = [
        {
            text: "Ingredia Nutrisha, A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture",
            time: "11.49 am",
            icon: "fa fa-star",
        },
        {
            text: "Almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
            time: "11.49 am",
            icon: "fa fa-star",
        },
        {
            text: "Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of",
            time: "11.49 am",
            icon: "fa fa-star",
        },
        {
            text: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of",
            time: "11.49 am",
            icon: "fa fa-star",
        },
        {
            text: "Ingredia Nutrisha, A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture",
            time: "11.49 am",
            icon: "fa fa-star",
        },
        {
            text: "Almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
            time: "11.49 am",
            icon: "fa fa-star",
        },
        {
            text: "Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of",
            time: "11.49 am",
            icon: "fa fa-star",
        },
        {
            text: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of",
            time: "11.49 am",
            icon: "fa fa-star",
        },
        {
            text: "Ingredia Nutrisha, A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture",
            time: "11.49 am",
            icon: "fa fa-star",
        },
        {
            text: "Almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
            time: "11.49 am",
            icon: "fa fa-star",
        },
        {
            text: "Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of",
            time: "11.49 am",
            icon: "fa fa-star",
        },
        {
            text: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of",
            time: "11.49 am",
            icon: "fa fa-star",
        },
        {
            text: "Ingredia Nutrisha, A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture",
            time: "11.49 am",
            icon: "fa fa-star",
        },
        {
            text: "Almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
            time: "11.49 am",
            icon: "fa fa-star",
        },
        {
            text: "Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of",
            time: "11.49 am",
            icon: "fa fa-star",
        },
        {
            text: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of",
            time: "11.49 am",
            icon: "fa fa-star",
        },
        {
            text: "Ingredia Nutrisha, A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture",
            time: "11.49 am",
            icon: "fa fa-star",
        },
        {
            text: "Almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
            time: "11.49 am",
            icon: "fa fa-star",
        },
        {
            text: "Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of",
            time: "11.49 am",
            icon: "fa fa-star",
        },
        {
            text: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of",
            time: "11.49 am",
            icon: "fa fa-star",
        },
    ];
    return 1 ? (
        "No messages"
    ) : (
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
                                    {Messages.map((message, index) => (
                                        <InboxMessage
                                            key={index}
                                            id={index}
                                            message={message}></InboxMessage>
                                    ))}
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
