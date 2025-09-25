import React from 'react';
import '../styles/LossofPay_State1_Employee.css';
import clip from '../assets/clip.svg';
import note from '../assets/note.svg';
import chevrondown from '../assets/chevrondown.svg';
import Iconright from '../assets/Iconright.svg';



const LossofPay_State1_Employee = () => {
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
            toDate,
            fromDate
        });
        alert('Leave request submitted!');
    };

    return (
        <>
            <div className="leaveForm-container-lossofpay">
                <header className="leaveForm-header-lossofpay">
                    <div className="leaveForm-header-title-lossofpay">
                        <img src={clip} className="clip" />
                        <h2>Apply/Cancel Leave</h2>
                    </div>
                    <div className="leaveForm-info-lossofpay">
                        <img src={note} className="note" />
                    </div>
                </header>
                <form onSubmit={handleSubmit} className="leaveForm-form-lossofpay">
                    <div className="leaveForm-mainGrid-lossofpay">
                        {/* --- Row 1 (Spans 3 of 6 columns each) --- */}
                        <div className="leaveForm-fieldGroup-lossofpay leaveForm-col-span-3-lossofpay">
                            <label className="leaveForm-label-lossofpay">Request Type</label>
                            <div className="leaveForm-radioGroup-lossofpay">
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
                        <div className="leaveForm-fieldGroup-lossofpay leaveForm-col-span-3-lossofpay">
                            <label className="leaveForm-label-lossofpay">Day Type</label>
                            <div className="leaveForm-radioGroup-lossofpay">
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
                        {/* --- Leave Type (wrapped) --- */}
                        {/* --- Leave Type (with custom arrow image) --- */}
                        <div className="leaveForm-fieldGroup-lossofpay leaveForm-col-span-2-lossofpay">
                            <label htmlFor="leaveType" className="leaveForm-label-lossofpay">Leave Type</label>

                            <div className="select-wrapper-lossofpay">
                                <select
                                    id="leaveType"
                                    className="leaveForm-select-lossofpay"
                                    value={leaveType}
                                    onChange={(e) => setLeaveType(e.target.value)}
                                >
                                    <option>Loss of Pay</option>
                                </select>

                                {/* Custom arrow image placed absolutely */}
                                <img src={chevrondown} alt="dropdown arrow" className="custom-arrow-lossofpay" />
                            </div>
                        </div>


                        {/* From Date */}
                        <div className="leaveForm-fieldGroup-lossofpay leaveForm-col-span-2-lossofpay">
                            <label htmlFor="fromDate" className="leaveForm-label-lossofpay">From Date</label>
                            <div className="date-wrapper-lossofpay">
                                <input
                                    id="fromDate"
                                    type="date"
                                    className="leaveForm-dateInput-lossofpay"
                                    value={fromDate}
                                    onChange={(e) => setFromDate(e.target.value)}
                                />
                                <img src={Iconright} alt="calendar icon" className="custom-calendar-lossofpay" />
                            </div>
                        </div>

                        {/* To Date */}
                        <div className="leaveForm-fieldGroup-lossofpay leaveForm-col-span-2-lossofpay">
                            <label htmlFor="toDate" className="leaveForm-label-lossofpay">To Date</label>
                            <div className="date-wrapper-lossofpay">
                                <input
                                    id="toDate"
                                    type="date"
                                    className="leaveForm-dateInput-lossofpay"
                                    value={toDate}
                                    onChange={(e) => setToDate(e.target.value)}
                                />
                                <img src={Iconright} alt="calendar icon" className="custom-calendar-lossofpay" />
                            </div>
                        </div>

                    </div>
                    <div className="leaveForm-checkboxGroup-lossofpay">
                        <input id="acknowledge" type="checkbox" checked={acknowledged} onChange={(e) => setAcknowledged(e.target.checked)} />
                        <label htmlFor="acknowledge">I acknowledge that this OOO request is for official purpose only.</label>
                        <div className="leaveForm-col-span-3-lossofpay leaveForm-buttonWrapper-lossofpay">
                            <button type="button" className="leaveForm-addToListButton-lossofpay">
                                <span className="leaveForm-plusIcon-lossofpay">+</span> Add to Leave list
                            </button>
                        </div>
                    </div>
                    <div className="leaveForm-fieldGroup-lossofpay">
                        <label htmlFor="reason" className="leaveForm-label-lossofpay">Reason for Leave</label>
                        <textarea id="reason" className="leaveForm-textarea-lossofpay" rows="4" value={reason} onChange={(e) => setReason(e.target.value)}></textarea>
                    </div>
                    <div className="leaveForm-fieldGroup-lossofpay">
                        <label htmlFor="comment" className="leaveForm-label-lossofpay">Comment</label>
                        <textarea id="comment" className="leaveForm-textarea-lossofpay" rows="4" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                    </div>
                    <footer className="leaveForm-footer-lossofpay">
                        <div className="leaveForm-actionButtons-lossofpay">
                            <button type="button" className="leaveForm-button-lossofpay leaveForm-button-cancel-lossofpay">Cancel</button>
                            <button type="submit" className="leaveForm-button-lossofpay leaveForm-button-submit-lossofpay">Submit</button>
                        </div>
                    </footer>
                </form>
            </div>
        </>
    );
};

export default LossofPay_State1_Employee;