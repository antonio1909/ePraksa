import React, { Fragment } from "react";
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

const SearchJobs = () => {
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
    return (
        <Fragment>
            <div className='d-flex align-items-center flex-wrap search-job bg-white rounded py-3 px-md-3 px-0 mb-4'>
                <div className='col-lg-3 border-right'>
                    <Dropdown className='dropdown mb-0 custom-dropdown d-block'>
                        <Dropdown.Toggle
                            variant=''
                            className='btn d-flex align-items-center rounded-0 svg-btn px-0'
                            data-toggle='dropdown'>
                            <svg
                                className='min-w20'
                                width='20'
                                height='24'
                                viewBox='0 0 20 24'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M10 0C4.93398 0 0.8125 4.12148 0.8125 9.1875C0.8125 10.8091 1.24094 12.4034 2.05145 13.7979C2.24041 14.123 2.45162 14.4398 2.67934 14.7396L9.60081 24H10.3991L17.3207 14.7397C17.5483 14.4398 17.7595 14.1231 17.9485 13.7979C18.7591 12.4034 19.1875 10.8091 19.1875 9.1875C19.1875 4.12148 15.066 0 10 0ZM10 12.2344C8.31995 12.2344 6.95312 10.8675 6.95312 9.1875C6.95312 7.50745 8.31995 6.14062 10 6.14062C11.68 6.14062 13.0469 7.50745 13.0469 9.1875C13.0469 10.8675 11.68 12.2344 10 12.2344Z'
                                    fill='#rgba(255,0,0,0.72)'
                                />
                            </svg>
                            <div className='text-left ml-3'>
                                <span className='d-block fs-16 text-black'>
                                    Around You
                                </span>
                            </div>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className='dropdown-menu dropdown-menu-right'>
                            <Dropdown.Item
                                className='dropdown-item'
                                to='/search-job'>
                                4 June 2020 - 4 July 2020
                            </Dropdown.Item>
                            <Link className='dropdown-item' to='/search-job'>
                                5 july 2020 - 4 Aug 2020
                            </Link>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className='col-lg-9 d-md-flex'>
                    <input
                        className='form-control input-rounded mr-auto mb-md-0 mb-3'
                        type='text'
                        placeholder='Search by Title, Company or any jobs keyword...'
                    />
                    <Link
                        to='/search-job'
                        className='bg-light btn btn-rounded text-primary mr-3'>
                        <svg
                            className='min-w20 mr-3'
                            width='20'
                            height='20'
                            viewBox='0 0 20 20'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                                d='M1 4H12C12 4.53043 12.2107 5.03914 12.5858 5.41421C12.9609 5.78929 13.4696 6 14 6H16C16.5304 6 17.0391 5.78929 17.4142 5.41421C17.7893 5.03914 18 4.53043 18 4H19C19.2652 4 19.5196 3.89464 19.7071 3.70711C19.8946 3.51957 20 3.26522 20 3C20 2.73478 19.8946 2.48043 19.7071 2.29289C19.5196 2.10536 19.2652 2 19 2H18C18 1.46957 17.7893 0.960859 17.4142 0.585786C17.0391 0.210714 16.5304 0 16 0H14C13.4696 0 12.9609 0.210714 12.5858 0.585786C12.2107 0.960859 12 1.46957 12 2H1C0.734784 2 0.48043 2.10536 0.292893 2.29289C0.105357 2.48043 0 2.73478 0 3C0 3.26522 0.105357 3.51957 0.292893 3.70711C0.48043 3.89464 0.734784 4 1 4ZM14 2H16V3V4H14V2ZM19 9H10C10 8.46957 9.78929 7.96086 9.41421 7.58579C9.03914 7.21071 8.53043 7 8 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9H1C0.734784 9 0.48043 9.10536 0.292893 9.29289C0.105357 9.48043 0 9.73478 0 10C0 10.2652 0.105357 10.5196 0.292893 10.7071C0.48043 10.8946 0.734784 11 1 11H4C4 11.5304 4.21071 12.0391 4.58579 12.4142C4.96086 12.7893 5.46957 13 6 13H8C8.53043 13 9.03914 12.7893 9.41421 12.4142C9.78929 12.0391 10 11.5304 10 11H19C19.2652 11 19.5196 10.8946 19.7071 10.7071C19.8946 10.5196 20 10.2652 20 10C20 9.73478 19.8946 9.48043 19.7071 9.29289C19.5196 9.10536 19.2652 9 19 9ZM6 11V9H8V10V11H6ZM19 16H16C16 15.4696 15.7893 14.9609 15.4142 14.5858C15.0391 14.2107 14.5304 14 14 14H12C11.4696 14 10.9609 14.2107 10.5858 14.5858C10.2107 14.9609 10 15.4696 10 16H1C0.734784 16 0.48043 16.1054 0.292893 16.2929C0.105357 16.4804 0 16.7348 0 17C0 17.2652 0.105357 17.5196 0.292893 17.7071C0.48043 17.8946 0.734784 18 1 18H10C10 18.5304 10.2107 19.0391 10.5858 19.4142C10.9609 19.7893 11.4696 20 12 20H14C14.5304 20 15.0391 19.7893 15.4142 19.4142C15.7893 19.0391 16 18.5304 16 18H19C19.2652 18 19.5196 17.8946 19.7071 17.7071C19.8946 17.5196 20 17.2652 20 17C20 16.7348 19.8946 16.4804 19.7071 16.2929C19.5196 16.1054 19.2652 16 19 16ZM12 18V16H14V17V18H12Z'
                                fill='#rgba(255,0,0,0.72)'
                            />
                        </svg>
                        FILTER
                    </Link>
                    <Link
                        to='/search-job'
                        className='btn btn-primary btn-rounded'>
                        <i className='las la-search scale5 mr-3'></i>FIND
                    </Link>
                </div>
            </div>
            <div className='d-flex pb-3 mb-4 border-bottom flex-wrap align-items-center'>
                <Link
                    to='/search-job'
                    className='btn btn-primary light btn-rounded mr-2 mb-2'>
                    Suggestions
                </Link>
                <Link
                    to='/search-job'
                    className='btn btn-primary light btn-rounded mr-2 mb-2'>
                    Your Skill
                </Link>
                <Link
                    to='/search-job'
                    className='btn btn-primary btn-rounded mr-2 mb-2'>
                    Programmer
                </Link>
                <Link
                    to='/search-job'
                    className='btn btn-primary light btn-rounded mr-2 mb-2'>
                    Software Engineer
                </Link>
                <Link
                    to='/search-job'
                    className='btn btn-primary light btn-rounded mr-2 mb-2'>
                    Photographer
                </Link>
                <Link
                    to='/search-job'
                    className='btn btn-primary light btn-rounded mr-2 mb-2'>
                    Digital Marketing
                </Link>
            </div>
            <div className='d-flex flex-wrap mb-4 align-items-center'>
                <div className='mr-auto mb-2 pr-2'>
                    <h6 className='text-black fs-16 font-w600 mb-1'>
                        Showing 246 Jobs Results
                    </h6>
                    <span className='fs-14'>Based your preferences</span>
                </div>
                <div className='custom-control check-switch custom-checkbox mr-4 mb-2'>
                    <input
                        type='checkbox'
                        className='custom-control-input'
                        id='customCheck9'
                    />
                    <label
                        className='custom-control-label'
                        htmlFor='customCheck9'>
                        Fulltime
                    </label>
                </div>
                <div className='custom-control check-switch custom-checkbox mr-5 mb-2'>
                    <input
                        type='checkbox'
                        className='custom-control-input'
                        id='customCheck1'
                    />
                    <label
                        className='custom-control-label'
                        htmlFor='customCheck1'>
                        Freelance
                    </label>
                </div>
                <div className='custom-control custom-switch toggle-switch text-right mr-4 mb-2'>
                    <input
                        type='checkbox'
                        className='custom-control-input'
                        id='customSwitch11'
                    />
                    <label
                        className='custom-control-label'
                        htmlFor='customSwitch11'>
                        Details
                    </label>
                </div>
                <div className='custom-control custom-switch toggle-switch text-right mr-5 mb-2'>
                    <input
                        type='checkbox'
                        className='custom-control-input'
                        id='customSwitch12'
                    />
                    <label
                        className='custom-control-label'
                        htmlFor='customSwitch12'>
                        Salary
                    </label>
                </div>
                <Dropdown className='dropdown custom-dropdown mb-0 mr-4 mt-3 mt-sm-0 mb-2'>
                    <Dropdown.Toggle
                        variant=''
                        className='btn border border-primary text-black btn-rounded'
                        role='button'
                        data-toggle='dropdown'
                        aria-expanded='false'>
                        <svg
                            className='mr-2 scale5'
                            width='14'
                            height='14'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                                d='M10.2932 16.293L8.00016 18.5859V3C8.00016 2.73478 7.89481 2.48043 7.70727 2.29289C7.51973 2.10536 7.26538 2 7.00016 2C6.73495 2 6.48059 2.10536 6.29306 2.29289C6.10552 2.48043 6.00016 2.73478 6.00016 3V18.5859L3.70716 16.293C3.51856 16.1108 3.26596 16.01 3.00376 16.0123C2.74156 16.0146 2.49075 16.1198 2.30534 16.3052C2.11994 16.4906 2.01477 16.7414 2.01249 17.0036C2.01021 17.2658 2.111 17.5184 2.29316 17.707L6.29316 21.707C6.48086 21.8942 6.73513 21.9993 7.00021 21.9993C7.2653 21.9993 7.51956 21.8942 7.70726 21.707L11.7073 17.707C11.8901 17.5185 11.9914 17.2657 11.9894 17.0031C11.9874 16.7405 11.8822 16.4893 11.6965 16.3036C11.5109 16.118 11.2596 16.0128 10.997 16.0108C10.7345 16.0088 10.4816 16.1102 10.2932 16.293Z'
                                fill='#rgba(255,0,0,0.72)'
                            />
                            <path
                                d='M11.0002 6H21.0002C21.2655 6 21.5198 5.89464 21.7074 5.7071C21.8949 5.51957 22.0002 5.26521 22.0002 5C22.0002 4.73478 21.8949 4.48043 21.7074 4.29289C21.5198 4.10536 21.2655 4 21.0002 4H11.0002C10.735 4 10.4807 4.10536 10.2931 4.29289C10.1056 4.48043 10.0002 4.73478 10.0002 5C10.0002 5.26521 10.1056 5.51957 10.2931 5.7071C10.4807 5.89464 10.735 6 11.0002 6Z'
                                fill='#rgba(255,0,0,0.72)'
                            />
                            <path
                                d='M21.0002 8H11.0002C10.735 8 10.4807 8.10536 10.2931 8.29289C10.1056 8.48043 10.0002 8.73478 10.0002 9C10.0002 9.26521 10.1056 9.51957 10.2931 9.7071C10.4807 9.89464 10.735 10 11.0002 10H21.0002C21.2655 10 21.5198 9.89464 21.7074 9.7071C21.8949 9.51957 22.0002 9.26521 22.0002 9C22.0002 8.73478 21.8949 8.48043 21.7074 8.29289C21.5198 8.10536 21.2655 8 21.0002 8Z'
                                fill='#rgba(255,0,0,0.72)'
                            />
                            <path
                                d='M18.0002 12H11.0002C10.735 12 10.4807 12.1054 10.2931 12.2929C10.1056 12.4804 10.0002 12.7348 10.0002 13C10.0002 13.2652 10.1056 13.5196 10.2931 13.7071C10.4807 13.8947 10.735 14 11.0002 14H18.0002C18.2655 14 18.5198 13.8947 18.7074 13.7071C18.8949 13.5196 19.0002 13.2652 19.0002 13C19.0002 12.7348 18.8949 12.4804 18.7074 12.2929C18.5198 12.1054 18.2655 12 18.0002 12Z'
                                fill='#rgba(255,0,0,0.72)'
                            />
                        </svg>
                        Newest
                    </Dropdown.Toggle>
                    <Dropdown.Menu className='dropdown-menu dropdown-menu-right'>
                        <Dropdown.Item
                            className='dropdown-item'
                            to='/search-job'>
                            Details
                        </Dropdown.Item>
                        <Dropdown.Item
                            className='dropdown-item text-danger'
                            to='/search-job'>
                            Cancel
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Link to='/search-job' className='mr-3 mb-2'>
                    <span className='border border-primary rounded-circle d-block sharp-lg'>
                        <svg
                            className='scale5'
                            width='14'
                            height='14'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                                d='M6 7.5H3C2.17275 7.5 1.5 6.82687 1.5 6V3C1.5 2.17313 2.17275 1.5 3 1.5H6C6.82725 1.5 7.5 2.17313 7.5 3V6C7.5 6.82687 6.82725 7.5 6 7.5ZM3 3V6H6.00113L6 3H3ZM22.5 4.5C22.5 4.08544 22.1642 3.75 21.75 3.75H9.75C9.33581 3.75 9 4.08544 9 4.5C9 4.91456 9.33581 5.25 9.75 5.25H21.75C22.1642 5.25 22.5 4.91456 22.5 4.5ZM6 15H3C2.17275 15 1.5 14.3269 1.5 13.5V10.5C1.5 9.67313 2.17275 9 3 9H6C6.82725 9 7.5 9.67313 7.5 10.5V13.5C7.5 14.3269 6.82725 15 6 15ZM3 10.5V13.5H6.00113L6 10.5H3ZM22.5 12C22.5 11.5854 22.1642 11.25 21.75 11.25H9.75C9.33581 11.25 9 11.5854 9 12C9 12.4146 9.33581 12.75 9.75 12.75H21.75C22.1642 12.75 22.5 12.4146 22.5 12ZM6 22.5H3C2.17275 22.5 1.5 21.8269 1.5 21V18C1.5 17.1731 2.17275 16.5 3 16.5H6C6.82725 16.5 7.5 17.1731 7.5 18V21C7.5 21.8269 6.82725 22.5 6 22.5ZM3 18V21H6.00113L6 18H3ZM22.5 19.5C22.5 19.0854 22.1642 18.75 21.75 18.75H9.75C9.33581 18.75 9 19.0854 9 19.5C9 19.9146 9.33581 20.25 9.75 20.25H21.75C22.1642 20.25 22.5 19.9146 22.5 19.5Z'
                                fill='#rgba(255,0,0,0.72)'
                            />
                        </svg>
                    </span>
                </Link>
                <Link to='/search-job' className='mb-2'>
                    <span className='bg-primary rounded-circle d-block sharp-lg'>
                        <svg
                            className='scale5'
                            width='14'
                            height='14'
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                                d='M10 1H2C1.73478 1 1.48043 1.10536 1.29289 1.29289C1.10536 1.48043 1 1.73478 1 2V10C1 10.2652 1.10536 10.5196 1.29289 10.7071C1.48043 10.8946 1.73478 11 2 11H10C10.2652 11 10.5196 10.8946 10.7071 10.7071C10.8946 10.5196 11 10.2652 11 10V2C11 1.73478 10.8946 1.48043 10.7071 1.29289C10.5196 1.10536 10.2652 1 10 1ZM9 9H3V3H9V9Z'
                                fill='white'
                            />
                            <path
                                d='M22 1H14C13.7348 1 13.4804 1.10536 13.2929 1.29289C13.1054 1.48043 13 1.73478 13 2V10C13 10.2652 13.1054 10.5196 13.2929 10.7071C13.4804 10.8946 13.7348 11 14 11H22C22.2652 11 22.5196 10.8946 22.7071 10.7071C22.8946 10.5196 23 10.2652 23 10V2C23 1.73478 22.8946 1.48043 22.7071 1.29289C22.5196 1.10536 22.2652 1 22 1ZM21 9H15V3H21V9Z'
                                fill='white'
                            />
                            <path
                                d='M10 13H2C1.73478 13 1.48043 13.1054 1.29289 13.2929C1.10536 13.4804 1 13.7348 1 14V22C1 22.2652 1.10536 22.5196 1.29289 22.7071C1.48043 22.8946 1.73478 23 2 23H10C10.2652 23 10.5196 22.8946 10.7071 22.7071C10.8946 22.5196 11 22.2652 11 22V14C11 13.7348 10.8946 13.4804 10.7071 13.2929C10.5196 13.1054 10.2652 13 10 13ZM9 21H3V15H9V21Z'
                                fill='white'
                            />
                            <path
                                d='M22 13H14C13.7348 13 13.4804 13.1054 13.2929 13.2929C13.1054 13.4804 13 13.7348 13 14V22C13 22.2652 13.1054 22.5196 13.2929 22.7071C13.4804 22.8946 13.7348 23 14 23H22C22.2652 23 22.5196 22.8946 22.7071 22.7071C22.8946 22.5196 23 22.2652 23 22V14C23 13.7348 22.8946 13.4804 22.7071 13.2929C22.5196 13.1054 22.2652 13 22 13ZM21 21H15V15H21V21Z'
                                fill='white'
                            />
                        </svg>
                    </span>
                </Link>
            </div>
            <div className='row'>
                {/* Map Single Job Components */}
                {JobData.map((jobData, i) => (
                    <SingleJob jobData={jobData} key={i}></SingleJob>
                ))}
            </div>
        </Fragment>
    );
};

export default SearchJobs;
