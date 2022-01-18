import React from "react";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import OutlinedInput from '@mui/material/OutlinedInput';


const AlbumSelector = ({ albums, currentAlbums, setCurrentAlbums}) => {

    const handleChange = (event) => {
        const value = event.target.value;
        setCurrentAlbums(
            typeof value === 'string' ? value.split(',') : value,
        );
    }

    return(
        <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="album-filter-label">Please select Album to view</InputLabel>
            <Select
            labelId="album-filter-label"
            id="album-filter"
            multiple
            value={currentAlbums}
            onChange={handleChange}
            input={<OutlinedInput label="Please select Album to view" />}
            renderValue={(selected) => selected.join(', ')}
            >
            {albums.albums.map((album) => (
                <MenuItem key={album.name} value={album.name}>
                    <Checkbox checked={currentAlbums.indexOf(album.name) > -1} />
                    <ListItemText primary={album.name} />
                </MenuItem>
            ))}
            </Select>
        </FormControl>
    )
}

export default AlbumSelector;