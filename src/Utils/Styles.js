import { grey } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  main: {
    backgroundColor: grey[100],
  },
  container: {
    backgroundColor: '#fff',
    padding: '1rem',
  },
  treeView: {
    overflowY: 'auto',
    overflowX: 'hidden',
    paddingTop: '15px',
  },
  treeItem: {
    borderBottom: `1px solid ${grey[100]}`,
  },
  field: {
    width: '100%',
    marginBottom: '15px !important',
  },
});

export default useStyles;
