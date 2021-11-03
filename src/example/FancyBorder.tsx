import { JPAHomeProps } from "../jpa_models/models";

export function FancyBorder(props:JPAHomeProps) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.color}
      <hr/>
        {props.children}
      </div>
    );
  }