import { Button, Typography } from "@material-ui/core";
import { ViewEntityProps2 } from "../jpa_models/models";

export function EntityPageV2(props: ViewEntityProps2){
    if(props.entity){
    return (
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
          Name:{props.entity.first}<br />
          City:{props.entity.city}<br />
          id:{props.entity.id}
          HELLO
          <hr />
          <Button
            onClick={() => props.onViewClick()}
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
      return (<Typography>id:XXX
        Unexpected scenario
      </Typography>);
    }
  }
