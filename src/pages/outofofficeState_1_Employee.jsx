import React from 'react';
import '../styles/outofofficeState_1_Employee.css';
import clip from '../assets/clip.svg';
import note from '../assets/note.svg';
import chevrondown from '../assets/chevrondown.svg';


const OutofofficeState_1_Employees = () => {
    // State management for form fields
    const [requestType, setRequestType] = React.useState('apply');
    const [dayType, setDayType] = React.useState('full');
    const [leaveType, setLeaveType] = React.useState('Out of Office');
    const [subCategory, setSubCategory] = React.useState('Training/Seminar/Conference');
    const [subCategoryName, setSubCategoryName] = React.useState('xxx-xxx-xx');
    const [dateOfBirth, setDateOfBirth] = React.useState('2025-08-08');
    const [acknowledged, setAcknowledged] = React.useState(true);
    const [reason, setReason] = React.useState('Work on Weekend for Project deployment');
    const [comment, setComment] = React.useState('I have an important personal matter to attend at my Home town.');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({
            requestType,
            dayType,
            leaveType,
            subCategory,
            subCategoryName,
            dateOfBirth,
            acknowledged,
            reason,
            comment,
        });
        alert('Leave request submitted!');
    };

    return (
        <>
            <div className="leaveForm-container">
                <header className="leaveForm-header">
                    <div className="leaveForm-header-title">
                        <img src={clip} className="clip" />
                        <h2>Apply/Cancel Leave</h2>
                    </div>
                    <div className="leaveForm-info">
                        <img src={note} className="note" />
                    </div>
                </header>
                <form onSubmit={handleSubmit} className="leaveForm-form">
                    <div className="leaveForm-mainGrid">
                        {/* --- Row 1 (Spans 3 of 6 columns each) --- */}
                        <div className="leaveForm-fieldGroup leaveForm-col-span-3">
                            <label className="leaveForm-label">Request Type</label>
                            <div className="leaveForm-radioGroup">
                                <label>
                                    <input
                                        type="radio"
                                        name="requestType"
                                        value="apply"
                                        checked={requestType === 'apply'}
                                        onChange={(e) => setRequestType(e.target.value)}
                                    />
                                    Apply Leave
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="requestType"
                                        value="cancel"
                                        checked={requestType === 'cancel'}
                                        onChange={(e) => setRequestType(e.target.value)}
                                    />
                                    Cancel Leave
                                </label>
                            </div>
                        </div>

                        {/* Day Type */}
                        <div className="leaveForm-fieldGroup leaveForm-col-span-3">
                            <label className="leaveForm-label">Day Type</label>
                            <div className="leaveForm-radioGroup">
                                <label>
                                    <input
                                        type="radio"
                                        name="dayType"
                                        value="full"
                                        checked={dayType === 'full'}
                                        onChange={(e) => setDayType(e.target.value)}
                                    />
                                    Full day(s)
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="dayType"
                                        value="first"
                                        checked={dayType === 'first'}
                                        onChange={(e) => setDayType(e.target.value)}
                                    />
                                    First Half
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="dayType"
                                        value="second"
                                        checked={dayType === 'second'}
                                        onChange={(e) => setDayType(e.target.value)}
                                    />
                                    Second Half
                                </label>
                            </div>
                        </div>
                        {/* --- Row 2 (Spans 2 of 6 columns each) --- */}
                        {/* --- Leave Type --- */}
                        <div className="leaveForm-fieldGroup leaveForm-col-span-2">
                            <label htmlFor="leaveType" className="leaveForm-label">Leave Type</label>
                            <div className="select-wrapper">
                                <select
                                    id="leaveType"
                                    className="leaveForm-select"
                                    value={leaveType}
                                    onChange={(e) => setLeaveType(e.target.value)}
                                >
                                    <option>Out of Office</option>
                                    <option>Other Leave Types</option>
                                </select>
                                <img src={chevrondown} alt="dropdown arrow" className="custom-arrow" />
                            </div>
                        </div>

                        {/* --- Sub Categories --- */}
                        <div className="leaveForm-fieldGroup leaveForm-col-span-2">
                            <label htmlFor="subCategory" className="leaveForm-label">Sub Categories</label>
                            <div className="select-wrapper">
                                <select
                                    id="subCategory"
                                    className="leaveForm-select"
                                    value={subCategory}
                                    onChange={(e) => setSubCategory(e.target.value)}
                                >
                                    <option>Training/Seminar/Conference</option>
                                    <option>Client Meeting</option>
                                    <option>Business Travel</option>
                                </select>
                                <img src={chevrondown} alt="dropdown arrow" className="custom-arrow" />
                            </div>
                        </div>

                        <div className="leaveForm-fieldGroup leaveForm-col-span-2">
                            <label htmlFor="subCategoryName" className="leaveForm-label">Sub Category Name</label>
                            <input
                                id="subCategoryName"
                                type="text"
                                className="leaveForm-textInput"
                                value={subCategoryName}
                                onChange={(e) => setSubCategoryName(e.target.value)}
                            />
                        </div>


                    </div>
                    <div className="leaveForm-checkboxGroup">
                        <input id="acknowledge" type="checkbox" checked={acknowledged} onChange={(e) => setAcknowledged(e.target.checked)} />
                        <label htmlFor="acknowledge">I acknowledge that this OOO request is for official purpose only.</label>
                        <div className="leaveForm-col-span-3 leaveForm-buttonWrapper">
                            <button type="button" className="leaveForm-addToListButton">
                                <span className="leaveForm-plusIcon">+</span> Add to Leave list
                            </button>
                        </div>
                    </div>
                    <div className="leaveForm-fieldGroup">
                        <label htmlFor="reason" className="leaveForm-label">Reason for Leave</label>
                        <textarea id="reason" className="leaveForm-textarea" rows="4" value={reason} onChange={(e) => setReason(e.target.value)}></textarea>
                    </div>
                    <div className="leaveForm-fieldGroup">
                        <label htmlFor="comment" className="leaveForm-label">Comment</label>
                        <textarea id="comment" className="leaveForm-textarea" rows="4" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                    </div>
                    <footer className="leaveForm-footer">
                        <div className="leaveForm-actionButtons">
                            <button type="button" className="leaveForm-button leaveForm-button-cancel">Cancel</button>
                            <button type="submit" className="leaveForm-button leaveForm-button-submit">Submit</button>
                        </div>


                    </footer>
                </form>
            </div>
        </>
    );
};

export default OutofofficeState_1_Employees;