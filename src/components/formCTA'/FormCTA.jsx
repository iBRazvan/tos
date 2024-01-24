import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { TextField, Stack, ThemeProvider } from "@mui/material";
import axios from "axios";

import theme from "../../theme";
import styles from "../../style";

const FormCTA = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      subject: Yup.string().required("Subject is required"),
      message: Yup.string(),
    }),

    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post(
          "http://localhost:3001/send-email",
          values,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200) {
          console.log("Email sent successfully");
        } else {
          console.error("Failed to send email");
        }
        resetForm();
      } catch (error) {
        console.error("Error:", error);
      }
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <form onSubmit={formik.handleSubmit} noValidate>
          <Stack spacing={2}>
            <TextField
              label="Nume"
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              label="Email"
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              label="Subiect"
              type="text"
              name="subject"
              value={formik.values.subject}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.subject && Boolean(formik.errors.subject)}
              helperText={formik.touched.subject && formik.errors.subject}
            />
            <TextField
              label="Mesaj (optional)"
              type="text"
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
            />
            <div>
              <button type="submit" className={`${styles.btn} mt-6 w-full`}>
                Trimite
              </button>
            </div>
          </Stack>
        </form>
      </ThemeProvider>
    </>
  );
};

export default FormCTA;
