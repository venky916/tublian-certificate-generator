import React, { useState } from 'react';
import { Button, TextField, Box, Typography, IconButton } from '@mui/material';
import dayjs from 'dayjs';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CertificateTemplate from './components/CertificateTemplate';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function App() {

  const [showSidebar, setShowSidebar] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    certificateId: '',
    date: dayjs().format('MM/DD/YYYY'), // Default to today's date in MM/DD/YYYY
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  const checkFormValidity = () => {
    const { name, description, certificateId, date } = formData;
    
    setIsFormValid(
      name.length !== 0 &&
        description.length !== 0 &&
        certificateId.length !== 0 &&
        date.length !== 0,
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
   if (name === 'date') {
     // Parse and format the selected date
     const formattedDate = dayjs(value).format('MM/DD/YYYY');
     setFormData((prevData) => ({ ...prevData, date: formattedDate }));
   } else {
     setFormData((prevData) => ({ ...prevData, [name]: value }));
   }
    checkFormValidity();
  };

  const downloadPDF = () => {
    console.log(formData);
    const certificate = document.getElementById('certificate');
    html2canvas(certificate).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 10, 10, 190, 150);
      pdf.save(`${formData.name}_certificate.pdf`);
    });
  };
  return (
    <>
      <Box display="flex" position="relative">
        {/* Sidebar with Toggle Icon */}
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: showSidebar ? 0 : '-300px', // Slide in and out effect
            width: '300px',
            height: '100vh',
            padding: '20px',
            backgroundColor: '#f7f7f7',
            boxShadow: showSidebar ? '2px 0 5px rgba(0,0,0,0.3)' : 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            transition: 'left 0.3s ease-in-out', // Smooth transition
            zIndex: 1000,
          }}
        >
          {/* Toggle Icon Button */}
          <IconButton
            onClick={toggleSidebar}
            sx={{
              position: 'absolute',
              top: '0px',
              right: '-40px', // Position icon outside sidebar when closed
              backgroundColor: '#FD642E',
              boxShadow: '0px 2px 5px rgba(0,0,0,0.3)',
            }}
          >
            {showSidebar ? <ArrowBackIcon /> : <ArrowForwardIcon />}
          </IconButton>

          {showSidebar && (
            <>
              <Typography variant="h6">Certificate Details</Typography>

              <TextField
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                fullWidth
              />

              <TextField
                label="Certificate Description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                fullWidth
                multiline
                rows={10}
              />

              <TextField
                label="Certificate ID"
                name="certificateId"
                value={formData.certificateId}
                onChange={handleInputChange}
                fullWidth
              />

              <TextField
                label="Date"
                name="date"
                type="date"
                value={
                  formData.date
                    ? dayjs(formData.date, 'MM/DD/YYYY').format('YYYY-MM-DD')
                    : '' // Ensuring it's controlled
                }
                onChange={handleInputChange}
                fullWidth
              />

              <Button
                variant="contained"
                color="primary"
                onClick={downloadPDF}
                disabled={!isFormValid}
              >
                Download as PDF
              </Button>
            </>
          )}
        </Box>

        {/* Certificate Template */}
        <Box
          id="certificate"
          sx={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
            marginLeft: showSidebar ? '300px' : '0', // Adjust main content based on sidebar
            transition: 'margin-left 0.3s ease-in-out', // Smooth transition for main content
          }}
        >
          <CertificateTemplate {...formData} />
        </Box>
      </Box>
    </>
  );
}

export default App;
