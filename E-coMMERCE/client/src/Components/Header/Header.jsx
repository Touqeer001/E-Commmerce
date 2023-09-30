import { useState } from 'react';

import { AppBar, Toolbar, Box, Typography, IconButton, Drawer, List, styled } from '@mui/material';
import { Menu } from '@mui/icons-material';

import { Link } from 'react-router-dom';

//components
import CustomButtons from './CustomButtons';
import Search from './Search';

const StyledHeader = styled(AppBar)`
background:black;
    height: 55px;
`;








const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));

const CustomButtonWrapper = styled('span')(({ theme }) => ({ 
    margin: '0 5% 0 auto', 
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    }
}));


const Header=()=>{
    const [open, setOpen] = useState(false);
   
    const handleClose = () => {
        setOpen(false);
    }
    const handleOpen = () => {
        setOpen(true);
    }


    
    const list = () => (
        <Box style={{ width: 250 }} onClick={handleClose}>
            <List>
                <listItem button>
                    <CustomButtons />
                </listItem>
            </List>
        </Box>
    );
    return(
        <StyledHeader  position="fixed">
            <Toolbar style={{ minHeight: 55 }}>
            <MenuButton
                    color="inherit"
                     onClick={handleOpen}
                >
                    <Menu />
                </MenuButton>
                <Drawer open={open} onClose={handleClose}>
                     {list()}
                </Drawer>
                <Search/>
                <CustomButtonWrapper>

                <CustomButtons/>
                </CustomButtonWrapper>

            </Toolbar>
       
        </StyledHeader>
     
    )
}


export default Header;