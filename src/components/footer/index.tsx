export const Footer = ({ platform = 'github', userName = 'withastro' }) => {
  return (
    <footer>
      <p>
        Learn more about my projects on{' '}
        <a href={`https://www.${platform}.com/${userName}`}>{platform}</a>!
      </p>
    </footer>
  );
};
