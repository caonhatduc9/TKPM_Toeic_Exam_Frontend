function NoLayout({ children }) {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}
export default NoLayout;