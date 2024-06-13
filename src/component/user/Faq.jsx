import React, { useState, useRef } from "react";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import faqImage from "../image/image 10.png";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ReCAPTCHA from "react-google-recaptcha";
import contactFormImg from "../image/ContactForm.png";
import { useForm, Controller } from "react-hook-form";
const SITE_KEY = "6LcNLbMpAAAAAHT-3b_fICQjCcUEivSg53-srBQn";

const faqData = [
  {
    title: "What WhatsApp tool do you provide?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    title: "What WhatsApp tool do you provide?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    title: "What WhatsApp tool do you provide?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    title: "What WhatsApp tool do you provide?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    title: "What WhatsApp tool do you provide?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
];

const Faq = () => {
  const [expanded, setExpanded] = useState(0);
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [setRecaptchaValue] = useState("");
  const captchaRef = useRef();
  const onChange = (value) => {
    console.log("fsdhjdf");
    console.log(value);
    setRecaptchaValue(value);
  };
  return (
    <Box sx={{ background: "#f4f4f4", pt: 2 }}>
      <Container sx={{ paddingBottom: "0", my: 10 }}>
        <Box py={8} textAlign="center">
          <Typography
            fontWeight={600}
            sx={{
              background: "#f4f4f4",
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
          <Typography variant="h6" color="khaki">
            Getting more information about our platform that will help you get
            all benefits from us.
          </Typography>
          <Typography variant="h6" color="khaki">
            These all questions are asked for the first time
          </Typography>
        </Box>
        <Grid container spacing={5} pb={5}>
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
                <AccordionDetails
                  sx={{ background: "#1783FE", p: 3, color: "#fff" }}
                >
                  {item.content}
                </AccordionDetails>
              </Accordion>
            ))}
            <Typography mt={3} variant="h5">
              Can't find an answer to your question?
            </Typography>
            <Button
              variant="contained"
              sx={{ borderRadius: "10px", py: 1, my: 1 }}
            >
              Submit a request
            </Button>
          </Grid>
          <Grid item xs={12} md={6} textAlign="center">
            <Typography mb={5} variant="h6" align="left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </Typography>
            <Box width="65%" textAlign="center" mx="auto">
              <img src={faqImage} alt="" width="100%" />
            </Box>
          </Grid>
        </Grid>
      </Container>

      <section id="contact">
        <Container sx={{ pt: 12 }}>
          <Card
            style={{
              clipPath: "polygon(50% 0%, 35% 100%, 65% 100%)",
              transform: "translate(50%, 2%)",
              backgroundColor: "white",
              boxShadow: "none",
            }}
            sx={{ maxWidth: "50%", width: "100%", justifyContent: "center" }}
          >
            gh
          </Card>

          <Box
            sx={{
              padding: 3,
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "center", md: "flex-start" },
              backgroundColor: "#FFF",
              boxShadow: "none",
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", md: "45%" },
                marginBottom: { xs: 2, md: 0 },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "none",
              }}
            >
              <img
                src={contactFormImg}
                alt="Working Professional"
                style={{ width: "100%", borderRadius: "8px" }}
              />
            </Box>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              sx={{
                width: { xs: "100%", md: "55%" },
                paddingLeft: { xs: 0, md: 7 },
                paddingRight: { xs: 0, md: 5 },
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Name is required" }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        type="text"
                        label="Name"
                        variant="standard"
                        fullWidth
                        error={!!errors.name}
                        helperText={errors.name ? errors.name.message : ""}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Controller
                    name="phone"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Phone is required" }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        type="number"
                        label="Phone"
                        variant="standard"
                        fullWidth
                        error={!!errors.phone}
                        helperText={errors.phone ? errors.phone.message : ""}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    rules={{
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                        message: "Invalid email address",
                      },
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        type="email"
                        label="Email"
                        variant="standard"
                        fullWidth
                        error={!!errors.email}
                        helperText={errors.email ? errors.email.message : ""}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="feedback"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Feedback is required" }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        type="text"
                        label="Feedback"
                        variant="standard"
                        fullWidth
                        multiline
                        rows={3}
                        error={!!errors.feedback}
                        helperText={
                          errors.feedback ? errors.feedback.message : ""
                        }
                      />
                    )}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",
                    justifyContent: { xs: "center", md: "space-between" },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      mb: { xs: 2, md: 0 },
                      width: { xs: "100%", sm: "auto" },
                    }}
                  >
                    <ReCAPTCHA
                      sitekey={SITE_KEY}
                      onChange={() => {}}
                      ref={React.createRef()}
                    />
                  </Box>
                  <Box>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      sx={{ width: "100px", height: "40px" }}
                    >
                      Submit
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </section>
    </Box>
  );
};

export default Faq;
