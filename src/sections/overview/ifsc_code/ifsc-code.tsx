import React, { useState } from 'react';
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import useFetchIfsc from '../../../routes/hooks/fetch';

const Ifsc: React.FC = () => {
  const [ifscCode, setIfscCode] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(true);
  const { data, loading, error } = useFetchIfsc(ifscCode);


  const validateIfscCode = (ifscCodeDetail: string): boolean => {
    const regex = /^[A-Z]{4}0[A-Z0-9]{6}$/;
    return regex.test(ifscCodeDetail);
  };
  

  const handleSearch = () => {
    if (validateIfscCode(ifscCode)) {
      setIsValid(true);
      // Trigger the fetch by setting the IFSC code
      setIfscCode(ifscCode);
    } else {
      setIsValid(false);
    }
  };

  return (
    
    <Grid container spacing={3} m={1}>
      <Grid item xs={12} md={6} lg={6}>
        <TextField
          fullWidth
          label="Enter the IFSC Code"
          id="fullWidth"
          value={ifscCode}
          onChange={(e) => setIfscCode(e.target.value)}
          error={!isValid}
          helperText={!isValid ? "Invalid IFSC Code" : ""}
        />
      </Grid>
      <Grid item xs={2} md={2} lg={2}>
        {/* <Button variant="contained" fullWidth onClick={handleSearch}>
          Search
        </Button> */}
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        {loading && <Typography>Loading...</Typography>}
        {error && <Typography color="error">{error}</Typography>}
        {data && (
          <Paper elevation={3} style={{ padding: '16px', wordWrap: 'break-word' }}>
            <Typography m={1}><b>Bank:</b> {data.BANK}</Typography>
            <Typography m={1}><b>Branch:</b> {data.BRANCH}</Typography>
            <Typography m={1}><b>Address:</b> {data.ADDRESS}</Typography>
            <Typography m={1}><b>City:</b> {data.CITY}</Typography>
            <Typography m={1}><b>District:</b> {data.DISTRICT}</Typography>
            <Typography m={1}><b>State: </b>{data.STATE}</Typography>
          </Paper>
        )}
      </Grid>
    </Grid>
  );
};

export default Ifsc;
