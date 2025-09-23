import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  Divider,
  IconButton,
} from '@mui/material';
import { ArrowBack, AlarmOn, Assignment } from '@mui/icons-material';
import '../styles/Header.css';
import avatar from '../assets/avatar.svg';
import info from '../assets/info.svg';
import Clippathgroup from '../assets/Clippathgroup.svg';
import Icon from '../assets/Icon.svg';


export default function Header() {
  const [workflowState, setWorkflowState] = useState('Employee Submit');
  const employee = {
    name: "Manoj Kandan M",
    genId: "25504878",
    email: "manoj.kandan@partner.samsung.com",
    designation: "Outsourcing",
    division: "Tech Strategy Team\\Smart Infra Group\\Information System & AI Tools",
    manager: "Ravindra S R (06786669)",
    avatar: "Avatars.svg"
  };


  return (
    <>
      <Box className="hr-header-container">
        <Typography variant="caption" className="breadcrumb">
          My Workspace &gt; Leave Request
        </Typography>

        <Box className="header-row">
          <Box display="flex" alignItems="center" gap={1}>
            <IconButton size="small">
              <ArrowBack />
            </IconButton>
            <div className='head'>
              <Typography
                variant="body2"
                style={{
                  color: "#202224", // Sets the text color to a blue
                  fontWeight:"700px", // Makes the text bold
                  fontStyle:"bold",
                  fontSize:"20px"
                }}
              >
                Leave Request or Cancel.{workflowState}
              </Typography>
            </div>

          </Box>
          <AlarmOn className="clock-icon" />
        </Box>
        <Grid container alignItems="center">
          {/* Employee Details */}

          <div class="employee-details">
            <div class="avatar-wrapper">
              <img src={avatar} class="avatar" />
              <span class="online-indicator"></span>
            </div>
            <div class="employee-info">
              <div>
                <strong>{employee.name} • Gen ID: {employee.genId}</strong>
              </div>
              <div class="employee-email">{employee.email}</div>
            </div>
          </div>

          <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />

          {/* Designation */}
          <Grid item xs={12} sm="auto" sx={{ px: 2 }}>
            <Typography variant="body2" color="text.secondary">Designation</Typography>
            <Typography fontWeight="bold">{employee.designation}</Typography>
          </Grid>

          {/* Divider */}

          <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />


          {/* Division */}
          <Grid item xs={12} sm="auto" sx={{ px: 2 }}>
            <Typography variant="body2" color="text.secondary">Division</Typography>
            <Typography fontWeight="bold">{employee.division}</Typography>
          </Grid>

          {/* Divider */}

          <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />


          {/* Manager */}
          <Grid item xs={12} sm="auto" sx={{ px: 2 }}>
            <Typography variant="body2" color="text.secondary">Manager</Typography>
            <Typography fontWeight="bold">{employee.manager}</Typography>
          </Grid>
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1,marginLeft:"20px" ,fontStyle:"bold",paddingTop:"15px" 
                      
                    }}>
                        <img src={Clippathgroup}></img>
                    <Typography variant="h6" style={{ fontSize: '20px',fontWeight:'700px',fontStyle:'bold',color:'#202224'}}>
                      Leave Balance Overview
                      </Typography>
                        <img src={info}></img>

                    </Box>
                    <div className="financial-year-selector">
                        <span className="financial-year-label">
                            Financial year
                        </span>
                        <div>
                            <div className="radio-group-horizontal">
                                <label className="radio-label">
                                    <input type="radio" name="financialYear" value="2025" defaultChecked />
                                    <span className="radio-text">2025</span>
                                </label>
                                <label className="radio-label">
                                    <input type="radio" name="financialYear" value="2024" />
                                    <span className="radio-text">2024</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </Box>
        <div className="balance-cards">
          <div className="balance-card casual">
            <span className="card-title">Casual Leave (CL)</span>
            <span className="card-value">5 days</span>
          </div>
          <div className="balance-card service">
            <span className="card-title">Service Leave (SL)</span>
            <span className="card-value">5 days</span>
          </div>
          <div className="balance-card privilege">
            <span className="card-title">Privilege Leave (PL)</span>
            <span className="card-value">0 days</span>
          </div>
          <div className="balance-card additional">
            <span className="card-title">Additional WFH</span>
            <span className="card-value">12 days</span>
          </div>
          <div className="balance-card long-service">
            <span className="card-title">Long Service Leave</span>
            <span className="card-value">5 days</span>
          </div>
          <div className="balance-card service-pl">
            <span className="card-title">Service Leave (PL)</span>
            <span className="card-value">12 days</span>
          </div>
          <div className="balance-card maternity">
            <span className="card-title">Maternity Leave</span>
            <span className="card-value">182 days</span>
          </div>
          <img src={Icon} class="Icon" />
        </div>



      </Box>
    </>
  );
}
