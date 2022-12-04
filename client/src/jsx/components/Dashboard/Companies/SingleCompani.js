import React from "react";
import { Link } from "react-router-dom";

const SingleCompani = (props) => {
    const { slika, ime, tehnologije, id } = props.company;
    console.log(id);
    const handleDeleteClick = () => {
        props.setReload(!props.reload);
        fetch(`http://localhost:4000/deleteuser?role=firma&id=${id}`);
    };

    return (
        <div className='col-xl-3 col-xxl-4 col-md-4 col-sm-6'>
            <div className='card text-center'>
                <div className='card-body'>
                    <img
                        className='mb-4'
                        width='80'
                        height='80'
                        viewBox='0 0 80 80'
                        fill='none'
                        src={slika}
                    />
                    <h6 className='font-w600 text-black fs-16 mb-1'>{ime}</h6>
                    <span className='fs-14'>{tehnologije}</span>
                    <div className='d-flex' style={{ paddingTop: "20px" }}>
                        {/* <Link
                            style={{ float: "right" }}
                            className='btn btn-secondary  shadow btn-xs sharp mr-2'>
                            <i className='fa fa-pencil'></i>
                        </Link> */}
                        <Link
                            onClick={handleDeleteClick}
                            className='btn btn-danger shadow btn-xs sharp'>
                            <i className='fa fa-trash'></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCompani;
