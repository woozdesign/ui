export interface FormChildProps {
  hasSubmitted?: boolean;
}
export interface FormProps {
  children: React.ReactElement<FormChildProps> | React.ReactElement<FormChildProps>[];
  onSuccess: (e: React.FormEvent<HTMLFormElement>) => void;
  onError: () => void;
}
