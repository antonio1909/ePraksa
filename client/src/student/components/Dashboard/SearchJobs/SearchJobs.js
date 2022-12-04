import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
//** Import SVG Image */
import {
    Icon01,
    Icon02,
    Icon03,
    Icon04,
    Icon05,
    Icon06,
    Icon07,
    Icon08,
    Icon09,
} from "./SearchJobsIcon";
//**  Import Single Job Components */
import SingleJob from "./SingleJob";
import { Dropdown } from "react-bootstrap";
import Cookies from "js-cookie";

const SearchJobs = () => {
    const [contents, setContents] = useState([]);
    const [mentorId, setMentorId] = useState();

    useEffect(() => {
        fetch(`http://localhost:4000/getusers?role=firma`)
            .then((response) => response.json())
            .then((data) => {
                setTimeout(() => setContents(data), 200);
            });
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

    const JobData = [
        {
            subTitle: "Maximoz Team",
            title: "Database Progammer",
            icon: Icon01,
            lowRate: "14,000",
            highRate: "25,000",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
            locationPlace: "London",
            locationCountry: "England",
        },
        {
            subTitle: "Colo Colo Studios",
            title: "Intern Programmer",
            icon: Icon02,
            lowRate: "14,000",
            highRate: "25,000",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
            locationPlace: "London",
            locationCountry: "England",
        },
        {
            subTitle: "Kleanify Ltd.",
            title: "PHP Programmer",
            icon: Icon03,
            lowRate: "14,000",
            highRate: "25,000",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
            locationPlace: "London",
            locationCountry: "England",
        },
        {
            subTitle: "Kitakita Crew Ltd.",
            title: "Frontend Programmer",
            icon: Icon04,
            lowRate: "14,000",
            highRate: "25,000",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
            locationPlace: "London",
            locationCountry: "England",
        },
        {
            subTitle: "Madju Djaja Studios",
            title: "Backend Programmer",
            icon: Icon05,
            lowRate: "14,000",
            highRate: "25,000",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
            locationPlace: "London",
            locationCountry: "England",
        },
        {
            subTitle: "Junaids Team",
            title: "Full-Stack Programmer",
            icon: Icon06,
            lowRate: "14,000",
            highRate: "25,000",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
            locationPlace: "London",
            locationCountry: "England",
        },
        {
            subTitle: "Maximoz Team",
            title: "Intern Programmer",
            icon: Icon07,
            lowRate: "14,000",
            highRate: "25,000",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
            locationPlace: "London",
            locationCountry: "England",
        },
        {
            subTitle: "Maximoz Team",
            title: "Database Progammer",
            icon: Icon08,
            lowRate: "14,000",
            highRate: "25,000",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
            locationPlace: "London",
            locationCountry: "England",
        },
        {
            subTitle: "Maximoz Team",
            title: "Frontend Programmer",
            icon: Icon09,
            lowRate: "14,000",
            highRate: "25,000",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
            locationPlace: "London",
            locationCountry: "England",
        },
    ];
    return contents.length == 0 ? (
        <div id='preloader'>
            <div className='sk-three-bounce'>
                <div className='sk-child sk-bounce1'></div>
                <div className='sk-child sk-bounce2'></div>
                <div className='sk-child sk-bounce3'></div>
            </div>
        </div>
    ) : (
        <Fragment>
            <div className='d-flex pb-3 mb-4 border-bottom flex-wrap align-items-center'>
                <Link className='btn btn-primary light btn-rounded mr-2 mb-2'>
                    Suggestions
                </Link>
                <Link className='btn btn-primary light btn-rounded mr-2 mb-2'>
                    Your Skill
                </Link>
                <Link className='btn btn-primary btn-rounded mr-2 mb-2'>
                    Programmer
                </Link>
                <Link className='btn btn-primary light btn-rounded mr-2 mb-2'>
                    Software Engineer
                </Link>
                <Link className='btn btn-primary light btn-rounded mr-2 mb-2'>
                    Photographer
                </Link>
                <Link className='btn btn-primary light btn-rounded mr-2 mb-2'>
                    Digital Marketing
                </Link>
            </div>
            <div className='d-flex flex-wrap mb-4 align-items-center'>
                <div className='mr-auto mb-2 pr-2'>
                    {mentorId == undefined ? (
                        <h6 className='text-red fs-20 font-w600 mb-1'>
                            Prvo moraš da imaš mentora!
                        </h6>
                    ) : (
                        <></>
                    )}
                    <h6 className='text-black fs-16 font-w600 mb-1'>
                        Prikazano 246 firmi za praksu
                    </h6>
                    <span className='fs-14'>Prema tvojim sposobnostima</span>
                </div>
            </div>
            <div className='row'>
                {/* Map Single Job Components */}
                {contents?.map((content, i) => (
                    <SingleJob content={content} key={i}></SingleJob>
                ))}
            </div>
        </Fragment>
    );
};

export default SearchJobs;
