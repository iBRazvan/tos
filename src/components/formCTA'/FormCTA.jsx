import React from "react";
import {
  TextField,
  Stack,
  ThemeProvider,
} from "@mui/material";

import theme from "../../theme";
import styles, { layout } from "../../style";

const FormCTA = () => {
  

  return (
    <>
      <ThemeProvider theme={theme}>
        <form noValidate >
          <Stack spacing={2} >
            <TextField label="Nume" type="nume" />
            <TextField label="Email" type="email" />
            <TextField label="Subiect" type="subiect" />
            <TextField label="Mesaj (optional)" type="mesaj" />
            <div>
                <button className={`${styles.btn} mt-6 w-full`}>Trimite</button>
            </div>
          </Stack>
        </form>
      </ThemeProvider>
    </>
  );
};

export default FormCTA;
