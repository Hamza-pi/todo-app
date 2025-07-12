import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useColorScheme, type PaletteMode } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";

type Mode = PaletteMode | "system";

const ThemeToggle = () => {
  const { mode, setMode } = useColorScheme();

  const handleTheme = (_: React.MouseEvent<HTMLElement>, theme: Mode) => {
    setMode(theme);
  };

  return (
    <ToggleButtonGroup exclusive value={mode} onChange={handleTheme}>
      <ToggleButton value="light">
        <LightModeIcon style={{ color: "white" }} />
      </ToggleButton>
      <ToggleButton value="system">
        <SettingsBrightnessIcon style={{ color: "white" }} />
      </ToggleButton>
      <ToggleButton value="dark">
        <DarkModeIcon style={{ color: "white" }} />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ThemeToggle;
