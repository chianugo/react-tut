interface ButtonProps {
  name: string;
}

const Button = ({ name }: ButtonProps) => {
  return (
    <button type="button" className="btn btn-primary">
      {name}
    </button>
  );
};

export default Button;
