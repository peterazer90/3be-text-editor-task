import React, { useLayoutEffect } from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TreeItem from '@mui/lab/TreeItem';
import TreeView from '@mui/lab/TreeView';
import {
  Box, Container, Grid, TextField, Typography,
} from '@mui/material';
import { CKEditor } from 'ckeditor4-react';

import { useFormEvents } from '@/Hooks';
import { StaticData, useStyles } from '@/Utils';

function App() {
  const classes = useStyles();
  const { data, setData, blurEvent } = useFormEvents();

  useLayoutEffect(() => {
    let dataCorrection = [];

    StaticData.forEach((item) => {
      if (item.isTitle) {
        dataCorrection = [...dataCorrection, { ...item, content: [] }];
      } else {
        const relatedItem = dataCorrection[dataCorrection.length - 1];
        relatedItem.content = [...relatedItem.content, item];
      }
    });

    console.log('The array data has been corrected.');

    return setData(dataCorrection);
  }, []);

  return (
    <main className={classes.main}>
      <Container fixed className={classes.container}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={8}>
            {data.map((item, parentIndex) => (
              <Box key={item.title} mb={2}>
                <TextField
                  hiddenLabel
                  defaultValue={item.title}
                  size="small"
                  className={classes.field}
                  onBlur={({ target }) => blurEvent(target, parentIndex)}
                />
                {item.content.map((pragraph, childIndex) => (
                  <Box key={pragraph.statement} mb={1}>
                    <CKEditor
                      initData={pragraph.statement}
                      onBlur={({ editor }) => blurEvent(
                        { value: editor.getData() },
                        parentIndex,
                        childIndex,
                      )}
                    />
                  </Box>
                ))}
              </Box>
            ))}
          </Grid>
          <Grid item xs={6} md={4}>
            <TreeView
              aria-label="file system navigator"
              defaultCollapseIcon={<ExpandMoreIcon />}
              defaultExpandIcon={<ChevronRightIcon />}
              className={classes.treeView}
            >
              {data.map((item, index) => (
                <TreeItem
                  key={item.title}
                  nodeId={index.toString()}
                  label={(
                    <Typography variant="h6" component="h2">
                      {item.title}
                    </Typography>
                  )}
                  className={classes.treeItem}
                >
                  {item.content.map((pragraph) => (
                    <Typography
                      variant="subtitle1"
                      component="p"
                      key={pragraph.statement}
                      my={1}
                    >
                      {pragraph.statement.replace(/<(?:.|\n)*?>/gm, '')}
                    </Typography>
                  ))}
                </TreeItem>
              ))}
            </TreeView>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}

export default App;
