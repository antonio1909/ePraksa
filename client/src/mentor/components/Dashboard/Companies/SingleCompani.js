import React from "react";
import { Link } from "react-router-dom";

const SingleCompani = (props) => {
    const { slika, ime, tehnologije } = props.company;
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
                </div>
            </div>
        </div>
    );
};

export default SingleCompani;
