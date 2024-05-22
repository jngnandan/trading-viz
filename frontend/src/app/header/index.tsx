'use client'

import * as React from 'react';
import { ColorPaletteProp } from '@mui/joy/styles';
import Badge from '@mui/joy/Badge';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Dropdown from '@mui/joy/Dropdown';
import Input from '@mui/joy/Input';
import IconButton from '@mui/joy/IconButton';
import ListDivider from '@mui/joy/ListDivider';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Chip from '@mui/joy/Chip';
import AddIcon from '@mui/icons-material/Add';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';
import SsidChartRoundedIcon from '@mui/icons-material/SsidChartRounded';
import MapRoundedIcon from '@mui/icons-material/MapRounded';
import PeopleOutlineRoundedIcon from '@mui/icons-material/PeopleOutlineRounded';
import PieChartOutlineRoundedIcon from '@mui/icons-material/PieChartOutlineRounded';
import PlagiarismRoundedIcon from '@mui/icons-material/PlagiarismRounded';
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import CurrencyBitcoinRoundedIcon from '@mui/icons-material/CurrencyBitcoinRounded';
import SettingsBackupRestoreRoundedIcon from '@mui/icons-material/SettingsBackupRestoreRounded';
import LocalActivityRoundedIcon from '@mui/icons-material/LocalActivityRounded';
import Link from 'next/link';


import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';

export default function Header() {
  const [color, setColor] = React.useState<ColorPaletteProp>('primary');
  return (
    <Sheet
      variant="solid"
      color={color}
      invertedColors
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexGrow: 1,
        p: 2,
        borderRadius: { xs: 0, sm: 'sm' },
        minWidth: 'min-content',
        ...(color !== 'warning' && {
          background: (theme) =>
            `linear-gradient(to top, ${theme.vars.palette[color][600]}, ${theme.vars.palette[color][500]})`,
        }),
      }}
    >
      <IconButton
        variant="soft"
        size="sm"
        onClick={() => {
          const colors: ColorPaletteProp[] = [
            'primary',
            'neutral',
            'danger',
            'success',
            'warning',
          ];
          const nextColorIndex = colors.indexOf(color) + 1;
          setColor(colors[nextColorIndex] ?? colors[0]);
        }}
      >
        <ColorLensRoundedIcon fontSize="small" />
      </IconButton>
      <Box sx={{ flex: 1, display: 'flex', gap: 1, px: 2 }}>
        <Dropdown>
          <MenuButton
            sx={{
              '--Button-radius': '1.5rem',
            }}
            variant="outlined"
            endDecorator={<KeyboardArrowDownIcon />}
          >
            Main
          </MenuButton>
          <Menu
            variant="outlined"
            placement="bottom-start"
            disablePortal
            size="sm"
            sx={{
              '--ListItemDecorator-size': '24px',
              '--ListItem-minHeight': '40px',
              '--ListDivider-gap': '8px',
              minWidth: 200,
            }}
          >  
            <Link href="/"> 
            <MenuItem>
              <ListItemDecorator>
                <HomeRoundedIcon />
              </ListItemDecorator>
              Home
            </MenuItem>
            </Link>
            {/* <ListDivider /> */}
            <Link href="/news"> 
            <MenuItem>
              <ListItemDecorator>
                <NewspaperRoundedIcon />
              </ListItemDecorator>
              News
            </MenuItem>
            </Link>
            {/* <ListDivider /> */}
            <Link href="/screener"> 
            <MenuItem>
              <ListItemDecorator>
                <SsidChartRoundedIcon />
              </ListItemDecorator>
              Screener
            </MenuItem>
            </Link>
            {/* <ListDivider /> */}
            <Link href="/maps"> 
            <MenuItem>
              <ListItemDecorator>
                <MapRoundedIcon />
              </ListItemDecorator>
              Maps
            </MenuItem>
            </Link>
            {/* <ListDivider /> */}
            <Link href="/groups"> 
            <MenuItem>
              <ListItemDecorator>
                <PeopleOutlineRoundedIcon />
              </ListItemDecorator>
              Groups
            </MenuItem>
            </Link>
            {/* <ListDivider /> */}
            <Link href="/portfolio"> 
            <MenuItem>
              <ListItemDecorator>
                <PieChartOutlineRoundedIcon />
              </ListItemDecorator>
              Portfolio
            </MenuItem>
            </Link>
            {/* <ListDivider /> */}
            <Link href="/insider"> 
            <MenuItem>
              <ListItemDecorator>
                <PlagiarismRoundedIcon />
              </ListItemDecorator>
              Insider
            </MenuItem>
            </Link>
            {/* <ListDivider /> */}
            <Link href="/futures"> 
            <MenuItem>
              <ListItemDecorator>
                <InsightsRoundedIcon />
              </ListItemDecorator>
              Features
            </MenuItem>
            </Link>
            {/* <ListDivider /> */}
            <Link href="/forex"> 
            <MenuItem>
              <ListItemDecorator>
                <QueryStatsRoundedIcon />
              </ListItemDecorator>
              Forex
            </MenuItem>
            </Link>
            {/* <ListDivider /> */}
            <Link href="/crypto"> 
            <MenuItem>
              <ListItemDecorator>
                <CurrencyBitcoinRoundedIcon />
              </ListItemDecorator>
              Crypto
            </MenuItem>
            </Link>
            {/* <ListDivider /> */}
            <Link href="/backtests">
            <MenuItem>
              <ListItemDecorator>
                <SettingsBackupRestoreRoundedIcon />
              </ListItemDecorator>
              Backtests
            </MenuItem>
            </Link>
            {/* <ListDivider /> */}
            <Link href="/elite">
            <MenuItem>
              <ListItemDecorator>
                <LocalActivityRoundedIcon />
              </ListItemDecorator>
              Elite
            </MenuItem>
            </Link>
            {/* <ListDivider /> */}
            {/* <MenuItem>Pricing</MenuItem>
            <MenuItem>New</MenuItem> */}

            {/* <MenuItem>
              Case studies{' '}
              <Chip
                variant="outlined"
                size="sm"
                sx={{
                  ml: 'auto',
                  bgcolor: (theme) =>
                    `rgba(${theme.vars.palette[color].mainChannel} / 0.4)`,
                }}
              >
                Beta
              </Chip>
            </MenuItem> */}
          </Menu>
        </Dropdown>
      </Box>
      <Box sx={{ display: 'flex', flexShrink: 0, gap: 2 }}>
        <Button
          startDecorator={<AddIcon />}
          sx={{ display: { xs: 'none', md: 'inline-flex' } }}
        >
          New invoice
        </Button>
        <Input
          placeholder="Search"
          variant="soft"
          size="sm"
          endDecorator={
            <Typography
              component="span"
              variant="outlined"
              level="body-xs"
              sx={{ bgcolor: 'background.surface', mx: 0 }}
            >
              ⌘K
            </Typography>
          }
          sx={{
            '--Input-paddingInline': '12px',
            width: 160,
            display: { xs: 'none', lg: 'flex' },
          }}
        />
        <Badge badgeContent={2} variant="solid" color="danger">
          <IconButton variant="soft" sx={{ borderRadius: '50%' }}>
            <NotificationsIcon />
          </IconButton>
        </Badge>
      </Box>
    </Sheet>
  );
}