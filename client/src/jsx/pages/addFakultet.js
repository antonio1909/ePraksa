import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { nanoid } from "nanoid";
import swal from "sweetalert";
import PageTitle from "../layouts/PageTitle";
import pic1 from "./../../images/profile/small/pic1.jpg";
import Editable from "./Editable";
import { handleKeyTranslation, handleAddUserToDb } from "../../mylib";
import {
    Row,
    Col,
    Card,
    Dropdown,
    DropdownButton,
    ButtonGroup,
    SplitButton,
} from "react-bootstrap";

const tableList = [
    {
        id: "1",
        name: "Tiger Nixon",
        department: "Architect",
        gender: "Male",
        education: "M.COM., M.B.A",
        mobile: "12345 67890",
        email: "info1@example.com",
    },
    {
        id: "2",
        name: "Gloria Little",
        department: " Administrator",
        gender: "Male",
        education: "BTech, MTech",
        mobile: "09876 54321",
        email: "info2@example.com",
    },
    {
        id: "3",
        name: "Bradley Greer",
        department: "Software Engineer",
        gender: "Male",
        education: "B.CA M.CA",
        mobile: "98765 67890",
        email: "info3@example.com",
    },
    {
        id: "4",
        name: "Gloria Little",
        department: " Administrator",
        gender: "Male",
        education: "BTech, MTech",
        mobile: "09876 54321",
        email: "info4@example.com",
    },
    {
        id: "5",
        name: "Tiger Nixon",
        department: "Architect",
        gender: "Male",
        education: "M.COM., M.B.A",
        mobile: "12345 67890",
        email: "info5@example.com",
    },
    {
        id: "6",
        name: "Bradley Greer",
        department: "Software Engineer",
        gender: "Male",
        education: "B.CA M.CA",
        mobile: "98765 67890",
        email: "info6@example.com",
    },
];

const Todo = () => {
    const [contents, setContents] = useState([]);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        const path = window.location.pathname;
        const pathToArr = path.split("/");
        const selected = pathToArr[pathToArr.length - 1].slice(0, -1);
        console.log("run");
        fetch(`http://localhost:4000/getusers?role=${selected}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setTimeout(() => setContents(data), 200);
            });

        fetch(`http://localhost:4000/getusers?role=fakultet`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                const names = {};
                data.forEach((fakultet) => {
                    names[fakultet.id] = fakultet.ime;
                });
                setColleges(data);
                console.log(names);
                setCollegeName(names);
            });
    }, [reload]);

    const [colleges, setColleges] = useState([]);
    const [collegeName, setCollegeName] = useState();

    // delete data
    const handleDeleteClick = (contentId) => {
        setReload(!reload);
        fetch(`http://localhost:4000/deleteuser?role=fakultet&id=${contentId}`);
    };

    //Modal box
    const [addCard, setAddCard] = useState(false);
    //Add data
    const [addFormData, setAddFormData] = useState({
        name: "",
        address: "",
        phone: "",
        courses: "",
        email: "",
    });

    const [selectedCollege, setSelectedCollege] = useState();

    // Add contact function
    const handleAddFormChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;
        setAddFormData(newFormData);
    };

    //Add Submit data
    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        var error = false;
        var errorMsg = "";

        const formValues = Object.entries(addFormData);

        for (const [key, value] of formValues) {
            if (!error) {
                if (value === "") {
                    error = true;
                    errorMsg = `Molimo unesite ${handleKeyTranslation(key)}!`;
                }
            }
        }

        if (!error) {
            const newContent = {
                id: nanoid(),
                name: "",
                address: "",
                phone: "",
                courses: "",
                email: "",
            };
            for (const [key, val] of Object.entries(addFormData)) {
                addFormData[key] = val.replace(",", " - ");
            }
            handleAddUserToDb(addFormData, "fakultet");
            // .then((response) => {
            //     if (response === "OK") {
            //         const newContents = [...contents, newContent];
            //         setContents(newContents);
            //         setAddCard(false);
            //         swal("Odlično!", "Uspješno dodan", "success");
            //         addFormData.name =
            //             addFormData.department =
            //             addFormData.gender =
            //             addFormData.education =
            //             addFormData.mobile =
            //             addFormData.email =
            //                 "";
            //     } else {
            //         swal("Oops", response, "error");
            //     }
            // });
            setReload(!reload);
            const newContents = [...contents, newContent];
            console.log(newContent);
            setContents(newContents);
            setAddCard(false);
            swal("Odlično!", "Uspješno dodan", "success");
        } else {
            swal("Oops", errorMsg, "error");
        }
    };

    //Edit start
    //const [editModal, setEditModal] = useState(false);
    // Edit function editable page loop
    const [editContentId, setEditContentId] = useState(null);

    // Edit function button click to edit
    const handleEditClick = (event, content) => {
        event.preventDefault();
        setEditContentId(content.id);
        const formValues = {
            name: content.name,
            department: content.department,
            gender: content.gender,
            education: content.education,
            mobile: content.mobile,
            email: content.email,
        };
        setEditFormData(formValues);
        //setEditModal(true);
    };

    // edit  data
    const [editFormData, setEditFormData] = useState({
        name: "",
        department: "",
        gender: "",
        education: "",
        mobile: "",
        email: "",
    });

    //update data function
    const handleEditFormChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;
        setEditFormData(newFormData);
    };

    // edit form data submit
    const handleEditFormSubmit = (event) => {
        event.preventDefault();
        const editedContent = {
            id: editContentId,
            name: editFormData.name,
            department: editFormData.department,
            gender: editFormData.gender,
            education: editFormData.education,
            mobile: editFormData.mobile,
            email: editFormData.email,
        };
        const newContents = [...contents];
        const index = contents.findIndex(
            (content) => content.id === editContentId
        );
        newContents[index] = editedContent;
        setContents(newContents);
        setEditContentId(null);
        // setEditModal(false);
    };
    //Cencel button to same data
    const handleCancelClick = () => {
        setEditContentId(null);
    };

    return contents.length == 0 ? (
        <>
            <div id='preloader'>
                <div className='sk-three-bounce'>
                    <div className='sk-child sk-bounce1'></div>
                    <div className='sk-child sk-bounce2'></div>
                    <div className='sk-child sk-bounce3'></div>
                </div>
            </div>
        </>
    ) : (
        <>
            <PageTitle activeMenu='Fakulteti' motherMenu='Lista' />
            <div className='col-12'>
                <Modal
                    className='modal fade'
                    show={addCard}
                    onHide={setAddCard}>
                    <div className='' role='document'>
                        <div className=''>
                            <form
                                style={{
                                    height: "90vh",
                                    "overflow-y": "scroll",
                                }}>
                                <div className='modal-header'>
                                    <h4 className='modal-title fs-20'>
                                        Dodaj fakultet
                                    </h4>
                                    <button
                                        type='button'
                                        className='btn-close'
                                        onClick={() => setAddCard(false)}
                                        data-dismiss='modal'>
                                        <span>Close</span>
                                    </button>
                                </div>
                                <div className='modal-body'>
                                    <i className='flaticon-cancel-12 close'></i>
                                    <div className='add-contact-box'>
                                        <div className='add-contact-content'>
                                            <div className='form-group mb-3'>
                                                <label className='text-black font-w500'>
                                                    Ime
                                                </label>
                                                <div className='contact-name'>
                                                    <input
                                                        type='text'
                                                        className='form-control'
                                                        autocomplete='off'
                                                        name='name'
                                                        required='required'
                                                        onChange={
                                                            handleAddFormChange
                                                        }
                                                        placeholder='Ime'
                                                    />
                                                    <span className='validation-text'></span>
                                                </div>
                                            </div>

                                            <div className='form-group mb-3'>
                                                <label className='text-black font-w500'>
                                                    Adresa
                                                </label>
                                                <div className='contact-name'>
                                                    <input
                                                        type='text'
                                                        className='form-control'
                                                        autocomplete='off'
                                                        name='address'
                                                        required='required'
                                                        onChange={
                                                            handleAddFormChange
                                                        }
                                                        placeholder='Adresa'
                                                    />
                                                    <span className='validation-text'></span>
                                                </div>
                                            </div>
                                            <div className='form-group mb-3'>
                                                <label className='text-black font-w500'>
                                                    Telefon
                                                </label>
                                                <div className='contact-name'>
                                                    <input
                                                        type='text'
                                                        className='form-control'
                                                        autocomplete='off'
                                                        name='phone'
                                                        required='required'
                                                        onChange={
                                                            handleAddFormChange
                                                        }
                                                        placeholder='Telefon'
                                                    />
                                                    <span className='validation-text'></span>
                                                </div>
                                            </div>
                                            <div className='form-group mb-3'>
                                                <label className='text-black font-w500'>
                                                    Email
                                                </label>
                                                <div className='contact-name'>
                                                    <input
                                                        type='text'
                                                        className='form-control'
                                                        autocomplete='off'
                                                        name='email'
                                                        required='required'
                                                        onChange={
                                                            handleAddFormChange
                                                        }
                                                        placeholder='Email'
                                                    />
                                                    <span className='validation-text'></span>
                                                </div>
                                            </div>
                                            <div className='form-group mb-3'>
                                                <label className='text-black font-w500'>
                                                    Tecajevi
                                                </label>
                                                <div className='contact-name'>
                                                    <input
                                                        type='text'
                                                        className='form-control'
                                                        autocomplete='off'
                                                        name='courses'
                                                        required='required'
                                                        onChange={
                                                            handleAddFormChange
                                                        }
                                                        placeholder='Tecajevi'
                                                    />
                                                    <span className='validation-text'></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='modal-footer'>
                                    <button
                                        type='submit'
                                        className='btn btn-primary'
                                        onClick={handleAddFormSubmit}>
                                        Add
                                    </button>
                                    <button
                                        type='button'
                                        onClick={() => setAddCard(false)}
                                        className='btn btn-danger'>
                                        {" "}
                                        <i className='flaticon-delete-1'></i>{" "}
                                        Discard
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Modal>
                <div className='card'>
                    <div className='card-header'>
                        <h4 className='card-title'>Profile Datatable</h4>
                        <Link
                            className='btn btn-primary shadow btn-xs sharp mr-2'
                            onClick={() => setAddCard(true)}>
                            <i className='fa fa-plus'></i>
                        </Link>
                    </div>
                    <div className='card-body'>
                        <div className='w-100 table-responsive'>
                            <div
                                id='example_wrapper'
                                className='dataTables_wrapper'>
                                <form onSubmit={handleEditFormSubmit}>
                                    <table
                                        id='example'
                                        className='display w-100 dataTable'>
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>Ime</th>
                                                <th>Adresa</th>
                                                <th>Telefon</th>
                                                <th>Email</th>
                                                <th>Tecajevi</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {contents.map((content) => (
                                                <>
                                                    {editContentId ===
                                                    content.id ? (
                                                        <Editable
                                                            editFormData={
                                                                editFormData
                                                            }
                                                            handleEditFormChange={
                                                                handleEditFormChange
                                                            }
                                                            handleCancelClick={
                                                                handleCancelClick
                                                            }
                                                        />
                                                    ) : (
                                                        <tr>
                                                            <td>
                                                                {/* <img
                                                                    className='rounded-circle'
                                                                    width='35'
                                                                    src={pic1}
                                                                    alt=''
                                                                /> */}
                                                            </td>
                                                            <Link
                                                                to={`fakultet/${content.id}`}>
                                                                <td>
                                                                    {
                                                                        content.ime
                                                                    }
                                                                </td>
                                                            </Link>
                                                            <td>
                                                                {content.adresa}
                                                            </td>
                                                            <td>
                                                                {
                                                                    content.telefon
                                                                }
                                                            </td>
                                                            <td>
                                                                {content.email}
                                                            </td>
                                                            <td>
                                                                <strong>
                                                                    {
                                                                        content.tecajevi
                                                                    }
                                                                </strong>
                                                            </td>

                                                            <td>
                                                                <div className='d-flex'>
                                                                    <Link
                                                                        className='btn btn-danger shadow btn-xs sharp'
                                                                        onClick={() =>
                                                                            handleDeleteClick(
                                                                                content.id
                                                                            )
                                                                        }>
                                                                        <i className='fa fa-trash'></i>
                                                                    </Link>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )}
                                                </>
                                            ))}
                                        </tbody>
                                    </table>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Todo;
