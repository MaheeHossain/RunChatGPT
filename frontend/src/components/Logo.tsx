import logo from '../logo.svg';

export const Logo = (
  { altText = "logo" }: { altText?: string }
) => {
  return (
    <img src={logo} className="App-logo" alt={altText}/>
  );
};