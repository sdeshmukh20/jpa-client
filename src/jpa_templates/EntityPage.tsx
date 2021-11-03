import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { AdvanceI, EntityRowsProps, Test2Child, ViewEntityProps } from '../jpa_models/models';
import { useParams } from 'react-router-dom';
import { Button } from '@material-ui/core';

export const EntityPage = React.forwardRef((props: ViewEntityProps, ref) => {
  let { entityIdx }: { entityIdx: string } = useParams();
  
  function testMe() {
    let viewId2 = parseInt(entityIdx);
   // setViewId(viewId2);
    props.selectRow(viewId2);
  }

  React.useImperativeHandle(
    ref,
    () => ({
      showAlert() {
        testMe();
      }
    }),
  )

  function InnerComponent(props: ViewEntityProps) {
    React.useEffect(() => {
      //blank
    })

    if (props.entity) {
      return (
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          Name:{props.entity.first}<br />
          City:{props.entity.city}<br />
          id:{props.entity.id}
          <hr />
          <Button
            onClick={() => testMe()}
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16 }}
          >
            <div>Meghan</div>
          </Button>
        </Typography>
      );
    }
    else {
      return (<Typography>id:{entityIdx}
        Unexpected scenario
      </Typography>);
    }
  }

  return (<InnerComponent {...props} />);

})


