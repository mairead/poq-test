import styles from "./Header.module.scss";

type Props = {
  title: string;
};

export default function Header({ title }: Props) {
  return <h1 className={styles.title}>{title}</h1>;
}
