import { Tabs, Tab, Paper } from "@mui/material";
import { RouteValue } from "routes/routePaths";

type TabsBarProps = {
  activeTab: number;
  handleChangeTab: (newValue: number) => void;
  ariaLabel: string;
  tabs:
    | {
        label: string;
        Icon?: React.ElementType;
        to?: RouteValue;
        component?: any;
      }[];
};

const TabsBar = ({
  activeTab,
  handleChangeTab,
  tabs,
  ariaLabel,
}: TabsBarProps) => {
  const changeTab = (_: any, newValue: any) => handleChangeTab(newValue);

  const classes = {
    main: "",
    indicator: "",
    icon: "",
    tab: "",
    selected: "",
  };
  return (
    <Paper square variant="outlined" className={classes.main}>
      <Tabs
        aria-label={ariaLabel}
        variant="scrollable"
        scrollButtons="auto"
        value={activeTab}
        classes={{ indicator: classes.indicator }}
        onChange={changeTab}>
        {tabs.map(({ label, Icon, to, component }) => (
          <Tab
            key={label}
            component={component}
            to={to}
            label={label}
            icon={Icon && <Icon className={classes.icon} />}
            className={classes.tab}
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              height: "56px",
              minHeight: "56px",
              textTransform: "none",
            }}
            classes={{ selected: classes.selected }}
          />
        ))}
      </Tabs>
    </Paper>
  );
};
export default TabsBar;
