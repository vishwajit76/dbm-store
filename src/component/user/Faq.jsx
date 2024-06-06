import React, { useState } from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import faqImage from '../image/image 10.png';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqData = [
  { title: "What WhatsApp tool do you provide?", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget." },
  { title: "What WhatsApp tool do you provide?", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget." },
  { title: "What WhatsApp tool do you provide?", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget." },
  { title: "What WhatsApp tool do you provide?", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget." },
  { title: "What WhatsApp tool do you provide?", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget." },
];

const Faq = () => {
  const [expanded, setExpanded] = useState(0);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ background: '#f4f4f4' }}>
      <Container>
        <Box py={8} textAlign='center'>
          <Typography
            fontWeight={600}
            sx={{
              background: '#f4f4f4',
              fontSize: { xs: "20px", sm: "30px", md: "45px" },
            }}
          >
            Frequently
            <Box
              component="span"
              sx={{
                color: "primary.main",
                mx: 1,
              }}
            >
              Asked
            </Box>
            Questions
          </Typography>
          <Typography variant='h6' color='khaki'>Getting more information about our platform that will help you get all benefits from us.</Typography>
          <Typography variant='h6' color='khaki'>These all questions are asked for the first time</Typography>
        </Box>
        <Grid container spacing={5} pb={20}>
          <Grid item xs={12} md={6}>
            {faqData.map((item, index) => (
              <Accordion
                sx={{ my: 2, py: 1 }}
                key={index}
                expanded={expanded === index}
                onChange={handleChange(index)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                >
                  <Typography>{item.title}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ background: '#1783FE', p: 3, color: '#fff' }}>
                  {item.content}
                </AccordionDetails>
              </Accordion>
            ))}
            <Typography mt={3} variant='h5'>
              Can't find an answer to your question?
            </Typography>
            <Button variant='contained' sx={{ borderRadius: '10px', py: 1, my: 1 }} >Submit a request</Button>
          </Grid>
          <Grid item xs={12} md={6} textAlign='center'>
            <Typography mb={5} variant='h6' align='left'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Typography>
            <Box width='65%' textAlign='center' mx='auto'>
              <img src={faqImage} alt="" width='100%' />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Faq;
