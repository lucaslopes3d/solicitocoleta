export interface ButtonProps {
  title?: string;
  onPress: (() => void) | null | undefined;
  text: string | number;
}
