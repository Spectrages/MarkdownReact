import Autocomplete from '@mui/material/Autocomplete';
import { Avatar, Box, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface IPers {
    name: string,
    id: number,
    image: string,
}

export default function CustomInputAutocomplete(props: any) {

    const navigate = useNavigate();

    const autocompleteProps = {
        options: props.persons ?? [],
        getOptionLabel: (option: IPers) =>
            option?.name ?? "Oops",
    };
    return (
        <>
            <Autocomplete
                {...autocompleteProps}
                disablePortal
                clearOnBlur
                renderOption={(option, { name, image, id }: IPers) => (
                    <Box
                        key={id}
                        component="li"
                        sx={{ "& > img": { mr: 3, flexShrink: 0 } }}
                        {...option}
                        onClick={() => navigate(`/person/${id}`)}
                    >
                        <Avatar
                            alt={name}
                            src={image}
                            sx={{ width: 20, height: 20 }}
                        />
                        {name}
                    </Box>
                )}
                renderInput={(params) => <TextField {...params} label="Name" />}
            />
        </>
    );
}