import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
//** Import Profile Img */
import profileImg from "../../../../images/avatar/1.jpg";
import {
    Row,
    Col,
    Card,
    Dropdown,
    DropdownButton,
    ButtonGroup,
    SplitButton,
} from "react-bootstrap";
import Cookies from "js-cookie";
import { handleUpdateUser } from "../../../../mylib";

const Profile = () => {
    const param = useParams();
    const { id } = param;
    const [isEditable, setIsEditable] = useState(false);
    const [user, setUser] = useState();
    const [editedContent, setEditedContent] = useState({});

    const [colleges, setColleges] = useState([]);
    const [selectedCollege, setSelectedCollege] = useState();
    const [reload, setReload] = useState(false);

    const path = window.location.pathname;
    const split = path.split("/");
    const role = split[2];

    useEffect(() => {
        fetch(`http://localhost:4000/getusers?role=${role}&id=${id}`)
            .then((response) => response.json())
            .then((rawdata) => {
                const [data] = rawdata;
                processData(data);
            })
            .catch((error) => {
                throw new Error(error);
            });

        fetch(`http://localhost:4000/getusers?role=fakultet`)
            .then((response) => response.json())
            .then((data) => {
                setColleges(data);
            });
    }, [reload]);

    const handleSelect = (e) => {
        handlePropChange("status", e);
    };

    const handleCollegeChange = (e) => {
        handlePropChange("fakultet", e);
    };

    const handleSelectCollege = (e) => {
        const parsed = JSON.parse(e);
        setSelectedCollege(parsed.collegename);
        const coll = {
            fakultet_id: parsed.collegeid,
        };
        setEditedContent({ ...editedContent, ...coll });
    };

    console.log(editedContent);

    const handleCancel = () => {
        setIsEditable(false);
        setEditedContent(null);
    };

    const handleSave = () => {
        setIsEditable(false);
        setEditedContent(null);
        const idCarry = { id: user.id };
        setUser(null);
        setReload(!reload);
        handleUpdateUser({ ...editedContent, ...idCarry }, "student");
    };

    const handlePropChange = (key, value) => {
        const changed = {};
        changed[key] = value;
        setEditedContent({ ...editedContent, ...changed });
    };

    console.log(editedContent);

    const processData = (data) => {
        const userData = {};
        for (const [key, value] of Object.entries(data)) {
            if (!key.endsWith("_id")) {
                userData[key] = value;
            } else {
                const keyName =
                    key == "odabrana_firma_id"
                        ? "firma"
                        : key.replace("_id", "");
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
        setTimeout(() => setUser(userData), 200);
    };

    return !user ? (
        <div id='preloader'>
            <div className='sk-three-bounce'>
                <div className='sk-child sk-bounce1'></div>
                <div className='sk-child sk-bounce2'></div>
                <div className='sk-child sk-bounce3'></div>
            </div>
        </div>
    ) : (
        <Fragment>
            <div className='row'>
                <div className='col-xl-9 col-xxl-8 col-lg-8'>
                    <div className='row'>
                        <div className='col-xl-12'>
                            <div className='card profile-card'>
                                <div className='card-header flex-wrap border-0 pb-0'>
                                    <h3 className='fs-24 text-black font-w600 mr-auto mb-2 pr-3'>
                                        {user.ime +
                                            (user.hasOwnProperty("prezime")
                                                ? " " + user.prezime
                                                : "")}
                                    </h3>
                                    {!isEditable ? (
                                        <Link
                                            className='btn btn-primary btn-rounded mb-2'
                                            to='#'
                                            onClick={() => setIsEditable(true)}>
                                            Edit
                                        </Link>
                                    ) : (
                                        <>
                                            <Link
                                                className='btn btn-primary btn-rounded mb-2  mr-2'
                                                to='#'
                                                onClick={handleCancel}>
                                                Cancel
                                            </Link>
                                            <Link
                                                className='btn btn-primary btn-rounded mb-2'
                                                to='#'
                                                onClick={handleSave}>
                                                Save Changes
                                            </Link>
                                        </>
                                    )}
                                </div>
                                <div className='card-body'>
                                    <form>
                                        <div className='mb-5'>
                                            <div className='title mb-4'>
                                                <span className='fs-18 text-black font-w600'>
                                                    Generalno
                                                </span>
                                            </div>
                                            <div className='row'>
                                                <div className='col-xl-4 col-sm-6'>
                                                    <div className='form-group'>
                                                        <label>Ime</label>
                                                        <input
                                                            type='text'
                                                            className='form-control'
                                                            placeholder='Unesi Ime'
                                                            readOnly={
                                                                !isEditable
                                                            }
                                                            onChange={(e) =>
                                                                handlePropChange(
                                                                    "ime",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            value={
                                                                editedContent?.ime ==
                                                                undefined
                                                                    ? user.ime
                                                                    : editedContent?.ime
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                <div className='col-xl-4 col-sm-6'>
                                                    <div className='form-group'>
                                                        <label>Prezime</label>
                                                        <input
                                                            type='text'
                                                            className='form-control'
                                                            placeholder='Unesi Prezime'
                                                            readOnly={
                                                                !isEditable
                                                            }
                                                            onChange={(e) =>
                                                                handlePropChange(
                                                                    "prezime",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            value={
                                                                editedContent?.prezime ==
                                                                undefined
                                                                    ? user.prezime
                                                                    : editedContent?.prezime
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                <div className='col-xl-4 col-sm-6'>
                                                    <div className='form-group'>
                                                        <label>Email</label>
                                                        <input
                                                            type='text'
                                                            className='form-control'
                                                            placeholder='Unesi Email'
                                                            readOnly={
                                                                !isEditable
                                                            }
                                                            onChange={(e) =>
                                                                handlePropChange(
                                                                    "email",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            value={
                                                                editedContent?.email ==
                                                                undefined
                                                                    ? user.email
                                                                    : editedContent?.email
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                <div className='col-xl-4 col-sm-6'>
                                                    <div className='form-group'>
                                                        <label>Status</label>
                                                        <DropdownButton
                                                            alignRight
                                                            disabled={
                                                                !isEditable
                                                            }
                                                            title={
                                                                editedContent?.hasOwnProperty(
                                                                    "status"
                                                                )
                                                                    ? editedContent?.status ==
                                                                      1
                                                                        ? "Active"
                                                                        : "Not active"
                                                                    : user.status ==
                                                                      1
                                                                    ? "Active"
                                                                    : "Not active"
                                                            }
                                                            id='dropdown-menu-align-right'
                                                            onSelect={
                                                                handleSelect
                                                            }>
                                                            <Dropdown.Item
                                                                eventKey={1}>
                                                                Active
                                                            </Dropdown.Item>
                                                            <Dropdown.Item
                                                                eventKey={0}>
                                                                Not active
                                                            </Dropdown.Item>
                                                        </DropdownButton>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='mb-5'>
                                            <div className='title mb-4'>
                                                <span className='fs-18 text-black font-w600'>
                                                    FAKULTET
                                                </span>
                                            </div>
                                            <div className='row'>
                                                <div className='col-xl-4 col-sm-6'>
                                                    <div className='form-group'>
                                                        <label>Fakultet</label>
                                                        <DropdownButton
                                                            alignRight
                                                            disabled={
                                                                !isEditable
                                                            }
                                                            title={
                                                                editedContent?.hasOwnProperty(
                                                                    "fakultet_id"
                                                                )
                                                                    ? selectedCollege
                                                                    : user.fakultet
                                                            }
                                                            id='dropdown-menu-align-right'
                                                            onSelect={
                                                                handleSelectCollege
                                                            }>
                                                            {colleges.map(
                                                                (college) => (
                                                                    <Dropdown.Item
                                                                        id={
                                                                            college.id
                                                                        }
                                                                        eventKey={JSON.stringify(
                                                                            {
                                                                                collegeid:
                                                                                    college.id,
                                                                                collegename:
                                                                                    college.ime,
                                                                            }
                                                                        )}>
                                                                        {
                                                                            college.ime
                                                                        }
                                                                    </Dropdown.Item>
                                                                )
                                                            )}
                                                        </DropdownButton>
                                                    </div>
                                                </div>
                                                <div className='col-xl-4 col-sm-6'>
                                                    <div className='form-group'>
                                                        <label>Godina</label>
                                                        <input
                                                            type='text'
                                                            className='form-control'
                                                            placeholder='Unesi Akademsku Godinu'
                                                            readOnly={
                                                                !isEditable
                                                            }
                                                            onChange={(e) =>
                                                                handlePropChange(
                                                                    "godina",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            value={
                                                                editedContent?.godina ==
                                                                undefined
                                                                    ? user.godina
                                                                    : editedContent?.godina
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='mb-5'>
                                            <div className='title mb-4'>
                                                <span className='fs-18 text-black font-w600'>
                                                    Zivotopis
                                                </span>
                                            </div>
                                            <div className='row'>
                                                <div className='col-xl-12'>
                                                    <div className='form-group'>
                                                        <label>
                                                            Napišite nešto o
                                                            studentu
                                                        </label>
                                                        <textarea
                                                            className='form-control'
                                                            rows='6'
                                                            readOnly={
                                                                !isEditable
                                                            }
                                                            onChange={(e) =>
                                                                handlePropChange(
                                                                    "zivotopis",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            value={
                                                                editedContent?.zivotopis ==
                                                                undefined
                                                                    ? user.zivotopis
                                                                    : editedContent?.zivotopis
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='mb-5'>
                                            <div className='title mb-4'>
                                                <span className='fs-18 text-black font-w600'>
                                                    Podaci o praksi
                                                </span>
                                            </div>
                                            <div className='row'>
                                                <div className='col-xl-4 col-sm-6'>
                                                    <div className='form-group'>
                                                        <label>Mentor</label>
                                                        <input
                                                            type='text'
                                                            className='form-control'
                                                            placeholder='Unesi Email'
                                                            readOnly={true}
                                                            onChange={(e) =>
                                                                handlePropChange(
                                                                    "mentor",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            value={
                                                                editedContent?.mentor ==
                                                                undefined
                                                                    ? user.mentor ==
                                                                      null
                                                                        ? "Student nije odabrao mentora"
                                                                        : user.mentor
                                                                    : editedContent?.mentor
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                <div className='col-xl-4 col-sm-6'>
                                                    <div className='form-group'>
                                                        <label>Firma</label>
                                                        <input
                                                            type='text'
                                                            className='form-control'
                                                            placeholder='Unesi Email'
                                                            readOnly={true}
                                                            onChange={(e) =>
                                                                handlePropChange(
                                                                    "firma",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            value={
                                                                editedContent?.firma ==
                                                                undefined
                                                                    ? user.firma ==
                                                                      null
                                                                        ? "Student nije odabrao firmu"
                                                                        : user.firma
                                                                    : editedContent?.firma
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='mb-5'>
                                            <div className='title mb-4'>
                                                <span className='fs-18 text-black font-w600'>
                                                    Podaci za prijavu
                                                </span>
                                            </div>
                                            <div className='row'>
                                                <div className='col-xl-4 col-sm-6'>
                                                    <div className='form-group'>
                                                        <label>
                                                            Korisničko ime
                                                        </label>
                                                        <input
                                                            type='text'
                                                            className='form-control'
                                                            placeholder='Unesi Email'
                                                            readOnly={
                                                                !isEditable
                                                            }
                                                            onChange={(e) =>
                                                                handlePropChange(
                                                                    "korisnicko_ime",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            value={
                                                                editedContent?.korisnicko_ime ==
                                                                undefined
                                                                    ? user.korisnicko_ime
                                                                    : editedContent?.korisnicko_ime
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                <div className='col-xl-4 col-sm-6'>
                                                    <div className='form-group'>
                                                        <label>Lozinka</label>
                                                        <input
                                                            type='text'
                                                            className='form-control'
                                                            placeholder='Unesi lozniku'
                                                            readOnly={
                                                                !isEditable
                                                            }
                                                            onChange={(e) =>
                                                                handlePropChange(
                                                                    "lozinka",
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            value={
                                                                editedContent?.lozinka ==
                                                                undefined
                                                                    ? user.lozinka
                                                                    : editedContent?.lozinka
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-xl-3 col-xxl-4 col-lg-4'>
                    <div className='row'>
                        <div className='col-xl-12'>
                            <div className='card  flex-lg-column flex-md-row '>
                                <div className='card-body card-body  text-center border-bottom profile-bx'>
                                    <div className='profile-image mb-4'>
                                        <img
                                            src={profileImg}
                                            className='rounded-circle'
                                            alt=''
                                        />
                                    </div>
                                    <h4 className='fs-22 text-black mb-1'>
                                        {user.ime}
                                    </h4>
                                    <p className='mb-4'>Programmer - Bakalar</p>
                                </div>
                                <div className='card-body  border-left'>
                                    <div className='d-flex mb-3 align-items-center'>
                                        <p style={{ paddingRight: "10px" }}>
                                            <b>Fakultet: </b>
                                        </p>
                                        <p>{user.fakultet}</p>
                                    </div>
                                    <div className='d-flex mb-3 align-items-center'>
                                        <p style={{ paddingRight: "10px" }}>
                                            <b>Smjer: </b>{" "}
                                        </p>
                                        <p>{user.fakultet_tecaj}</p>
                                    </div>
                                    <div className='d-flex mb-3 align-items-center'>
                                        <p style={{ paddingRight: "10px" }}>
                                            <b>Godina: </b>
                                        </p>
                                        <p>{user.godina}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Profile;
