const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 200
        }
    }
};

const getStyles = (labelsArray, label, theme) => {
    return {
        fontWeight:
            label.indexOf(labelsArray) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium
    };
};

const muiStyles = {
    formControl: {
        flex: 1
    },
    select: {
        ".MuiOutlinedInput-notchedOutline": {
            borderColor: "#FCFAF9",
            borderWidth: "2px",
            borderRadius: "28px",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#FCFAF9"
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#FCFAF9"
        },
        ".MuiSvgIcon-root": {
            color: "#FCFAF9"
        },
        ".MuiSelect-select": {
            color: "#BABD8D",
            fontWeight: "bold",
        },
        color: "#FCFAF9"
    },
    inputLabel: {
        "&.MuiInputLabel-outlined.Mui-focused": {
            color: "#FCFAF9"
        },
        "&.MuiInputLabel-outlined": {
            color: "#FCFAF9"
        }
    },
    box: {
        display: "flex",
        flexWrap: "wrap",
        gap: 1
    },
    pagination: {
        ".MuiPaginationItem-root": { color: "white" },
        ".MuiButtonBase-root": { color: "white", background: "#232020" },
        ".MuiPaginationItem-previousNext": { background: "#232020" },
        ".MuiPaginationItem-text": { color: "white" },
        "&.MuiPagination-root .Mui-selected": { background: "#598B2C" },
        ".MuiButtonBase-root.MuiPaginationItem-root:hover": { background: "black" },
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        color: "white"
    }
};

export {
    muiStyles,
    MenuProps,
    getStyles
};