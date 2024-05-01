import { PropsWithChildren } from "react";
import {HeadMeta} from 'components/HeadMeta/HeadMeta';
import s from './PageWrapper.module.css'

type PropsType = {
  title?: string;
};

export const PageWrapper = (props: PropsWithChildren<PropsType>) => {
  const { children, title } = props;

  return (
    <>
      <HeadMeta title={title} />
      <div className={s.block}>{children}</div>
    </>
  );
};
