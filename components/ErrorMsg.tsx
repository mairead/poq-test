import classNames from "classnames/bind";
import styles from "./ErrorMsg.module.scss";
const cx = classNames.bind(styles);

type Props = {
  errorMsg: string;
};

export default function ErrorMsg({ errorMsg }: Props) {
  const classes = cx({
    flashbox: true,
  });

  return (
    <p className={classes} aria-live="polite">
      {`Sorry, request failed, ${errorMsg}`}
    </p>
  );
}
