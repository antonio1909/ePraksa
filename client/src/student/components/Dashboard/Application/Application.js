import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

const Application = () => {
    return (
        <div className='h-80'>
            <div className='d-flex flex-wrap mb-4 row'>
                <div className='col-xl-3 col-lg-4 mb-2'>
                    <h6 className='text-black fs-16 font-w600 mb-1'>
                        Showing 45 Applicants
                    </h6>
                    <span className='fs-14'>Based your preferences</span>
                </div>
                <div className='col-xl-9 col-lg-8 d-flex flex-wrap'>
                    <div className='mr-auto'>
                        <Link
                            to='/application'
                            className='btn btn-primary btn-rounded mr-2 mb-2'>
                            ALL
                        </Link>
                        <Link
                            to='/application'
                            className='btn btn-primary btn-rounded mr-2 light mb-2'>
                            Pending
                        </Link>
                        <Link
                            to='/application'
                            className='btn btn-primary btn-rounded mr-2 light mb-2'>
                            On-Hold
                        </Link>
                        <Link
                            to='/application'
                            className='btn btn-primary btn-rounded mr-2 light mb-2'>
                            Candidate
                        </Link>
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
                                to='/application'>
                                Details
                            </Dropdown.Item>
                            <Dropdown.Item
                                className='dropdown-item text-danger'
                                to='/application'>
                                Cancel
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            <div className='row'>
                <div className='col-xl-12'>
                    <div className='table-responsive'>
                        <div
                            id='example5_wrapper'
                            className='dataTables_wrapper no-footer'>
                            <table
                                className='table display mb-4 dataTablesCard card-table dataTable no-footer'
                                id='example5'
                                role='grid'
                                aria-describedby='example5_info'>
                                <thead>
                                    <tr role='row'>
                                        <th
                                            className='sorting_asc'
                                            tabIndex={0}
                                            aria-controls='example5'
                                            rowSpan={1}
                                            colSpan={1}
                                            aria-sort='ascending'
                                            aria-label='
											
												
													
													
												
											
										: activate to sort column descending'
                                            style={{ width: 24 }}>
                                            <div className='checkbox mr-0 align-self-center'>
                                                <div className='custom-control custom-checkbox '>
                                                    <input
                                                        type='checkbox'
                                                        className='custom-control-input'
                                                        id='checkAll'
                                                        required
                                                    />
                                                    <label
                                                        className='custom-control-label'
                                                        htmlFor='checkAll'
                                                    />
                                                </div>
                                            </div>
                                        </th>
                                        <th
                                            className='sorting'
                                            tabIndex={0}
                                            aria-controls='example5'
                                            rowSpan={1}
                                            colSpan={1}
                                            aria-label='ID: activate to sort column ascending'
                                            style={{ width: 50 }}>
                                            ID
                                        </th>
                                        <th
                                            className='sorting'
                                            tabIndex={0}
                                            aria-controls='example5'
                                            rowSpan={1}
                                            colSpan={1}
                                            aria-label='Date Applied: activate to sort column ascending'
                                            style={{ width: 124 }}>
                                            Date Applied
                                        </th>
                                        <th
                                            className='sorting'
                                            tabIndex={0}
                                            aria-controls='example5'
                                            rowSpan={1}
                                            colSpan={1}
                                            aria-label='Company: activate to sort column ascending'
                                            style={{ width: 216 }}>
                                            Company
                                        </th>
                                        <th
                                            className='sorting'
                                            tabIndex={0}
                                            aria-controls='example5'
                                            rowSpan={1}
                                            colSpan={1}
                                            aria-label='Type: activate to sort column ascending'
                                            style={{ width: 87 }}>
                                            Type
                                        </th>
                                        <th
                                            className='sorting'
                                            tabIndex={0}
                                            aria-controls='example5'
                                            rowSpan={1}
                                            colSpan={1}
                                            aria-label='Postition: activate to sort column ascending'
                                            style={{ width: 89 }}>
                                            Postition
                                        </th>
                                        <th
                                            className='sorting'
                                            tabIndex={0}
                                            aria-controls='example5'
                                            rowSpan={1}
                                            colSpan={1}
                                            aria-label='Contact: activate to sort column ascending'
                                            style={{ width: 116 }}>
                                            Contact
                                        </th>
                                        <th
                                            className='sorting'
                                            tabIndex={0}
                                            aria-controls='example5'
                                            rowSpan={1}
                                            colSpan={1}
                                            aria-label='Status: activate to sort column ascending'
                                            style={{ width: 164 }}>
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr role='row' className='odd'>
                                        <td className='sorting_1'>
                                            <div className='checkbox mr-0 align-self-center'>
                                                <div className='custom-control custom-checkbox '>
                                                    <input
                                                        type='checkbox'
                                                        className='custom-control-input'
                                                        id='check1'
                                                        required
                                                    />
                                                    <label
                                                        className='custom-control-label'
                                                        htmlFor='check1'
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td>#APL-0003</td>
                                        <td>June 1, 2020, 08:22 AM</td>
                                        <td>
                                            <div className='media'>
                                                <svg
                                                    className='mr-3'
                                                    width={50}
                                                    height={50}
                                                    viewBox='0 0 50 50'
                                                    fill='none'
                                                    xmlns='http://www.w3.org/2000/svg'>
                                                    <path
                                                        d='M0.000732422 7.27273C0.000732422 3.25611 3.25684 0 7.27346 0H42.728C46.7446 0 50.0007 3.25611 50.0007 7.27273V42.7273C50.0007 46.7439 46.7446 50 42.728 50H7.27346C3.25684 50 0.000732422 46.7439 0.000732422 42.7273V7.27273Z'
                                                        fill='#D3D3D3'
                                                    />
                                                    <path
                                                        d='M0.000732422 7.27273C0.000732422 3.25611 3.25684 0 7.27346 0H42.728C46.7446 0 50.0007 3.25611 50.0007 7.27273V42.7273C50.0007 46.7439 46.7446 50 42.728 50H7.27346C3.25684 50 0.000732422 46.7439 0.000732422 42.7273V7.27273Z'
                                                        fill='#F0780A'
                                                    />
                                                    <path
                                                        d='M12.8892 12.8887C14.4645 11.3134 16.3346 10.0638 18.3928 9.21129C20.451 8.35875 22.657 7.91996 24.8848 7.91996C27.1126 7.91996 29.3185 8.35875 31.3767 9.21129C33.4349 10.0638 35.305 11.3134 36.8803 12.8887C38.4556 14.464 39.7052 16.3341 40.5577 18.3923C41.4103 20.4505 41.8491 22.6565 41.8491 24.8842C41.8491 27.112 41.4103 29.318 40.5577 31.3762C39.7052 33.4344 38.4556 35.3045 36.8803 36.8798L30.8825 30.882C31.6702 30.0944 32.295 29.1593 32.7212 28.1302C33.1475 27.1011 33.3669 25.9981 33.3669 24.8842C33.3669 23.7704 33.1475 22.6674 32.7212 21.6383C32.295 20.6092 31.6702 19.6741 30.8825 18.8865C30.0949 18.0988 29.1598 17.474 28.1307 17.0478C27.1016 16.6215 25.9987 16.4021 24.8848 16.4021C23.7709 16.4021 22.6679 16.6215 21.6388 17.0478C20.6097 17.474 19.6746 18.0988 18.887 18.8865L12.8892 12.8887Z'
                                                        fill='white'
                                                    />
                                                    <path
                                                        d='M12.8892 36.8798C9.70778 33.6984 7.92048 29.3835 7.92048 24.8843C7.92048 20.385 9.70778 16.0701 12.8892 12.8887C16.0706 9.70727 20.3856 7.91997 24.8848 7.91996C29.384 7.91996 33.6989 9.70726 36.8803 12.8887L30.8825 18.8865C29.2918 17.2958 27.1344 16.4021 24.8848 16.4021C22.6352 16.4021 20.4777 17.2958 18.887 18.8865C17.2963 20.4772 16.4026 22.6346 16.4026 24.8843C16.4026 27.1339 17.2963 29.2913 18.887 30.882L12.8892 36.8798Z'
                                                        fill='white'
                                                    />
                                                </svg>
                                                <div className='media-body text-nowrap'>
                                                    <h6 className='text-black font-w600 fs-16 mb-0'>
                                                        Mosciski Inc.
                                                    </h6>
                                                    <span className='fs-14'>
                                                        Creative Design Agency
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>FREELANCE</td>
                                        <td>Intern UI Designer</td>
                                        <td>
                                            <div className='d-flex'>
                                                <Link
                                                    to={"#"}
                                                    className='contact-icon mr-3'>
                                                    <i
                                                        className='fa fa-phone'
                                                        aria-hidden='true'
                                                    />
                                                </Link>
                                                <Link
                                                    to={"#"}
                                                    className='contact-icon'>
                                                    <i className='las la-envelope' />
                                                </Link>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='d-flex align-items-center'>
                                                <Link
                                                    to={"#"}
                                                    className='btn btn-rounded btn-outline-dark mr-3 ml-auto'>
                                                    Pending
                                                </Link>
                                                <Dropdown className='dropdown float-right custom-dropdown mb-0'>
                                                    <Dropdown.Toggle
                                                        variant=''
                                                        className='icon-false'>
                                                        <svg
                                                            width={24}
                                                            height={24}
                                                            viewBox='0 0 24 24'
                                                            fill='none'
                                                            xmlns='http://www.w3.org/2000/svg'>
                                                            <path
                                                                d='M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z'
                                                                stroke='#2E2E2E'
                                                                strokeWidth={2}
                                                                strokeLinecap='round'
                                                                strokeLinejoin='round'
                                                            />
                                                            <path
                                                                d='M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z'
                                                                stroke='#2E2E2E'
                                                                strokeWidth={2}
                                                                strokeLinecap='round'
                                                                strokeLinejoin='round'
                                                            />
                                                            <path
                                                                d='M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z'
                                                                stroke='#2E2E2E'
                                                                strokeWidth={2}
                                                                strokeLinecap='round'
                                                                strokeLinejoin='round'
                                                            />
                                                        </svg>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className='dropdown-menu dropdown-menu-right'>
                                                        <Dropdown.Item
                                                            className='dropdown-item'
                                                            to='/application'>
                                                            Details
                                                        </Dropdown.Item>
                                                        <Dropdown.Item
                                                            className='dropdown-item text-danger'
                                                            to='/application'>
                                                            Cancel
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr role='row' className='even'>
                                        <td className='sorting_1'>
                                            <div className='checkbox mr-0 align-self-center'>
                                                <div className='custom-control custom-checkbox '>
                                                    <input
                                                        type='checkbox'
                                                        className='custom-control-input'
                                                        id='check2'
                                                        required
                                                    />
                                                    <label
                                                        className='custom-control-label'
                                                        htmlFor='check2'
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td>#APL-0002</td>
                                        <td>June 1, 2020, 08:22 AM</td>
                                        <td>
                                            <div className='media'>
                                                <svg
                                                    className='mr-3'
                                                    width={50}
                                                    height={50}
                                                    viewBox='0 0 50 50'
                                                    fill='none'
                                                    xmlns='http://www.w3.org/2000/svg'>
                                                    <path
                                                        d='M0.000732422 7.27273C0.000732422 3.25611 3.25684 0 7.27346 0H42.728C46.7446 0 50.0007 3.25611 50.0007 7.27273V42.7273C50.0007 46.7439 46.7446 50 42.728 50H7.27346C3.25684 50 0.000732422 46.7439 0.000732422 42.7273V7.27273Z'
                                                        fill='#D3D3D3'
                                                    />
                                                    <path
                                                        d='M0.000732422 7.27273C0.000732422 3.25611 3.25684 0 7.27346 0H42.728C46.7446 0 50.0007 3.25611 50.0007 7.27273V42.7273C50.0007 46.7439 46.7446 50 42.728 50H7.27346C3.25684 50 0.000732422 46.7439 0.000732422 42.7273V7.27273Z'
                                                        fill='#515151'
                                                    />
                                                    <path
                                                        d='M12.8897 12.8887C14.465 11.3134 16.3351 10.0638 18.3933 9.21129C20.4515 8.35875 22.6575 7.91996 24.8853 7.91996C27.113 7.91996 29.319 8.35875 31.3772 9.21129C33.4354 10.0638 35.3055 11.3134 36.8808 12.8887C38.4561 14.464 39.7057 16.3341 40.5582 18.3923C41.4107 20.4505 41.8495 22.6565 41.8495 24.8842C41.8495 27.112 41.4107 29.318 40.5582 31.3762C39.7057 33.4344 38.4561 35.3045 36.8808 36.8798L30.883 30.882C31.6707 30.0944 32.2955 29.1593 32.7217 28.1302C33.148 27.1011 33.3674 25.9981 33.3674 24.8842C33.3674 23.7704 33.148 22.6674 32.7217 21.6383C32.2955 20.6092 31.6707 19.6741 30.883 18.8865C30.0954 18.0988 29.1603 17.474 28.1312 17.0478C27.1021 16.6215 25.9991 16.4021 24.8853 16.4021C23.7714 16.4021 22.6684 16.6215 21.6393 17.0478C20.6102 17.474 19.6751 18.0988 18.8875 18.8865L12.8897 12.8887Z'
                                                        fill='white'
                                                    />
                                                    <path
                                                        d='M36.8808 12.8887C40.0622 16.0701 41.8495 20.385 41.8495 24.8842C41.8495 29.3834 40.0622 33.6984 36.8808 36.8798C33.6994 40.0612 29.3845 41.8485 24.8853 41.8485C20.3861 41.8485 16.0711 40.0612 12.8897 36.8798L18.8875 30.882C20.4782 32.4727 22.6357 33.3664 24.8853 33.3664C27.1349 33.3664 29.2923 32.4727 30.883 30.882C32.4737 29.2913 33.3674 27.1338 33.3674 24.8842C33.3674 22.6346 32.4737 20.4772 30.883 18.8865L36.8808 12.8887Z'
                                                        fill='white'
                                                    />
                                                </svg>
                                                <div className='media-body text-nowrap'>
                                                    <h6 className='text-black font-w600 fs-16 mb-0'>
                                                        Funk Inc.
                                                    </h6>
                                                    <span className='fs-14'>
                                                        IT Department
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>PART TIME</td>
                                        <td>Junior UI Designer</td>
                                        <td>
                                            <div className='d-flex'>
                                                <Link
                                                    to={"#"}
                                                    className='contact-icon'>
                                                    <i
                                                        className='fa fa-phone'
                                                        aria-hidden='true'
                                                    />
                                                </Link>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='d-flex align-items-center'>
                                                <Link
                                                    to={"#"}
                                                    className='btn btn-rounded btn-outline-danger mr-3 ml-auto'>
                                                    On-Hold
                                                </Link>
                                                <Dropdown className='dropdown float-right custom-dropdown mb-0'>
                                                    <Dropdown.Toggle
                                                        variant=''
                                                        className='icon-false'
                                                        data-toggle='dropdown'>
                                                        <svg
                                                            width={24}
                                                            height={24}
                                                            viewBox='0 0 24 24'
                                                            fill='none'
                                                            xmlns='http://www.w3.org/2000/svg'>
                                                            <path
                                                                d='M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z'
                                                                stroke='#2E2E2E'
                                                                strokeWidth={2}
                                                                strokeLinecap='round'
                                                                strokeLinejoin='round'
                                                            />
                                                            <path
                                                                d='M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z'
                                                                stroke='#2E2E2E'
                                                                strokeWidth={2}
                                                                strokeLinecap='round'
                                                                strokeLinejoin='round'
                                                            />
                                                            <path
                                                                d='M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z'
                                                                stroke='#2E2E2E'
                                                                strokeWidth={2}
                                                                strokeLinecap='round'
                                                                strokeLinejoin='round'
                                                            />
                                                        </svg>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className='dropdown-menu dropdown-menu-right'>
                                                        <Dropdown.Item
                                                            className='dropdown-item'
                                                            to='/application'>
                                                            Details
                                                        </Dropdown.Item>
                                                        <Dropdown.Item
                                                            className='dropdown-item text-danger'
                                                            to='/application'>
                                                            Cancel
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr role='row' className='odd'>
                                        <td className='sorting_1'>
                                            <div className='checkbox mr-0 align-self-center'>
                                                <div className='custom-control custom-checkbox '>
                                                    <input
                                                        type='checkbox'
                                                        className='custom-control-input'
                                                        id='check3'
                                                        required
                                                    />
                                                    <label
                                                        className='custom-control-label'
                                                        htmlFor='check3'
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td>#APL-0003</td>
                                        <td>June 1, 2020, 08:22 AM</td>
                                        <td>
                                            <div className='media'>
                                                <svg
                                                    className='mr-3'
                                                    width={50}
                                                    height={50}
                                                    viewBox='0 0 50 50'
                                                    fill='none'
                                                    xmlns='http://www.w3.org/2000/svg'>
                                                    <path
                                                        d='M0.000732422 7.27273C0.000732422 3.25611 3.25684 0 7.27346 0H42.728C46.7446 0 50.0007 3.25611 50.0007 7.27273V42.7273C50.0007 46.7439 46.7446 50 42.728 50H7.27346C3.25684 50 0.000732422 46.7439 0.000732422 42.7273V7.27273Z'
                                                        fill='#D3D3D3'
                                                    />
                                                    <path
                                                        d='M0.000732422 7.27273C0.000732422 3.25611 3.25684 0 7.27346 0H42.728C46.7446 0 50.0007 3.25611 50.0007 7.27273V42.7273C50.0007 46.7439 46.7446 50 42.728 50H7.27346C3.25684 50 0.000732422 46.7439 0.000732422 42.7273V7.27273Z'
                                                        fill='#BB1D85'
                                                    />
                                                    <path
                                                        d='M12.889 36.8797C11.3138 35.3045 10.0642 33.4343 9.21165 31.3761C8.35912 29.3179 7.92032 27.112 7.92033 24.8842C7.92032 22.6564 8.35912 20.4504 9.21165 18.3922C10.0642 16.334 11.3138 14.4639 12.889 12.8886C14.4643 11.3133 16.3345 10.0638 18.3927 9.21123C20.4509 8.3587 22.6568 7.9199 24.8846 7.9199C27.1124 7.9199 29.3184 8.3587 31.3766 9.21123C33.4348 10.0638 35.3049 11.3133 36.8802 12.8886L30.8824 18.8864C30.0948 18.0988 29.1597 17.474 28.1306 17.0477C27.1015 16.6214 25.9985 16.402 24.8846 16.402C23.7707 16.402 22.6677 16.6214 21.6386 17.0477C20.6095 17.474 19.6745 18.0988 18.8868 18.8864C18.0992 19.674 17.4744 20.6091 17.0481 21.6382C16.6219 22.6673 16.4025 23.7703 16.4025 24.8842C16.4025 25.9981 16.6219 27.1011 17.0481 28.1302C17.4744 29.1593 18.0992 30.0943 18.8868 30.882L12.889 36.8797Z'
                                                        fill='white'
                                                    />
                                                    <path
                                                        d='M36.8802 36.8797C33.6988 40.0612 29.3839 41.8485 24.8847 41.8485C20.3855 41.8485 16.0705 40.0612 12.8891 36.8797C9.7077 33.6983 7.92039 29.3834 7.92039 24.8842C7.92039 20.385 9.70769 16.0701 12.8891 12.8886L18.8869 18.8864C17.2962 20.4771 16.4025 22.6346 16.4025 24.8842C16.4025 27.1338 17.2962 29.2913 18.8869 30.882C20.4776 32.4727 22.6351 33.3663 24.8847 33.3663C27.1343 33.3663 29.2917 32.4727 30.8825 30.882L36.8802 36.8797Z'
                                                        fill='white'
                                                    />
                                                </svg>
                                                <div className='media-body text-nowrap'>
                                                    <h6 className='text-black font-w600 fs-16 mb-0'>
                                                        Mosciski Inc.
                                                    </h6>
                                                    <span className='fs-14'>
                                                        Creative Design Agency
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>FREELANCE</td>
                                        <td>Intern UI Designer</td>
                                        <td>
                                            <div className='d-flex'>
                                                <Link
                                                    to={"#"}
                                                    className='contact-icon'>
                                                    <i
                                                        className='fa fa-whatsapp'
                                                        aria-hidden='true'
                                                    />
                                                </Link>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='d-flex align-items-center'>
                                                <Link
                                                    to={"#"}
                                                    className='btn btn-rounded btn-outline-dark mr-3 ml-auto'>
                                                    Pending
                                                </Link>
                                                <Dropdown className='dropdown float-right custom-dropdown mb-0'>
                                                    <Dropdown.Toggle
                                                        variant=''
                                                        className='icon-false'
                                                        data-toggle='dropdown'>
                                                        <svg
                                                            width={24}
                                                            height={24}
                                                            viewBox='0 0 24 24'
                                                            fill='none'
                                                            xmlns='http://www.w3.org/2000/svg'>
                                                            <path
                                                                d='M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z'
                                                                stroke='#2E2E2E'
                                                                strokeWidth={2}
                                                                strokeLinecap='round'
                                                                strokeLinejoin='round'
                                                            />
                                                            <path
                                                                d='M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z'
                                                                stroke='#2E2E2E'
                                                                strokeWidth={2}
                                                                strokeLinecap='round'
                                                                strokeLinejoin='round'
                                                            />
                                                            <path
                                                                d='M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z'
                                                                stroke='#2E2E2E'
                                                                strokeWidth={2}
                                                                strokeLinecap='round'
                                                                strokeLinejoin='round'
                                                            />
                                                        </svg>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className='dropdown-menu dropdown-menu-right'>
                                                        <Dropdown.Item
                                                            className='dropdown-item'
                                                            to='/application'>
                                                            Details
                                                        </Dropdown.Item>
                                                        <Dropdown.Item
                                                            className='dropdown-item text-danger'
                                                            to='/application'>
                                                            Cancel
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr role='row' className='even'>
                                        <td className='sorting_1'>
                                            <div className='checkbox mr-0 align-self-center'>
                                                <div className='custom-control custom-checkbox '>
                                                    <input
                                                        type='checkbox'
                                                        className='custom-control-input'
                                                        id='check4'
                                                        required
                                                    />
                                                    <label
                                                        className='custom-control-label'
                                                        htmlFor='check4'
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td>#APL-0001</td>
                                        <td>June 1, 2020, 08:22 AM</td>
                                        <td>
                                            <div className='media'>
                                                <svg
                                                    className='mr-3'
                                                    width={50}
                                                    height={50}
                                                    viewBox='0 0 50 50'
                                                    fill='none'
                                                    xmlns='http://www.w3.org/2000/svg'>
                                                    <path
                                                        d='M0.000732422 7.27273C0.000732422 3.25611 3.25684 0 7.27346 0H42.728C46.7446 0 50.0007 3.25611 50.0007 7.27273V42.7273C50.0007 46.7439 46.7446 50 42.728 50H7.27346C3.25684 50 0.000732422 46.7439 0.000732422 42.7273V7.27273Z'
                                                        fill='#D3D3D3'
                                                    />
                                                    <path
                                                        d='M0.000732422 7.27273C0.000732422 3.25611 3.25684 0 7.27346 0H42.728C46.7446 0 50.0007 3.25611 50.0007 7.27273V42.7273C50.0007 46.7439 46.7446 50 42.728 50H7.27346C3.25684 50 0.000732422 46.7439 0.000732422 42.7273V7.27273Z'
                                                        fill='#40C7CF'
                                                    />
                                                    <path
                                                        d='M12.8892 12.8887C14.4645 11.3134 16.3346 10.0639 18.3928 9.21132C20.451 8.35878 22.657 7.91999 24.8848 7.91999C27.1126 7.91999 29.3185 8.35878 31.3767 9.21132C33.4349 10.0639 35.305 11.3134 36.8803 12.8887C38.4556 14.464 39.7052 16.3341 40.5577 18.3923C41.4103 20.4505 41.8491 22.6565 41.8491 24.8843C41.8491 27.1121 41.4103 29.318 40.5577 31.3762C39.7052 33.4344 38.4556 35.3046 36.8803 36.8798L30.8825 30.8821C31.6702 30.0944 32.295 29.1594 32.7212 28.1303C33.1475 27.1011 33.3669 25.9982 33.3669 24.8843C33.3669 23.7704 33.1475 22.6674 32.7212 21.6383C32.295 20.6092 31.6702 19.6741 30.8825 18.8865C30.0949 18.0989 29.1598 17.4741 28.1307 17.0478C27.1016 16.6215 25.9987 16.4021 24.8848 16.4021C23.7709 16.4021 22.6679 16.6215 21.6388 17.0478C20.6097 17.4741 19.6746 18.0989 18.887 18.8865L12.8892 12.8887Z'
                                                        fill='#8FD7FF'
                                                    />
                                                    <path
                                                        d='M12.8892 36.8798C9.70778 33.6984 7.92048 29.3835 7.92048 24.8843C7.92048 20.385 9.70778 16.0701 12.8892 12.8887C16.0706 9.70727 20.3856 7.91997 24.8848 7.91996C29.384 7.91996 33.6989 9.70726 36.8803 12.8887L30.8825 18.8865C29.2918 17.2958 27.1344 16.4021 24.8848 16.4021C22.6352 16.4021 20.4777 17.2958 18.887 18.8865C17.2963 20.4772 16.4026 22.6346 16.4026 24.8843C16.4026 27.1339 17.2963 29.2913 18.887 30.882L12.8892 36.8798Z'
                                                        fill='white'
                                                    />
                                                </svg>
                                                <div className='media-body text-nowrap'>
                                                    <h6 className='text-black font-w600 fs-16 mb-0'>
                                                        Highspeed Studios
                                                    </h6>
                                                    <span className='fs-14'>
                                                        Creative Design Agency
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>FULLTIME</td>
                                        <td>Senior UX Designer</td>
                                        <td>
                                            <div className='d-flex'>
                                                <Link
                                                    to={"#"}
                                                    className='contact-icon mr-3'>
                                                    <i
                                                        className='fa fa-phone'
                                                        aria-hidden='true'
                                                    />
                                                </Link>
                                                <Link
                                                    to={"#"}
                                                    className='contact-icon'>
                                                    <i className='las la-envelope' />
                                                </Link>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='d-flex align-items-center'>
                                                <Link
                                                    to={"#"}
                                                    className='btn btn-rounded btn-success mr-3 ml-auto'>
                                                    Candidate
                                                </Link>
                                                <Dropdown className='dropdown float-right custom-dropdown mb-0'>
                                                    <Dropdown.Toggle
                                                        variant=''
                                                        className='icon-false'
                                                        data-toggle='dropdown'>
                                                        <svg
                                                            width={24}
                                                            height={24}
                                                            viewBox='0 0 24 24'
                                                            fill='none'
                                                            xmlns='http://www.w3.org/2000/svg'>
                                                            <path
                                                                d='M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z'
                                                                stroke='#2E2E2E'
                                                                strokeWidth={2}
                                                                strokeLinecap='round'
                                                                strokeLinejoin='round'
                                                            />
                                                            <path
                                                                d='M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z'
                                                                stroke='#2E2E2E'
                                                                strokeWidth={2}
                                                                strokeLinecap='round'
                                                                strokeLinejoin='round'
                                                            />
                                                            <path
                                                                d='M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z'
                                                                stroke='#2E2E2E'
                                                                strokeWidth={2}
                                                                strokeLinecap='round'
                                                                strokeLinejoin='round'
                                                            />
                                                        </svg>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className='dropdown-menu dropdown-menu-right'>
                                                        <Dropdown.Item
                                                            className='dropdown-item'
                                                            to='/application'>
                                                            Details
                                                        </Dropdown.Item>
                                                        <Dropdown.Item
                                                            className='dropdown-item text-danger'
                                                            to='/application'>
                                                            Cancel
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr role='row' className='odd'>
                                        <td className='sorting_1'>
                                            <div className='checkbox mr-0 align-self-center'>
                                                <div className='custom-control custom-checkbox '>
                                                    <input
                                                        type='checkbox'
                                                        className='custom-control-input'
                                                        id='check5'
                                                        required
                                                    />
                                                    <label
                                                        className='custom-control-label'
                                                        htmlFor='check5'
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td>#APL-0002</td>
                                        <td>June 1, 2020, 08:22 AM</td>
                                        <td>
                                            <div className='media'>
                                                <svg
                                                    className='mr-3'
                                                    width={50}
                                                    height={50}
                                                    viewBox='0 0 50 50'
                                                    fill='none'
                                                    xmlns='http://www.w3.org/2000/svg'>
                                                    <path
                                                        d='M0 7.27273C0 3.25611 3.25611 0 7.27273 0H42.7273C46.7439 0 50 3.25611 50 7.27273V42.7273C50 46.7439 46.7439 50 42.7273 50H7.27273C3.25611 50 0 46.7439 0 42.7273V7.27273Z'
                                                        fill='#D3D3D3'
                                                    />
                                                    <path
                                                        d='M0 7.27273C0 3.25611 3.25611 0 7.27273 0H42.7273C46.7439 0 50 3.25611 50 7.27273V42.7273C50 46.7439 46.7439 50 42.7273 50H7.27273C3.25611 50 0 46.7439 0 42.7273V7.27273Z'
                                                        fill='#4B58CF'
                                                    />
                                                    <path
                                                        d='M12.889 12.8887C14.4642 11.3134 16.3344 10.0639 18.3926 9.21132C20.4508 8.35878 22.6567 7.91999 24.8845 7.91999C27.1123 7.91999 29.3183 8.35878 31.3765 9.21132C33.4347 10.0639 35.3048 11.3134 36.8801 12.8887C38.4554 14.464 39.7049 16.3341 40.5575 18.3923C41.41 20.4505 41.8488 22.6565 41.8488 24.8843C41.8488 27.1121 41.41 29.318 40.5575 31.3762C39.7049 33.4344 38.4554 35.3046 36.8801 36.8798L30.8823 30.8821C31.6699 30.0944 32.2947 29.1594 32.721 28.1303C33.1473 27.1011 33.3667 25.9982 33.3667 24.8843C33.3667 23.7704 33.1473 22.6674 32.721 21.6383C32.2947 20.6092 31.6699 19.6741 30.8823 18.8865C30.0947 18.0989 29.1596 17.4741 28.1305 17.0478C27.1014 16.6215 25.9984 16.4021 24.8845 16.4021C23.7706 16.4021 22.6676 16.6215 21.6385 17.0478C20.6094 17.4741 19.6744 18.0989 18.8867 18.8865L12.889 12.8887Z'
                                                        fill='#8FD7FF'
                                                    />
                                                    <path
                                                        d='M12.889 36.8798C9.70754 33.6984 7.92024 29.3835 7.92024 24.8843C7.92023 20.385 9.70754 16.0701 12.889 12.8887C16.0704 9.70727 20.3853 7.91997 24.8845 7.91996C29.3837 7.91996 33.6987 9.70726 36.8801 12.8887L30.8823 18.8865C29.2916 17.2958 27.1341 16.4021 24.8845 16.4021C22.6349 16.4021 20.4774 17.2958 18.8867 18.8865C17.296 20.4772 16.4024 22.6346 16.4024 24.8843C16.4024 27.1339 17.296 29.2913 18.8867 30.882L12.889 36.8798Z'
                                                        fill='white'
                                                    />
                                                </svg>
                                                <div className='media-body text-nowrap'>
                                                    <h6 className='text-black font-w600 fs-16 mb-0'>
                                                        Funk Inc.
                                                    </h6>
                                                    <span className='fs-14'>
                                                        IT Department
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>PART TIME</td>
                                        <td>Junior UI Designer</td>
                                        <td>
                                            <div className='d-flex'>
                                                <Link
                                                    to={"#"}
                                                    className='contact-icon'>
                                                    <i
                                                        className='fa fa-phone'
                                                        aria-hidden='true'
                                                    />
                                                </Link>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='d-flex align-items-center'>
                                                <Link
                                                    to={"#"}
                                                    className='btn btn-rounded btn-outline-danger mr-3 ml-auto'>
                                                    On-Hold
                                                </Link>
                                                <Dropdown className='dropdown float-right custom-dropdown mb-0'>
                                                    <Dropdown.Toggle
                                                        variant=''
                                                        className='icon-false'
                                                        data-toggle='dropdown'>
                                                        <svg
                                                            width={24}
                                                            height={24}
                                                            viewBox='0 0 24 24'
                                                            fill='none'
                                                            xmlns='http://www.w3.org/2000/svg'>
                                                            <path
                                                                d='M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z'
                                                                stroke='#2E2E2E'
                                                                strokeWidth={2}
                                                                strokeLinecap='round'
                                                                strokeLinejoin='round'
                                                            />
                                                            <path
                                                                d='M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z'
                                                                stroke='#2E2E2E'
                                                                strokeWidth={2}
                                                                strokeLinecap='round'
                                                                strokeLinejoin='round'
                                                            />
                                                            <path
                                                                d='M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z'
                                                                stroke='#2E2E2E'
                                                                strokeWidth={2}
                                                                strokeLinecap='round'
                                                                strokeLinejoin='round'
                                                            />
                                                        </svg>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className='dropdown-menu dropdown-menu-right'>
                                                        <Dropdown.Item
                                                            className='dropdown-item'
                                                            to='/application'>
                                                            Details
                                                        </Dropdown.Item>
                                                        <Dropdown.Item
                                                            className='dropdown-item text-danger'
                                                            to='/application'>
                                                            Cancel
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr role='row' className='even'>
                                        <td className='sorting_1'>
                                            <div className='checkbox mr-0 align-self-center'>
                                                <div className='custom-control custom-checkbox '>
                                                    <input
                                                        type='checkbox'
                                                        className='custom-control-input'
                                                        id='check6'
                                                        required
                                                    />
                                                    <label
                                                        className='custom-control-label'
                                                        htmlFor='check6'
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td>#APL-0001</td>
                                        <td>June 1, 2020, 08:22 AM</td>
                                        <td>
                                            <div className='media'>
                                                <svg
                                                    className='mr-3'
                                                    width={50}
                                                    height={50}
                                                    viewBox='0 0 50 50'
                                                    fill='none'
                                                    xmlns='http://www.w3.org/2000/svg'>
                                                    <path
                                                        d='M0.000488281 7.27273C0.000488281 3.25611 3.2566 0 7.27322 0H42.7278C46.7444 0 50.0005 3.25611 50.0005 7.27273V42.7273C50.0005 46.7439 46.7444 50 42.7278 50H7.27321C3.2566 50 0.000488281 46.7439 0.000488281 42.7273V7.27273Z'
                                                        fill='#D3D3D3'
                                                    />
                                                    <path
                                                        d='M0.000488281 7.27273C0.000488281 3.25611 3.2566 0 7.27322 0H42.7278C46.7444 0 50.0005 3.25611 50.0005 7.27273V42.7273C50.0005 46.7439 46.7444 50 42.7278 50H7.27321C3.2566 50 0.000488281 46.7439 0.000488281 42.7273V7.27273Z'
                                                        fill='#31B52F'
                                                    />
                                                    <path
                                                        d='M12.889 12.8887C14.4642 11.3134 16.3344 10.0639 18.3926 9.21132C20.4508 8.35878 22.6567 7.91999 24.8845 7.91999C27.1123 7.91999 29.3183 8.35878 31.3765 9.21132C33.4347 10.0639 35.3048 11.3134 36.8801 12.8887C38.4554 14.464 39.7049 16.3341 40.5575 18.3923C41.41 20.4505 41.8488 22.6565 41.8488 24.8843C41.8488 27.1121 41.41 29.318 40.5575 31.3762C39.7049 33.4344 38.4554 35.3046 36.8801 36.8798L30.8823 30.8821C31.6699 30.0944 32.2947 29.1594 32.721 28.1303C33.1473 27.1011 33.3667 25.9982 33.3667 24.8843C33.3667 23.7704 33.1473 22.6674 32.721 21.6383C32.2947 20.6092 31.6699 19.6741 30.8823 18.8865C30.0947 18.0989 29.1596 17.4741 28.1305 17.0478C27.1014 16.6215 25.9984 16.4021 24.8845 16.4021C23.7706 16.4021 22.6676 16.6215 21.6385 17.0478C20.6094 17.4741 19.6744 18.0989 18.8867 18.8865L12.889 12.8887Z'
                                                        fill='white'
                                                    />
                                                    <path
                                                        d='M12.889 36.8798C9.70754 33.6984 7.92024 29.3835 7.92024 24.8843C7.92023 20.385 9.70754 16.0701 12.889 12.8887C16.0704 9.70727 20.3853 7.91997 24.8845 7.91996C29.3837 7.91996 33.6987 9.70726 36.8801 12.8887L30.8823 18.8865C29.2916 17.2958 27.1341 16.4021 24.8845 16.4021C22.6349 16.4021 20.4774 17.2958 18.8867 18.8865C17.296 20.4772 16.4024 22.6346 16.4024 24.8843C16.4024 27.1339 17.296 29.2913 18.8867 30.882L12.889 36.8798Z'
                                                        fill='white'
                                                    />
                                                </svg>
                                                <div className='media-body text-nowrap'>
                                                    <h6 className='text-black font-w600 fs-16 mb-0'>
                                                        Highspeed Studios
                                                    </h6>
                                                    <span className='fs-14'>
                                                        Creative Design Agency
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>FULLTIME</td>
                                        <td>Senior UX Designer</td>
                                        <td>
                                            <div className='d-flex'>
                                                <Link
                                                    to={"#"}
                                                    className='contact-icon mr-3'>
                                                    <i
                                                        className='fa fa-phone'
                                                        aria-hidden='true'
                                                    />
                                                </Link>
                                                <Link
                                                    to={"#"}
                                                    className='contact-icon'>
                                                    <i className='las la-envelope' />
                                                </Link>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='d-flex align-items-center'>
                                                <Link
                                                    to={"#"}
                                                    className='btn btn-rounded btn-success mr-3 ml-auto'>
                                                    Candidate
                                                </Link>
                                                <Dropdown className='dropdown float-right custom-dropdown mb-0'>
                                                    <Dropdown.Toggle
                                                        variant=''
                                                        className='icon-false'
                                                        data-toggle='dropdown'>
                                                        <svg
                                                            width={24}
                                                            height={24}
                                                            viewBox='0 0 24 24'
                                                            fill='none'
                                                            xmlns='http://www.w3.org/2000/svg'>
                                                            <path
                                                                d='M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z'
                                                                stroke='#2E2E2E'
                                                                strokeWidth={2}
                                                                strokeLinecap='round'
                                                                strokeLinejoin='round'
                                                            />
                                                            <path
                                                                d='M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z'
                                                                stroke='#2E2E2E'
                                                                strokeWidth={2}
                                                                strokeLinecap='round'
                                                                strokeLinejoin='round'
                                                            />
                                                            <path
                                                                d='M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z'
                                                                stroke='#2E2E2E'
                                                                strokeWidth={2}
                                                                strokeLinecap='round'
                                                                strokeLinejoin='round'
                                                            />
                                                        </svg>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className='dropdown-menu dropdown-menu-right'>
                                                        <Dropdown.Item
                                                            className='dropdown-item'
                                                            to='/application'>
                                                            Details
                                                        </Dropdown.Item>
                                                        <Dropdown.Item
                                                            className='dropdown-item text-danger'
                                                            to='/application'>
                                                            Cancel
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className='d-flex align-items-center justify-content-between pb-2'>
                                <div
                                    className='dataTables_info'
                                    id='example5_info'
                                    role='status'
                                    aria-live='polite'>
                                    Showing 1 to 6 of 6 entries
                                </div>
                                <div
                                    className='dataTables_paginate paging_simple_numbers'
                                    id='example5_paginate'>
                                    <Link
                                        to={"#"}
                                        className='paginate_button previous disabled'
                                        aria-controls='example5'
                                        data-dt-idx={0}
                                        tabIndex={0}
                                        id='example5_previous'>
                                        Previous
                                    </Link>
                                    <span>
                                        <Link
                                            to={"#"}
                                            className='paginate_button current'
                                            aria-controls='example5'
                                            data-dt-idx={1}
                                            tabIndex={0}>
                                            1
                                        </Link>
                                    </span>
                                    <Link
                                        to={"#"}
                                        className='paginate_button next disabled'
                                        tabIndex={0}
                                        id='example5_next'>
                                        Next
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Application;
