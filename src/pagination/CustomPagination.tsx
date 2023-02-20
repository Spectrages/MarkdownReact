import Grid from "@mui/material/Grid";
import { SetStateAction, useState } from 'react';
import { Pagination } from "@mui/material";

export const CustomPagination = ({ data, onChange }) => {

    const [page, setPage] = useState(1);
    const handleChange = (event: any, value: SetStateAction<number>) => {
        setPage(value);
        onChange(value);
    };

    return (
        <Grid
            sx={{
                display: 'flex',
                justifyContent: 'center',
                margin: '10px',
                background: '#48494B',
                borderRadius: "20px",
                boxShadow: "0 0 2px 2px dimgray",
            }}
        >
            <Pagination
                count={data.pages}
                variant="outlined"
                shape="rounded"
                color="primary"
                page={page}
                onChange={handleChange}
            />
        </Grid>
    );
};