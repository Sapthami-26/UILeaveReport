import React from 'react';
import '../styles/MedicalLeave_State1_Employee.css';
import clip from '../assets/clip.svg';
import note from '../assets/note.svg';
import Iconright from '../assets/Iconright.svg';
import chevrondown from '../assets/chevrondown.svg';


const MedicalLeave_State1_Employee = () => {
    // State management for form fields
    const [requestType, setRequestType] = React.useState('apply');
    const [dayType, setDayType] = React.useState('full');
    const [leaveType, setLeaveType] = React.useState('Medical Leave');
    const [subCategory, setSubCategory] = React.useState('Training/Seminar/Conference');
    const [subCategoryName, setSubCategoryName] = React.useState('xxx-xxx-xx');
    const [dateOfBirth, setDateOfBirth] = React.useState('2025-08-08');
    const [acknowledged, setAcknowledged] = React.useState(true);
    const [reason, setReason] = React.useState('Work on Weekend for Project deployment');
    const [comment, setComment] = React.useState('I have an important personal matter to attend at my Home town.');
    const [fromDate, setFromDate] = React.useState('');
    const [toDate, setToDate] = React.useState('');
    const [showNote, setShowNote] = React.useState(false); // New state to control note visibility


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
            <div className="leaveForm-container-Medical">
                <header className="leaveForm-header-Medical">
                    <div className="leaveForm-header-title-Medical">
                        <img src={clip} className="clip" alt="clip icon" />
                        <h2>Apply/Cancel Leave</h2>
                    </div>
                    {/* Updated section to include text and note icon */}
                    <div className="leaveForm-info-Medical">
                        <p className="leaveForm-leaveBalance-Medical">
                            You have <span className="leaveForm-leaveCount-Medical">60 Days Leaves</span> for Medical Leave
                        </p>
                        <img
                            src={note}
                            className="note"
                            alt="note icon"
                            onClick={() => setShowNote(!showNote)} // Toggle note pop-up

                        />

                    </div>
                </header>
                {/* Note pop-up section */}
                {showNote && (
                    <div className="leaveForm-note-popup-Medical">
                        <div className="leaveForm-note-header-Medical">
                            <span className="leaveForm-note-title-Medical">Note:</span>

                            <span className="leaveForm-note-close-Medical" onClick={() => setShowNote(false)}>
                                &times;
                            </span>
                        </div>
                        <ul className="leaveForm-note-list-Medical">
                            <li>Medical Leave can be availed, without exhausting your allotted leaves. Minimum cover of <b>7 days</b> including intervening holidays. <b>50%</b> of basic to be paid during this period. Hard copy of the medical certificate to be submitted to HR before approval.

                            </li>

                        </ul>
                    </div>
                )}
                <form onSubmit={handleSubmit} className="leaveForm-form-Medical">
                    <div className="leaveForm-mainGrid-Medical">
                        {/* --- Row 1 (Spans 3 of 6 columns each) --- */}
                        <div className="leaveForm-fieldGroup-Medical leaveForm-col-span-3-Medical">
                            <label className="leaveForm-label-Medical">Request Type</label>
                            <div className="leaveForm-radioGroup-Medical">
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
                        <div className="leaveForm-fieldGroup-Marriage leaveForm-col-span-3-Medical">
                            <label className="leaveForm-label-Medical">Day Type</label>
                            <div className="leaveForm-radioGroup-Medical">
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
                        {/* --- Medical Leave Dropdown with custom chevrondown --- */}
                        <div className="leaveForm-fieldGroup-Medical leaveForm-col-span-2-Medical">
                            <label htmlFor="leaveType" className="leaveForm-label-Medical">Leave Type</label>
                            <div className="select-wrapper-Medical">
                                <select
                                    id="leaveType"
                                    className="leaveForm-select-Medical"
                                    value={leaveType}
                                    onChange={(e) => setLeaveType(e.target.value)}
                                >
                                    <option>Medical Leave</option>
                                    <option>Other Leave Types</option>
                                </select>
                                {/* Custom chevrondown image */}
                                <img src={chevrondown} alt="Dropdown Arrow" className="custom-arrow-Medical" />
                            </div>
                        </div>


                     <div className="leaveForm-fieldGroup-Medical leaveForm-col-span-2-Medical">
                            <label htmlFor="fromDate" className="leaveForm-label-Medical">From Date</label>
                            <div className="date-wrapper-Medical">
                                <input
                                    id="fromDate"
                                    type="date"
                                    className="leaveForm-dateInput-Medical"
                                    value={fromDate}
                                    onChange={(e) => setFromDate(e.target.value)}
                                />
                                <img src={Iconright} alt="calendar icon" className="custom-calendar-Medical" />
                            </div>
                        </div>

                        {/* To Date */}
                        <div className="leaveForm-fieldGroup-Medical leaveForm-col-span-2-Medical">
                            <label htmlFor="toDate" className="leaveForm-label-Medical">To Date</label>
                            <div className="date-wrapper-Medical">
                                <input
                                    id="toDate"
                                    type="date"
                                    className="leaveForm-dateInput-Medical"
                                    value={toDate}
                                    onChange={(e) => setToDate(e.target.value)}
                                />
                                <img src={Iconright} alt="calendar icon" className="custom-calendar-Medical" />
                            </div>
                        </div>

                    </div>
                    <div className="leaveForm-checkboxGroup-Medical">
                        <input id="acknowledge" type="checkbox" checked={acknowledged} onChange={(e) => setAcknowledged(e.target.checked)} />
                        <label htmlFor="acknowledge">I acknowledge that this OOO request is for official purpose only.</label>
                        <div className="leaveForm-col-span-3-Medical leaveForm-buttonWrapper-Medical">
                            <button type="button" className="leaveForm-addToListButton-Medical">
                                <span className="leaveForm-plusIcon-Medical">+</span> Add to Leave list
                            </button>
                        </div>
                    </div>
                    <div className="leaveForm-fieldGroup-Medical">
                        <label htmlFor="reason" className="leaveForm-label-Medical">Reason for Leave</label>
                        <textarea id="reason" className="leaveForm-textarea-Medical" rows="4" value={reason} onChange={(e) => setReason(e.target.value)}></textarea>
                    </div>
                    <div className="leaveForm-fieldGroup-Medical">
                        <label htmlFor="comment" className="leaveForm-label-Medical">Comment</label>
                        <textarea id="comment" className="leaveForm-textarea-Medical" rows="4" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                    </div>
                    <footer className="leaveForm-footer-Medical">
                        <div className="leaveForm-actionButtons-Medical">
                            <button type="button" className="leaveForm-button-Medical leaveForm-button-cancel-Medical">Cancel</button>
                            <button type="submit" className="leaveForm-button-Medical leaveForm-button-submit-Medical">Submit</button>
                        </div>


                    </footer>
                </form>
            </div>
        </>
    );
};

export default MedicalLeave_State1_Employee;