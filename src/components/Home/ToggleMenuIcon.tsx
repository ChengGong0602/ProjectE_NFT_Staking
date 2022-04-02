import React, { useEffect } from 'react'
import styled from 'styled-components'
import { withStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { colors } from '../../styles'

interface Props {
    openMenu: () => void;
}
const GreenMenuIcon = withStyles({
    root: {
        color: `rgb(${colors.main})`,
    },
})(MenuIcon);

const ToggleIcon = styled.div`
    width: 50px;
    height: 50px;
    position: absolute;
    right: 1em;
    top: 25px;
    display: none;
    color: white;
    z-index: 996 !important;
    @media (max-width: 768px) {
        display: block;
        top: 10px;
        right: 0;
    }
`

const ToggleMenuIcon: React.FC<Props> = ({ openMenu }) => {
    useEffect(() => {
        openMenu()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <ToggleIcon>
            <IconButton aria-label="delete" size="medium" color="primary" onClick={openMenu}>
                <MenuIcon fontSize="inherit"  style={{color:'#fff'}}/>
            </IconButton>
        </ToggleIcon>
    )
}

export default ToggleMenuIcon
