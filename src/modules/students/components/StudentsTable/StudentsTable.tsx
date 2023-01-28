import { EditOutlined, VisibilityOutlined } from "@mui/icons-material";
import {
  Box,
  IconButton,
  Link as MuiLink,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { CenteredCell } from "common/components";
import { generatePath, Link } from "react-router-dom";
import routes from "routes/routePaths";

const headers = ["Imię Nazwisko", "Klasa", "E-mail", "Akcje"];

const rows = [
  {
    fullName: "Kamil Kosowski",
    className: "I B",
  },
  {
    fullName: "Krzysztof Bosacki",
    className: "II B",
  },
  {
    fullName: "Mirosław Kąsek",
    className: "III B",
  },
  {
    fullName: "Zenon Klapek",
    className: "IV B",
  },
  {
    fullName: "Martyna Reca",
    className: "V B",
  },
];

const StudentsTable = () => {
  const getEmail = (fullName: string) =>
    fullName.toLowerCase().replaceAll(" ", "") + "@gmail.com";
  return (
    <Paper sx={{ overflow: "hidden" }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {headers.map((header, i) => (
                <TableCell key={header} align={i === 0 ? "left" : "center"}>
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(({ fullName, className }) => (
              <TableRow
                key={fullName}
                sx={{
                  "&:last-child td": {
                    border: "none",
                  },
                }}>
                <TableCell>
                  <Box
                    sx={{
                      color: (theme) => theme.palette.text.primary,
                      textDecoration: "none",
                    }}
                    component={Link}
                    to={generatePath(routes.Student, { studentId: fullName })}>
                    <strong>{fullName}</strong>
                  </Box>
                </TableCell>
                <CenteredCell>{className}</CenteredCell>
                <CenteredCell>
                  <MuiLink href={`mailto:${getEmail(fullName)}`}>
                    {getEmail(fullName)}
                  </MuiLink>
                </CenteredCell>
                <CenteredCell>
                  {[VisibilityOutlined, EditOutlined].map((Icon, i) => (
                    <IconButton
                      key={i}
                      size="small"
                      sx={{ "&:not(:last-child)": { mr: 1 } }}>
                      <Icon fontSize="small" />
                    </IconButton>
                  ))}
                </CenteredCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default StudentsTable;
