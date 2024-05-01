import Link from "next/link";
import s from './LinkBlock.module.css'

type PropsType = {
  title: string;
};

export const LinkBlock = (props: PropsType) => {
  const { title } = props;

  return (
    <div className={s.wrapper}>
      <Link href={`/${title.toLowerCase()}`}>
        <h2>{title} →</h2>
      </Link>
    </div>
  );
};
