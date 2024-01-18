import { createTheme } from "@mui/material/styles";

const theme = createTheme ({
    palette:{
        primary:{
            main: "#acc820"
        }
    },
    components:{
        MuiOutlinedInput: {
			defaultProps: {
				notched: false,
			},
			styleOverrides: {
				root: ({ ownerState }) => ({
					
					background: ownerState.error ? "#FFFAFA" : "#FBFBFE",
					"&.Mui-focused": {
						background: "white",
					},
				}),
				input: ({ theme: appTheme }) => ({
					fontWeight: 400,
					fontSize: 16,
					lineHeight: "21px",
					padding: appTheme.spacing(2),
					borderRadius: `12px`,
					"&.MuiInputBase-inputSizeSmall": {
						padding: "10px 14px",
						"&.MuiInputBase-inputAdornedStart": {
							paddingLeft: 0,
						},
					},
				}),
				inputAdornedStart: {
					paddingLeft: 4,
				},
			},
		},
		MuiInputLabel: {
			defaultProps: {
				disableAnimation: true,
				shrink: true,
			},
			styleOverrides: {
				root: {
					backgroundColor: "transparent",
					position: "relative",
					left: "-15px",
					top: 10,
					fontSize: 16,
					fontWeight: 400,
				},
			},
		},
    }
})

export default theme;