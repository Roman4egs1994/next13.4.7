import { PropsWithChildren } from "react";
import s from "./Card.module.css";

type PropsType = {
  name: string;
};

export const Card = (props: PropsWithChildren<PropsType>) => {
  const { children, name } = props;

  return (
    <div className={s.block}>
      <div className={s.name}>{name}</div>
      {children}
    </div>
  );
};
