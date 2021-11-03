import { Button } from "@material-ui/core";
import { GridCellParams } from "@material-ui/data-grid";
import { ReactNode } from "react";

function getButton(params: GridCellParams, onClickEvent: (val: number) => void): ReactNode {
    let firstString = params.getValue(params.id, 'first') as string;
    return (<strong>
      {(params.value as Date).getFullYear()}
      <Button
        onClick={() => onClickEvent(params.id as number)}
        variant="contained"
        color="primary"
        size="small"
        style={{ marginLeft: 16 }}
      >
        <div></div>Close
      </Button>
    </strong>)
  }
