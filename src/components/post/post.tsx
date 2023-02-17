import { Box } from "@mui/material";

const Post = (props: any) => {
    return(
        <Box sx={{
            padding: '8px',
            bgcolor: '#c9d7e9',
            boxShadow: '6px 3px 3px gray',
            maxWidth: '30%',
            minWidth: '200px',
            borderRadius: '10px',
        }}>
            {props.children}
        </Box>
    )
}

export default Post;