import React from 'react';
import '../styles/MarriageLeave_State1_Employee.css';
import clip from '../assets/clip.svg';
import note from '../assets/note.svg';
import chevrondown from '../assets/chevrondown.svg';
import Iconright from '../assets/Iconright.svg';


const MarriageLeave_State1_Employee = () => {
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
    const [fromDate, setFromDate] = React.useState('');
    const [toDate, setToDate] = React.useState('');


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
            fromDate,
            toDate,
        });
        alert('Leave request submitted!');
    };

    return (
        <>
            <div className="leaveForm-container-Marriage">
                <header className="leaveForm-header-Marriage">
                    <div className="leaveForm-header-title-Marriage">
                        <img src={clip} className="clip" alt="clip icon" />
                        <h2>Apply/Cancel Leave</h2>
                    </div>
                    <div className="leaveForm-info-Marriage">
                        <img src={note} className="note" alt="note icon" />
                    </div>
                </header>
                <form onSubmit={handleSubmit} className="leaveForm-form-Marriage">
                    <div className="leaveForm-mainGrid-Marriage">
                        {/* --- Row 1 (Spans 3 of 6 columns each) --- */}
                        <div className="leaveForm-fieldGroup-Marriage leaveForm-col-span-3-Marriage">
                            <label className="leaveForm-label-Marriage">Request Type</label>
                            <div className="leaveForm-radioGroup-Marriage">
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
                        <div className="leaveForm-fieldGroup-Marriage leaveForm-col-span-3-Marriage">
                            <label className="leaveForm-label-Marriage">Day Type</label>
                            <div className="leaveForm-radioGroup-Marriage">
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
                        <div className="leaveForm-fieldGroup-Marriage leaveForm-col-span-2-Marriage">
                            <label htmlFor="leaveType" className="leaveForm-label-Marriage">Leave Type</label>
                            <div className="select-wrapper-Marriage">
                                <select
                                    id="leaveType"
                                    className="leaveForm-select-Marriage"
                                    value={leaveType}
                                    onChange={(e) => setLeaveType(e.target.value)}
                                >
                                    <option>Marriage Leave</option>
                                </select>
                                {/* Custom chevrondown image */}
                                <img src={chevrondown} alt="Dropdown Arrow" className="custom-arrow-Marriage" />
                            </div>
                        </div>

                        

                        {/* From Date */}
                        <div className="leaveForm-fieldGroup-Marriage leaveForm-col-span-2-Marriage">
                            <label htmlFor="fromDate" className="leaveForm-label-Marriage">From Date</label>
                            <div className="date-wrapper-Marriage">
                                <input
                                    id="fromDate"
                                    type="date"
                                    className="leaveForm-dateInput-Marriage"
                                    value={fromDate}
                                    onChange={(e) => setFromDate(e.target.value)}
                                />
                                <img src={Iconright} alt="calendar icon" className="custom-calendar-Marriage" />
                            </div>
                        </div>

                        {/* To Date */}
                        <div className="leaveForm-fieldGroup-Marriage leaveForm-col-span-2-Marriage">
                            <label htmlFor="toDate" className="leaveForm-label-Marriage">To Date</label>
                            <div className="date-wrapper-Marriage">
                                <input
                                    id="toDate"
                                    type="date"
                                    className="leaveForm-dateInput-Marriage"
                                    value={toDate}
                                    onChange={(e) => setToDate(e.target.value)}
                                />
                                <img src={Iconright} alt="calendar icon" className="custom-calendar-Marriage" />
                            </div>
                        </div>

                    </div>
                    <div className="leaveForm-checkboxGroup-Marriage">
                        <input id="acknowledge" type="checkbox" checked={acknowledged} onChange={(e) => setAcknowledged(e.target.checked)} />
                        <label htmlFor="acknowledge">I acknowledge that this OOO request is for official purpose only.</label>
                        <div className="leaveForm-col-span-3-Marriage leaveForm-buttonWrapper-Marriage">
                            <button type="button" className="leaveForm-addToListButton-Marriage">
                                <span className="leaveForm-plusIcon-Marriage">+</span> Add to Leave list
                            </button>
                        </div>
                    </div>
                    <div className="leaveForm-fieldGroup-Marriage">
                        <label htmlFor="reason" className="leaveForm-label-Marriage">Reason for Leave</label>
                        <textarea id="reason" className="leaveForm-textarea-Marriage" rows="4" value={reason} onChange={(e) => setReason(e.target.value)}></textarea>
                    </div>
                    <div className="leaveForm-fieldGroup-Marriage">
                        <label htmlFor="comment" className="leaveForm-label-Marriage">Comment</label>
                        <textarea id="comment" className="leaveForm-textarea-Marriage" rows="4" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                    </div>
                    <footer className="leaveForm-footer-Marriage">
                        <div className="leaveForm-actionButtons-Marriage">
                            <button type="button" className="leaveForm-button-Marriage leaveForm-button-cancel-Marriage">Cancel</button>
                            <button type="submit" className="leaveForm-button-Marriage leaveForm-button-submit-Marriage">Submit</button>
                        </div>


                    </footer>
                </form>
            </div>
        </>
    );
};

export default MarriageLeave_State1_Employee;